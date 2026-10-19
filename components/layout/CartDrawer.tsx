'use client';

import React from 'react';
import { useCart } from '../context/CartContext';
import { CoffeeBagIllustration } from '../brand/CoffeeBagIllustration';

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    removeItem,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
  } = useCart();

  if (!isOpen) return null;

  const freeShippingDifference = freeShippingThreshold - subtotal;
  const hasFreeShipping = freeShippingDifference <= 0;
  const shippingAmount = hasFreeShipping ? 0 : 120;
  const total = subtotal + (items.length > 0 ? shippingAmount : 0);

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown/50 backdrop-blur-[2px] transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-cream border-l border-brown/20 flex flex-col shadow-none">
          {/* Header */}
          <div className="p-6 border-b border-brown/15 flex items-center justify-between">
            <div>
              <span className="font-sans text-xs tracking-caps uppercase font-bold text-rust">
                Roastery Order
              </span>
              <h2
                id="cart-drawer-title"
                className="font-serif text-2xl text-brown font-semibold mt-0.5"
              >
                Your Tasting Cart
              </h2>
            </div>
            <button
              type="button"
              onClick={closeCart}
              aria-label="Close cart drawer"
              className="p-2 text-brown/70 hover:text-rust rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Free Shipping Meter */}
          <div className="bg-cream-paper px-6 py-3.5 border-b border-brown/10">
            <div className="flex items-center justify-between text-xs font-sans text-brown">
              <span className="font-medium">
                {hasFreeShipping
                  ? 'Complimentary Airway Dispatch unlocked'
                  : `Add ₹${freeShippingDifference} for free airway dispatch`}
              </span>
              <span className="font-sans text-xs text-rust font-bold">
                ₹{subtotal}/₹{freeShippingThreshold}
              </span>
            </div>
            <div className="mt-2 w-full bg-cream h-1.5 rounded-none overflow-hidden border border-brown/10">
              <div
                className="bg-rust h-full transition-all duration-300"
                style={{
                  width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 divide-y divide-brown/10">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <p className="font-serif text-xl text-brown italic">Your tasting bag is empty.</p>
                <p className="font-sans text-xs text-brown/70 mt-2 max-w-xs mx-auto">
                  Select a fresh roast from the collection to begin your morning ritual.
                </p>
                <button
                  type="button"
                  onClick={closeCart}
                  className="mt-6 inline-block px-5 py-2.5 bg-rust text-cream text-xs font-sans font-semibold tracking-caps uppercase hover:bg-brown rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust transition-colors"
                >
                  Explore The Roasts
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="pt-6 first:pt-0 flex gap-4">
                  {/* Thumbnail */}
                  <div className="w-16 h-22 bg-cream-paper border border-brown/15 p-1 shrink-0 flex items-center justify-center">
                    <CoffeeBagIllustration
                      size="sm"
                      variant={item.bagColor || 'cream'}
                      productName={item.name}
                      weight={item.size}
                      className="scale-50 origin-center"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h3 className="font-serif text-lg text-brown font-semibold leading-tight">
                          {item.name}
                        </h3>
                        <span className="font-sans text-sm font-semibold text-brown">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-brown/70 mt-1">
                        Weight: <span className="font-semibold">{item.size}</span> · Whole Bean
                      </p>
                    </div>

                    {/* Quantity controls and remove */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="inline-flex items-center border border-brown/20 bg-cream">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="px-2.5 py-1 text-xs text-brown hover:text-rust font-sans font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
                        >
                          –
                        </button>
                        <span className="px-3 py-1 text-xs font-sans font-semibold text-brown">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="px-2.5 py-1 text-xs text-brown hover:text-rust font-sans font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItem(item.id, item.size)}
                        className="font-sans text-xs text-brown/60 hover:text-rust uppercase tracking-wider underline underline-offset-2 rounded-[1px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Breakdown */}
          {items.length > 0 && (
            <div className="p-6 border-t border-brown/15 bg-cream-paper space-y-3">
              <div className="flex justify-between text-xs font-sans text-brown/80">
                <span>Subtotal</span>
                <span className="font-sans font-medium">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-xs font-sans text-brown/80">
                <span>Airway Courier (Jaipur to Doorstep)</span>
                <span className="font-sans font-medium">
                  {hasFreeShipping ? 'FREE' : `₹${shippingAmount}`}
                </span>
              </div>
              <div className="pt-2 border-t border-brown/15 flex justify-between text-base font-serif font-bold text-brown">
                <span>Estimated Total</span>
                <span className="font-sans font-bold text-rust">₹{total}</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  alert('Thank you for testing the Ambrew client sales prototype! This checkout action demonstrates working cart state.');
                }}
                className="w-full mt-4 py-3 bg-rust hover:bg-brown text-cream font-sans text-xs font-semibold tracking-editorial uppercase transition-colors duration-200 rounded-[2px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust"
              >
                Proceed to Fresh Dispatch (₹{total})
              </button>
              <p className="text-xs text-center text-brown/60 font-sans tracking-wide">
                Roasted in small batches · Nitrogen flushed packaging
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
