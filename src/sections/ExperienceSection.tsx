import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import {
  GitBranch,
  Zap,
  Trophy,
  BookOpen,
} from 'lucide-react';

export const ExperienceSection = () => {
  const { ref, isInView } = useInView();

  const icons = [GitBranch, Zap, Trophy, BookOpen];

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Learning</span> & Growth
          </h2>
          <div className="w-20 h-1 bg-gradient-orange rounded-full" />
        </motion.div>

        {/* Experience Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {portfolioData.experience.map((exp, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 md:p-8 rounded-xl border border-accent-purple/20 bg-dark-secondary/20 backdrop-blur-glass hover:border-accent-orange/45 transition-all duration-300 flex flex-col group cursor-hover"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 30px rgba(124, 58, 237, 0.15)',
                }}
              >
                <div className="flex items-start gap-4 h-full">
                  {/* Icon Frame */}
                  <div className="p-3 bg-accent-purple/10 border border-accent-purple/20 rounded-lg group-hover:bg-accent-orange/10 group-hover:border-accent-orange/20 transition-colors flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-purple group-hover:text-accent-orange transition-colors" />
                  </div>

                  {/* Text Details */}
                  <div className="flex-grow flex flex-col justify-between h-full">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-orange transition-colors">
                          {exp.title}
                        </h3>
                        <span className="text-xs px-2.5 py-1 bg-accent-orange/10 border border-accent-orange/20 text-accent-orange rounded-full font-semibold">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
