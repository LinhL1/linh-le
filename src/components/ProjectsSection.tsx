import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { projects } from "@/data/projects";
import ProjectCarousel from "@/components/ProjectCarousel";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label + view-all link + divider */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-baseline justify-between mb-4">
            <p className="editorial-label">03 — Projects</p>
            <Link
              to="/projects"
              className="font-sans text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              View all
            </Link>
          </div>
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
        My <em>Projects</em>
        </motion.h2>

        {/* Card stack */}
        <ProjectCarousel projects={projects} />

      </div>
    </section>
  );
};

export default ProjectsSection;
