'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SunMark } from '../brand/SunMark';
import { BoxedBrewIcon } from '../brand/BoxedBrewIcon';

export function FooterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid roastery dispatch email.');
      return;
    }
    setStatus('success');
    setErrorMessage('');
    setEmail('');
  };

  const handleReplayIntro = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('ambrew_preloader_seen');
      } catch (err) {}
      window.location.href = '/?preloader=1';
    }
  };

  return (
    <footer className="bg-brown text-cream border-t border-brown/40 pt-20 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Newsletter & Roastery Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-cream/15">
          {/* Newsletter (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="sr-only">THE SUNRISE DISPATCH</span>
            <div className="flex items-center gap-3">
              <SunMark size={22} color="#F5EEE4" rotate />
              <span className="font-serif italic text-lg text-cream/90">
                The Sunrise Dispatch
              </span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-cream font-semibold">
              First access to monthly microlots.
            </h3>
            <p className="font-sans text-sm text-cream/75 leading-relaxed max-w-md">
              Twice a month, we share cupping notes, upcoming drum roast schedules, and seasonal microlot releases. No marketing spam.
            </p>

            <form onSubmit={handleSubmitNewsletter} className="mt-4 space-y-2">
              <div className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email address"
                  aria-label="Newsletter email address"
                  className="flex-1 bg-brown/80 border border-cream/30 focus:border-cream focus:ring-1 focus:ring-cream px-4 py-3 text-sm font-sans text-cream placeholder-cream/40 rounded-none focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-rust text-cream font-sans text-xs font-bold tracking-editorial uppercase hover:bg-cream hover:text-brown transition-colors rounded-none border border-rust focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cream"
                >
                  Join
                </button>
              </div>

              {status === 'error' && (
                <p className="text-xs text-peach font-sans font-medium">{errorMessage}</p>
              )}
              {status === 'success' && (
                <p className="text-xs text-cream/90 font-sans font-medium">
                  Thank you. You are enrolled for our next harvest cupping report.
                </p>
              )}
            </form>
          </div>

          {/* Contact Details & Links (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Contact Column */}
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold tracking-caps uppercase text-rust block">
                ROASTERY & CONTACT
              </span>
              <ul className="space-y-2.5 text-sm font-sans text-cream/80 leading-relaxed">
                <li>
                  <a
                    href="mailto:ambrew2002@gmail.com"
                    className="hover:text-peach underline underline-offset-2 transition-colors"
                  >
                    ambrew2002@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/ambrew.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-peach transition-colors"
                  >
                    @ambrew.in
                  </a>
                </li>
                <li>
                  <span className="text-cream/75">+91-9829765556</span>
                </li>
                <li className="pt-2 text-xs text-cream/60">
                  Ambrew Coffee Roasters<br />
                  Jaipur, Rajasthan · 302001
                </li>
              </ul>
            </div>

            {/* Coffees Column */}
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold tracking-caps uppercase text-rust block">
                COFFEES
              </span>
              <ul className="space-y-2.5 text-sm font-sans text-cream/80">
                <li>
                  <Link href="#collection" className="hover:text-peach transition-colors">
                    Araku Valley Honey
                  </Link>
                </li>
                <li>
                  <Link href="#collection" className="hover:text-peach transition-colors">
                    Monsoon Malabar AA
                  </Link>
                </li>
                <li>
                  <Link href="#collection" className="hover:text-peach transition-colors">
                    Ratnagiri Peaberry
                  </Link>
                </li>
                <li>
                  <Link href="#collection" className="hover:text-peach transition-colors">
                    Jaipur Sunrise Blend
                  </Link>
                </li>
                <li>
                  <Link href="#subscription" className="hover:text-peach transition-colors">
                    Recurring Subscriptions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-3">
              <span className="font-sans text-xs font-bold tracking-caps uppercase text-rust block">
                EXPLORE
              </span>
              <ul className="space-y-2.5 text-sm font-sans text-cream/80">
                <li>
                  <Link href="#brew-guide" className="hover:text-peach transition-colors">
                    Extraction Guide
                  </Link>
                </li>
                <li>
                  <Link href="#gift-box" className="hover:text-peach transition-colors">
                    Gift Chest
                  </Link>
                </li>
                <li>
                  <Link href="#story" className="hover:text-peach transition-colors">
                    Our Roastery Story
                  </Link>
                </li>
                <li>
                  <Link href="#platform" className="hover:text-peach transition-colors">
                    Roastery Admin
                  </Link>
                </li>
                <li>
                  {/* <button
                    type="button"
                    onClick={handleReplayIntro}
                    className="hover:text-peach text-rust underline underline-offset-4 transition-colors font-medium text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust rounded-[1px]"
                  >
                    Replay intro
                  </button> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Real Brand Logo at Sensible Size (Replacing giant letter-spaced typed text) */}
        <div className="py-12 border-b border-cream/15 flex flex-col items-center justify-center text-center">
          <Image
            src="/brand/logo-cream.png"
            alt="Ambrew Coffee Roasters"
            width={160}
            height={160}
            className="w-36 sm:w-40 h-auto object-contain"
          />
          <p className="font-sans text-xs uppercase tracking-editorial text-cream/70 font-semibold mt-4">
            ARTISAN COFFEE ROASTERS · JAIPUR, INDIA
          </p>

          {/* Business card boxed line icons accent row in footer */}
          <div className="flex items-center justify-center gap-3 mt-6 opacity-75">
            <BoxedBrewIcon type="filter" size={32} theme="rust-bg" />
            <BoxedBrewIcon type="pourover" size={32} theme="rust-bg" />
            <BoxedBrewIcon type="frenchpress" size={32} theme="rust-bg" />
            <BoxedBrewIcon type="aeropress" size={32} theme="rust-bg" />
            <BoxedBrewIcon type="mokapot" size={32} theme="rust-bg" />
            <BoxedBrewIcon type="coldbrew" size={32} theme="rust-bg" />
          </div>
        </div>

        {/* Bottom Legal & Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-cream/60">
          <p>© {new Date().getFullYear()} Ambrew Coffee. All rights reserved. Handcrafted in Jaipur.</p>
          <div className="flex items-center space-x-4 sm:space-x-6 text-xs">
            <span>Single-Origin Beans</span>
            <span>·</span>
            <span>Small Batch Roasted</span>
            <span>·</span>
            <span>Jaipur, Rajasthan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
