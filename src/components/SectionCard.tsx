import React, { ReactNode } from 'react';

interface SectionCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md max-w-lg w-full">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-base text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
};

export default SectionCard; 