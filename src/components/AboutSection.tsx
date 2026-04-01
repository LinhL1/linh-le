import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="editorial-label mb-4">01 — About</p>
          <div className="editorial-divider mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="section-heading text-foreground">
              A bit about <em>me</em>
            </h2>
          </motion.div>

          <motion.div
            className="md:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              I'm a developer and designer who believes in the power of simplicity.
              With a background in both creative and technical disciplines, I bring
              a unique perspective to every project I work on.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              When I'm not writing code, you'll find me exploring new design trends,
              reading, or working on personal creative projects.{" "}
              <em className="text-foreground">Every detail matters.</em>
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              {[
                { label: "Focus", value: "Frontend Development" },
                { label: "Based in", value: "Your City" },
                { label: "Experience", value: "X+ Years" },
                { label: "Education", value: "Your Degree" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="editorial-label mb-1">{item.label}</p>
                  <p className="font-display text-sm text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
