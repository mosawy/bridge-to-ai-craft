import { motion } from "framer-motion";
import { Building2, Calendar, Code2 } from "lucide-react";

const experience = [
  {
    company: "Golive-Solutions",
    location: "Cairo, Egypt",
    role: "Software Engineer",
    period: "2023 - Present",
    description: "Developing Frappe-based ERP solutions for clients. Building custom apps, integrations, and automation workflows.",
  },
  {
    company: "Cairo University - Faculty of Science",
    location: "Cairo, Egypt",
    role: "Teaching Assistant",
    period: "2024 - Present",
    description: "Teaching programming courses and mentoring undergraduate students in computer science.",
  },
];

const OpenSourceSection = () => {
  return (
    <section id="opensource" className="py-24 border-t border-border relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            Building enterprise ERP solutions and shaping the next generation of developers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-8 card-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-mono text-sm text-primary font-semibold">{item.company}</span>
              </div>
              <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                <span>{item.location}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{item.period}</span>
                </div>
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.role}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-4 w-4 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">Core Skills</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Python", "JavaScript", "SQL", "Git", "Frappe", "ERPNext"].map((skill) => (
              <span
                key={skill}
                className="rounded-md bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
