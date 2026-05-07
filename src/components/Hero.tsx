import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import type { Variants } from "framer-motion";
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

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
  return (
    <section className="relative min-h-screen w-full flex items-center pt-20 px-6 md:px-10 lg:px-16">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute bottom-[-150px] left-[-120px] w-[380px] h-[380px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      </div>

      {/* Main Content */}
      <motion.div className="w-full max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
        {/* Top Accent */}
        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
          <div className="w-12 h-[2px] bg-accent rounded-full" />

          <span className="text-sm font-semibold text-accent uppercase tracking-[0.25em]">Welcome to my portfolio</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-8"
        >
          <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
            Priyanshu Rao
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div variants={itemVariants} className="max-w-3xl mb-10">
          <h2 className="text-xl md:text-2xl text-accent font-semibold mb-5">B.Tech CSE Student @ IIT Dharwad</h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            AI/ML enthusiast focused on building scalable intelligent systems and impactful real-world applications.
            Passionate about multimodal AI, deep learning, research, and creating technology that solves meaningful
            problems.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mb-14">
          <button
            onClick={onViewProjects}
            className="group px-7 py-4 rounded-2xl bg-accent text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onContact}
            className="px-7 py-4 rounded-2xl border border-border bg-background/50 backdrop-blur-md text-foreground font-semibold hover:bg-accent/10 hover:border-accent/40 hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-5">
          <span className="text-sm uppercase tracking-widest text-muted-foreground font-medium">Connect with me</span>

          <div className="flex gap-4">
            <a
              href="https://github.com/PriyanshuRao-code"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl border border-border bg-background/50 backdrop-blur-md text-foreground/70 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/priyanshu-rao/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-2xl border border-border bg-background/50 backdrop-blur-md text-foreground/70 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:scale-110 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="mailto:priyanshurao108@gmail.com"
              className="p-3 rounded-2xl border border-border bg-background/50 backdrop-blur-md text-foreground/70 hover:text-accent hover:border-accent/40 hover:bg-accent/10 hover:scale-110 transition-all duration-300"
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