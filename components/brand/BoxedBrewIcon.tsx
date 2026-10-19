import React from 'react';

export type BrewIconType = 'filter' | 'pourover' | 'frenchpress' | 'aeropress' | 'mokapot' | 'coldbrew';

interface BoxedBrewIconProps {
  type: BrewIconType;
  size?: number;
  className?: string;
  theme?: 'rust-bg' | 'cream-bg';
}

export function BoxedBrewIcon({
  type,
  size = 40,
  className = '',
  theme = 'rust-bg',
}: BoxedBrewIconProps) {
  const isRustBg = theme === 'rust-bg';
  const boxBorder = isRustBg ? '#F5EEE4' : '#C44514';
  const iconStroke = isRustBg ? '#F5EEE4' : '#5A2410';
  const boxBg = isRustBg ? 'rgba(245, 238, 228, 0.08)' : '#FAF6F0';

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Box Frame with 1px hairline border & subtle 2px notched corners */}
        <polygon
          points="4,0.5 36,0.5 39.5,4 39.5,36 36,39.5 4,39.5 0.5,36 0.5,4"
          fill={boxBg}
          stroke={boxBorder}
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Icon Glyph Lines */}
        {type === 'filter' && (
          // South Indian Brass Filter
          <g stroke={iconStroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            {/* Top Chamber */}
            <path d="M 14,10 L 14,20 L 26,20 L 26,10 Z" />
            <line x1="12" y1="10" x2="28" y2="10" />
            <circle cx="20" cy="8" r="1.5" fill={iconStroke} />
            {/* Lower Tumbler */}
            <path d="M 13,22 L 15,31 L 25,31 L 27,22 Z" />
            {/* Davara / saucer base */}
            <line x1="10" y1="32" x2="30" y2="32" />
          </g>
        )}

        {type === 'pourover' && (
          // V60 Cone & Carafe
          <g stroke={iconStroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            {/* Cone */}
            <path d="M 12,10 L 28,10 L 22,20 L 18,20 Z" />
            <line x1="10" y1="10" x2="30" y2="10" />
            {/* Server / Carafe */}
            <path d="M 17,21 L 13,31 L 27,31 L 23,21 Z" />
            {/* Carafe handle */}
            <path d="M 25,23 C 28,24 28,28 25,29" />
          </g>
        )}

        {type === 'frenchpress' && (
          // French Press
          <g stroke={iconStroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            {/* Glass cylinder */}
            <path d="M 14,14 L 14,31 C 14,32 26,32 26,31 L 26,14" />
            {/* Base feet */}
            <line x1="12" y1="32" x2="28" y2="32" />
            {/* Lid */}
            <line x1="12" y1="14" x2="28" y2="14" />
            {/* Plunger knob & rod */}
            <line x1="20" y1="8" x2="20" y2="22" />
            <circle cx="20" cy="8" r="1.5" fill={iconStroke} />
            {/* Plunger mesh disc */}
            <line x1="15" y1="22" x2="25" y2="22" strokeWidth="1.5" />
            {/* Side handle */}
            <path d="M 26,16 C 30,17 30,26 26,27" />
          </g>
        )}

        {type === 'aeropress' && (
          // Aeropress Chamber
          <g stroke={iconStroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            {/* Outer Chamber */}
            <rect x="15" y="14" width="10" height="15" />
            {/* Plunger top */}
            <line x1="13" y1="8" x2="27" y2="8" />
            <line x1="20" y1="8" x2="20" y2="16" />
            {/* Filter cap collar */}
            <path d="M 12,29 L 28,29" />
            <path d="M 16,32 L 24,32" />
          </g>
        )}

        {type === 'mokapot' && (
          // Moka Pot
          <g stroke={iconStroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            {/* Octagonal top */}
            <path d="M 14,10 L 12,18 L 28,18 L 26,10 Z" />
            <line x1="13" y1="10" x2="27" y2="10" />
            <circle cx="20" cy="8" r="1.5" fill={iconStroke} />
            {/* Spout */}
            <line x1="12" y1="12" x2="9" y2="10" />
            {/* Center collar */}
            <line x1="14" y1="19" x2="26" y2="19" strokeWidth="1.5" />
            {/* Lower boiler */}
            <path d="M 13,20 L 11,31 L 29,31 L 27,20 Z" />
            {/* Handle */}
            <path d="M 27,13 C 31,14 31,23 27,24" />
          </g>
        )}

        {type === 'coldbrew' && (
          // Cold Brew Immersion Bottle
          <g stroke={iconStroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
            {/* Bottle neck */}
            <rect x="17" y="10" width="6" height="5" />
            {/* Stopper */}
            <line x1="16" y1="10" x2="24" y2="10" />
            {/* Bottle shoulder & body */}
            <path d="M 17,15 C 13,17 13,21 13,24 L 13,31 C 13,32 27,32 27,31 L 27,24 C 27,21 27,17 23,15 Z" />
            {/* Liquid level */}
            <line x1="15" y1="23" x2="25" y2="23" strokeDasharray="1.5 1.5" />
          </g>
        )}
      </svg>
    </div>
  );
}
