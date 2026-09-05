import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { Button } from '../components/Button';
import { ExternalLink, Code } from 'lucide-react';

export const ProjectsSection = () => {
  const { ref, isInView } = useInView();

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-orange rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-xl overflow-hidden bg-dark-secondary/30 backdrop-blur-glass border border-accent-purple/20 hover:border-accent-orange/40 transition-all duration-300 flex flex-col"
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-52 w-full overflow-hidden border-b border-accent-purple/10">
                {project.image && !project.image.startsWith('#') ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-dark-tertiary to-dark-secondary flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">Project Preview</span>
                  </div>
                )}
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent opacity-65" />
                
                {/* Floating Tech Badge */}
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-accent-orange/95 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md tracking-wider uppercase">
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                {/* Project Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 bg-dark-bg/60 border border-accent-purple/35 text-gray-300 rounded-md font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-accent-purple/10 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow inline-flex items-center justify-center gap-2 cursor-hover"
                  >
                    Live Demo <ExternalLink size={14} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow inline-flex items-center justify-center gap-2 cursor-hover"
                  >
                    Source <Code size={14} />
                  </Button>
                </div>
              </div>

              {/* Hover Glow Background Element */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: '0 0 30px rgba(124, 58, 237, 0.15)',
                }}
              />
            </motion.div>
          ))}

          {/* Add More Projects Card */}
          <motion.div
            variants={itemVariants}
            className="group relative rounded-xl overflow-hidden flex items-center justify-center min-h-[360px] md:min-h-[420px] bg-dark-secondary/10 border-2 border-dashed border-accent-purple/20 hover:border-accent-orange/40 transition-all duration-300 cursor-hover"
            whileHover={{ y: -8 }}
          >
            <div className="relative text-center p-8">
              <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center mx-auto mb-4 border border-accent-purple/20 group-hover:border-accent-orange/30 group-hover:bg-accent-orange/10 transition-colors">
                <span className="text-xl font-semibold text-accent-purple group-hover:text-accent-orange transition-colors">+</span>
              </div>
              <p className="text-gray-300 font-medium">More Projects Coming Soon</p>
              <p className="text-xs text-gray-500 mt-2">Currently designing AI systems and web applications</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
