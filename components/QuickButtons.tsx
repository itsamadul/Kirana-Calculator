
import React from 'react';

interface QuickButtonsProps {
  options: string[];
  selectedValue: string;
  onSelect: (val: string) => void;
  prefix?: string;
  suffix?: string;
}

const QuickButtons: React.FC<QuickButtonsProps> = ({ 
  options, 
  selectedValue, 
  onSelect, 
  prefix = '', 
  suffix = '' 
}) => {
  return (
    <div className="grid grid-cols-4 gap-2">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className={`py-2 text-sm font-bold rounded-lg border-2 transition-all ${
            selectedValue === option
              ? 'border-blue-600 bg-blue-600 text-white shadow-sm'
              : 'border-gray-200 bg-white text-gray-600 hover:border-blue-300'
          }`}
        >
          {prefix}{option}{suffix}
        </button>
      ))}
    </div>
  );
};

export default QuickButtons;
