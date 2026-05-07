import { motion } from 'framer-motion';

interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  focus: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'tts-research',
    title: 'Undergraduate Researcher',
    organization: 'IIT Dharwad',
    period: '2024 - Present',
    description: [
      'Researching Text-to-Speech (TTS) inference optimization techniques',
      'Implementing latency reduction strategies and batch processing improvements',
      'Evaluating model performance across different hardware configurations',
    ],
    focus: ['TTS Systems', 'Inference Optimization', 'Latency Reduction', 'Batching Strategies'],
  },
  {
    id: 'multimodal-research',
    title: 'Undergraduate Researcher',
    organization: 'IIT Dharwad',
    period: '2023 - 2024',
    description: [
      'Conducted comprehensive review of multimodal AI architectures and applications',
      'Analyzed 117 papers on SSRN for state-of-the-art multimodal learning approaches',
      'Contributed to research on vision-language model fusion techniques',
    ],
    focus: ['Multimodal AI', 'Vision-Language Models', 'Literature Review', 'Model Fusion'],
  },
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-14 md:py-20 relative">
      {/* Background accent */}
      <div className="absolute left-0 -bottom-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

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
            <span className="text-sm font-medium text-accent uppercase tracking-widest">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Research & Work</h2>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={containerVariants} className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants} className="relative">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-0 top-20 w-0.5 h-32 bg-gradient-to-b from-accent via-purple-400 to-transparent md:left-6" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-3 h-3 bg-accent rounded-full md:left-3 md:top-8" />

              {/* Content */}
              <div className="ml-8 md:ml-20 glass-card p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.organization}</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
                </div>

                {/* Description */}
                <div className="space-y-2 mb-4">
                  {exp.description.map((desc, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-foreground/70">
                      <span className="text-accent font-bold mt-0.5">•</span>
                      <span>{desc}</span>
                    </div>
                  ))}
                </div>

                {/* Focus areas */}
                <div className="flex flex-wrap gap-2">
                  {exp.focus.map((area, idx) => (
                    <span key={idx} className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
