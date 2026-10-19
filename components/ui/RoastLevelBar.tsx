import React from 'react';

interface RoastLevelBarProps {
  level: number; // 1 to 5
  maxLevel?: number;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
  label?: string;
}

export function RoastLevelBar({
  level,
  maxLevel = 5,
  className = '',
  activeColor = 'bg-rust',
  inactiveColor = 'bg-rust/20',
  label,
}: RoastLevelBarProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div
        className="flex items-center gap-1"
        role="meter"
        aria-valuenow={level}
        aria-valuemin={1}
        aria-valuemax={maxLevel}
        aria-label={label || `Roast level ${level} of ${maxLevel}`}
      >
        {Array.from({ length: maxLevel }).map((_, i) => (
          <span
            key={i}
            className={`h-[3px] w-4 rounded-none transition-colors duration-150 ${
              i < level ? activeColor : inactiveColor
            }`}
          />
        ))}
      </div>
      {label && (
        <span className="font-sans text-xs tracking-caps uppercase text-brown/80 font-medium">
          {label}
        </span>
      )}
    </div>
  );
}
