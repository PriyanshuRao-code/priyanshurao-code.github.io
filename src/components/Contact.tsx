import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'priyanshurao108@gmail.com',
      href: 'mailto:priyanshurao108@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/PriyanshuRao-code',
      href: 'https://github.com/PriyanshuRao-code',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/priyanshu-rao',
      href: 'https://www.linkedin.com/in/priyanshu-rao/',
    },
  ];

  return (
    <section id="contact" >
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="accent-line" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Feel free to reach out if you'd like to collaborate or just chat about AI/ML!
          </p>
        </motion.div>

        {/* Contact links */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                variants={itemVariants}
                className="glass-card p-8 group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-semibold">{link.label}</span>
                </div>
                <p className="text-foreground/70 text-sm break-all group-hover:text-accent transition-colors">
                  {link.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <a
            href="mailto:priyanshurao108@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-2xl font-semibold hover:scale-105 hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 group"
          >
            Send me an Email
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
