import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  metrics: Array<{ label: string; value: string }>;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    id: "vqa-fusion",
    title: "Multimodal VQA Fusion",
    description:
      "Advanced Visual Question Answering system combining ViLT and LXMERT architectures for improved multimodal understanding.",
    details: [
      "Integrated ViLT (Vision-and-Language Transformer) and LXMERT (Cross-Modality Encoder Representations from Transformers)",
      "Implemented fusion mechanism for enhanced visual-semantic alignment",
      "Optimized for both accuracy and inference efficiency",
    ],
    metrics: [
      { label: "Accuracy Improvement", value: "+3.6%" },
      { label: "Model Fusion", value: "ViLT + LXMERT" },
      { label: "Task", value: "VQA v2.0" },
    ],
    tags: ["Multimodal AI", "Vision-Language", "PyTorch", "Transformers"],
    links: {
      github: "https://github.com/RMan2323/ViLT-LXMERT-Fusion.git",
    },
  },
  {
    id: "llsr",
    title: "Low-Light Super Resolution",
    description:
      "Deep learning model for enhancing image quality in low-light conditions using perceptual loss optimization.",
    details: [
      "Implemented DVMSR (Deep Video Multi-Scale Super-Resolution) architecture",
      "Applied perceptual loss for better visual quality preservation",
      "Optimized for real-time inference on edge devices",
    ],
    metrics: [
      { label: "PSNR Improvement", value: "17.68 → 18.13" },
      { label: "SSIM Improvement", value: "0.81 → 0.84" },
      { label: "Architecture", value: "DVMSR" },
    ],
    tags: ["Computer Vision", "Super-Resolution", "PyTorch", "Image Processing"],
    links: {
      github: "https://github.com/PriyanshuRao-code/Efficient-Super-Resolution.git",
    },
  },
  {
    id: "asteroid",
    title: "NASA Asteroid Prediction",
    description:
      "Comprehensive ML pipeline for asteroid hazard prediction using multiple ensemble models with interactive Streamlit dashboard.",
    details: [
      "Developed ensemble of 5 machine learning models (Random Forest, XGBoost, Neural Networks, etc.)",
      "Built interactive Streamlit dashboard for real-time predictions and data visualization",
      "Achieved high accuracy in hazard classification with interpretable results",
    ],
    metrics: [
      { label: "Models Ensemble", value: "5 Models" },
      { label: "Dashboard", value: "Streamlit" },
      { label: "Data Source", value: "NASA Dataset" },
    ],
    tags: ["Machine Learning", "Ensemble Methods", "Streamlit", "Data Science"],
    links: {
      github: "https://github.com/PriyanshuRao-code/AI-Lab-Project.git",
      demo: "https://ai-dashboard-team-24.streamlit.app/",
    },
  },
];

export default function Projects() {
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
    <section id="projects" className="py-20 md:py-32 relative">
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
              Featured Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Projects & Research
          </h2>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="card-minimal p-8 hover:shadow-lg transition-shadow duration-300"
              style={{
                marginLeft: index % 2 === 1 ? '2rem' : '0',
              }}
            >
              {/* Project header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 text-lg">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Project details */}
              <div className="mb-6 space-y-2">
                {project.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-foreground/70">
                    <span className="text-accent font-bold mt-1">→</span>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid md:grid-cols-3 gap-4 mb-6 pb-6 border-b border-border">
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-sm font-medium text-accent uppercase tracking-widest mb-1">
                      {metric.label}
                    </div>
                    <div className="text-lg font-semibold">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags and links */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent/10 hover:border-accent transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
