const API_BASE =
  import.meta.env?.VITE_CHAT_API_URL || "https://chat-with-me.fastapicloud.dev";

export const QUESTION_MAX = 2000;
export const JD_MAX = 8000;

function apiUrl(path) {
  return `${API_BASE.replace(/\/$/, "")}${path}`;
}

async function readJson(res) {
  if (!res.ok) {
    let detail = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      detail = body.detail || body.message || detail;
    } catch {
      /* ignore */
    }
    throw new Error(typeof detail === "string" ? detail : JSON.stringify(detail));
  }
  return res.json();
}

export async function fetchHealth() {
  const res = await fetch(apiUrl("/health"));
  return readJson(res);
}

export async function fetchSuggestions() {
  const res = await fetch(apiUrl("/v1/suggestions"));
  const data = await readJson(res);
  return data.suggestions || [];
}

export async function matchJobDescription(jobDescription) {
  const res = await fetch(apiUrl("/v1/match-jd"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ job_description: jobDescription }),
  });
  return readJson(res);
}

/**
 * Parse one SSE block into { event, data }.
 * Blocks are separated by blank lines; lines are `event:` / `data:`.
 */
export function parseSseBlock(block) {
  const lines = block.split(/\r?\n/);
  let event = "message";
  const dataLines = [];

  for (const line of lines) {
    if (!line || line.startsWith(":")) continue;
    if (line.startsWith("event:")) {
      event = line.slice(6).trim();
    } else if (line.startsWith("data:")) {
      dataLines.push(line.slice(5).trimStart());
    }
  }

  if (dataLines.length === 0) return null;

  const raw = dataLines.join("\n");
  let data = raw;
  try {
    data = JSON.parse(raw);
  } catch {
    /* keep raw string */
  }

  return { event, data };
}

/**
 * POST /v1/chat/stream — SSE over fetch (not EventSource).
 * handlers: { onMeta, onToken, onError, onDone }
 * Returns an abort function.
 */
export function streamChat(question, handlers = {}, { signal } = {}) {
  const controller = signal ? null : new AbortController();
  const abortSignal = signal || controller.signal;

  const run = (async () => {
    const res = await fetch(apiUrl("/v1/chat/stream"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
      },
      body: JSON.stringify({ question }),
      signal: abortSignal,
    });

    if (!res.ok) {
      let detail = `Request failed (${res.status})`;
      try {
        const body = await res.json();
        detail = body.detail || detail;
      } catch {
        /* ignore */
      }
      handlers.onError?.(typeof detail === "string" ? detail : JSON.stringify(detail));
      return;
    }

    if (!res.body) {
      handlers.onError?.("No response body from stream");
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let finished = false;

    const handle = (parsed) => {
      if (!parsed) return;
      const { event, data } = parsed;
      if (event === "meta") handlers.onMeta?.(data);
      else if (event === "token") handlers.onToken?.(data?.t ?? "");
      else if (event === "error") handlers.onError?.(data?.detail || "Stream error");
      else if (event === "done") {
        finished = true;
        handlers.onDone?.(data);
      }
    };

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const parts = buffer.split(/\r?\n\r?\n/);
      buffer = parts.pop() ?? "";

      for (const part of parts) {
        handle(parseSseBlock(part.trim()));
      }
    }

    if (buffer.trim()) {
      handle(parseSseBlock(buffer.trim()));
    }

    if (!finished) handlers.onDone?.({});
  })().catch((err) => {
    if (err?.name === "AbortError") return;
    handlers.onError?.(err.message || "Network error");
  });

  return {
    abort: () => controller?.abort(),
    done: run,
  };
}
