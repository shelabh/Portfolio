'use client';
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void; // Optional click handler if needed
}

const SimpleButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      className="p-3 border  border-[#A78BF6] hover:bg-[#A78BF6] hover:text-white rounded" 
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SimpleButton;
