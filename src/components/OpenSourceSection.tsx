import { motion } from "framer-motion";
import { GitBranch, Star, GitPullRequest, Code2 } from "lucide-react";

const contributions = [
  {
    repo: "frappe/education",
    description: "Active contributor to Frappe Education — building features that serve thousands of academic institutions worldwide.",
    stats: { prs: 12, stars: "1.2k" },
  },
  {
    repo: "frappe/erpnext",
    description: "Bug fixes and enhancements to the core ERPNext framework, focusing on payment and accounting modules.",
    stats: { prs: 5, stars: "18k" },
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
            // The Contributor
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Open Source
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            Contributing to large-scale open source projects shows I can navigate complex codebases and collaborate globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contributions.map((item, i) => (
            <motion.div
              key={item.repo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-border bg-card p-8 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-5 w-5 text-primary" />
                <span className="font-mono text-sm text-primary font-semibold">{item.repo}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <GitPullRequest className="h-3.5 w-3.5 text-primary" />
                  <span>{item.stats.prs} PRs merged</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-3.5 w-3.5 text-primary" />
                  <span>{item.stats.stars} stars</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex items-center gap-3"
        >
          <GitBranch className="h-4 w-4 text-muted-foreground" />
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
            View all contributions on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
