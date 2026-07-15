import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import type { CommunityEvent } from "@/data/events";

// A small perforated-edge stamp square, matching the contact Postcard's stamp.
const Stamp = ({ small = false }: { small?: boolean }) => (
  <div
    className={`flex shrink-0 items-center justify-center border border-border bg-card ${
      small ? "h-[34px] w-[28px]" : "h-[46px] w-[38px]"
    }`}
    style={{ boxShadow: "0 0 0 3px hsl(var(--card)), 0 0 0 4px hsl(var(--border))" }}
  >
    <svg width={small ? 17 : 22} height={small ? 14 : 18} viewBox="0 0 26 22" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="24" height="20" rx="1" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
      <path d="M1 5 L13 13 L25 5" stroke="hsl(var(--muted-foreground))" strokeWidth="1" />
    </svg>
  </div>
);

const EventPostcard = ({ event }: { event: CommunityEvent }) => {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();

  // Explicit white/black (not theme tokens): the postmark sits on the photo,
  // which doesn't change with light/dark mode.
  const postmarkInk =
    event.postmarkInk === "dark"
      ? "border-black/50 bg-white/20 text-black/80"
      : "border-white/90 bg-black/15 text-white";

  return (
    // Not a <button>: the back face holds a real <a>, and anchors can't nest
    // inside buttons. Keyboard flip (Enter/Space) is handled manually instead.
    <div
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      aria-pressed={flipped}
      aria-label={
        flipped
          ? `Hide details for ${event.title}`
          : `Show details for ${event.title}`
      }
      className="group block w-full cursor-pointer text-left [perspective:1200px] focus-visible:outline-none"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.35, 0.15, 0.25, 1] }}
        className="relative aspect-[10/7] w-full [transform-style:preserve-3d]"
      >
        {/* ---- Front: the photo side ---- */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div className="h-full border border-border bg-card p-1 shadow-[4px_4px_0_hsl(var(--border))] transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
            <div className="relative h-full overflow-hidden border border-border">
              <img
                src={event.image}
                alt={event.imageAlt}
                loading="lazy"
                className="h-full w-full object-cover"
              />

              {/* Stamp corner */}
              <div className="absolute right-3 top-3">
                <Stamp />
              </div>

              {/* Postmark with the date */}
              <div
                className={`absolute right-[52px] top-4 flex h-12 w-12 -rotate-12 items-center justify-center rounded-full border backdrop-blur-[1px] ${postmarkInk}`}
              >
                <span className="px-1 text-center font-sans text-[8px] uppercase leading-tight tracking-[0.12em]">
                  {event.date}
                </span>
              </div>

             
            </div>
          </div>
        </div>

        {/* ---- Back: the written side ---- */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="h-full border border-border bg-card p-1 shadow-[4px_4px_0_hsl(var(--border))]">
            <div className="flex h-full flex-col border border-border p-4">
              {/* Header row, matching the contact postcard */}
              <div className="mb-2 flex items-start justify-between gap-3">
                <span className="font-sans text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
                  Post Card
                </span>
                <Stamp small />
              </div>
              <div className="mb-2 h-px bg-border" />

              {/* Message + address columns */}
              <div className="flex min-h-0 flex-1 gap-4">
                <p className="min-h-0 flex-1 overflow-y-auto text-[15px] italic leading-relaxed text-foreground/90">
                  {event.description}
                </p>

                <div className="w-px bg-border" />

                <div className="flex min-h-0 w-[42%] shrink-0 flex-col gap-1.5 overflow-y-auto">
                  <h3 className="border-b border-border pb-1 font-display text-lg leading-snug">
                    {event.title}
                  </h3>
                  <p className="border-b border-border pb-1 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {event.role}
                    {event.affiliation ? ` · ${event.affiliation}` : ""}
                  </p>
                  <p className="border-b border-border pb-1 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {event.date}
                    {event.location ? ` · ${event.location}` : ""}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between gap-3">
                {event.link ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={flipped ? 0 : -1}
                    onClick={(e) => e.stopPropagation()}
                    onKeyDown={(e) => e.stopPropagation()}
                    className="font-sans text-[9px] uppercase tracking-[0.15em] text-foreground underline underline-offset-2 transition-colors hover:text-muted-foreground"
                  >
                    {event.linkLabel ?? "Visit"} ↗
                  </a>
                ) : (
                  <span />
                )}
                
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventPostcard;
