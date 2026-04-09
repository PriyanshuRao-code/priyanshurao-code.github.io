import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="border-t border-border py-12 md:py-16 relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background accent */}
      <div className="absolute left-0 -bottom-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-5xl">
        <motion.div className="grid md:grid-cols-3 gap-8 mb-8" variants={containerVariants}>
          {/* About */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-3">Priyanshu Rao</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              B.Tech CSE Student at IIT Dharwad, specializing in AI/ML and building intelligent systems.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-foreground/60 hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants}>
            <h3 className="font-bold text-lg mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/PriyanshuRao-code"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 text-foreground/60 hover:text-accent transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/priyanshu-rao/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-accent/10 text-foreground/60 hover:text-accent transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:priyanshurao108@gmail.com"
                className="p-2 rounded-lg hover:bg-accent/10 text-foreground/60 hover:text-accent transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div variants={itemVariants} className="border-t border-border my-8" />

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          variants={containerVariants}
        >
          <motion.p variants={itemVariants} className="text-sm text-foreground/60">
            © 2024 Priyanshu Rao. All rights reserved.
          </motion.p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-accent/10 text-accent transition-colors duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            aria-label="Scroll to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </motion.footer>
  );
}
