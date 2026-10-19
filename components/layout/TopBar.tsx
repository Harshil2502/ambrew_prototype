import React from 'react';

export function TopBar() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-rust text-cream text-xs font-sans font-medium tracking-editorial uppercase py-2 px-4 text-center border-b border-rust-dark select-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <span>Free shipping above ₹999</span>
        <span className="opacity-50" aria-hidden="true">·</span>
        <span>Roasted fresh in Jaipur</span>
        <span className="opacity-50 hidden sm:inline" aria-hidden="true">·</span>
        <span className="hidden sm:inline">Single-origin small batches</span>
      </div>
    </aside>
  );
}
