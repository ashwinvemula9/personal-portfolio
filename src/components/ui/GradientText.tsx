import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span className={`bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text ${className}`}>
      {children}
    </span>
  );
};

export default GradientText;