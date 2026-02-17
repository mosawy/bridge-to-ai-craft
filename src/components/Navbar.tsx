import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Teaching", href: "#teaching" },
  { label: "Experience", href: "#opensource" },
  { label: "Blog", href: "#blog" },
  { label: "Uses", href: "#uses" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-primary">
          <Terminal className="h-5 w-5" />
          <span>~/mohamed-elsawy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-xs tracking-wide text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 font-mono text-xs font-semibold text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Contact
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-border bg-background md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-muted-foreground hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
