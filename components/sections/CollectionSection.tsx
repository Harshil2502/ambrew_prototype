'use client';

import React, { useState } from 'react';
import { PRODUCTS, Product } from '../../data/products';
import { CoffeeBagIllustration } from '../brand/CoffeeBagIllustration';
import { useCart } from '../context/CartContext';

export function CollectionSection() {
  const [selectedSizes, setSelectedSizes] = useState<Record<string, '250g' | '500g'>>({
    'araku-valley-honey': '250g',
    'monsoon-malabar-aa': '250g',
    'ratnagiri-estate-peaberry': '250g',
    'jaipur-sunrise-blend': '250g',
  });
  const [addedItemNotice, setAddedItemNotice] = useState<string | null>(null);

  const { addItem } = useCart();

  const handleSizeToggle = (productId: string, weight: '250g' | '500g') => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: weight }));
  };

  const handleAddToCart = (product: Product) => {
    const size = selectedSizes[product.id] || '250g';
    const sizeOption = product.sizes.find((s) => s.weight === size) || product.sizes[0];

    addItem({
      id: product.id,
      name: product.name,
      size: sizeOption.weight,
      price: sizeOption.price,
      bagColor: product.bagColor,
    });

    setAddedItemNotice(product.id);
    setTimeout(() => setAddedItemNotice(null), 1800);
  };

  const featuredProduct = PRODUCTS[0];
  const otherProducts = PRODUCTS.slice(1);

  return (
    <section id="collection" className="bg-cream border-b border-brown/15 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Stand-alone heading without eyebrow line */}
        <div className="mb-14 pb-6 border-b border-brown/15">
          <span className="sr-only">THE ROASTERY COLLECTION</span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-brown leading-tight tracking-tight">
            The Roastery Collection
          </h2>
          <p className="font-sans text-base text-brown/80 mt-3 max-w-[60ch]">
            Four single-origin coffees and signature roasts, roasted in small drums and packaged in valve-sealed pouches.
          </p>
        </div>

        {/* Featured Product: Large Card Spanning 2 Columns */}
        <div className="space-y-8">
          {featuredProduct && (() => {
            const currentWeight = selectedSizes[featuredProduct.id] || '250g';
            const currentPrice =
              featuredProduct.sizes.find((s) => s.weight === currentWeight)?.price ||
              featuredProduct.sizes[0].price;
            const isJustAdded = addedItemNotice === featuredProduct.id;

            return (
              <article
                key={featuredProduct.id}
                className="group bg-cream-paper/50 border border-brown/15 hover:border-rust/60 transition-colors duration-200 p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left: Visibly Bigger Bag Illustration */}
                  <div className="lg:col-span-5 flex items-center justify-center p-6 bg-cream border border-brown/10">
                    <div className="transform group-hover:scale-[1.02] transition-transform duration-300">
                      <CoffeeBagIllustration
                        size="lg"
                        variant={featuredProduct.bagColor}
                        iconType={featuredProduct.iconType}
                        productName={featuredProduct.name}
                        origin={featuredProduct.origin}
                        roastName={featuredProduct.roastName}
                        weight={currentWeight}
                      />
                    </div>
                  </div>

                  {/* Right: Featured Coffee Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-rust text-cream font-sans text-xs font-semibold tracking-caps uppercase rounded-[2px] mb-3">
                        Featured Roaster Selection
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brown leading-tight">
                        {featuredProduct.name}
                      </h3>
                      <p className="font-sans text-base sm:text-lg text-brown/85 italic mt-3">
                        “{featuredProduct.tastingNotes}”
                      </p>
                      <p className="font-sans text-sm sm:text-base text-brown/80 leading-relaxed mt-4 max-w-[56ch]">
                        {featuredProduct.description}
                      </p>
                    </div>

                    {/* Size Toggle, Price, Add CTA */}
                    <div className="pt-6 border-t border-brown/15 flex flex-wrap items-center justify-between gap-6">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-sans text-brown/70 tracking-caps uppercase font-semibold">
                          Weight:
                        </span>
                        <div className="inline-flex border border-brown/20 bg-cream">
                          {featuredProduct.sizes.map((s) => (
                            <button
                              key={s.weight}
                              type="button"
                              onClick={() => handleSizeToggle(featuredProduct.id, s.weight)}
                              className={`px-3.5 py-1.5 text-xs font-sans tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                                currentWeight === s.weight
                                  ? 'bg-rust text-cream font-bold'
                                  : 'text-brown/80 hover:text-rust'
                              }`}
                            >
                              {s.weight}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-6">
                        <span className="font-sans text-2xl font-bold text-brown">
                          ₹{currentPrice}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleAddToCart(featuredProduct)}
                          className={`px-6 py-3 text-xs font-sans font-bold tracking-editorial uppercase rounded-[2px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                            isJustAdded
                              ? 'bg-brown text-cream'
                              : 'bg-rust hover:bg-brown text-cream'
                          }`}
                        >
                          {isJustAdded ? 'Added ✓' : '+ Add'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })()}

          {/* Other Three Products: Smaller Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {otherProducts.map((product) => {
              const currentWeight = selectedSizes[product.id] || '250g';
              const currentPrice =
                product.sizes.find((s) => s.weight === currentWeight)?.price ||
                product.sizes[0].price;
              const isJustAdded = addedItemNotice === product.id;

              return (
                <article
                  key={product.id}
                  className="group flex flex-col justify-between bg-cream-paper/40 p-6 border border-brown/15 hover:border-rust/60 transition-colors duration-200"
                >
                  {/* Product Bag Visual */}
                  <div className="py-6 flex items-center justify-center bg-cream border border-brown/10 mb-6 overflow-hidden">
                    <div className="transform group-hover:scale-[1.02] transition-transform duration-300">
                      <CoffeeBagIllustration
                        size="md"
                        variant={product.bagColor}
                        iconType={product.iconType}
                        productName={product.name}
                        origin={product.origin}
                        roastName={product.roastName}
                        weight={currentWeight}
                      />
                    </div>
                  </div>

                  {/* Cut to: Name, one tasting-note line, size toggle, price, Add */}
                  <div className="flex-1 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-brown leading-snug">
                        {product.name}
                      </h3>
                      <p className="font-sans text-sm text-brown/85 italic mt-2.5 leading-relaxed min-h-[44px]">
                        “{product.tastingNotes}”
                      </p>
                    </div>

                    <div className="pt-4 border-t border-brown/15 space-y-4">
                      {/* Size Selector */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-sans text-brown/70 tracking-caps uppercase font-semibold">
                          Weight:
                        </span>
                        <div className="inline-flex border border-brown/20 bg-cream">
                          {product.sizes.map((s) => (
                            <button
                              key={s.weight}
                              type="button"
                              onClick={() => handleSizeToggle(product.id, s.weight)}
                              className={`px-2.5 py-1 text-xs font-sans tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                                currentWeight === s.weight
                                  ? 'bg-rust text-cream font-bold'
                                  : 'text-brown/80 hover:text-rust'
                              }`}
                            >
                              {s.weight}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Price and Add CTA */}
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-sans text-xl font-bold text-brown">
                          ₹{currentPrice}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className={`px-4 py-2 text-xs font-sans font-bold tracking-editorial uppercase rounded-[2px] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rust ${
                            isJustAdded
                              ? 'bg-brown text-cream'
                              : 'bg-rust hover:bg-brown text-cream'
                          }`}
                        >
                          {isJustAdded ? 'Added ✓' : '+ Add'}
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
