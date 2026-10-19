import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BrandLogoProps {
  className?: string;
  theme?: 'cream' | 'rust';
  size?: 'sm' | 'md' | 'lg';
}

export function BrandLogo({
  className = '',
  theme = 'cream',
  size = 'md',
}: BrandLogoProps) {
  const isRustTheme = theme === 'rust';

  const logoHeights = {
    sm: 'h-10',
    md: 'h-16',
    lg: 'h-20',
  }[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${className}`}
      aria-label="Ambrew Coffee Roasters - Return to Homepage"
    >
      <div className={`relative flex items-center ${logoHeights}`}>
        <Image
          src={isRustTheme ? '/brand/logo-cream.png' : '/brand/logo.png'}
          alt="Ambrew Coffee Roasters"
          width={160}
          height={160}
          priority
          className={`${logoHeights} w-auto object-contain group-hover:opacity-90 transition-opacity`}
        />
      </div>
    </Link>
  );
}
