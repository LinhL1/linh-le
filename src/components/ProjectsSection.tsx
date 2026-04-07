import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import sheDriveImg from "@/assets/projects/shedrive.png";
import impromptu from "@/assets/projects/impromptu.png";
import mmi from "@/assets/projects/mmi.png";
import phishstx from "@/assets/projects/phishstx.png";
import informed from "@/assets/projects/informed.png";


interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  link?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "INformed",
    category: "Gamified Educational Web App",
    description:
      "A React web/mobile application for the IN Network, providing a gamified learning experience to educate individuals on misinformation and digital media.",
    year: "2026",
    link: "https://github.com/LinhL1/INformed",
    image: informed,
  },
  {
    title: "She Drive",
    category: "Mobile Application",
    description:
      "A collaborative side project: A full-stack mobile app built with Flutter and Laravel, focused on providing women with a safe and flexible transportation option.",
    year: "2026",
    link: "https://github.com/haliait/SheDrive",
    image: sheDriveImg,
  },
  {
    title: "Me, My-Shelf, and I",
    category: "Creative Web App",
    description:
      "A React personal digital reading nook to track read books, reading goals, and notes.",
    year: "2026",
    link: "https://just-myshelf.lovable.app/",
    image: mmi,
  },
   {
    title: "Impromptu",
    category: "Hackathon Project: Best Gemini API Integration",
    description:
      "Joint hackathon project built using React and Firebase. A fun daily scavenger hunt to keep friends connected through shared mini side quests.",
    year: "2026",
    link: "https://github.com/LinhL1/Impromptu",
    image: impromptu,
  },
  {
    title: "PhishSTX",
    category: "AI/ML",
    description:
      "An AI4ALL collaborative project: Trained ML models to develop an email phishing detector using NLP techniques.",
    year: "2026",
    link: "https://phish-stx-deda6n8vytgxa5jzqmmref.streamlit.app/",
    image: phishstx,
  },
 
];

const TRANSITION = { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const };

function getCardStyle(rel: number) {
  if (rel < 0)   return { y: "-110%", scale: 0.92, rotateX: -40, opacity: 0,   zIndex: 0  };
  if (rel === 0) return { y: "0%",    scale: 1,    rotateX: 0,   opacity: 1,   zIndex: 10 };
  if (rel === 1) return { y: "10px",  scale: 0.97, rotateX: 3,   opacity: 1,   zIndex: 9  };
  if (rel === 2) return { y: "18px",  scale: 0.94, rotateX: 5,   opacity: 0.6, zIndex: 8  };
  return               { y: "24px",  scale: 0.91, rotateX: 7,   opacity: 0,   zIndex: 7  };
}

const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const locked = useRef(false);
  const accum = useRef(0);

  const goTo = useCallback(
    (next: number) => {
      if (next === current || locked.current) return;
      locked.current = true;
      setCurrent(next);
      setTimeout(() => {
        locked.current = false;
      }, 700);
    },
    [current]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      accum.current += e.deltaY;
      if (Math.abs(accum.current) > 60) {
        if (accum.current > 0 && current < projects.length - 1) goTo(current + 1);
        else if (accum.current < 0 && current > 0) goTo(current - 1);
        accum.current = 0;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [current, goTo]);

  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + divider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="editorial-label mb-4">03 — Projects</p>
          <div className="editorial-divider mb-12" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="section-heading text-foreground mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Selected <em>work</em>
        </motion.h2>

        {/* Card stack */}
        <div
          ref={containerRef}
          className="relative h-[520px]"
          style={{ perspective: "1200px" }}
        >
          {projects.map((p, i) => {
            const rel = i - current;
            const cardStyle = getCardStyle(rel);

            return (
              <motion.a
                key={p.title}
                href={rel === 0 ? (p.link || "#") : undefined}
                target="_blank"
                rel="noopener noreferrer"
                animate={{
                  y: cardStyle.y,
                  scale: cardStyle.scale,
                  rotateX: cardStyle.rotateX,
                  opacity: cardStyle.opacity,
                  zIndex: cardStyle.zIndex,
                }}
                transition={TRANSITION}
                className="group absolute inset-0 border border-foreground bg-background flex flex-col overflow-hidden"
                style={{
                  transformOrigin: "bottom center",
                  pointerEvents: rel === 0 ? "auto" : "none",
                  cursor: rel === 0 ? "pointer" : "default",
                }}
              >

                {/* ── Top strip ── */}
                <div className="flex items-start justify-between px-8 pt-6 pb-5 flex-shrink-0">
                  <div>
                    <p className="editorial-label">{p.category}</p>
                    <p className="font-sans text-[10px] text-muted-foreground mt-1">
                      {p.year}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-border flex-shrink-0" />

                {/* ── Image band ── */}
                <div className="flex-1 overflow-hidden bg-muted relative min-h-0">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground">
                        project image
                      </p>
                    </div>
                  )}
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-border flex-shrink-0" />

                {/* ── Bottom strip ── */}
                <div className="px-8 pt-5 pb-6 flex-shrink-0 relative">
                  <p className="font-sans text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                    {String(i + 1).padStart(2, "0")}&nbsp;/&nbsp;
                    {String(projects.length).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-foreground"
                    animate={{ scaleX: rel === 0 ? 1 : 0 }}
                    transition={TRANSITION}
                    style={{ transformOrigin: "left", width: "100%" }}
                  />
                </div>

              </motion.a>
            );
          })}
        </div>

        {/* Dot nav + scroll hint */}
        <div className="flex items-center justify-between mt-7">
          <div className="flex gap-2 items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Project ${i + 1}`}
                className="h-[5px] rounded-full transition-all duration-300"
                style={{
                  width: i === current ? "20px" : "5px",
                  backgroundColor:
                    i === current
                      ? "hsl(var(--foreground))"
                      : "hsl(var(--border))",
                }}
              />
            ))}
          </div>
          <p
            className="mt-5 font-sans text-[10px] uppercase tracking-widest text-muted-foreground transition-opacity duration-300"
            style={{ opacity: current === projects.length - 1 ? 0 : 1 }}
          >
            scroll to flip
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;