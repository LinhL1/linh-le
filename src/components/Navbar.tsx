import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["About", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const threshold = about ? about.offsetTop - 80 : window.innerHeight * 0.9;
      setScrolled(window.scrollY >= threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "top-0 bg-background/80 backdrop-blur-md border-b border-border"
          : "top-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`font-sans text-xs uppercase tracking-[0.2em] transition-colors ${
            scrolled ? "text-muted-foreground" : "text-background"
          }`}
        >
          LINH LE
        </button>
        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`hidden md:block font-sans text-xs uppercase tracking-[0.15em] transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-background/70 hover:text-background"
              }`}
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 transition-colors ${
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-background/70 hover:text-background"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
