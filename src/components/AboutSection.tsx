import { motion } from "framer-motion";
import myPhoto from "@/assets/me2.jpg";

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
            <h2 className="section-heading text-foreground mb-10">
              A bit <em className="text-sage">about me</em>
            </h2>

            
          </motion.div>

          <motion.div
            className="md:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <em className="text-foreground">A web developer and designer, just bringing ideas into life in many forms.</em>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              With a background in both creative and technical disciplines, I try to put my best foot forward and bring a unique perspective to the projects I contribute to.
              From working with non-profit organizations, student-led initiatives, and personal projects, I care about the impact, design, and functionality of my work.
              What started with a passion for making fun websites turned into a calling to try new things...from projects in AI/ML and cybersecurity to, of course, more web projects.
              I love seeing where curiosity leads me.
            </p>

            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              When I'm not developing projects, you'll find me
              reading, journaling, or doodling.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              {[
                { label: "Focus", value: "Front-end Development" },
                { label: "Interest", value: "Full-stack Development, UI/UX Design, Web Security" },
                { label: "Based in", value: "Boston, MA" },
                { label: "Education", value: "B.S in Computer Science" },
                { label: "Stack/Tools", value: "React/JS, Laravel/PHP, Python, HTML/CSS, Figma" },
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