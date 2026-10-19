'use client';

import React, { useRef, useState, useEffect } from 'react';

interface NotchedFrameProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
  notchSize?: number; // corner chamfer size in px, e.g. 12
  as?: React.ElementType;
}

/**
 * NotchedFrame replicates the signature Ambrew business card frame:
 * 1px hairline border with architectural notched/chamfered 45-degree corners.
 * Uses dynamic SVG pathing measured via ResizeObserver and CSS polygon clipping.
 */
export function NotchedFrame({
  children,
  className = '',
  borderColor = '#C44514',
  notchSize = 12,
  as: Component = 'div',
}: NotchedFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<{ w: number; h: number }>({ w: 0, h: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDims({ w: Math.round(rect.width), h: Math.round(rect.height) });
      }
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const n = notchSize;
  const { w, h } = dims;

  // CSS polygon clip-path gives the precise chamfered silhouette
  const clipPathStyle = {
    clipPath: `polygon(${n}px 0, calc(100% - ${n}px) 0, 100% ${n}px, 100% calc(100% - ${n}px), calc(100% - ${n}px) 100%, ${n}px 100%, 0 calc(100% - ${n}px), 0 ${n}px)`,
  };

  // Valid SVG path coordinates (no CSS calc() in SVG attributes):
  const pathD =
    w > 0 && h > 0
      ? `M ${n} 0.5 L ${w - n} 0.5 L ${w - 0.5} ${n} L ${w - 0.5} ${h - n} L ${w - n} ${h - 0.5} L ${n} ${h - 0.5} L 0.5 ${h - n} L 0.5 ${n} Z`
      : '';

  return (
    <Component
      ref={containerRef}
      className={`relative ${className}`}
      style={clipPathStyle}
    >
      {/* 1px Hairline SVG Border */}
      {w > 0 && h > 0 && (
        <svg
          className="absolute inset-0 pointer-events-none w-full h-full"
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          style={{ zIndex: 20 }}
          aria-hidden="true"
        >
          <path
            d={pathD}
            fill="none"
            stroke={borderColor}
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </Component>
  );
}
