import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  link?: string;
}

// ── projects here ──
const projects: Project[] = [
  {
    title: "INformed",
    category: "Gamified Educational Web App",
    description:
      "A React web/mobile application, providing a gamified learning experience to educate individuals on misinformation and digital media.",
    year: "2026",
    link: "https://github.com/LinhL1/INformed",
  },
  {
    title: "She Drive",
    category: "Mobile Application",
    description:
      "A collaborative side project: A full-stack mobile app built with Flutter and Laravel, focused on providing women with a safe and flexible transportation option.",
    year: "2026",
    link: "https://github.com/haliait/SheDrive",
  },
  {
    title: "Me, My-Shelf, and I",
    category: "Creative Web App",
    description:
      "A React personal digital reading nook to track read books, reading goals, and notes.",
    year: "2026",
    link: "https://just-myshelf.lovable.app/",
  },
  {
    title: "PhishSTX",
    category: "AI/ML",
    description:
      "An AI4ALL collaborative project: Trained ML models to develop an email phishing detector using NLP techniques.",
    year: "2026",
    link: "https://phish-stx-deda6n8vytgxa5jzqmmref.streamlit.app/",
  },
  {
    title: "Impromptu",
    category: "Hackathon Project: Best Gemini API Integration",
    description:
      "Joint project built in 36 hours using React and Firebase. Inspired by fostering connection, exploration, and mini side quests, we wanted to create a fun and interactive way for you to stay in touch and connected through a simple daily scavenger hunt.",
    year: "2026",
    link: "https://github.com/LinhL1/Impromptu",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="editorial-label mb-4">03 — Projects</p>
          <div className="editorial-divider mb-12" />
        </motion.div>

        <motion.h2
          className="section-heading text-foreground mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Selected <em>work</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.link || "#"}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group block border border-border p-8 hover:bg-card transition-all duration-300 relative"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="editorial-label">{project.category}</p>
                  <p className="font-sans text-[10px] text-muted-foreground mt-1">
                    {project.year}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                />
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-3">
                {project.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-foreground group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
