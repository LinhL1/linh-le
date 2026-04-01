import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  year: string;
  link?: string;
}

// ── Easily plug in your projects here ──
const projects: Project[] = [
  {
    title: "Project Alpha",
    category: "Web Application",
    description:
      "A full-stack platform built with modern technologies, focused on clean UX and performance.",
    year: "2024",
    link: "#",
  },
  {
    title: "Project Beta",
    category: "Design System",
    description:
      "Comprehensive component library and design tokens for a consistent brand experience.",
    year: "2023",
    link: "#",
  },
  {
    title: "Project Gamma",
    category: "Mobile App",
    description:
      "Cross-platform mobile experience with fluid animations and offline-first architecture.",
    year: "2023",
    link: "#",
  },
  {
    title: "Project Delta",
    category: "Creative",
    description:
      "An experimental interactive piece exploring generative art and data visualization.",
    year: "2022",
    link: "#",
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
