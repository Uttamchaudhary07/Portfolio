import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { portfolioData } from '../data/portfolioData';

export const EducationSection = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="education"
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
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-orange rounded-full" />
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple via-accent-orange to-accent-purple transform md:-translate-x-[1px]" />

          {/* Education Items */}
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative mb-12 ml-8 md:ml-0 flex flex-col ${
                idx % 2 === 0 ? 'md:mr-auto md:w-1/2 md:pr-10' : 'md:ml-auto md:w-1/2 md:pl-10'
              }`}
            >
              {/* Timeline Dot (Pulsing glowing node) */}
              <div 
                className={`absolute top-6 w-5 h-5 rounded-full bg-dark-bg border-2 border-accent-orange flex items-center justify-center z-10 ${
                  idx % 2 === 0 
                    ? 'left-[-38px] md:left-auto md:right-[-10px] md:translate-x-0' 
                    : 'left-[-38px] md:left-[-10px]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
              </div>

              {/* Content Card */}
              <motion.div
                className="p-6 md:p-8 bg-dark-secondary/20 backdrop-blur-glass rounded-xl border border-accent-purple/20 hover:border-accent-orange/40 transition-all duration-300 flex flex-col group cursor-hover"
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent-orange transition-colors">
                    {edu.university}
                  </h3>
                  <span className="text-xs px-3 py-1 bg-accent-orange/10 border border-accent-orange/20 text-accent-orange rounded-full font-bold self-start sm:self-center">
                    {edu.startYear} – {edu.endYear}
                  </span>
                </div>

                <p className="text-md text-accent-purple font-semibold mb-1">
                  {edu.degree}
                </p>
                <p className="text-gray-300 text-sm md:text-base mb-2">{edu.field}</p>
                <p className="text-xs text-gray-500 mb-6">{edu.location}</p>

                <div className="space-y-3 mt-auto">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                    Core Focus Area:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 bg-dark-bg/60 border border-accent-purple/20 text-gray-300 rounded-md font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
