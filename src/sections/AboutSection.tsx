import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { portfolioData } from '../data/portfolioData';

export const AboutSection = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <section id="about" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-gradient-orange rounded-full" />
        </motion.div>

        {/* Content */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left Column - Introduction */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Computer Science Student
              <br />
              <span className="gradient-text">Full Stack Developer</span>
              <br />
              <span className="gradient-text-purple">AI Enthusiast</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {portfolioData.about.introduction}
            </p>
            <div className="space-y-4">
              {['Problem Solver', 'Continuous Learner', 'Team Player'].map(
                (skill, idx) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  >
                    <div className="w-2 h-2 bg-accent-orange rounded-full" />
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div className="grid grid-cols-2 gap-6" variants={itemVariants}>
            {portfolioData.about.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                variants={statVariants}
                custom={idx}
                className="p-6 bg-gradient-to-br from-accent-purple/10 to-accent-orange/10 rounded-xl border border-accent-purple/20 hover:border-accent-orange/40 transition-all duration-300 group cursor-hover"
              >
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <p className="text-3xl md:text-4xl font-bold gradient-text-purple mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
