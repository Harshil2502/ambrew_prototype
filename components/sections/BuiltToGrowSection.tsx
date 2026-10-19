'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ADMIN_ORDERS, ADMIN_LOW_STOCK, ADMIN_CAPABILITIES } from '../../data/adminMockData';
import { NotchedFrame } from '../ui/NotchedFrame';

export function BuiltToGrowSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="platform" className="bg-cream border-b border-brown/15 py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Stand-alone heading without eyebrow line */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brown leading-tight tracking-tight">
            Built to Grow: Custom Commerce & Roastery CMS
          </h2>
          <p className="font-sans text-base sm:text-lg text-brown/85 mt-4 leading-relaxed max-w-[60ch]">
            The customer experience is quiet and print-inspired. Behind it runs an operations dashboard built for specialty roasting: live inventory tracking, recurring subscriptions, and batch fulfillment.
          </p>
        </div>

        {/* 12-Column Grid: Big Admin Browser Mockup + 4 Plain Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Admin Browser Mockup (7 cols) - Bigger, showing less */}
          <motion.div
            className="lg:col-span-7"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <NotchedFrame
              notchSize={12}
              borderColor="rgba(90, 36, 16, 0.35)"
              className="bg-cream-paper/70 p-1 border border-brown/15"
            >
              {/* Minimal Browser Frame */}
              <div className="bg-cream-paper border border-brown/20 rounded-[2px] overflow-hidden">
                {/* Browser Header Bar */}
                <div className="bg-cream border-b border-brown/15 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rust/40 border border-rust/60 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-brown/20 border border-brown/40 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-brown/20 border border-brown/40 inline-block" />
                  </div>
                  <div className="flex-1 max-w-xs mx-auto">
                    <div className="bg-cream-paper border border-brown/15 rounded-[2px] px-3 py-1 text-center text-xs font-sans text-brown/75 truncate">
                      admin.ambrew.in/operations
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rust" />
                    <span className="text-xs font-sans text-rust font-semibold uppercase">Live</span>
                  </div>
                </div>

                {/* Admin Interior: Showing One Orders Table, One Revenue Chart, One Low-Stock Note */}
                <div className="p-4 sm:p-8 space-y-6 bg-[#FCF9F5]">
                  {/* Operations Overview Subhead */}
                  <div className="flex items-center justify-between border-b border-brown/15 pb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brown">
                        Ambrew Roastery Operations
                      </h3>
                      <p className="font-sans text-xs text-brown/65 mt-0.5">
                        Current Roast Cycle · Jaipur Roastery
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-sans text-brown/60 uppercase tracking-caps block">
                        October Revenue
                      </span>
                      <span className="font-sans text-lg font-bold text-brown">
                        ₹3,48,200
                      </span>
                    </div>
                  </div>

                  {/* 1. Revenue Trajectory Chart */}
                  <div className="p-5 bg-cream border border-brown/15 rounded-[2px]">
                    <div className="flex items-center justify-between text-xs font-sans text-brown/70 mb-3">
                      <span className="font-semibold text-brown">Daily Fulfillment Trajectory</span>
                      <span>Last 14 Days</span>
                    </div>
                    <div className="h-20 w-full relative">
                      <svg
                        viewBox="0 0 400 60"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <line x1="0" y1="59" x2="400" y2="59" stroke="#5A2410" strokeOpacity="0.1" />
                        <line x1="0" y1="30" x2="400" y2="30" stroke="#5A2410" strokeOpacity="0.08" strokeDasharray="3 3" />
                        <path
                          d="M 0,48 L 30,42 L 60,45 L 90,32 L 120,38 L 150,26 L 180,28 L 210,18 L 240,22 L 270,14 L 300,16 L 330,8 L 360,11 L 400,4"
                          stroke="#C44514"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle cx="400" cy="4" r="3.5" fill="#C44514" />
                      </svg>
                    </div>
                  </div>

                  {/* 2. One Clean Orders Table */}
                  <div className="border border-brown/15 rounded-[2px] overflow-hidden bg-cream">
                    <div className="px-4 py-3 bg-cream-paper text-xs font-sans font-bold tracking-caps uppercase text-brown/80 border-b border-brown/15 flex justify-between">
                      <span>Recent Orders & Subscriptions</span>
                      <span className="text-rust">Automated Dispatch</span>
                    </div>
                    <div className="divide-y divide-brown/10 font-sans text-sm">
                      {ADMIN_ORDERS.map((order) => (
                        <div key={order.id} className="p-3.5 flex items-center justify-between hover:bg-cream-paper/40 transition-colors">
                          <div className="min-w-0 pr-3">
                            <div className="flex items-center gap-2.5">
                              <span className="font-sans text-xs font-bold text-brown">{order.id}</span>
                              <span className="text-brown font-semibold text-sm">{order.customer}</span>
                              <span className="text-brown/50 text-xs">({order.city})</span>
                            </div>
                            <p className="text-xs text-brown/75 truncate mt-0.5">{order.items}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="font-sans font-bold text-brown block text-sm">{order.amount}</span>
                            <span
                              className={`text-xs font-sans font-semibold px-2 py-0.5 rounded-[1px] inline-block mt-0.5 ${
                                order.status === 'Dispatched'
                                  ? 'bg-rust text-cream'
                                  : order.status === 'Roasting'
                                  ? 'bg-peach text-brown'
                                  : 'bg-cream-paper text-brown/80 border border-brown/20'
                              }`}
                            >
                              {order.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 3. One Low-Stock Note */}
                  <div className="bg-peach/30 border border-peach p-4 flex items-center justify-between text-xs sm:text-sm rounded-[2px]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rust shrink-0" />
                      <span className="font-sans font-medium text-brown">
                        Low Inventory Notice: {ADMIN_LOW_STOCK[0].item} ({ADMIN_LOW_STOCK[0].quantity})
                      </span>
                    </div>
                    <span className="font-sans text-xs uppercase font-bold tracking-caps text-rust shrink-0">
                      Roast Scheduled
                    </span>
                  </div>
                </div>
              </div>
            </NotchedFrame>

            {/* Required Caption */}
            <p className="mt-3 text-center text-xs font-sans text-brown/60 tracking-wide italic">
              Prototype preview of the Ambrew admin.
            </p>
          </motion.div>

          {/* 4 Capabilities as Short, Plain Sentences (5 cols) */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pb-4 border-b border-brown/15">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brown">
                Platform Capabilities
              </h3>
              <p className="font-sans text-sm sm:text-base text-brown/80 mt-2">
                Purpose-built commerce for roasters, from green bean to customer cup.
              </p>
            </div>

            <div className="space-y-4">
              {ADMIN_CAPABILITIES.map((cap) => (
                <div
                  key={cap.title}
                  className="p-5 bg-cream-paper/50 border border-brown/15 rounded-[2px]"
                >
                  <h4 className="font-serif text-lg font-bold text-brown">
                    {cap.title}
                  </h4>
                  <p className="font-sans text-sm text-brown/85 mt-2 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
