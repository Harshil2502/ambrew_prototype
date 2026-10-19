import React from 'react';

interface BotanicalBandProps {
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

/**
 * BotanicalBand recreates the rust-orange letterhead botanical band:
 * Flat rust-orange background with fine cream botanical coffee branch line art:
 * coffee branches, cherry clusters, veined leaves, and floating coffee beans.
 */
export function BotanicalBand({
  className = '',
  orientation = 'vertical',
}: BotanicalBandProps) {
  const isVertical = orientation === 'vertical';

  return (
    <>
       {isVertical ? ( <div
      className={`relative bg-rust overflow-hidden ${className}`}
      aria-hidden="true"
    >

        <svg
          className="w-full h-full object-cover"
          viewBox="0 0 200 1000"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hairline Edge Guide */}
          <line
            x1="0.5"
            y1="0"
            x2="0.5"
            y2="1000"
            stroke="#F5EEE4"
            strokeOpacity="0.3"
            strokeWidth="1"
          />

          <g stroke="#F5EEE4" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
            {/* Main organic stem */}
            <path
              d="M 100,0 C 90,80 120,160 95,240 C 70,320 115,400 90,480 C 65,560 110,640 85,720 C 60,800 105,880 80,960 C 75,980 78,1000 80,1000"
              strokeWidth="2"
            />
            {/* Secondary twig offshoots */}
            <path d="M 97,110 Q 60,130 35,160" strokeWidth="1.2" />
            <path d="M 96,240 Q 140,260 170,290" strokeWidth="1.2" />
            <path d="M 92,470 Q 50,490 25,520" strokeWidth="1.2" />
            <path d="M 87,710 Q 130,730 165,765" strokeWidth="1.2" />

            {/* NODE 1: y ~ 110 - Cherry Cluster & Veined Leaves */}
            {/* Left Leaf */}
            <path d="M 95,110 C 60,80 25,100 15,135 C 38,140 70,132 95,115" fill="#C44514" />
            <path d="M 95,110 Q 55,115 15,135" strokeWidth="1" />
            <path d="M 75,112 Q 60,102 45,100 M 55,116 Q 42,110 32,112 M 38,124 Q 28,122 22,126" strokeWidth="0.75" opacity="0.7" />
            <path d="M 80,115 Q 70,128 55,132 M 60,121 Q 50,133 38,135" strokeWidth="0.75" opacity="0.7" />

            {/* Right Leaf */}
            <path d="M 98,112 C 130,85 165,105 180,140 C 155,142 125,132 98,118" fill="#C44514" />
            <path d="M 98,112 Q 140,118 180,140" strokeWidth="1" />
            <path d="M 118,114 Q 135,104 150,105 M 138,120 Q 152,112 165,118" strokeWidth="0.75" opacity="0.7" />
            <path d="M 116,118 Q 128,130 142,133 M 135,123 Q 148,132 160,136" strokeWidth="0.75" opacity="0.7" />

            {/* Cherry Cluster 1 (tight grouping with calyx scars) */}
            <circle cx="92" cy="115" r="7.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="92" cy="115" r="2" fill="#F5EEE4" opacity="0.3" />
            <circle cx="106" cy="118" r="8" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="106" cy="118" r="2.2" fill="#F5EEE4" opacity="0.3" />
            <circle cx="98" cy="128" r="7" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="98" cy="128" r="1.8" fill="#F5EEE4" opacity="0.3" />
            <circle cx="86" cy="124" r="6" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />

            {/* Floating Coffee Bean 1 */}
            <g transform="translate(145, 195) rotate(28)">
              <ellipse cx="0" cy="0" rx="7.5" ry="12.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.2" />
              <path d="M 0,-10 C -2,-4 3,4 0,10" stroke="#F5EEE4" strokeWidth="1.1" fill="none" />
            </g>

            {/* NODE 2: y ~ 260 - Large Leaf Pair & Cherries */}
            {/* Top-Right Long Leaf */}
            <path d="M 100,240 C 145,210 185,230 192,275 C 160,270 130,255 100,244" fill="#C44514" />
            <path d="M 100,240 Q 150,245 192,275" strokeWidth="1" />
            <path d="M 125,242 Q 148,230 168,235 M 145,249 Q 165,240 180,250" strokeWidth="0.75" opacity="0.7" />
            <path d="M 122,246 Q 138,260 155,263 M 145,253 Q 160,264 175,268" strokeWidth="0.75" opacity="0.7" />

            {/* Lower-Left Pointed Leaf */}
            <path d="M 92,250 C 50,235 20,265 10,305 C 40,300 70,280 92,255" fill="#C44514" />
            <path d="M 92,250 Q 50,275 10,305" strokeWidth="1" />
            <path d="M 72,258 Q 50,250 35,255 M 52,270 Q 35,268 25,278" strokeWidth="0.75" opacity="0.7" />
            <path d="M 70,264 Q 60,285 45,295 M 50,277 Q 38,293 25,300" strokeWidth="0.75" opacity="0.7" />

            {/* Cherries at node 2 */}
            <circle cx="95" cy="245" r="8" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="106" cy="250" r="7.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="88" cy="255" r="7" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="100" cy="260" r="6.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />

            {/* Floating Bean 2 */}
            <g transform="translate(42, 380) rotate(-35)">
              <ellipse cx="0" cy="0" rx="7" ry="11.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.2" />
              <path d="M 0,-9 C 2,-3 -3,3 0,9" stroke="#F5EEE4" strokeWidth="1.1" fill="none" />
            </g>

            {/* NODE 3: y ~ 490 - Dense Cherry Cluster with Blossom Remnants */}
            <path d="M 90,475 C 50,450 18,480 8,520 C 35,515 65,498 90,480" fill="#C44514" />
            <path d="M 90,475 Q 48,495 8,520" strokeWidth="1" />
            <path d="M 68,482 Q 50,475 35,478 M 50,490 Q 32,488 22,500" strokeWidth="0.75" opacity="0.7" />

            <path d="M 95,480 C 135,460 170,485 182,525 C 155,522 125,505 95,485" fill="#C44514" />
            <path d="M 95,480 Q 140,500 182,525" strokeWidth="1" />
            <path d="M 115,485 Q 135,475 152,480 M 135,495 Q 152,490 168,505" strokeWidth="0.75" opacity="0.7" />

            <circle cx="85" cy="485" r="8" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="98" cy="488" r="8.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="90" cy="498" r="7.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="104" cy="498" r="7" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />

            {/* Floating Bean 3 */}
            <g transform="translate(155, 610) rotate(18)">
              <ellipse cx="0" cy="0" rx="7" ry="12" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.2" />
              <path d="M 0,-9 C -2,-3 2,3 0,9" stroke="#F5EEE4" strokeWidth="1.1" fill="none" />
            </g>

            {/* NODE 4: y ~ 720 - Leaves & Cherries */}
            <path d="M 85,715 C 45,690 15,720 5,760 C 35,755 65,738 85,720" fill="#C44514" />
            <path d="M 85,715 Q 45,735 5,760" strokeWidth="1" />
            <path d="M 65,722 Q 48,715 35,718 M 48,730 Q 30,728 20,740" strokeWidth="0.75" opacity="0.7" />

            <path d="M 90,720 C 130,695 168,720 180,760 C 150,758 120,742 90,725" fill="#C44514" />
            <path d="M 90,720 Q 135,738 180,760" strokeWidth="1" />

            <circle cx="80" cy="725" r="8" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="92" cy="728" r="8" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="86" cy="738" r="7.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />

            {/* Floating Bean 4 */}
            <g transform="translate(38, 850) rotate(-22)">
              <ellipse cx="0" cy="0" rx="7.5" ry="12" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.2" />
              <path d="M 0,-9 C 2,-3 -2,3 0,9" stroke="#F5EEE4" strokeWidth="1.1" fill="none" />
            </g>

            {/* NODE 5: y ~ 920 */}
            <circle cx="78" cy="940" r="7.5" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
            <circle cx="90" cy="945" r="7" fill="#C44514" stroke="#F5EEE4" strokeWidth="1.25" />
          </g>
        </svg>
  
    </div>    ) : (
        /* Horizontal Botanical Strip (viewBox: 1000 100) */
      <> </>
      )}
    </>
  );
}

