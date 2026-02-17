import { motion } from "framer-motion";
import { ArrowDown, Braces, Brain } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal-style label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-muted-foreground mb-8">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            Software Engineer · Teaching Assistant · ERP Specialist
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-6">
            Mohamed{" "}
            <span className="gradient-text inline-flex items-center gap-3">
              Elsawy
              <Braces className="h-10 w-10 md:h-14 md:w-14 text-primary" />
            </span>
            <br />
            Building{" "}
            <span className="gradient-text inline-flex items-center gap-3">
              Intelligent ERPs
              <Brain className="h-10 w-10 md:h-14 md:w-14 text-primary" />
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Results-driven Software Engineer with 2+ years developing Frappe-based ERP solutions.
            Skilled in Python, JavaScript, and SQL. Teaching programming at Cairo University.
            Passionate about innovation, mentorship, and continuous learning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-8 py-3 font-display font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              View Projects
            </a>
            <a
              href="#opensource"
              className="rounded-lg border border-border bg-surface px-8 py-3 font-display font-semibold text-foreground transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
            >
              Open Source
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20"
        >
          <a href="#projects" className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <span className="font-mono text-xs">scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
