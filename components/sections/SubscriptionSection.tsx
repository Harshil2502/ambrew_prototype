'use client';

import React, { useState } from 'react';
import { NotchedFrame } from '../ui/NotchedFrame';
import { useCart } from '../context/CartContext';

interface CoffeeChoice {
  id: string;
  name: string;
  price: number;
}

const COFFEES: CoffeeChoice[] = [
  { id: 'araku-honey', name: 'Araku Valley Honey', price: 540 },
  { id: 'monsoon-malabar', name: 'Monsoon Malabar AA', price: 490 },
  { id: 'ratnagiri-peaberry', name: 'Ratnagiri Peaberry', price: 620 },
  { id: 'jaipur-sunrise', name: 'Jaipur Sunrise Blend', price: 460 },
];

const GRINDS = [
  'Whole Bean',
  'South Indian Filter',
  'Pour Over (V60)',
  'French Press',
  'Moka Pot',
];

const FREQUENCIES = [
  { label: 'Every 2 Weeks', discount: 10 },
  { label: 'Every 3 Weeks', discount: 10 },
  { label: 'Every 4 Weeks', discount: 10 },
];

export function SubscriptionSection() {
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeChoice>(COFFEES[0]);
  const [selectedGrind, setSelectedGrind] = useState<string>(GRINDS[0]);
  const [selectedFreq, setSelectedFreq] = useState(FREQUENCIES[0]);
  const [added, setAdded] = useState(false);

  const { addItem } = useCart();

  const basePrice = selectedCoffee.price;
  const discountAmount = Math.round((basePrice * selectedFreq.discount) / 100);
  const subscriberPrice = basePrice - discountAmount;

  const handleSubscribe = () => {
    addItem({
      id: `sub-${selectedCoffee.id}`,
      name: `${selectedCoffee.name} (${selectedFreq.label})`,
      size: `250g · ${selectedGrind}`,
      price: subscriberPrice,
      bagColor: 'cream',
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section id="subscription" className="bg-cream border-b border-brown/15 py-24 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Stand-alone heading without eyebrow line */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="sr-only">THE RECURRING ROAST</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-brown leading-tight tracking-tight">
            Fresh Beans at Your Cadence
          </h2>
          <p className="font-sans text-base text-brown/80 mt-4 leading-relaxed max-w-[60ch] mx-auto">
            Never run low on fresh coffee. Choose your beans, preferred grind, and schedule. Roasted fresh in Jaipur before every recurring dispatch.
          </p>
        </div>

        {/* Centered Narrow Panel (~720px) with NotchedFrame */}
        <div className="max-w-[720px] mx-auto">
          <NotchedFrame
            notchSize={14}
            borderColor="#C44514"
            className="bg-cream-paper/70 p-5 sm:p-10 lg:p-12 border border-brown/15"
          >
            <div className="space-y-10">
              {/* Step 1: Select Coffee (Plain heading, larger easy-to-tap options, no tag chips) */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brown mb-4">
                  Select Coffee
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {COFFEES.map((c) => {
                    const isSelected = selectedCoffee.id === c.id;
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelectedCoffee(c)}
                        className={`text-left p-4 border transition-all duration-150 rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                          isSelected
                            ? 'bg-cream border-rust ring-1 ring-rust text-brown'
                            : 'bg-cream/40 border-brown/20 hover:border-brown/40 text-brown/85'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif text-lg font-semibold text-brown">
                            {c.name}
                          </span>
                          <span className="font-sans text-sm font-bold text-rust">
                            ₹{c.price}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Choose Grind (Plain heading, larger easy-to-tap buttons) */}
              <div className="pt-8 border-t border-brown/15">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brown mb-4">
                  Choose Grind
                </h3>
                <div className="flex flex-wrap gap-3">
                  {GRINDS.map((g) => {
                    const isSelected = selectedGrind === g;
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setSelectedGrind(g)}
                        className={`px-5 py-2.5 text-sm font-sans rounded-[2px] border transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                          isSelected
                            ? 'bg-rust text-cream border-rust font-semibold'
                            : 'bg-cream text-brown/85 border-brown/20 hover:border-brown/50'
                        }`}
                      >
                        {g}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Delivery Frequency (Plain heading, larger easy-to-tap cards) */}
              <div className="pt-8 border-t border-brown/15">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-brown">
                    Delivery Frequency
                  </h3>
                  <span className="font-sans text-xs text-rust font-bold tracking-wide">
                    Save 10% on every recurring drop
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {FREQUENCIES.map((f) => {
                    const isSelected = selectedFreq.label === f.label;
                    return (
                      <button
                        key={f.label}
                        type="button"
                        onClick={() => setSelectedFreq(f)}
                        className={`p-4 border rounded-[2px] text-left transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                          isSelected
                            ? 'bg-cream border-rust ring-1 ring-rust text-brown'
                            : 'bg-cream/40 border-brown/20 hover:border-brown/40 text-brown/85'
                        }`}
                      >
                        <span className="block font-sans text-sm font-semibold text-brown">
                          {f.label}
                        </span>
                        <span className="block font-sans text-xs text-rust font-medium mt-1">
                          Save 10% · Free shipping
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Live Summary Bar */}
              <div className="pt-8 border-t border-brown/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-cream p-6 border border-brown/15">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-2xl sm:text-3xl font-bold text-brown">
                      ₹{subscriberPrice}
                    </span>
                    <span className="font-sans text-base line-through text-brown/40">
                      ₹{basePrice}
                    </span>
                    <span className="px-2.5 py-0.5 bg-rust text-cream text-xs font-sans font-bold tracking-caps uppercase rounded-[2px]">
                      SAVE 10%
                    </span>
                  </div>
                  <p className="font-sans text-xs text-brown/75 mt-1.5">
                    Billed per drop ({selectedFreq.label}) · Pause or cancel anytime
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSubscribe}
                  className={`px-8 py-3.5 text-xs font-sans font-bold tracking-editorial uppercase rounded-[2px] transition-colors duration-150 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                    added
                      ? 'bg-brown text-cream'
                      : 'bg-rust hover:bg-brown text-cream'
                  }`}
                >
                  {added ? 'Subscription Added ✓' : 'Start Subscription'}
                </button>
              </div>
            </div>
          </NotchedFrame>
        </div>
      </div>
    </section>
  );
}
