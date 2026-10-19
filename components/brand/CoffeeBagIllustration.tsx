import React from 'react';

export type CoffeeBagVariant = 'cream' | 'rust' | 'peach' | 'brown';
export type CoffeeIconType = 'sun' | 'mountain' | 'leaf' | 'bean';

interface CoffeeBagProps {
  variant?: CoffeeBagVariant;
  iconType?: CoffeeIconType;
  productName?: string;
  origin?: string;
  roastName?: string;
  className?: string;
  weight?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

export function CoffeeBagIllustration({
  variant = 'cream',
  iconType = 'sun',
  productName = 'Araku Valley Honey',
  origin = 'Small batch roasted · Jaipur',
  roastName = 'Medium Roast',
  className = '',
  weight = '250g',
  size = 'md',
}: CoffeeBagProps) {
  // Color palette per variant
  const palette = {
    cream: {
      bagBg: '#F5EEE4',
      sealBg: '#EDE4D6',
      gussetBg: '#E8DCCC',
      border: '#5A2410',
      labelBg: '#EDE4D6',
      labelBorder: '#C44514',
      textMain: '#5A2410',
      textAccent: '#C44514',
      iconStroke: '#C44514',
    },
    rust: {
      bagBg: '#C44514',
      sealBg: '#A6370D',
      gussetBg: '#A6370D',
      border: '#5A2410',
      labelBg: '#F5EEE4',
      labelBorder: '#5A2410',
      textMain: '#5A2410',
      textAccent: '#C44514',
      iconStroke: '#C44514',
    },
    peach: {
      bagBg: '#EBCBB8',
      sealBg: '#E0BBA8',
      gussetBg: '#D8B09C',
      border: '#5A2410',
      labelBg: '#F5EEE4',
      labelBorder: '#5A2410',
      textMain: '#5A2410',
      textAccent: '#5A2410',
      iconStroke: '#5A2410',
    },
    brown: {
      bagBg: '#5A2410',
      sealBg: '#481C0C',
      gussetBg: '#481C0C',
      border: '#C44514',
      labelBg: '#F5EEE4',
      labelBorder: '#C44514',
      textMain: '#5A2410',
      textAccent: '#C44514',
      iconStroke: '#C44514',
    },
  }[variant] || {
    bagBg: '#F5EEE4',
    sealBg: '#EDE4D6',
    gussetBg: '#E8DCCC',
    border: '#5A2410',
    labelBg: '#EDE4D6',
    labelBorder: '#C44514',
    textMain: '#5A2410',
    textAccent: '#C44514',
    iconStroke: '#C44514',
  };

  const dimensions = {
    sm: { w: 130, h: 185 },
    md: { w: 200, h: 280 },
    lg: { w: 260, h: 360 },
    hero: { w: 320, h: 440 },
  }[size];

  // Auto-detect icon type from product name if default
  let effectiveIcon: CoffeeIconType = iconType;
  if (productName.includes('Malabar')) effectiveIcon = 'mountain';
  else if (productName.includes('Ratnagiri') || productName.includes('Peaberry')) effectiveIcon = 'leaf';
  else if (productName.includes('Sunrise') || productName.includes('Blend')) effectiveIcon = 'bean';
  else if (productName.includes('Araku')) effectiveIcon = 'sun';

  return (
    <div
      className={`relative inline-block select-none filter transition-transform duration-300 max-w-full ${className}`}
      style={{
        width: dimensions.w,
        maxWidth: '100%',
        height: 'auto',
        aspectRatio: `${dimensions.w}/${dimensions.h}`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 320 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-full drop-shadow-none"
      >
        {/* Coffee Bag Silhouette: Stand-up pouch with side gussets */}
        {/* Left Gusset */}
        <polygon
          points="40,65 55,80 50,410 32,400"
          fill={palette.gussetBg}
          stroke={palette.border}
          strokeWidth="1.25"
        />

        {/* Right Gusset */}
        <polygon
          points="280,65 265,80 270,410 288,400"
          fill={palette.gussetBg}
          stroke={palette.border}
          strokeWidth="1.25"
        />

        {/* Main Front Body */}
        <path
          d="M 55,80 L 265,80 L 270,410 L 50,410 Z"
          fill={palette.bagBg}
          stroke={palette.border}
          strokeWidth="1.25"
        />

        {/* Top Heat-Sealed Header */}
        <rect
          x="32"
          y="35"
          width="256"
          height="32"
          rx="1"
          fill={palette.sealBg}
          stroke={palette.border}
          strokeWidth="1.25"
        />
        {/* Heat-seal rib lines */}
        <line x1="42" y1="43" x2="278" y2="43" stroke={palette.border} strokeOpacity="0.25" strokeWidth="1" />
        <line x1="42" y1="51" x2="278" y2="51" stroke={palette.border} strokeOpacity="0.25" strokeWidth="1" />
        <line x1="42" y1="59" x2="278" y2="59" stroke={palette.border} strokeOpacity="0.25" strokeWidth="1" />

        {/* Tear notches */}
        <polygon points="32,48 37,51 32,54" fill={palette.border} />
        <polygon points="288,48 283,51 288,54" fill={palette.border} />

        {/* Top Fold Crease Line */}
        <line x1="55" y1="80" x2="265" y2="80" stroke={palette.border} strokeWidth="1" strokeOpacity="0.4" />

        {/* Degassing Valve (Aroma lock circle) */}
        <circle
          cx="160"
          cy="112"
          r="8"
          stroke={palette.border}
          strokeWidth="1"
          strokeOpacity="0.4"
          fill={palette.bagBg}
        />
        <circle cx="160" cy="112" r="2.5" fill={palette.border} fillOpacity="0.5" />
        <circle cx="156.5" cy="112" r="0.75" fill={palette.border} fillOpacity="0.7" />
        <circle cx="163.5" cy="112" r="0.75" fill={palette.border} fillOpacity="0.7" />

        {/* DISTINCT LABEL LAYOUT PER COFFEE */}

        {/* 1. SUN LABEL LAYOUT (Araku Valley Honey): Classic vertical with notched frame & sun mark */}
        {effectiveIcon === 'sun' && (
          <g transform="translate(68, 140)">
            <rect
              x="0"
              y="0"
              width="184"
              height="225"
              rx="2"
              fill={palette.labelBg}
              stroke={palette.border}
              strokeWidth="1"
            />
            {/* Notched inner border */}
            <polygon
              points="10,6 174,6 178,10 178,215 174,219 10,219 6,215 6,10"
              fill="none"
              stroke={palette.labelBorder}
              strokeWidth="0.8"
            />

            {/* Sun Emblem */}
            <g transform="translate(92, 42)">
              <circle cx="0" cy="0" r="14" stroke={palette.iconStroke} strokeWidth="1.2" fill="none" />
              <circle cx="0" cy="-2" r="3.5" fill={palette.iconStroke} />
              <path d="M -10 6 L -3 -1 L 3 6 L 10 -1" stroke={palette.iconStroke} strokeWidth="1" strokeLinecap="round" />
              <line x1="0" y1="-19" x2="0" y2="-15" stroke={palette.iconStroke} strokeWidth="1.2" />
              <line x1="-13" y1="-13" x2="-10" y2="-10" stroke={palette.iconStroke} strokeWidth="1.2" />
              <line x1="13" y1="-13" x2="10" y2="-10" stroke={palette.iconStroke} strokeWidth="1.2" />
            </g>

            {/* Brand Wordmark */}
            <text x="92" y="74" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-serif), Georgia, serif" fontSize="13" fontWeight="bold" letterSpacing="2.5">
              AMBREW
            </text>
            <text x="92" y="86" textAnchor="middle" fill={palette.textAccent} fontFamily="var(--font-sans), sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="1.5">
              JAIPUR · ROASTED FRESH
            </text>

            <line x1="25" y1="96" x2="159" y2="96" stroke={palette.labelBorder} strokeOpacity="0.4" strokeWidth="0.75" />

            {/* Product Name */}
            <text x="92" y="118" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-serif), Georgia, serif" fontSize="11.5" fontWeight="600">
              {productName}
            </text>
            <text x="92" y="134" textAnchor="middle" fill={palette.textMain} opacity="0.8" fontFamily="var(--font-sans), sans-serif" fontSize="7" letterSpacing="0.6">
              {origin}
            </text>

            {/* Roast badge */}
            <g transform="translate(37, 148)">
              <rect x="0" y="0" width="110" height="20" rx="1" fill={palette.bagBg} stroke={palette.labelBorder} strokeWidth="0.75" />
              <text x="55" y="13" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-sans), sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="1">
                {roastName.toUpperCase()}
              </text>
            </g>

            <text x="28" y="198" textAnchor="start" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7" letterSpacing="1">
              NET WT. {weight}
            </text>
            <text x="156" y="198" textAnchor="end" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7" letterSpacing="1">
              100% ARABICA
            </text>
          </g>
        )}

        {/* 2. MOUNTAIN LABEL LAYOUT (Monsoon Malabar AA): Horizontal band with mountain peaks emblem */}
        {effectiveIcon === 'mountain' && (
          <g transform="translate(68, 140)">
            <rect
              x="0"
              y="0"
              width="184"
              height="225"
              rx="2"
              fill={palette.labelBg}
              stroke={palette.border}
              strokeWidth="1"
            />
            {/* Top Rust Block */}
            <rect x="8" y="8" width="168" height="64" fill="#C44514" />
            
            {/* Mountain Peaks Icon in Block */}
            <g transform="translate(92, 38)">
              {/* Dual Mountain Peaks */}
              <polygon points="-30,16 -12,-8 6,16" fill="#F5EEE4" />
              <polygon points="-2,16 16,-14 34,16" fill="#F5EEE4" />
              {/* Peak snow cap lines */}
              <polygon points="-12,-8 -17,0 -12,-2 -7,0" fill="#C44514" />
              <polygon points="16,-14 11,-5 16,-7 21,-5" fill="#C44514" />
              {/* Distant Sun */}
              <circle cx="2" cy="-12" r="5" fill="#F5EEE4" />
            </g>
            <text x="92" y="64" textAnchor="middle" fill="#F5EEE4" fontFamily="var(--font-serif), Georgia, serif" fontSize="10" fontWeight="bold" letterSpacing="2">
              AMBREW
            </text>

            {/* Product Name */}
            <text x="92" y="102" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-serif), Georgia, serif" fontSize="12" fontWeight="bold">
              {productName}
            </text>
            <text x="92" y="118" textAnchor="middle" fill={palette.textAccent} fontFamily="var(--font-sans), sans-serif" fontSize="7" fontWeight="600" letterSpacing="1">
              MALABAR COAST · AGED MONSOON LOT
            </text>

            <line x1="20" y1="130" x2="164" y2="130" stroke={palette.border} strokeOpacity="0.25" strokeWidth="0.75" />

            <text x="92" y="148" textAnchor="middle" fill={palette.textMain} opacity="0.85" fontFamily="var(--font-sans), sans-serif" fontSize="7" letterSpacing="0.5">
              {origin}
            </text>

            {/* Horizontal pill badge */}
            <g transform="translate(32, 162)">
              <rect x="0" y="0" width="120" height="20" fill="transparent" stroke={palette.border} strokeWidth="0.8" />
              <text x="60" y="13" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-sans), sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="1">
                {roastName.toUpperCase()}
              </text>
            </g>

            <text x="24" y="206" textAnchor="start" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              {weight}
            </text>
            <text x="160" y="206" textAnchor="end" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              MONSOONED
            </text>
          </g>
        )}

        {/* 3. LEAF LABEL LAYOUT (Ratnagiri Peaberry): Elegant botanical frame with leaf icon */}
        {effectiveIcon === 'leaf' && (
          <g transform="translate(68, 140)">
            <rect
              x="0"
              y="0"
              width="184"
              height="225"
              rx="2"
              fill={palette.labelBg}
              stroke={palette.border}
              strokeWidth="1"
            />
            {/* Oval Inner Frame */}
            <ellipse cx="92" cy="112" rx="82" ry="102" fill="none" stroke={palette.labelBorder} strokeWidth="0.8" strokeDasharray="3 2" />

            {/* Coffee Leaf Botanical Glyph */}
            <g transform="translate(92, 40)">
              {/* Branch */}
              <path d="M 0,-18 Q 4,0 0,18" stroke={palette.iconStroke} strokeWidth="1.2" fill="none" strokeLinecap="round" />
              {/* Left Leaf */}
              <path d="M 0,-6 C -12,-12 -16,2 0,6" fill={palette.bagBg} stroke={palette.iconStroke} strokeWidth="1" />
              {/* Right Leaf */}
              <path d="M 0,2 C 12,-4 16,10 0,14" fill={palette.bagBg} stroke={palette.iconStroke} strokeWidth="1" />
              {/* Small Berry */}
              <circle cx="2" cy="-7" r="3" fill="#C44514" />
            </g>

            <text x="92" y="76" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-serif), Georgia, serif" fontSize="12" fontWeight="bold" letterSpacing="2">
              AMBREW
            </text>
            <text x="92" y="88" textAnchor="middle" fill={palette.textAccent} fontFamily="var(--font-sans), sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="1">
              MICROLOT SELECTION
            </text>

            <line x1="45" y1="98" x2="139" y2="98" stroke={palette.border} strokeOpacity="0.3" strokeWidth="0.75" />

            <text x="92" y="118" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-serif), Georgia, serif" fontSize="11" fontWeight="bold">
              {productName}
            </text>
            <text x="92" y="132" textAnchor="middle" fill={palette.textMain} opacity="0.8" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              {origin}
            </text>

            <g transform="translate(37, 146)">
              <rect x="0" y="0" width="110" height="20" rx="10" fill={palette.bagBg} stroke={palette.border} strokeWidth="0.8" />
              <text x="55" y="13" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-sans), sans-serif" fontSize="7" fontWeight="600" letterSpacing="1">
                {roastName.toUpperCase()}
              </text>
            </g>

            <text x="32" y="196" textAnchor="start" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              {weight}
            </text>
            <text x="152" y="196" textAnchor="end" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              PEABERRY
            </text>
          </g>
        )}

        {/* 4. BEAN LABEL LAYOUT (Jaipur Sunrise Blend): Modern centered label with bold bean badge */}
        {effectiveIcon === 'bean' && (
          <g transform="translate(68, 140)">
            <rect
              x="0"
              y="0"
              width="184"
              height="225"
              rx="2"
              fill={palette.labelBg}
              stroke={palette.border}
              strokeWidth="1"
            />
            {/* Top Border Accent */}
            <rect x="0" y="0" width="184" height="8" fill="#C44514" />

            {/* Coffee Bean Glyph */}
            <g transform="translate(92, 42)">
              <ellipse cx="0" cy="0" rx="14" ry="18" fill="#C44514" />
              <path d="M 0,-14 C -3,-6 3,6 0,14" stroke="#F5EEE4" strokeWidth="1.8" fill="none" strokeLinecap="round" />
            </g>

            <text x="92" y="80" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-serif), Georgia, serif" fontSize="13" fontWeight="bold" letterSpacing="2.5">
              AMBREW
            </text>
            <text x="92" y="92" textAnchor="middle" fill={palette.textAccent} fontFamily="var(--font-sans), sans-serif" fontSize="6.5" fontWeight="600" letterSpacing="1.5">
              JAIPUR ROASTERY BLEND
            </text>

            <line x1="25" y1="102" x2="159" y2="102" stroke={palette.labelBorder} strokeOpacity="0.4" strokeWidth="0.75" />

            <text x="92" y="124" textAnchor="middle" fill={palette.textMain} fontFamily="var(--font-serif), Georgia, serif" fontSize="11.5" fontWeight="600">
              {productName}
            </text>
            <text x="92" y="138" textAnchor="middle" fill={palette.textMain} opacity="0.8" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              {origin}
            </text>

            <g transform="translate(37, 150)">
              <rect x="0" y="0" width="110" height="20" rx="1" fill="#5A2410" />
              <text x="55" y="13" textAnchor="middle" fill="#F5EEE4" fontFamily="var(--font-sans), sans-serif" fontSize="7.5" fontWeight="600" letterSpacing="1">
                {roastName.toUpperCase()}
              </text>
            </g>

            <text x="28" y="200" textAnchor="start" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              NET WT. {weight}
            </text>
            <text x="156" y="200" textAnchor="end" fill={palette.textMain} opacity="0.75" fontFamily="var(--font-sans), sans-serif" fontSize="7">
              HOUSE ROAST
            </text>
          </g>
        )}

        {/* Bottom Stand Pouch Crease Line */}
        <path
          d="M 50,410 Q 160,422 270,410"
          stroke={palette.border}
          strokeWidth="1.25"
          fill="none"
        />
      </svg>
    </div>
  );
}
