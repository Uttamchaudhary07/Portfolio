import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { Button } from '../components/Button';
import { Award, Zap, CheckCircle2 } from 'lucide-react';

export const LeetCodeSection = () => {
  const { ref, isInView } = useInView();

  const totalSolved = portfolioData.leetcode.problemsSolved;
  const rating = portfolioData.leetcode.contestRating;
  const ranking = portfolioData.leetcode.ranking;

  const difficultyBreakdown = [
    { label: 'Easy', solved: 70, total: 120, color: 'bg-emerald-500', barBg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400' },
    { label: 'Medium', solved: 65, total: 150, color: 'bg-amber-500', barBg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400' },
    { label: 'Hard', solved: 15, total: 50, color: 'bg-rose-500', barBg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400' },
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  // SVG Circular path details
  const size = 160;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = center - strokeWidth - 4;
  const circumference = 2 * Math.PI * radius;
  // Ratio of problems solved to targeted goal (e.g., 320 total targets in current dashboard setup)
  const targetTotal = difficultyBreakdown.reduce((sum, item) => sum + item.total, 0);
  const strokeDashoffset = circumference - (totalSolved / targetTotal) * circumference;

  return (
    <section id="leetcode" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-dark-bg">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            LeetCode <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-orange rounded-full" />
        </motion.div>

        {/* Dashboard Frame */}
        <motion.div
          className="grid lg:grid-cols-12 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Left panel: Circular Stats (lg:col-span-5) */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 p-8 rounded-2xl border border-accent-purple/20 bg-dark-secondary/20 backdrop-blur-glass flex flex-col items-center justify-center text-center relative group"
            whileHover={{ y: -5 }}
          >
            <div className="relative w-40 h-40 flex items-center justify-center mb-6">
              {/* Animated Progress Circle */}
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  className="stroke-dark-tertiary"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                />
                <motion.circle
                  cx={center}
                  cy={center}
                  r={radius}
                  className="stroke-accent-orange"
                  strokeWidth={strokeWidth}
                  fill="transparent"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
                  transition={{ duration: 1.5, ease: 'easeOut' }}
                  strokeLinecap="round"
                />
              </svg>
              {/* Center Metrics */}
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-black text-white">{totalSolved}</span>
                <span className="text-xs uppercase tracking-wider text-gray-400 font-bold mt-1">Solved</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-300 font-medium">
              <CheckCircle2 size={18} className="text-accent-orange" />
              <span>Target Achieved: {Math.round((totalSolved / targetTotal) * 100)}%</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Active practice & algorithmic study</p>
          </motion.div>

          {/* Right panel: Difficulties & Cards (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Difficulty bars container */}
            <motion.div
              variants={itemVariants}
              className="p-6 md:p-8 rounded-2xl border border-accent-purple/20 bg-dark-secondary/20 backdrop-blur-glass flex flex-col justify-between gap-6"
            >
              <h3 className="text-lg font-bold text-white mb-2">Category Breakdown</h3>
              <div className="space-y-4">
                {difficultyBreakdown.map((item) => {
                  const percent = Math.min((item.solved / item.total) * 100, 100);
                  return (
                    <div key={item.label} className="space-y-2">
                      <div className="flex justify-between items-end text-sm">
                        <span className={`font-bold ${item.text}`}>{item.label}</span>
                        <span className="text-gray-300 font-mono">
                          {item.solved} <span className="text-gray-500">/ {item.total}</span>
                        </span>
                      </div>
                      {/* Bar Track */}
                      <div className={`w-full h-3.5 rounded-full overflow-hidden ${item.barBg} border ${item.border}`}>
                        <motion.div
                          className={`h-full rounded-full ${item.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${percent}%` } : { width: 0 }}
                          transition={{ duration: 1.2, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Contest Rating Card */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl border border-accent-purple/20 bg-dark-secondary/20 backdrop-blur-glass flex items-center gap-4 group cursor-hover"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 25px rgba(124, 58, 237, 0.15)',
                }}
              >
                <div className="p-3 bg-accent-purple/10 border border-accent-purple/20 rounded-xl group-hover:bg-accent-orange/10 group-hover:border-accent-orange/20 transition-colors">
                  <Zap className="w-6 h-6 text-accent-purple group-hover:text-accent-orange transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Contest Rating</p>
                  <p className="text-2xl md:text-3xl font-black gradient-text mt-1">{rating}</p>
                </div>
              </motion.div>

              {/* Global Ranking Card */}
              <motion.div
                variants={itemVariants}
                className="p-6 rounded-2xl border border-accent-purple/20 bg-dark-secondary/20 backdrop-blur-glass flex items-center gap-4 group cursor-hover"
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 25px rgba(124, 58, 237, 0.15)',
                }}
              >
                <div className="p-3 bg-accent-purple/10 border border-accent-purple/20 rounded-xl group-hover:bg-accent-orange/10 group-hover:border-accent-orange/20 transition-colors">
                  <Award className="w-6 h-6 text-accent-purple group-hover:text-accent-orange transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Global Rank</p>
                  <p className="text-2xl md:text-3xl font-black gradient-text mt-1">#{ranking}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-light">
            Check out my LeetCode profile to see solved repositories, submission history, and performance metrics.
          </p>
          <Button
            variant="secondary"
            size="lg"
            href={portfolioData.leetcode.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 cursor-hover"
          >
            Visit LeetCode Profile →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
