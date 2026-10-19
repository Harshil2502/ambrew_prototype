'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { BotanicalBand } from '../brand/BotanicalBand';
import { CoffeeBagIllustration } from '../brand/CoffeeBagIllustration';
import { SunMark } from '../brand/SunMark';
import { useCart } from '../context/CartContext';

export function HeroSection() {
  const { addItem } = useCart();
  const shouldReduceMotion = useReducedMotion();
  const [canAnimate, setCanAnimate] = React.useState(false);

  React.useEffect(() => {
    // If reduced motion requested or preloader was already skipped, animate immediately
    if (shouldReduceMotion) {
      setCanAnimate(true);
      return;
    }

    try {
      const isSkipped =
        typeof document !== 'undefined' &&
        (document.documentElement.classList.contains('preloader-skipped') ||
          (sessionStorage.getItem('ambrew_preloader_seen') && !window.location.search.includes('preloader=1')));
      if (isSkipped) {
        setCanAnimate(true);
        return;
      }
    } catch (e) {
      setCanAnimate(true);
      return;
    }

    // Listen for custom event from Preloader when curtain begins lifting
    const handleReveal = () => setCanAnimate(true);
    window.addEventListener('ambrew:hero-enter', handleReveal, { once: true });

    // Fallback timer ensures hero is never stuck invisible
    const fallbackTimer = setTimeout(() => setCanAnimate(true), 3200);

    return () => {
      window.removeEventListener('ambrew:hero-enter', handleReveal);
      clearTimeout(fallbackTimer);
    };
  }, [shouldReduceMotion]);

  return (
    <section className="relative bg-cream border-b border-brown/15 overflow-hidden">
      {/* Mobile: Top botanical strip */}
      {/* <div className="lg:hidden h-14 w-full"> */}
        <BotanicalBand orientation="horizontal" className="h-full w-full" />
      {/* </div> */}

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[720px]">
        {/* Left Editorial Area (7 cols on desktop) */}
        <motion.div
          className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          animate={canAnimate ? { opacity: 1, y: 0 } : shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top metadata label (Only allowed eyebrow in the site) */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-rust" aria-hidden="true" />
            <span className="font-sans text-xs font-bold tracking-editorial uppercase text-rust">
              EST. JAIPUR · ARTISAN COFFEE ROASTERS
            </span>
          </div>

          {/* Main Headline & Calm Statement */}
          <div className="my-4 lg:my-8 max-w-xl">
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw+1rem,5.5rem)] font-bold text-brown leading-[1.02] tracking-tight">
              Every morning deserves a sunrise.
            </h1>
            <p className="font-sans text-base sm:text-lg text-brown/85 leading-relaxed mt-6 max-w-[56ch]">
              We roast single-origin arabicas and seasonal microlots in Jaipur, honoring the slow craft of the harvest and the quiet dignity of your morning cup.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="#collection"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-rust text-cream font-sans text-xs font-semibold tracking-editorial uppercase hover:bg-brown transition-colors duration-200 rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
              >
                Explore The Roasts
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center gap-2 text-brown hover:text-rust font-sans text-xs font-semibold tracking-editorial uppercase py-3 border-b border-brown/30 hover:border-rust transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
              >
                <span>Read Our Journal</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Bottom Footnote details */}
          <div className="pt-6 border-t border-brown/15 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-brown/75">
            <div className="flex items-center gap-2">
              <SunMark size={20} color="#C44514" rotate />
              <span>Small-batch drum roasting in Jaipur</span>
            </div>
            <span className="font-sans text-xs text-brown/60">Jaipur, Rajasthan · 302001</span>
          </div>
        </motion.div>

        {/* Right Botanical Line-Art Side Panel (5 cols on desktop) */}
        <div className="lg:col-span-5 relative bg-rust border-t lg:border-t-0 lg:border-l border-brown/20 flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden min-h-[480px]">
          {/* Detailed SVG Botanical Band Side Panel */}
          <div className="absolute inset-0 pointer-events-none opacity-85">
            <BotanicalBand orientation="vertical" className="w-full h-full" />
          </div>

          {/* Hero Featured Coffee Bag (Visibly dominant focal point) */}
          <motion.div
            className="relative z-10 flex flex-col items-center text-center"
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            animate={canAnimate ? { opacity: 1, scale: 1 } : shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
              <CoffeeBagIllustration
                size="hero"
                variant="cream"
                iconType="sun"
                productName="Araku Valley Honey"
                origin="Eastern Ghats · Small batch roasted"
                roastName="Medium Roast"
                weight="250g"
              />
            </div>

            {/* Quick Add Under Hero Bag */}
            <div className="mt-6 flex flex-col items-center space-y-2">
              <button
                type="button"
                onClick={() =>
                  addItem({
                    id: 'araku-valley-honey',
                    name: 'Araku Valley Honey',
                    size: '250g',
                    price: 540,
                    bagColor: 'cream',
                  })
                }
                className="px-6 py-2.5 bg-cream hover:bg-cream-paper text-rust font-sans text-xs font-bold tracking-editorial uppercase transition-colors duration-150 rounded-[2px] border border-cream focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cream"
              >
                Add Araku Valley Honey · ₹540
              </button>
              <span className="text-xs text-cream/90 font-sans tracking-wide">
                Notes: Dark cocoa, orange peel, long caramel finish
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
