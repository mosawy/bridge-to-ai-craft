import { motion } from "framer-motion";
import { ExternalLink, Server, Smartphone, Brain } from "lucide-react";

const projects = [
  {
    icon: Server,
    category: "ERP Customization",
    title: "ERPNext Payment Gateway Integration",
    description:
      "Built custom Fawry and Paymob payment integrations for ERPNext, enabling seamless payment processing for Egyptian businesses.",
    tags: ["Python", "Frappe", "ERPNext", "Fawry", "Paymob"],
  },
  {
    icon: Smartphone,
    category: "Mobile Development",
    title: "React Native Field Service App",
    description:
      "Cross-platform mobile app for field service teams, syncing with ERPNext backend for real-time work order management.",
    tags: ["React Native", "Node.js", "MongoDB", "REST API"],
  },
  {
    icon: Brain,
    category: "AI / RAG Experiment",
    title: "ERP Knowledge Base RAG System",
    description:
      "Retrieval-Augmented Generation pipeline that transforms ERPNext documentation and business data into AI-queryable knowledge.",
    tags: ["Python", "LangChain", "NVIDIA", "LLM", "Vector DB"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-primary tracking-widest uppercase">
            // Featured Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            Bridging enterprise systems and AI — from production ERP customizations to experimental RAG pipelines.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-6 card-hover cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-[10px] text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
