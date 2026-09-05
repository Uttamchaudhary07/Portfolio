import { motion } from 'framer-motion';
import { useInView } from '../hooks';
import { portfolioData } from '../data/portfolioData';
import { Button } from '../components/Button';
import {
  Mail,
  Download,
  ExternalLink,
} from 'lucide-react';

export const ContactSection = () => {
  const { ref, isInView } = useInView();

  const socialLinks = [
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      url: portfolioData.social.linkedin,
      color: 'from-blue-500/20 to-transparent',
    },
    {
      icon: ExternalLink,
      label: 'GitHub',
      url: portfolioData.social.github,
      color: 'from-gray-500/20 to-transparent',
    },
    {
      icon: Mail,
      label: 'Email',
      url: `mailto:${portfolioData.personal.email}`,
      color: 'from-accent-orange/20 to-transparent',
    },
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Let's Build Something
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Whether you have an opportunity, a question, or just want to connect,
            feel free to reach out. I'm always open to new challenges and collaborations.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                className={`p-6 md:p-8 rounded-xl border border-accent-purple/20 hover:border-accent-orange/45 bg-dark-secondary/20 backdrop-blur-glass transition-all duration-300 group bg-gradient-to-br ${social.color} cursor-hover`}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 0 25px rgba(124, 58, 237, 0.15)',
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent-purple/10 border border-accent-purple/20 rounded-lg group-hover:bg-accent-orange/10 group-hover:border-accent-orange/20 transition-colors">
                    <Icon className="w-6 h-6 text-accent-purple group-hover:text-accent-orange transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-accent-orange transition-colors">
                      {social.label}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">Connect with me</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Button
            variant="primary"
            size="lg"
            href={`mailto:${portfolioData.personal.email}`}
            className="inline-flex items-center gap-2 cursor-hover"
          >
            <Mail size={18} /> Send Me an Email
          </Button>

          <Button
            variant="secondary"
            size="lg"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume download will be available shortly! Please connect via LinkedIn or Email in the meantime.");
            }}
            className="inline-flex items-center gap-2 cursor-hover"
          >
            <Download size={18} /> Download Resume
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16 pt-8 border-t border-accent-purple/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="text-gray-400 text-xs tracking-wide">
            Made with{' '}
            <span className="text-accent-orange font-bold">♥</span> by Uttam
            Chaudhary • 2024 – 2026
          </p>
          <div className="flex justify-center gap-6 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-accent-orange transition-colors cursor-hover"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
