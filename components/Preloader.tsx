'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const PHRASES = [
  'Grinding the beans…',
  'Warming the cup…',
  'Brewing your morning…',
];

export function Preloader() {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(true);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);
  const [pageReady, setPageReady] = useState(false);
  const [exitPhase, setExitPhase] = useState<'idle' | 'cup-fading' | 'curtain-lifting'>('idle');
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    // Check if seen this session, unless forced via ?preloader=1
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const forceReplay = urlParams.get('preloader') === '1';
      const hasSeen = sessionStorage.getItem('ambrew_preloader_seen');

      if (hasSeen && !forceReplay) {
        setIsMounted(false);
        return;
      }
      sessionStorage.setItem('ambrew_preloader_seen', 'true');
    } catch (e) {
      // In case sessionStorage is blocked
    }

    // Lock page scroll while preloader is active
    document.body.style.overflow = 'hidden';

    // Reduced motion shortcut
    if (shouldReduceMotion) {
      const reducedTimer = setTimeout(() => {
        setExitPhase('curtain-lifting');
        setTimeout(() => {
          document.body.style.overflow = '';
          setIsMounted(false);
        }, 300);
      }, 300);
      return () => clearTimeout(reducedTimer);
    }

    // Minimum display timer: ~2.2s
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, 2200);

    // Maximum cap timer: 4.0s
    const maxTimer = setTimeout(() => {
      setMinTimeElapsed(true);
      setPageReady(true);
    }, 4000);

    // Document readiness check (window load + document.fonts.ready)
    const checkReadiness = () => {
      if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setPageReady(true)).catch(() => setPageReady(true));
      } else {
        setPageReady(true);
      }
    };

    if (document.readyState === 'complete') {
      checkReadiness();
    } else {
      window.addEventListener('load', checkReadiness, { once: true });
    }

    // Phrase cycling every ~1.2s
    const phraseInterval = setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % PHRASES.length);
    }, 1200);

    return () => {
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
      clearInterval(phraseInterval);
      document.body.style.overflow = '';
    };
  }, [shouldReduceMotion]);

  // Two-stage exit:
  // Stage 1: Cup slides slightly down and fades (~220ms) against stationary cream screen.
  // Stage 2: Cream screen lifts upward like a curtain (~480ms), revealing hero.
  useEffect(() => {
    if (minTimeElapsed && pageReady && exitPhase === 'idle') {
      if (shouldReduceMotion) {
        setExitPhase('curtain-lifting');
      } else {
        setExitPhase('cup-fading');
        const liftTimer = setTimeout(() => {
          setExitPhase('curtain-lifting');
          if (typeof window !== 'undefined') {
            window.dispatchEvent(new CustomEvent('ambrew:hero-enter'));
          }
        }, 220);
        return () => clearTimeout(liftTimer);
      }
    }
  }, [minTimeElapsed, pageReady, exitPhase, shouldReduceMotion]);

  if (!isMounted) return null;

  return (
    <motion.div
      id="ambrew-preloader"
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-[100] bg-cream flex flex-col items-center justify-center select-none"
      initial={{ y: 0, opacity: 1 }}
      animate={
        exitPhase === 'curtain-lifting'
          ? shouldReduceMotion
            ? { opacity: 0 }
            : { y: '-100%' }
          : { y: 0, opacity: 1 }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : { duration: 0.48, ease: [0.76, 0, 0.24, 1] }
      }
      onAnimationComplete={() => {
        if (exitPhase === 'curtain-lifting') {
          document.body.style.overflow = '';
          setIsMounted(false);
        }
      }}
    >
      <span className="sr-only">Loading Ambrew</span>

      {/* Centered Vector Illustration & Content */}
      <motion.div
        className="flex flex-col items-center text-center px-4"
        animate={exitPhase !== 'idle' && !shouldReduceMotion ? { y: 14, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.22, ease: 'easeOut' }}
      >
        {/* Flat Vector Illustration: Hand-Crafted Pour-over at Sunrise */}
        <div
          className="relative flex items-center justify-center"
          style={{
            width: 'clamp(180px, 32vw, 220px)',
            height: 'clamp(180px, 32vw, 220px)',
          }}
        >
          <svg
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <defs>
              {/* Inner Cup Silhouette ClipPath for Liquid Rise */}
              <clipPath id="cupInnerClip">
                <path d="M 83,118 C 83,149 94,156 110,156 C 126,156 137,149 137,118 Z" />
              </clipPath>
            </defs>

            {/* 1. HALF SUN & RADIANT DAWN RAYS (Echoing Ambrew Sunrise Logo) */}
            <g className="sun-group">
              {/* Peach Half Sun Disc */}
              <path
                d="M 64,120 A 46,46 0 0,1 156,120 Z"
                fill="#EBCBB8"
                opacity="0.92"
              />

              {/* Shimmering Sun Rays with Rounded Caps */}
              <line x1="110" y1="68" x2="110" y2="48" stroke="#C44514" strokeWidth="2" strokeLinecap="round" className="ray-pulse-1" />
              <line x1="92" y1="72" x2="80" y2="56" stroke="#C44514" strokeWidth="2" strokeLinecap="round" className="ray-pulse-2" />
              <line x1="128" y1="72" x2="140" y2="56" stroke="#C44514" strokeWidth="2" strokeLinecap="round" className="ray-pulse-2" />
              <line x1="78" y1="84" x2="62" y2="72" stroke="#C44514" strokeWidth="2" strokeLinecap="round" className="ray-pulse-3" />
              <line x1="142" y1="84" x2="158" y2="72" stroke="#C44514" strokeWidth="2" strokeLinecap="round" className="ray-pulse-3" />
              <line x1="68" y1="102" x2="52" y2="94" stroke="#C44514" strokeWidth="2" strokeLinecap="round" className="ray-pulse-4" />
              <line x1="152" y1="102" x2="168" y2="94" stroke="#C44514" strokeWidth="2" strokeLinecap="round" className="ray-pulse-4" />
            </g>

            {/* 2. ARTISAN POUR-OVER BREW STAND (Grounded on Saucer Base) */}
            <g className="stand-group">
              {/* Brass/Deep-brown support arm rising from saucer right, arching over to hold dripper ring */}
              <path
                d="M 160,164 L 160,84 C 160,78 154,78 140,78 L 132,78"
                stroke="#5A2410"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Stand mounting foot on saucer */}
              <circle cx="160" cy="164" r="3.2" fill="#C44514" stroke="#5A2410" strokeWidth="1.5" />
              {/* Dripper support ring under cone */}
              <line x1="96" y1="82" x2="128" y2="82" stroke="#5A2410" strokeWidth="2.2" strokeLinecap="round" />
            </g>

            {/* 3. CERAMIC CUP & SAUCER */}
            <g className="cup-group">
              {/* Ceramic Saucer Base */}
              <ellipse
                cx="110"
                cy="164"
                rx="50"
                ry="8"
                fill="#EBCBB8"
                stroke="#5A2410"
                strokeWidth="2"
              />
              {/* Inner Saucer Recessed Cup Well */}
              <ellipse
                cx="110"
                cy="163"
                rx="30"
                ry="3.8"
                fill="none"
                stroke="#C44514"
                strokeWidth="1"
                strokeDasharray="3 2"
              />

              {/* Ceramic Cup Handle with sculpted negative space */}
              <path
                d="M 139,122 C 158,122 158,148 136,150 C 138,145 139,140 139,136 C 147,136 147,126 139,126 Z"
                fill="#F5EEE4"
                stroke="#5A2410"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Ceramic Cup Outer Body */}
              <path
                d="M 80,116 C 80,150 92,158 110,158 C 128,158 140,150 140,116 Z"
                fill="#F5EEE4"
                stroke="#5A2410"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Rising Coffee Liquid & Rising Coffee Bean */}
              <g clipPath="url(#cupInnerClip)">
                <g className={shouldReduceMotion ? 'coffee-liquid-full' : 'coffee-liquid-rise'}>
                  {/* Rich Dark Brown Coffee Brew */}
                  <rect
                    x="76"
                    y="114"
                    width="68"
                    height="46"
                    fill="#5A2410"
                  />
                  {/* Golden Crema Surface Line */}
                  <line
                    x1="80"
                    y1="115"
                    x2="140"
                    y2="115"
                    stroke="#C44514"
                    strokeWidth="1.5"
                  />
                  {/* Coffee Bean Bobbing ON the rising liquid surface */}
                  <g
                    transform="translate(110, 117)"
                    className={shouldReduceMotion ? 'coffee-bean-static' : 'coffee-bean-bob'}
                  >
                    <ellipse cx="0" cy="0" rx="4.8" ry="3.2" fill="#C44514" stroke="#5A2410" strokeWidth="0.8" />
                    <path d="M -3,0 Q 0,1.2 3,0" stroke="#F5EEE4" strokeWidth="0.75" fill="none" />
                  </g>
                </g>
              </g>

              {/* Cup Rim Lip Ellipse */}
              <ellipse
                cx="110"
                cy="116"
                rx="30"
                ry="5.5"
                fill="none"
                stroke="#5A2410"
                strokeWidth="2"
              />
            </g>

            {/* 4. POUR-OVER DRIPPER CONE & FILTER (Suspended over cup on stand) */}
            <g className="dripper-group">
              {/* Dripper Spout Tip with opening */}
              <path d="M 107,82 L 113,82 L 111,88 L 109,88 Z" fill="#5A2410" stroke="#5A2410" strokeWidth="1" strokeLinejoin="round" />

              {/* Ceramic V60 Dripper Cone Body */}
              <path
                d="M 80,48 L 140,48 L 117,82 L 103,82 Z"
                fill="#F5EEE4"
                stroke="#5A2410"
                strokeWidth="2"
                strokeLinejoin="round"
              />

              {/* Fluted Spiral Rib Lines on Dripper */}
              <path d="M 88,50 C 92,60 98,72 105,80" stroke="#C44514" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 102,50 C 104,60 106,72 109,80" stroke="#C44514" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 118,50 C 117,60 115,72 113,80" stroke="#C44514" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M 132,50 C 128,60 122,72 117,80" stroke="#C44514" strokeWidth="1.2" strokeLinecap="round" />

              {/* Paper Filter Cone */}
              <polygon
                points="84,48 136,48 110,78"
                fill="#EBCBB8"
                stroke="#C44514"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              {/* Filter Fold Tab */}
              <polygon points="128,44 135,44 134,48 127,48" fill="#EBCBB8" stroke="#C44514" strokeWidth="1" />

              {/* Fresh Blooming Coffee Grounds Bed */}
              <ellipse cx="110" cy="50" rx="23" ry="3.8" fill="#5A2410" />
            </g>

            {/* 5. COFFEE DRIPS & LANDING RIPPLE */}
            {!shouldReduceMotion && (
              <g className="drip-group">
                {/* Single coffee drop falling one at a time from spout to cup */}
                <ellipse
                  cx="110"
                  cy="91"
                  rx="1.75"
                  ry="2.75"
                  fill="#C44514"
                  className="coffee-drop"
                />
                {/* Tiny landing ripple on cup liquid surface */}
                <ellipse
                  cx="110"
                  cy="116"
                  rx="4"
                  ry="1.5"
                  stroke="#C44514"
                  strokeWidth="1"
                  fill="none"
                  className="drip-ripple"
                />
              </g>
            )}

            {/* 6. AROMATIC STEAM WISPS (Rising from blooming filter grounds into morning air) */}
            {!shouldReduceMotion && (
              <g className="steam-group">
                <path
                  d="M 98,44 C 92,32 102,24 96,12"
                  stroke="#C44514"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                  className="steam-line-1"
                />
                <path
                  d="M 110,42 C 116,30 106,20 112,8"
                  stroke="#C44514"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  fill="none"
                  className="steam-line-2"
                />
                <path
                  d="M 122,44 C 116,32 126,22 120,10"
                  stroke="#C44514"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                  className="steam-line-3"
                />
              </g>
            )}
          </svg>
        </div>

        {/* Real Brand Logo Emblem (~120px wide) */}
        <div className="w-[120px] h-[48px] relative my-4 flex items-center justify-center">
          <Image
            src="/brand/logo.png"
            alt="Ambrew Coffee Roasters"
            width={120}
            height={48}
            priority
            className="w-[120px] h-auto object-contain"
          />
        </div>

        {/* Small Serif Italic Text in Brown (14-15px) cycling every ~1.2s */}
        <div className="h-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={phraseIdx}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.3 }}
              className="font-serif italic text-brown text-[15px] tracking-wide"
            >
              {PHRASES[phraseIdx]}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Embedded CSS Keyframes for Restrained Vector Animations */}
      <style jsx global>{`
        /* Ray Pulse Keyframes */
        @keyframes rayPulseAnim {
          0%, 100% { opacity: 0.35; transform: scale(0.97); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        .ray-pulse-1 { animation: rayPulseAnim 2.2s ease-in-out infinite 0s; transform-box: view-box; transform-origin: 110px 120px; }
        .ray-pulse-2 { animation: rayPulseAnim 2.2s ease-in-out infinite 0.32s; transform-box: view-box; transform-origin: 110px 120px; }
        .ray-pulse-3 { animation: rayPulseAnim 2.2s ease-in-out infinite 0.64s; transform-box: view-box; transform-origin: 110px 120px; }
        .ray-pulse-4 { animation: rayPulseAnim 2.2s ease-in-out infinite 0.96s; transform-box: view-box; transform-origin: 110px 120px; }

        /* Coffee Drop Falling Animation (~3 drops per second, smooth ease-in) */
        @keyframes dropAnim {
          0% { transform: translateY(0); opacity: 0; }
          15% { opacity: 1; }
          85% { transform: translateY(22px); opacity: 1; }
          100% { transform: translateY(24px); opacity: 0; }
        }
        .coffee-drop {
          animation: dropAnim 0.34s ease-in infinite;
        }

        /* Landing Ripple on surface */
        @keyframes rippleAnim {
          0% { transform: scale(0.3); opacity: 0; }
          45% { opacity: 0.75; }
          100% { transform: scale(2.0); opacity: 0; }
        }
        .drip-ripple {
          animation: rippleAnim 0.34s ease-out infinite 0.26s;
          transform-box: fill-box;
          transform-origin: center;
        }

        /* Smooth Coffee Liquid Rise (ease-out over 2.2s) */
        @keyframes liquidRiseAnim {
          0% { transform: translateY(42px); }
          100% { transform: translateY(0); }
        }
        .coffee-liquid-rise {
          animation: liquidRiseAnim 2.2s ease-out forwards;
        }
        .coffee-liquid-full {
          transform: translateY(0);
        }

        /* Bobbing Coffee Bean riding surface */
        @keyframes beanBobAnim {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2.2px); }
        }
        .coffee-bean-bob {
          animation: beanBobAnim 1.6s ease-in-out infinite 1.8s;
          transform-box: fill-box;
          transform-origin: center;
        }
        .coffee-bean-static {
          opacity: 1;
        }

        /* Fragrant Steam Wisps Rising */
        @keyframes steamFloatAnim {
          0% { transform: translateY(0) scaleX(0.9); opacity: 0; }
          30% { opacity: 0.75; }
          80% { opacity: 0.35; }
          100% { transform: translateY(-18px) scaleX(1.15); opacity: 0; }
        }
        .steam-line-1 { animation: steamFloatAnim 2.6s ease-in-out infinite 0s; }
        .steam-line-2 { animation: steamFloatAnim 2.6s ease-in-out infinite 0.85s; }
        .steam-line-3 { animation: steamFloatAnim 2.6s ease-in-out infinite 1.7s; }
      `}</style>
    </motion.div>
  );
}
