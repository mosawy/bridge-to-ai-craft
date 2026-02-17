import { motion } from "framer-motion";
import { Monitor, Cpu, Database, Terminal } from "lucide-react";

const tools = [
  { icon: Terminal, label: "Python & JavaScript", detail: "Primary programming languages" },
  { icon: Database, label: "SQL & Databases", detail: "Data modeling and queries" },
  { icon: Monitor, label: "Frappe Framework", detail: "ERP development platform" },
  { icon: Cpu, label: "ERPNext", detail: "Enterprise resource planning" },
];

const UsesSection = () => {
  return (
    <section id="uses" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // The Toolkit
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            What I Use
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            A power user setup optimized for local AI training and full-stack development.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 text-center card-hover"
            >
              <div className="mx-auto mb-4 inline-flex rounded-xl bg-primary/10 p-4">
                <tool.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1">{tool.label}</h3>
              <p className="font-mono text-xs text-muted-foreground">{tool.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsesSection;
