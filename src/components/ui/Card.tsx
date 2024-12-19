import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-gray-900 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;