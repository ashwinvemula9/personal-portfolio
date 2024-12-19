import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  className = '',
  ...props
}) => {
  const baseStyles = "flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-white text-white hover:bg-white hover:text-black"
  };

  const Component = props.href ? 'a' : 'button';
  
  return (
    <Component
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </Component>
  );
};

export default Button;