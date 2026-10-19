'use client';

import React, { useState } from 'react';
import { BREW_METHODS, BrewMethod } from '../../data/brewMethods';
import { BoxedBrewIcon } from '../brand/BoxedBrewIcon';
import { BotanicalBand } from '../brand/BotanicalBand';

export function BrewGuideSection() {
  const [activeMethodId, setActiveMethodId] = useState<string | null>(BREW_METHODS[0].id);

  return (
    <section id="brew-guide" className="bg-rust text-cream py-24 select-none relative overflow-hidden">
      {/* Thin Botanical Line Art Repeat Strip at Top of Brew Guide */}
      <div className="h-6 w-full opacity-35 mb-12">
        <BotanicalBand orientation="horizontal" className="h-full w-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Stand-alone heading without eyebrow label + line */}
        <div className="max-w-3xl mb-14">
          <span className="sr-only">Extraction & Method Guide</span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight tracking-tight">
            Extraction & Method Guide
          </h2>
          <p className="font-sans text-base sm:text-lg text-cream/85 mt-4 leading-relaxed max-w-[60ch]">
            Recommended brew ratios, water temperatures, and grind settings for each vessel. Select any method to reveal the roaster’s extraction advice.
          </p>
        </div>

        {/* Index-Style List with Thin Dividers and Boxed Line Icons */}
        <div className="border-t border-b border-cream/25 divide-y divide-cream/20">
          {BREW_METHODS.map((method: BrewMethod) => {
            const isHoveredOrActive = activeMethodId === method.id;

            return (
              <div
                key={method.id}
                onMouseEnter={() => setActiveMethodId(method.id)}
                onClick={() => setActiveMethodId(method.id)}
                tabIndex={0}
                onFocus={() => setActiveMethodId(method.id)}
                className={`group py-6 sm:py-7 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:bg-rust-dark/60 ${
                  isHoveredOrActive ? 'bg-rust-dark/50' : 'hover:bg-rust-dark/30'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center">
                  {/* Left: Boxed Line Icon + Method Name (No micro-numbers) */}
                  <div className="lg:col-span-6 flex items-center gap-4 sm:gap-6 px-4">
                    <BoxedBrewIcon
                      type={method.icon}
                      size={44}
                      theme="rust-bg"
                      className="group-hover:scale-105 transition-transform duration-200"
                    />

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-cream group-hover:text-peach transition-colors">
                        {method.name}
                      </h3>
                      {/* Mobile Tip Reveal */}
                      <p className="lg:hidden text-xs text-cream/90 font-sans mt-2 italic leading-relaxed">
                        Tip: {method.tip}
                      </p>
                    </div>
                  </div>

                  {/* Middle: Method Parameters (Ratio, Grind, Time) in Clean Sans */}
                  <div className="lg:col-span-4 grid grid-cols-3 gap-3 text-xs font-sans text-cream/85 border-t lg:border-t-0 border-cream/15 pt-3 lg:pt-0">
                    <div>
                      <span className="block text-xs uppercase tracking-caps text-cream/70 font-semibold">
                        Ratio
                      </span>
                      <span className="font-sans text-sm text-cream font-medium mt-0.5 block">
                        {method.ratio}
                      </span>
                    </div>

                    <div>
                      <span className="block text-xs uppercase tracking-caps text-cream/70 font-semibold">
                        Grind
                      </span>
                      <span className="font-sans text-sm text-cream font-medium mt-0.5 block truncate">
                        {method.grind}
                      </span>
                    </div>

                    <div>
                      <span className="block text-xs uppercase tracking-caps text-cream/70 font-semibold">
                        Time
                      </span>
                      <span className="font-sans text-sm text-cream font-medium mt-0.5 block">
                        {method.brewTime}
                      </span>
                    </div>
                  </div>

                  {/* Right: Temp Badge in Clean Sans */}
                  <div className="lg:col-span-2 hidden lg:flex justify-end items-center">
                    <span className="font-sans text-xs font-semibold px-3 py-1.5 border border-cream/30 text-cream/95 rounded-[2px]">
                      {method.waterTemp}
                    </span>
                  </div>
                </div>

                {/* Desktop Roaster Tip (Revealed on active/hover) */}
                <div
                  className={`hidden lg:block overflow-hidden transition-all duration-300 ${
                    isHoveredOrActive ? 'max-h-24 opacity-100 mt-4 pt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="flex items-start gap-3 bg-rust/70 px-4 py-3 border-l-2 border-peach max-w-4xl">
                    <span className="font-sans text-xs font-bold uppercase tracking-caps text-peach shrink-0 pt-0.5">
                      Roaster’s Tip:
                    </span>
                    <p className="font-sans text-sm text-cream/95 italic leading-relaxed">
                      {method.tip}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
