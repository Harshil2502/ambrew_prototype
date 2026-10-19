'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { NotchedFrame } from '../ui/NotchedFrame';

export function StorySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="story" className="bg-cream border-b border-brown/15 pt-36 sm:pt-44 lg:pt-48 pb-24 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Split Layout: Wide Editorial Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Dominant Editorial Pull-Quote with NotchedFrame */}
          <motion.div
            className="lg:col-span-5"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <NotchedFrame
              notchSize={14}
              borderColor="#C44514"
              className="bg-cream-paper/70 p-8 sm:p-10 border border-brown/15"
            >
              <blockquote className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.08] text-brown font-semibold tracking-tight">
                “Coffee is not fuel. It is the morning light falling across stone floors, the slow drip of brass, the patience of a harvest.”
              </blockquote>
              <p className="mt-6 font-sans text-xs tracking-caps uppercase text-rust font-bold">
                The Ambrew Roasting Standard
              </p>
            </NotchedFrame>
          </motion.div>

          {/* Right Column: Two Plainer Editorial Paragraphs & Sign-off */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-brown/85 font-sans text-base sm:text-lg leading-relaxed max-w-[60ch]"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>
              We established Ambrew in Jaipur with an unhurried conviction: Indian shade-grown coffee is among the most nuanced in the world, yet too often obscured by commodity dark roasting. We source single-origin beans that carry genuine regional character and harvest integrity.
            </p>
            <p>
              Every batch is roasted in small drums under twelve kilograms, roasted to match the ambient Rajasthan climate, and tasted at the cupping table before sealing. We do not chase volume or seasonal novelty. We roast coffee for people who look forward to the ritual of making it.
            </p>

            {/* Signed like a letter */}
            <div className="pt-8 border-t border-brown/15">
              <p className="font-serif italic text-2xl sm:text-3xl text-brown font-normal">
                Tanishk Kedia & Arohi Taparia
              </p>
              <p className="font-sans text-xs tracking-editorial uppercase text-rust font-semibold mt-1.5">
                Founders & Head Roasters · Jaipur, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Quiet one-line replacement for stats row */}
        <div className="mt-20 pt-8 border-t border-brown/15 text-center">
          <p className="font-serif italic text-base sm:text-lg text-brown/70 max-w-xl mx-auto">
            Single-origin beans, sourced directly and roasted in small batches in Jaipur.
          </p>
        </div>
      </div>
    </section>
  );
}
