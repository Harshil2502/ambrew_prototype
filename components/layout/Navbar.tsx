'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogo } from '../brand/BrandLogo';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { openCart, itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Our Story', href: '#story' },
    { label: 'Brew Guide', href: '#brew-guide' },
    { label: 'Gift Box', href: '#gift-box' },
    { label: 'Subscription', href: '#subscription' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-cream border-b border-brown/15 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo Left: Real logo image, no typed text */}
        <BrandLogo size="md" />

        {/* Navigation Links Center/Right (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center space-x-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-brown/85 hover:text-rust font-sans text-xs font-semibold tracking-editorial uppercase transition-colors duration-150 py-2 border-b border-transparent hover:border-rust focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart Trigger Right */}
        <div className="flex items-center space-x-4">
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open shopping cart, ${itemCount} items`}
            className="group relative inline-flex items-center gap-2.5 px-3.5 py-2 border border-brown/25 hover:border-rust text-brown hover:text-cream hover:bg-rust transition-colors duration-200 text-xs font-sans font-semibold tracking-caps uppercase rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
          >
            <span>Cart</span>
            <span
              className="inline-flex items-center justify-center min-w-[20px] h-[20px] px-1 text-xs font-sans font-bold bg-rust text-cream group-hover:bg-cream group-hover:text-rust transition-colors rounded-[1px]"
            >
              {itemCount}
            </span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-brown hover:text-rust focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-brown/15 bg-cream px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-brown font-sans text-sm font-semibold tracking-editorial uppercase py-2 hover:text-rust focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
