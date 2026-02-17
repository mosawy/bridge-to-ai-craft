import { motion } from "framer-motion";
import { GraduationCap, Users, BookOpen, MessageSquare } from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Teaching Assistant at Cairo University",
    text: "Teaching programming courses at Faculty of Science, Cairo University since 2024. Mentoring undergraduate students in computer science.",
  },
  {
    icon: BookOpen,
    title: "B.Sc. Computer Science",
    text: "Graduated from Faculty of Science, Cairo University (2017-2021). Strong foundation in computer science fundamentals and software development.",
  },
  {
    icon: MessageSquare,
    title: "Teaching Philosophy",
    text: "Bridging theory with real-world full-stack development. Connecting academic concepts to industry tools and best practices.",
  },
];

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16"
        >
          {/* Left */}
          <div className="lg:w-1/3">
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              // The Educator
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
              Teaching &{" "}
              <span className="gradient-text">Mentorship</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Being a Teaching Assistant isn't just about grading — it's proof that I can break down
              complex systems into digestible concepts. A critical skill for any senior developer or team lead.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2">
              <GraduationCap className="h-4 w-4 text-primary" />
              <span className="font-mono text-xs text-primary">Leadership through education</span>
            </div>
          </div>

          {/* Right */}
          <div className="lg:w-2/3 grid sm:grid-cols-1 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-5 rounded-xl border border-border bg-card p-6 card-hover"
              >
                <div className="shrink-0 rounded-lg bg-primary/10 p-3 h-fit">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingSection;
