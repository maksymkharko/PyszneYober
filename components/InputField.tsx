import React from 'react';

interface Props {
  label: string;
  value: number | '';
  onChange: (val: number) => void;
  placeholder?: string;
  icon?: React.ReactNode;
}

export const InputField: React.FC<Props> = ({ label, value, onChange, placeholder, icon }) => {
  return (
    <div className="relative group">
      <label className="block text-xs font-medium text-white/70 mb-1.5 ml-1 uppercase tracking-wide">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-white placeholder-white/30 text-lg font-semibold appearance-none"
          onWheel={(e) => e.currentTarget.blur()}
        />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50 group-focus-within:text-white transition-colors">
          {icon}
        </div>
      </div>
    </div>
  );
};