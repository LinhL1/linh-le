import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center">
          {/* Left column — Name & Bio */}
          <div className="md:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="editorial-label mb-4">Welcome</p>
              <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight text-foreground">
                Your
                <br />
                <span className="italic font-normal">Name</span>
                <br />
                Here
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-md"
            >
              <div className="editorial-divider mb-6" />
              <p className="font-body text-lg leading-relaxed text-muted-foreground">
                A creative developer crafting thoughtful digital experiences.
                <em className="text-foreground"> Focused on design, interaction, and code.</em>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-6"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="font-sans text-xs uppercase tracking-[0.15em] text-foreground border-b border-foreground pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors"
              >
                View Work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right column — Photo placeholder */}
          <motion.div
            className="md:col-span-5 flex justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative frame offset */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-foreground/20" />
              <div className="w-72 h-96 md:w-80 md:h-[28rem] bg-card border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-2">
                  <p className="editorial-label">Your Photo</p>
                  <p className="font-display italic text-muted-foreground text-sm">Place image here</p>
                </div>
              </div>
              {/* Small editorial detail */}
              <div className="absolute -bottom-6 -right-6 bg-background border border-border px-4 py-2">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Est. 2024
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 md:mt-32 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            Scroll
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
