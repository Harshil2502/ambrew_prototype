import React from 'react';

interface GiftBoxIllustrationProps {
  className?: string;
}

/**
 * GiftBoxIllustration depicts Ambrew's signature rigid gift chest:
 * Crafted in flat vector editorial print style with clean hairlines,
 * containing two 250g coffee bags, brass filter, and tasting guide.
 */
export function GiftBoxIllustration({ className = '' }: GiftBoxIllustrationProps) {
  return (
    <div
      className={`relative inline-block select-none max-w-full ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 520 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Shadow base replaced with 1px hairline footprint border */}
        <polygon
          points="60,280 260,335 460,280 260,230"
          fill="#EDE4D6"
          stroke="#5A2410"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* Rigid Box Base - Outer Walls */}
        {/* Left facet */}
        <polygon
          points="60,200 260,255 260,335 60,280"
          fill="#F5EEE4"
          stroke="#5A2410"
          strokeWidth="1.25"
        />
        {/* Right facet */}
        <polygon
          points="260,255 460,200 460,280 260,335"
          fill="#EDE4D6"
          stroke="#5A2410"
          strokeWidth="1.25"
        />

        {/* Box Interior Chamber (Revealed open box) */}
        <polygon
          points="60,200 260,255 460,200 260,145"
          fill="#5A2410"
          stroke="#5A2410"
          strokeWidth="1.25"
        />

        {/* Hinged Box Lid (Leaning back behind the box) */}
        <polygon
          points="60,200 260,145 260,65 60,120"
          fill="#C44514"
          stroke="#5A2410"
          strokeWidth="1.25"
        />
        <polygon
          points="260,145 460,200 460,120 260,65"
          fill="#A6370D"
          stroke="#5A2410"
          strokeWidth="1.25"
        />

        {/* Ambrew Emblem on Lid interior */}
        <g transform="translate(160, 115) skewY(15)">
          <circle cx="0" cy="0" r="14" stroke="#F5EEE4" strokeWidth="1" fill="none" />
          <circle cx="0" cy="-3" r="3" fill="#F5EEE4" />
          <path d="M -9 6 L -3 -1 L 3 6 L 9 0" stroke="#F5EEE4" strokeWidth="0.8" />
          <text
            x="0"
            y="24"
            textAnchor="middle"
            fill="#F5EEE4"
            fontFamily="Georgia, serif"
            fontSize="7"
            letterSpacing="2"
            fontWeight="bold"
          >
            AMBREW
          </text>
        </g>

        {/* Interior Cushion Compartments */}
        <polygon
          points="75,200 255,250 445,200 260,152"
          fill="#4A1E0D"
        />

        {/* ITEM 1: Left Coffee Bag (Araku Honey - Cream Bag) */}
        <g transform="translate(110, 150)">
          {/* Bag body */}
          <polygon
            points="0,20 65,36 62,110 3,92"
            fill="#F5EEE4"
            stroke="#5A2410"
            strokeWidth="1"
          />
          {/* Header */}
          <polygon
            points="0,8 65,24 65,36 0,20"
            fill="#EDE4D6"
            stroke="#5A2410"
            strokeWidth="1"
          />
          {/* Label */}
          <polygon
            points="8,38 56,50 54,95 6,83"
            fill="#EDE4D6"
            stroke="#C44514"
            strokeWidth="0.75"
          />
          <text
            x="32"
            y="65"
            transform="rotate(14 32 65)"
            textAnchor="middle"
            fill="#5A2410"
            fontFamily="Georgia, serif"
            fontSize="6"
            fontWeight="bold"
          >
            ARAKU
          </text>
        </g>

        {/* ITEM 2: Right Coffee Bag (Monsoon Malabar - Rust Bag) */}
        <g transform="translate(195, 172)">
          {/* Bag body */}
          <polygon
            points="0,18 68,0 68,78 0,96"
            fill="#C44514"
            stroke="#5A2410"
            strokeWidth="1"
          />
          {/* Header */}
          <polygon
            points="0,6 68,-12 68,0 0,18"
            fill="#A6370D"
            stroke="#5A2410"
            strokeWidth="1"
          />
          {/* Label */}
          <polygon
            points="8,32 60,18 60,65 8,79"
            fill="#F5EEE4"
            stroke="#5A2410"
            strokeWidth="0.75"
          />
          <text
            x="34"
            y="52"
            transform="rotate(-15 34 52)"
            textAnchor="middle"
            fill="#5A2410"
            fontFamily="Georgia, serif"
            fontSize="6"
            fontWeight="bold"
          >
            MALABAR
          </text>
        </g>

        {/* ITEM 3: Traditional Brass South Indian Filter */}
        <g transform="translate(320, 160)">
          {/* Davara Saucer */}
          <ellipse cx="40" cy="95" rx="35" ry="12" fill="#EBCBB8" stroke="#5A2410" strokeWidth="1" />
          <ellipse cx="40" cy="92" rx="30" ry="10" fill="#FAF6F0" stroke="#C44514" strokeWidth="0.75" />

          {/* Tumbler Body */}
          <path
            d="M 18,50 L 26,88 C 26,92 54,92 54,88 L 62,50 Z"
            fill="#EBCBB8"
            stroke="#5A2410"
            strokeWidth="1"
          />
          {/* Filter Upper Chamber (Brass Cylindrical Dripper) */}
          <path
            d="M 22,18 L 22,46 C 22,48 58,48 58,46 L 58,18 Z"
            fill="#FAF6F0"
            stroke="#5A2410"
            strokeWidth="1"
          />
          {/* Filter Brass Lid */}
          <ellipse cx="40" cy="18" rx="19" ry="6" fill="#EBCBB8" stroke="#5A2410" strokeWidth="1" />
          {/* Brass Knob */}
          <circle cx="40" cy="14" r="3.5" fill="#C44514" stroke="#5A2410" strokeWidth="0.75" />
        </g>

        {/* ITEM 4: Tasting Notes Booklet / Certificate */}
        <g transform="translate(210, 225)">
          <polygon
            points="0,15 95,-10 115,22 20,47"
            fill="#F5EEE4"
            stroke="#5A2410"
            strokeWidth="1"
          />
          {/* Notched border on card */}
          <polygon
            points="4,16 91,-8 111,21 24,45"
            fill="none"
            stroke="#C44514"
            strokeWidth="0.75"
          />
          <text
            x="58"
            y="20"
            transform="rotate(-14 58 20)"
            textAnchor="middle"
            fill="#5A2410"
            fontFamily="Georgia, serif"
            fontSize="6.5"
            fontWeight="bold"
            letterSpacing="1"
          >
            ROASTER NOTES · 2024
          </text>
        </g>

        {/* Front Box Lip Hairline Accent */}
        <line x1="60" y1="200" x2="260" y2="255" stroke="#C44514" strokeWidth="1" />
        <line x1="260" y1="255" x2="460" y2="200" stroke="#C44514" strokeWidth="1" />
      </svg>
    </div>
  );
}
