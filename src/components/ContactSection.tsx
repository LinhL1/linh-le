import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="editorial-label mb-4">04 — Contact</p>
          <div className="editorial-divider mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="section-heading text-foreground mb-8">
              Let's <em>talk</em>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-md">
              Have a project in mind or just want to say hello?
              I'd love to hear from you. Drop me a line and I'll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <p className="editorial-label mb-2">Email</p>
              <a
                href="mailto:hello@example.com"
                className="font-display text-xl text-foreground hover:text-muted-foreground transition-colors"
              >
                hello@example.com
              </a>
            </div>
            <div>
              <p className="editorial-label mb-2">Social</p>
              <div className="space-y-2">
                {[
                  { name: "GitHub", url: "#" },
                  { name: "LinkedIn", url: "#" },
                  { name: "Twitter / X", url: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="block font-display text-lg text-foreground hover:text-muted-foreground hover:translate-x-1 transition-all duration-200"
                  >
                    {social.name} →
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="editorial-label mb-2">Location</p>
              <p className="font-display text-lg text-foreground">Your City, Country</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
