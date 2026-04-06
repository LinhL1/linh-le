import { motion } from "framer-motion";
import { useState } from "react";

const Postcard = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [stamped, setStamped] = useState(false);

  const handleSend = () => {
    if (!message.trim()) return;
    setStamped(true);
    setTimeout(() => setSent(true), 600);
  };

  const handleReset = () => {
    setSent(false);
    setStamped(false);
    setName("");
    setMessage("");
  };

  return (
    <div className="w-full">
      <p className="editorial-label mb-4">Send a Hello</p>

      {/* Outer frame */}
      <motion.div
        animate={stamped ? { rotate: [0, -1, 1, 0], scale: [1, 0.98, 1] } : {}}
        transition={{ duration: 0.5 }}
        style={{
          border: "1px solid hsl(var(--border))",
          padding: "4px",
          boxShadow: "4px 4px 0 hsl(var(--border))",
          backgroundColor: "hsl(var(--card))",
          borderRadius: "2px",
          width: "100%",
        }}
      >
        {/* Inner frame */}
        <div
          style={{
            border: "1px solid hsl(var(--border))",
            backgroundColor: "hsl(var(--card))",
            padding: "20px 20px 22px 20px",
            borderRadius: "1px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "14px",
            }}
          >
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "hsl(var(--muted-foreground))",
                fontFamily: "inherit",
              }}
            >
              Post Card
            </span>

            {/* Stamp */}
            <motion.div
              animate={stamped ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 1] } : {}}
              transition={{ duration: 0.4 }}
              style={{
                width: "44px",
                height: "52px",
                border: "1px solid hsl(var(--border))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: stamped ? "hsl(var(--sage))" : "transparent",
                transition: "background 0.3s",
                boxShadow: "0 0 0 3px hsl(var(--card)), 0 0 0 4px hsl(var(--border))",
                flexShrink: 0,
              }}
            >
              {stamped ? (
                <span style={{ fontSize: "18px", lineHeight: 1 }}>✉️</span>
              ) : (
                <svg width="26" height="22" viewBox="0 0 26 22" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="24"
                    height="20"
                    rx="1"
                    stroke="hsl(var(--border))"
                    strokeWidth="1"
                  />
                  <path d="M1 5 L13 13 L25 5" stroke="hsl(var(--border))" strokeWidth="1" />
                </svg>
              )}
            </motion.div>
          </div>

          {/* Horizontal rule */}
          <div style={{ height: "1px", backgroundColor: "hsl(var(--border))", marginBottom: "18px" }} />

          {!sent ? (
            <>
              {/* Message textarea */}
              <div style={{ position: "relative" }}>
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: `${i * 28 + 26}px`,
                      height: "1px",
                      backgroundColor: "hsl(var(--border))",
                      opacity: 0.5,
                      pointerEvents: "none",
                    }}
                  />
                ))}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Notes..."
                  rows={4}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    fontFamily: "inherit",
                    fontSize: "14px",
                    lineHeight: "28px",
                    color: "hsl(var(--foreground))",
                    caretColor: "hsl(var(--sage))",
                  }}
                />
              </div>

              {/* Rule before From */}
              <div style={{ height: "1px", backgroundColor: "hsl(var(--border))", margin: "12px 0 10px" }} />

              {/* From + Send */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "hsl(var(--muted-foreground))",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                  }}
                >
                  From
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="your name"
                  style={{
                    flex: 1,
                    background: "transparent",
                    border: "none",
                    outline: "none",
                    fontFamily: "inherit",
                    fontSize: "13px",
                    color: "hsl(var(--foreground))",
                    caretColor: "hsl(var(--sage))",
                  }}
                />
                <motion.button
                  onClick={handleSend}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!message.trim()}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: message.trim() ? "pointer" : "not-allowed",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: message.trim() ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: 0,
                    fontFamily: "inherit",
                    transition: "color 0.2s",
                  }}
                >
                  Send →
                </motion.button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ textAlign: "center", padding: "16px 0 8px" }}
            >
              <p style={{ fontFamily: "inherit", fontSize: "22px", marginBottom: "8px" }}>☁️ ✉️</p>
              <p style={{ fontFamily: "inherit", fontSize: "14px", color: "hsl(var(--foreground))", marginBottom: "4px" }}>
                Sent{name ? `, ${name}` : ""}!
              </p>
              <p style={{ fontFamily: "inherit", fontSize: "12px", color: "hsl(var(--muted-foreground))", marginBottom: "16px" }}>
                I'll write back soon :)
              </p>
              <button
                onClick={handleReset}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "9px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "hsl(var(--muted-foreground))",
                  fontFamily: "inherit",
                  textDecoration: "underline",
                  textUnderlineOffset: "3px",
                }}
              >
                Send another
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Postcard;