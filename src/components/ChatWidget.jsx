import { useCallback, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Collapse,
  Fab,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Close,
  Send,
  WorkOutline,
} from "@mui/icons-material";
import { useTheme as useCustomTheme } from "../context/ThemeContext";
import { monoFontFamily } from "../theme";
import {
  QUESTION_MAX,
  JD_MAX,
  fetchHealth,
  fetchSuggestions,
  matchJobDescription,
  streamChat,
} from "../api/chat";

const EMPTY_HINT = "Ask about NestJS, production work, or why to hire me.";
const AVATAR_SRC = "/Profile.jpg";

function MarkdownSummary({ text, darkMode, theme }) {
  if (!text) return null;

  const lines = text.split("\n");
  const nodes = [];

  const inline = (str, keyPrefix) => {
    const parts = [];
    const re = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    let last = 0;
    let m;
    let i = 0;
    while ((m = re.exec(str)) !== null) {
      if (m.index > last) {
        parts.push(str.slice(last, m.index));
      }
      const token = m[0];
      if (token.startsWith("**")) {
        parts.push(
          <Box component="strong" key={`${keyPrefix}-b-${i}`} sx={{ fontWeight: 700 }}>
            {token.slice(2, -2)}
          </Box>
        );
      } else if (token.startsWith("*")) {
        parts.push(
          <Box component="em" key={`${keyPrefix}-i-${i}`}>
            {token.slice(1, -1)}
          </Box>
        );
      } else {
        parts.push(
          <Box
            component="code"
            key={`${keyPrefix}-c-${i}`}
            sx={{
              fontFamily: monoFontFamily,
              fontSize: "0.85em",
              px: 0.5,
              borderRadius: 0.5,
              backgroundColor: darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
            }}
          >
            {token.slice(1, -1)}
          </Box>
        );
      }
      last = m.index + token.length;
      i += 1;
    }
    if (last < str.length) parts.push(str.slice(last));
    return parts;
  };

  let listItems = [];
  const flushList = () => {
    if (listItems.length === 0) return;
    nodes.push(
      <Box
        component="ul"
        key={`ul-${nodes.length}`}
        sx={{ m: 0, pl: 2.25, mb: 1, "& li": { mb: 0.4 } }}
      >
        {listItems.map((item, idx) => (
          <Typography
            component="li"
            key={idx}
            variant="body2"
            sx={{ color: "inherit", fontSize: "0.82rem", lineHeight: 1.5 }}
          >
            {inline(item, `li-${nodes.length}-${idx}`)}
          </Typography>
        ))}
      </Box>
    );
    listItems = [];
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      return;
    }
    if (trimmed.startsWith("### ")) {
      flushList();
      nodes.push(
        <Typography
          key={`h-${idx}`}
          variant="subtitle2"
          sx={{ fontWeight: 700, mt: nodes.length ? 1.25 : 0, mb: 0.5, color: theme.palette.primary.main }}
        >
          {trimmed.slice(4)}
        </Typography>
      );
      return;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      nodes.push(
        <Typography key={`h-${idx}`} variant="subtitle1" sx={{ fontWeight: 700, mt: 1, mb: 0.5 }}>
          {trimmed.slice(3)}
        </Typography>
      );
      return;
    }
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      listItems.push(trimmed.slice(2));
      return;
    }
    flushList();
    nodes.push(
      <Typography
        key={`p-${idx}`}
        variant="body2"
        sx={{ mb: 0.75, fontSize: "0.82rem", lineHeight: 1.55, whiteSpace: "pre-wrap" }}
      >
        {inline(trimmed, `p-${idx}`)}
      </Typography>
    );
  });
  flushList();

  return <Box>{nodes}</Box>;
}

function scrollToCitation(anchor) {
  if (!anchor) return false;

  let hash = "";
  try {
    if (anchor.startsWith("#")) {
      hash = anchor;
    } else {
      const url = new URL(anchor, window.location.origin);
      // Same page section (this site or full portfolio URL with #id)
      if (url.hash) hash = url.hash;
    }
  } catch {
    return false;
  }

  if (!hash || hash === "#") return false;

  const id = decodeURIComponent(hash.slice(1));
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.replaceState(null, "", hash);
  return true;
}

function CitationLinks({ citations }) {
  if (!citations?.length) return null;
  return (
    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={0.75} sx={{ mt: 1 }}>
      {citations.map((c, i) => (
        <Chip
          key={`${c.anchor}-${i}`}
          component="a"
          href={c.anchor}
          clickable
          size="small"
          label={c.title}
          onClick={(e) => {
            // Stay on this page + keep chat open; scroll to section
            if (scrollToCitation(c.anchor)) {
              e.preventDefault();
            }
          }}
          sx={{
            maxWidth: "100%",
            height: "auto",
            py: 0.4,
            "& .MuiChip-label": {
              whiteSpace: "normal",
              fontSize: "0.7rem",
              lineHeight: 1.3,
            },
          }}
        />
      ))}
    </Stack>
  );
}

function TypingDots({ color }) {
  return (
    <Box sx={{ display: "inline-flex", gap: 0.5, alignItems: "center", px: 0.5, py: 0.25 }}>
      {[0, 1, 2].map((i) => (
        <Box
          key={i}
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            backgroundColor: color,
            animation: "chatDot 1.2s ease-in-out infinite",
            animationDelay: `${i * 0.2}s`,
            "@keyframes chatDot": {
              "0%, 80%, 100%": { opacity: 0.3, transform: "translateY(0)" },
              "40%": { opacity: 1, transform: "translateY(-3px)" },
            },
          }}
        />
      ))}
    </Box>
  );
}

export default function ChatWidget() {
  const theme = useTheme();
  const { darkMode } = useCustomTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [online, setOnline] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [followups, setFollowups] = useState([]);
  const [mode, setMode] = useState("chat"); // chat | jd
  const [jdText, setJdText] = useState("");
  const [jdLoading, setJdLoading] = useState(false);
  const [jdResult, setJdResult] = useState(null);

  const listRef = useRef(null);
  const abortRef = useRef(null);
  const assistantIdRef = useRef(null);

  const panelBg = darkMode ? theme.palette.grey[800] : theme.palette.background.paper;
  const pageBg = darkMode ? theme.palette.grey[900] : theme.palette.grey[50];
  const border = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const muted = darkMode ? theme.palette.grey[300] : theme.palette.grey[600];

  useEffect(() => {
    if (!open) return;
    let cancelled = false;

    fetchHealth()
      .then((h) => {
        if (!cancelled) setOnline(h?.api === "ok");
      })
      .catch(() => {
        if (!cancelled) setOnline(false);
      });

    fetchSuggestions()
      .then((s) => {
        if (!cancelled) setSuggestions(s);
      })
      .catch(() => {
        if (!cancelled) setSuggestions([]);
      });

    return () => {
      cancelled = true;
    };
  }, [open]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, followups, jdResult, streaming, error]);

  useEffect(() => {
    return () => abortRef.current?.abort();
  }, []);

  const sendQuestion = useCallback(
    (raw) => {
      const question = (raw ?? input).trim();
      if (!question || streaming) return;
      if (question.length > QUESTION_MAX) {
        setError(`Question max ${QUESTION_MAX} characters`);
        return;
      }

      setError(null);
      setFollowups([]);
      setInput("");
      setStreaming(true);

      const userMsg = { id: `u-${Date.now()}`, role: "user", content: question };
      const assistantId = `a-${Date.now()}`;
      assistantIdRef.current = assistantId;
      setMessages((prev) => [
        ...prev,
        userMsg,
        { id: assistantId, role: "assistant", content: "", citations: [], pending: true },
      ]);

      abortRef.current?.abort();
      const { abort, done } = streamChat(question, {
        onMeta: (meta) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    citations: meta?.citations || [],
                    categories: meta?.categories ?? null,
                  }
                : m
            )
          );
          if (meta?.suggested_followups?.length) {
            setFollowups(meta.suggested_followups);
          }
        },
        onToken: (t) => {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: (m.content || "") + t, pending: false }
                : m
            )
          );
        },
        onError: (detail) => {
          setError(typeof detail === "string" ? detail : "Something went wrong");
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    pending: false,
                    content: m.content || "",
                    errored: true,
                  }
                : m
            )
          );
          setStreaming(false);
        },
        onDone: () => {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, pending: false } : m))
          );
          setStreaming(false);
        },
      });
      abortRef.current = { abort };
      done.finally(() => {
        setStreaming(false);
      });
    },
    [input, streaming]
  );

  const handleJdMatch = async () => {
    const job_description = jdText.trim();
    if (!job_description || jdLoading) return;
    if (job_description.length > JD_MAX) {
      setError(`Job description max ${JD_MAX} characters`);
      return;
    }
    setError(null);
    setJdLoading(true);
    setJdResult(null);
    try {
      const result = await matchJobDescription(job_description);
      setJdResult(result);
    } catch (err) {
      setError(err.message || "Match failed");
    } finally {
      setJdLoading(false);
    }
  };

  const showSuggestions = mode === "chat" && messages.length === 0 && !streaming;

  return (
    <>
      {/* Closed FAB */}
      {!open && (
        <Fab
          variant="extended"
          color="primary"
          onClick={() => setOpen(true)}
          aria-label="Ask Hassan"
          sx={{
            position: "fixed",
            right: { xs: 16, sm: 24 },
            bottom: { xs: 16, sm: 24 },
            zIndex: 1300,
            textTransform: "none",
            fontWeight: 600,
            pl: 0.75,
            pr: 2.25,
            gap: 1,
            boxShadow: darkMode
              ? "0 8px 24px rgba(0, 212, 170, 0.25)"
              : "0 8px 24px rgba(0, 0, 0, 0.18)",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          <Avatar
            src={AVATAR_SRC}
            alt="Hassan Ahmed"
            sx={{
              width: 32,
              height: 32,
              border: "2px solid rgba(4, 17, 14, 0.25)",
            }}
          />
          Ask Hassan
        </Fab>
      )}

      {/* Open panel */}
      {open && (
        <Box
          role="dialog"
          aria-label="Ask Hassan chat"
          sx={{
            position: "fixed",
            right: { xs: 0, sm: 24 },
            bottom: { xs: 0, sm: 24 },
            left: { xs: 0, sm: "auto" },
            width: { xs: "100%", sm: 380 },
            height: { xs: "min(100dvh, 100%)", sm: 520 },
            maxHeight: { xs: "100dvh", sm: 520 },
            zIndex: 1300,
            display: "flex",
            flexDirection: "column",
            backgroundColor: panelBg,
            border: `1px solid ${border}`,
            borderRadius: { xs: 0, sm: 2 },
            boxShadow: darkMode
              ? "0 16px 48px rgba(0,0,0,0.55)"
              : "0 16px 48px rgba(0,0,0,0.18)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              px: 2,
              py: 1.5,
              borderBottom: `1px solid ${border}`,
              backgroundColor: pageBg,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: 1,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.25, minWidth: 0 }}>
              <Box sx={{ position: "relative", flexShrink: 0 }}>
                <Avatar
                  src={AVATAR_SRC}
                  alt="Hassan Ahmed"
                  sx={{
                    width: 40,
                    height: 40,
                    border: `2px solid ${theme.palette.primary.main}`,
                  }}
                />
                <Box
                  title={online === null ? "Checking…" : online ? "Online" : "Offline"}
                  sx={{
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    border: `2px solid ${pageBg}`,
                    backgroundColor:
                      online === null
                        ? muted
                        : online
                          ? theme.palette.primary.main
                          : theme.palette.error.main,
                  }}
                />
              </Box>
              <Box sx={{ minWidth: 0 }}>
                <Typography
                  component="span"
                  sx={{
                    display: "block",
                    fontFamily: monoFontFamily,
                    fontSize: "0.7rem",
                    color: theme.palette.primary.main,
                    mb: 0.2,
                  }}
                >
                  // ask hassan
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>
                  Ask Hassan
                </Typography>
                <Typography variant="caption" sx={{ color: muted }}>
                  for recruiters · replies as me
                </Typography>
              </Box>
            </Box>
            <IconButton
              size="small"
              onClick={() => {
                abortRef.current?.abort();
                setOpen(false);
              }}
              aria-label="Close chat"
            >
              <Close fontSize="small" />
            </IconButton>
          </Box>

          {/* Mode toggle */}
          <Box
            sx={{
              px: 1.5,
              pt: 1,
              display: "flex",
              gap: 0.75,
              borderBottom: `1px solid ${border}`,
              pb: 1,
              backgroundColor: panelBg,
            }}
          >
            <Chip
              size="small"
              label="Chat"
              onClick={() => setMode("chat")}
              color={mode === "chat" ? "primary" : "default"}
              variant={mode === "chat" ? "filled" : "outlined"}
              sx={{ fontWeight: 600 }}
            />
            <Chip
              size="small"
              icon={<WorkOutline sx={{ fontSize: "16px !important" }} />}
              label="Match a JD"
              onClick={() => setMode("jd")}
              color={mode === "jd" ? "primary" : "default"}
              variant={mode === "jd" ? "filled" : "outlined"}
              sx={{ fontWeight: 600 }}
            />
          </Box>

          {/* Body */}
          <Box
            ref={listRef}
            sx={{
              flex: 1,
              overflowY: "auto",
              px: 1.5,
              py: 1.5,
              backgroundColor: panelBg,
            }}
          >
            {mode === "chat" && (
              <>
                {showSuggestions && (
                  <Box sx={{ mb: 1.5 }}>
                    <Typography
                      variant="body2"
                      sx={{ color: muted, mb: 1.25, fontSize: "0.82rem" }}
                    >
                      {EMPTY_HINT}
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={0.75}>
                      {suggestions.map((s) => (
                        <Chip
                          key={s}
                          label={s}
                          size="small"
                          onClick={() => sendQuestion(s)}
                          disabled={streaming}
                          sx={{
                            height: "auto",
                            py: 0.5,
                            "& .MuiChip-label": {
                              whiteSpace: "normal",
                              fontSize: "0.72rem",
                              lineHeight: 1.35,
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}

                <Stack spacing={1.25}>
                  {messages.map((m) => {
                    const isUser = m.role === "user";
                    return (
                      <Box
                        key={m.id}
                        sx={{
                          alignSelf: isUser ? "flex-end" : "flex-start",
                          maxWidth: "92%",
                          display: "flex",
                          alignItems: "flex-end",
                          gap: 0.75,
                          flexDirection: isUser ? "row-reverse" : "row",
                        }}
                      >
                        {!isUser && (
                          <Avatar
                            src={AVATAR_SRC}
                            alt="Hassan"
                            sx={{
                              width: 28,
                              height: 28,
                              flexShrink: 0,
                              mb: 0.25,
                              border: `1px solid ${border}`,
                            }}
                          />
                        )}
                        <Box
                          sx={{
                            px: 1.25,
                            py: 1,
                            borderRadius: 2,
                            borderTopRightRadius: isUser ? 0.5 : 2,
                            borderTopLeftRadius: isUser ? 2 : 0.5,
                            backgroundColor: isUser
                              ? theme.palette.primary.main
                              : darkMode
                                ? theme.palette.grey[700]
                                : theme.palette.grey[100],
                            color: isUser
                              ? "#04110e"
                              : darkMode
                                ? theme.palette.grey[50]
                                : theme.palette.text.primary,
                          }}
                        >
                          {m.pending && !m.content ? (
                            <TypingDots
                              color={
                                darkMode ? theme.palette.grey[300] : theme.palette.grey[500]
                              }
                            />
                          ) : (
                            <Typography
                              variant="body2"
                              sx={{
                                whiteSpace: "pre-wrap",
                                fontSize: "0.84rem",
                                lineHeight: 1.55,
                              }}
                            >
                              {m.content}
                              {streaming && m.id === assistantIdRef.current && m.content ? (
                                <Box
                                  component="span"
                                  sx={{
                                    display: "inline-block",
                                    width: 6,
                                    height: 14,
                                    ml: 0.25,
                                    verticalAlign: "text-bottom",
                                    backgroundColor: theme.palette.primary.main,
                                    animation: "blink 1s step-end infinite",
                                    "@keyframes blink": {
                                      "50%": { opacity: 0 },
                                    },
                                  }}
                                />
                              ) : null}
                            </Typography>
                          )}
                          {!isUser && <CitationLinks citations={m.citations} />}
                        </Box>
                      </Box>
                    );
                  })}
                </Stack>

                {followups.length > 0 && !streaming && (
                  <Box sx={{ mt: 1.5 }}>
                    <Typography
                      variant="caption"
                      sx={{ color: muted, display: "block", mb: 0.75 }}
                    >
                      Suggested follow-ups
                    </Typography>
                    <Stack direction="row" flexWrap="wrap" useFlexGap spacing={0.75}>
                      {followups.map((f) => (
                        <Chip
                          key={f}
                          label={f}
                          size="small"
                          onClick={() => sendQuestion(f)}
                          sx={{
                            height: "auto",
                            py: 0.45,
                            "& .MuiChip-label": {
                              whiteSpace: "normal",
                              fontSize: "0.72rem",
                            },
                          }}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}
              </>
            )}

            {mode === "jd" && (
              <Box>
                <Typography variant="body2" sx={{ color: muted, mb: 1.25, fontSize: "0.82rem" }}>
                  Paste a job description to see how Hassan’s experience overlaps.
                </Typography>
                <TextField
                  multiline
                  minRows={isMobile ? 5 : 6}
                  maxRows={10}
                  fullWidth
                  placeholder="Paste job description…"
                  value={jdText}
                  onChange={(e) => setJdText(e.target.value.slice(0, JD_MAX))}
                  disabled={jdLoading}
                  size="small"
                  sx={{
                    mb: 1,
                    "& .MuiInputBase-root": {
                      fontSize: "0.85rem",
                      backgroundColor: darkMode ? theme.palette.grey[900] : "#fff",
                    },
                  }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleJdMatch}
                  disabled={jdLoading || !jdText.trim()}
                  startIcon={
                    jdLoading ? <CircularProgress size={16} color="inherit" /> : <WorkOutline />
                  }
                  sx={{ textTransform: "none", fontWeight: 600, mb: 1.5 }}
                >
                  {jdLoading ? "Matching…" : "Match against profile"}
                </Button>

                <Collapse in={Boolean(jdResult)}>
                  {jdResult && (
                    <Box
                      sx={{
                        p: 1.25,
                        borderRadius: 1.5,
                        border: `1px solid ${border}`,
                        backgroundColor: darkMode ? theme.palette.grey[900] : theme.palette.grey[50],
                      }}
                    >
                      <MarkdownSummary
                        text={jdResult.summary}
                        darkMode={darkMode}
                        theme={theme}
                      />
                      <CitationLinks citations={jdResult.citations} />
                    </Box>
                  )}
                </Collapse>
              </Box>
            )}

            {error && (
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  mt: 1,
                  color: theme.palette.error.main,
                  whiteSpace: "pre-wrap",
                }}
              >
                {error}
              </Typography>
            )}
          </Box>

          {/* Composer (chat mode) */}
          {mode === "chat" && (
            <Box
              component="form"
              onSubmit={(e) => {
                e.preventDefault();
                sendQuestion();
              }}
              sx={{
                px: 1.25,
                py: 1.25,
                borderTop: `1px solid ${border}`,
                backgroundColor: pageBg,
                display: "flex",
                gap: 1,
                alignItems: "flex-end",
              }}
            >
              <TextField
                multiline
                maxRows={4}
                fullWidth
                size="small"
                placeholder="Ask a question…"
                value={input}
                disabled={streaming}
                onChange={(e) => setInput(e.target.value.slice(0, QUESTION_MAX))}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendQuestion();
                  }
                }}
                sx={{
                  "& .MuiInputBase-root": {
                    fontSize: "0.85rem",
                    backgroundColor: darkMode ? theme.palette.grey[800] : "#fff",
                  },
                }}
              />
              <IconButton
                type="submit"
                color="primary"
                disabled={streaming || !input.trim()}
                aria-label="Send"
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: "#04110e",
                  borderRadius: 1.5,
                  "&:hover": { backgroundColor: theme.palette.primary.dark, color: "#04110e" },
                  "&.Mui-disabled": {
                    backgroundColor: darkMode ? theme.palette.grey[700] : theme.palette.grey[300],
                  },
                }}
              >
                {streaming ? <CircularProgress size={18} color="inherit" /> : <Send fontSize="small" />}
              </IconButton>
            </Box>
          )}
        </Box>
      )}
    </>
  );
}
