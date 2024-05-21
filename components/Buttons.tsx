import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, color }) => {
  return (
    <button 
      onClick={onClick} 
      className={`btn ${color ? `btn-${color}` : 'btn-primary'} text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  );
}

export default Button;
