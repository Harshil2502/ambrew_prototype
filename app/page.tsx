import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { StorySection } from '../components/sections/StorySection';
import { CollectionSection } from '../components/sections/CollectionSection';
import { BrewGuideSection } from '../components/sections/BrewGuideSection';
import { GiftBoxSection } from '../components/sections/GiftBoxSection';
import { SubscriptionSection } from '../components/sections/SubscriptionSection';
import { BuiltToGrowSection } from '../components/sections/BuiltToGrowSection';
import { FooterSection } from '../components/sections/FooterSection';

export default function HomePage() {
  return (
    <>
      {/* 2. HERO: Cream left with label + headline + CTAs; Right rust botanical band with illustrated bag */}
      <HeroSection />

      {/* 3. STORY: Asymmetric pull quote, two paragraphs, signed by founders, hairline facts */}
      <StorySection />

      {/* 4. THE COLLECTION: 4 flat product cards, roast bars, size toggle, add to cart, tabs */}
      <CollectionSection />

      {/* 5. BREW GUIDE: Single wide rust block, index-style list, boxed line icons, hover tips */}
      <BrewGuideSection />

      {/* 6. GIFT BOX: Full-width feature on peach tint with packaging illustration and CTA */}
      <GiftBoxSection />

      {/* 7. SUBSCRIPTION: Clean notched-border panel, 3-step selector, live 10% discount summary */}
      <SubscriptionSection />

      {/* 8. BUILT TO GROW: Restrained realistic admin panel mockup in browser frame + 4 capabilities */}
      <BuiltToGrowSection />

      {/* 9. FOOTER: Deep brown, big serif wordmark, newsletter validation, contact details */}
      <FooterSection />
    </>
  );
}
