import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Senior Developer",
    company: "Company Name",
    period: "2022 — Present",
    description:
      "Led frontend development for key products, focusing on performance and elegant user interfaces.",
  },
  {
    role: "Frontend Developer",
    company: "Agency Name",
    period: "2020 — 2022",
    description:
      "Built interactive web experiences for clients across various industries with modern frameworks.",
  },
  {
    role: "Junior Developer",
    company: "Startup Name",
    period: "2018 — 2020",
    description:
      "Developed features and collaborated closely with design teams to ship polished products.",
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
