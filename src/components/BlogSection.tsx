import { motion } from "framer-motion";
import { Calendar, ArrowRight, Flame } from "lucide-react";

const posts = [
  {
    date: "Recent",
    title: "Building Ask AI: Natural Language Interface for ERPNext",
    excerpt: "How I built an AI-powered app that lets non-technical users query ERP data using natural language.",
    tag: "AI / ERP",
  },
  {
    date: "2024",
    title: "Developing SFA-Mobix: Salesperson Journey Management",
    excerpt: "Building a mobile-first Frappe app for managing field sales activities and customer visits.",
    tag: "Development",
  },
  {
    date: "2023",
    title: "Getting Started with Frappe Framework",
    excerpt: "My journey learning the Frappe framework and building enterprise ERP solutions.",
    tag: "Learning",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // Learning Hub
            </span>
            <div className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1">
              <Flame className="h-3 w-3 text-primary" />
              <span className="font-mono text-[10px] text-primary font-semibold">12-Month Journey</span>
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-1 mb-4">
            Blog & Notes
          </h2>
          <p className="text-muted-foreground max-w-xl mb-14">
            Documenting every step of my data science transition — from ERP expert to AI practitioner.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-xl border border-border bg-card p-6 card-hover cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="font-mono text-xs">{post.date}</span>
                </div>
                <span className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary font-semibold">
                  {post.tag}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-1.5 text-primary font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Read more</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
