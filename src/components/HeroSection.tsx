import { motion } from "framer-motion";
import backgroundImg from "@/assets/background.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'calc(100% - 3rem) calc(100% - 3rem)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-6xl mx-auto px-10 md:px-6 w-full">
        <div className="flex flex-col max-w-3xl space-y-8 py-10 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-7xl sm:text-7xl md:text-4xl lg:text-9xl leading-[0.9] tracking-tight text-background">
              Fancy seeing you here,
              <br />
              I'm
              <span className="italic font-normal text-butter/90"> Linh</span>
              <br />
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md"
          >
            <p className="font-body text-lg leading-relaxed text-background/60">
              Web developer. Life-long learner. Friend.
              <br />
              <em className="text-background/90"> Focused on design, interaction, and security.</em>
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
              className="font-sans text-xs uppercase tracking-[0.15em] text-background/60 hover:text-background transition-colors"
            >
              View Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="font-sans text-xs uppercase tracking-[0.15em] text-background/60 hover:text-background transition-colors"
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
