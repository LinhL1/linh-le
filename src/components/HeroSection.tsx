import { motion } from "framer-motion";
import backgroundImg from "@/assets/background.webp";
import backgroundDarkImg from "@/assets/background_dark.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-6 overflow-hidden">
        {/* Both images are always mounted and preloaded; the `dark` class on <html> flips
            visibility instantly via CSS instead of swapping `src` (which forced a re-fetch
            and re-decode of a several-MB PNG on every toggle). */}
        <img
          src={backgroundImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover dark:hidden"
        />
        <img
          src={backgroundDarkImg}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover hidden dark:block"
        />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-10 md:px-6 w-full">
        <div className="flex flex-col max-w-3xl space-y-8 py-10 md:py-0 -mt-16" style={{ marginTop: "-4rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="pt-7 font-display text-7xl sm:text-7xl md:text-4xl lg:text-9xl leading-[0.9] tracking-tight text-background">
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
              <em className="text-background/90"> Focused on creative problem solving, user experience, and execution.</em>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 -mt-4"
            style={{ marginTop: "1rem" }}
          >
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
