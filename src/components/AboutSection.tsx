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
              An indie web developer and designer.
              With a background in both creative and technical disciplines, I try to put my best foot forward and bring
              a unique perspective to every project I get to be involved with. It started with a passion for digital design
              and websites, and now I am actively looking to explore the cyber space and security. 
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              When I'm not developing projects, you'll find me
              reading, hanging out with my bird, or working on creative projects, with an emphasis on{" "}
              <em className="text-foreground">functionality and aesthetics.</em>
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              {[
                { label: "Focus", value: "Full-stack Web Development, Cybersecurity" },
                { label: "Based in", value: "Boston, MA" },
                { label: "Education", value: "B.S in Computer Science" },
                { label: "Stack/Tools", value: "React/JS, Laravel/PHP, Python, HTML/CSS" },


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
