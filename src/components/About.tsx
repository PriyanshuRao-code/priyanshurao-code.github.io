import { motion } from 'framer-motion';

export default function About() {
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

  const highlights = [
    {
      label: 'SSRN Preprint',
      value: 'Analyzed 117 papers',
      description: 'Multimodal AI research',
    },
    {
      label: 'TTS Optimization',
      value: 'Latency ↓',
      description: 'Inference optimization & batching',
    },
    {
      label: 'Focus',
      value: 'Real-world AI',
      description: 'Scalable intelligent systems',
    },
  ];

  return (
    <section id="about" className="py-14 md:py-20 relative">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />

      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="section-title mb-6">
            Passionate about <span className="text-accent">AI/ML</span>
            and Real-World Impact
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl leading-relaxed">
            I'm a B.Tech Computer Science student at IIT Dharwad specializing in Artificial Intelligence and Deep
            Learning. My research focuses on multimodal AI systems, efficient inference optimization, and building
            scalable intelligent solutions that solve real-world problems.
          </p>
        </motion.div>

        {/* Highlights grid */}
        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((highlight, index) => (
            <motion.div key={index} variants={itemVariants} className="glass-card p-8">
              <div className="text-sm font-medium text-accent uppercase tracking-widest mb-2">{highlight.label}</div>
              <div className="text-3xl font-bold mb-2">{highlight.value}</div>
              <p className="text-sm text-foreground/60">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Research areas */}
        <motion.div variants={itemVariants} className="glass-card p-10">
          <h3 className="text-2xl font-bold mb-6">Research Interests</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-accent mb-3">Core Areas</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Multimodal AI & Vision-Language Models</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Deep Learning & Neural Networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Natural Language Processing</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-accent mb-3">Applied Focus</h4>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Inference Optimization & Latency Reduction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Model Efficiency & Batching Strategies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Real-World AI System Design</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
