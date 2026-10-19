'use client';

import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { GiftBoxIllustration } from '../brand/GiftBoxIllustration';
import { NotchedFrame } from '../ui/NotchedFrame';
import { useCart } from '../context/CartContext';

export function GiftBoxSection() {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleAddGiftBox = () => {
    addItem({
      id: 'ambrew-brewing-gift-box',
      name: 'The Jaipur Brewing Gift Chest',
      size: 'Box Set',
      price: 2450,
      bagColor: 'rust',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="gift-box" className="bg-peach border-b border-brown/15 py-36 sm:py-44 lg:py-48">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Dominant Gift Box Vector Illustration inside signature NotchedFrame (7 cols) */}
          <motion.div
            className="lg:col-span-7"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <NotchedFrame
              notchSize={16}
              borderColor="#C44514"
              className="bg-cream/90 p-8 sm:p-12 border border-brown/15 flex items-center justify-center"
            >
              <GiftBoxIllustration className="w-full max-w-lg" />
            </NotchedFrame>
          </motion.div>

          {/* Right: Copy, Price, CTA (5 cols) */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Standalone Heading (No eyebrow line) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown leading-tight tracking-tight">
              The Jaipur Brewing Gift Chest
            </h2>

            <p className="font-sans text-base sm:text-lg text-brown/85 mt-6 leading-relaxed max-w-[60ch]">
              Curated for thoughtful morning gifting. Includes two 250g harvest bags (Araku Valley Honey and Monsoon Malabar AA), a traditional solid brass South Indian filter, and our roastery cupping booklet.
            </p>

            {/* Contents List */}
            <div className="mt-8 pt-6 border-t border-brown/15 space-y-3 text-xs sm:text-sm font-sans text-brown/80">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-rust rounded-none" />
                <span>2 × 250g Fresh Harvest Coffee Bags</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-rust rounded-none" />
                <span>Heavy-gauge Pure Brass Decoction Filter</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-rust rounded-none" />
                <span>Roastery Journal & Letterpressed Gift Card</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="mt-10 pt-6 border-t border-brown/15 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="font-sans text-xs uppercase tracking-caps text-brown/70 font-semibold block">
                  Complete Set
                </span>
                <span className="font-sans text-3xl font-bold text-brown">
                  ₹2,450
                </span>
              </div>

              <button
                type="button"
                onClick={handleAddGiftBox}
                className={`px-8 py-3.5 text-xs font-sans font-bold tracking-editorial uppercase rounded-[2px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                  added
                    ? 'bg-brown text-cream'
                    : 'bg-rust hover:bg-brown text-cream'
                }`}
              >
                {added ? 'Added to Cart ✓' : '+ Order The Gift Box'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
