'use client';

import React from 'react';

interface SunMarkProps {
  size?: number;
  className?: string;
  color?: string; // e.g. '#C44514' or '#F5EEE4' or 'currentColor'
  rotate?: boolean; // slow rotation of rays
  strokeWidth?: number;
}

export function SunMark({
  size = 48,
  className = '',
  color = 'currentColor',
  rotate = false,
  strokeWidth = 1.5,
}: SunMarkProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Rotating Sun Rays (Layer 1) */}
        <g
          className={rotate ? 'animate-spin-slow origin-center' : ''}
          style={{ transformOrigin: '32px 32px' }}
        >
          {/* 12 Radiant geometric rays radiating from center */}
          <line x1="32" y1="8" x2="32" y2="15" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="32" y1="49" x2="32" y2="56" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="8" y1="32" x2="15" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="49" y1="32" x2="56" y2="32" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />

          <line x1="15.03" y1="15.03" x2="19.98" y2="19.98" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="44.02" y1="44.02" x2="48.97" y2="48.97" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="15.03" y1="48.97" x2="19.98" y2="44.02" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
          <line x1="44.02" y1="19.98" x2="48.97" y2="15.03" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />

          {/* Intermediate fine rays */}
          <line x1="23.22" y1="10.88" x2="25.54" y2="16.51" stroke={color} strokeWidth={strokeWidth * 0.8} />
          <line x1="40.78" y1="10.88" x2="38.46" y2="16.51" stroke={color} strokeWidth={strokeWidth * 0.8} />
          <line x1="10.88" y1="23.22" x2="16.51" y2="25.54" stroke={color} strokeWidth={strokeWidth * 0.8} />
          <line x1="10.88" y1="40.78" x2="16.51" y2="38.46" stroke={color} strokeWidth={strokeWidth * 0.8} />
          <line x1="53.12" y1="23.22" x2="47.49" y2="25.54" stroke={color} strokeWidth={strokeWidth * 0.8} />
          <line x1="53.12" y1="40.78" x2="47.49" y2="38.46" stroke={color} strokeWidth={strokeWidth * 0.8} />
          <line x1="23.22" y1="53.12" x2="25.54" y2="47.49" stroke={color} strokeWidth={strokeWidth * 0.8} />
          <line x1="40.78" y1="53.12" x2="38.46" y2="47.49" stroke={color} strokeWidth={strokeWidth * 0.8} />
        </g>

        {/* Stable Center: Sun Disc and Mountain Peaks (Layer 2) */}
        {/* Inner concentric ring */}
        <circle cx="32" cy="32" r="11" stroke={color} strokeWidth={strokeWidth} fill="none" />
        {/* Solid Sun Core */}
        <circle cx="32" cy="27" r="4.5" fill={color} />

        {/* Crisp Geometric Mountain Ridge / Aravali Hills */}
        <path
          d="M21 39L28 29L35 39L43 31"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Horizon Baseline */}
        <line x1="21" y1="39" x2="43" y2="39" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
      </svg>
    </div>
  );
}
