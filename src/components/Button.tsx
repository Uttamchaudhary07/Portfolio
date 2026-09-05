import { motion } from 'framer-motion';
import type { ReactNode, MouseEventHandler } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  target,
  rel,
  className = '',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 cursor-hover';

  const variants = {
    primary:
      'bg-gradient-purple text-white hover:shadow-lg hover:shadow-accent-purple/50',
    secondary:
      'bg-gradient-orange text-white hover:shadow-lg hover:shadow-accent-orange/50',
    outline:
      'border-2 border-accent-purple text-accent-purple hover:bg-accent-purple/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`;

  const content = (
    <motion.button
      className={buttonClasses}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
