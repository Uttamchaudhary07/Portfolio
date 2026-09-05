import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { Terminal, Layers, Cpu, Database, Wrench } from 'lucide-react';

export const SkillsSection = () => {
  const { ref, isInView } = useInView();

  const skillCategories = [
    { title: 'Languages', skills: portfolioData.skills.languages, icon: Terminal },
    { title: 'Frontend', skills: portfolioData.skills.frontend, icon: Layers },
    { title: 'Backend', skills: portfolioData.skills.backend, icon: Cpu },
    { title: 'Database', skills: portfolioData.skills.database, icon: Database },
    { title: 'Tools', skills: portfolioData.skills.tools, icon: Wrench },
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">Skills</span> & Tech
          </h2>
          <div className="w-20 h-1 bg-gradient-orange rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skillCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="p-6 rounded-xl border border-accent-purple/20 bg-dark-secondary/20 backdrop-blur-glass hover:border-accent-orange/45 transition-all duration-300 flex flex-col group"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 30px rgba(124, 58, 237, 0.15)',
                }}
              >
                {/* Header Icon + Name */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-accent-purple/10 border border-accent-purple/20 rounded-lg group-hover:bg-accent-orange/10 group-hover:border-accent-orange/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent-purple group-hover:text-accent-orange transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accent-orange transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Badge List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      className="text-xs px-2.5 py-1.5 bg-dark-bg/60 border border-accent-purple/20 text-gray-300 rounded-md font-medium tracking-wide hover:bg-accent-purple/10 hover:border-accent-purple/40 hover:text-white transition-colors cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: catIdx * 0.08 + skillIdx * 0.03,
                        duration: 0.4,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
