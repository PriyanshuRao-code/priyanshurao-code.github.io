import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export default function Hero({ onViewProjects, onContact }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-20 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <motion.div className="container max-w-5xl" variants={containerVariants} initial="hidden" animate="visible">
        {/* Accent line */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <div className="accent-line" />
          <span className="text-sm font-medium text-accent uppercase tracking-widest">Welcome to my portfolio</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Priyanshu Rao
        </motion.h1>

        {/* Role and tagline */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
            B.Tech CSE Student @ IIT Dharwad
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
            AI/ML Enthusiast building efficient and scalable intelligent systems. Passionate about multimodal AI, deep
            learning, and real-world AI applications.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
          <button onClick={onViewProjects} className="btn-primary flex items-center justify-center gap-2 group">
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button onClick={onContact} className="btn-secondary flex items-center justify-center gap-2">
            Get in Touch
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={itemVariants} className="flex items-center gap-6">
          <span className="text-sm font-medium text-muted-foreground">Connect with me:</span>
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
    </section>
  );
}
