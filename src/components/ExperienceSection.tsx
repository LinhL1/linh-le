import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Security Intelligence & Software Intern",
    company: "INNetwork",
    period: "JAN 2026 — PRESENT",
    description:
      "Authored cybersecuirty focused policy breifs and developed an media literacy interactive web application using React.",
  },
  {
    role: "Grant Writer",
    company: "Project Safeweb",
    period: "AUG 2025 - JAN 2026",
    description:
      "Researched and identified security and cyber-safety organizations to support partnership development and funding opportunities.",
  },
  {
    role: "Front-end Devlopment",
    company: "Building-U",
    period: "AUG 2024 — AUG 2025",
    description:
      "Collaborated in the development of a mock user admin panel. Supported conducting peer code reviews for new interns.",
  },
   {
    role: "Video Production",
    company: "Malden City Hall",
    period: "SUMMER 2023 — 2024",
    description:
      "Produced short-form and long-form visual media for the city of Malden. Collaborated on projects, hosted interviews and handled camera/editing work. Video editing via Final Cut Pro.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="editorial-label mb-4">02 — Experience</p>
          <div className="editorial-divider mb-12" />
        </motion.div>

        <motion.h2
          className="section-heading text-foreground mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Where I've <em>worked</em>
        </motion.h2>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border-t border-border py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 hover:bg-card/50 transition-colors px-4 -mx-4"
            >
              <div className="md:col-span-3">
                <p className="font-sans text-xs text-muted-foreground tracking-wide">
                  {exp.period}
                </p>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl font-medium text-foreground">
                  {exp.role}
                </h3>
                <p className="font-display italic text-muted-foreground mt-1">
                  {exp.company}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="font-body text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
