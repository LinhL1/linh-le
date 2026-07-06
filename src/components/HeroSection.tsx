import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import backgroundImg from "@/assets/background.png";
import backgroundDarkImg from "@/assets/background_dark.png";

const HeroSection = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-6 overflow-hidden">
        <img
          src={isDark ? backgroundDarkImg : backgroundImg}
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-10 md:px-6 w-full">
        <div className="flex flex-col max-w-3xl space-y-8 py-10 md:py-0 -mt-16" style={{ marginTop: "-4rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-7xl sm:text-7xl md:text-4xl lg:text-9xl leading-[0.9] tracking-tight text-background">
              Fancy seeing you here,
              <br />
              I'm
              <span className="italic font-normal text-butter dark:[color:hsl(var(--taro))]"> Linh</span>
              <br />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md"
          >
            <p className="font-body text-lg leading-relaxed text-background/70">
              Learner. Builder. Friend.              <br />
              <em className="text-background/90"> Focused on creative problem solving, interaction, and security.</em>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 -mt-4"
            style={{ marginTop: "1rem" }}
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-xs uppercase tracking-[0.15em] text-background/70 hover:text-background transition-colors"
            >
              View Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-xs uppercase tracking-[0.15em] text-background/70 hover:text-background transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
