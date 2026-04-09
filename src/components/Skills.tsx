import { motion } from 'framer-motion';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    category: 'ML/DL Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'HuggingFace', 'Scikit-learn'],
  },
  {
    category: 'AI/ML Specializations',
    skills: ['Deep Learning', 'NLP', 'Computer Vision', 'Multimodal AI', 'Transformers'],
  },
  {
    category: 'Tools & Technologies',
    skills: ['Git', 'Docker', 'Streamlit', 'Jupyter'],
  },
];

export default function Skills() {
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 -translate-y-1/2" />
      
      <motion.div
        className="container max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="accent-line" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">
              Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical Skills
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-minimal p-6"
            >
              <h3 className="text-lg font-bold mb-4 text-accent">
                {category.category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={skillVariants}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium text-sm hover:bg-accent/20 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div variants={itemVariants} className="mt-12 card-minimal p-8">
          <h3 className="text-xl font-bold mb-4">Continuous Learning</h3>
          <p className="text-foreground/70 leading-relaxed">
            I'm actively exploring emerging areas in AI/ML including efficient model architectures, 
            multimodal learning systems, and production-grade AI infrastructure. I stay updated with 
            the latest research and contribute to open-source projects in the AI community.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
