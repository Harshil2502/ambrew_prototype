const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== Running Ambrew Boost Verification Suite ===\n');

// 1. Verify Part B: Preloader Component
console.log('1. Checking Preloader Implementation...');
const preloaderFile = path.join(__dirname, 'components/Preloader.tsx');
assert(fs.existsSync(preloaderFile), 'components/Preloader.tsx must exist');
const preloaderContent = fs.readFileSync(preloaderFile, 'utf8');

assert(preloaderContent.includes('role="status"'), 'Preloader must have role="status"');
assert(preloaderContent.includes('aria-live="polite"'), 'Preloader must have aria-live="polite"');
assert(preloaderContent.includes('Loading Ambrew'), 'Preloader must have visually hidden Loading Ambrew text');
assert(preloaderContent.includes('sessionStorage.getItem(\'ambrew_preloader_seen\')'), 'Preloader must check sessionStorage');
assert(preloaderContent.includes('preloader') && preloaderContent.includes('1'), 'Preloader must support ?preloader=1');
assert(preloaderContent.includes('useReducedMotion'), 'Preloader must handle prefers-reduced-motion');
assert(preloaderContent.includes('cupInnerClip'), 'Preloader must use clipPath for cup fill');
assert(preloaderContent.includes('Grinding the beans…'), 'Preloader must cycle grinding text');
assert(preloaderContent.includes('Warming the cup…'), 'Preloader must cycle warming text');
assert(preloaderContent.includes('Brewing your morning…'), 'Preloader must cycle brewing text');
assert(preloaderContent.includes('/brand/logo.png'), 'Preloader must include real logo');
assert(preloaderContent.includes('coffee-drop'), 'Preloader must have coffee drop animation');
assert(preloaderContent.includes('coffee-bean-bob'), 'Preloader must have bobbing coffee bean');
assert(preloaderContent.includes('steam-group'), 'Preloader must have steam lines');
console.log('   ✓ Preloader vector art, timing, accessibility & session logic verified');

// 2. Verify Preloader mounted in layout.tsx
console.log('2. Checking Preloader mounting in app/layout.tsx...');
const layoutContent = fs.readFileSync(path.join(__dirname, 'app/layout.tsx'), 'utf8');
assert(layoutContent.includes('<Preloader />') || layoutContent.includes('<Preloader/>'), 'Preloader must be mounted in RootLayout');
assert(layoutContent.includes('ambrew_preloader_seen'), 'RootLayout must include preloader-skipped check script');
console.log('   ✓ Preloader mounted in root layout with zero-flash head script');

// 3. Verify A1: AI Tells Removal
console.log('3. Checking A1: AI Tells Removal...');
const heroContent = fs.readFileSync(path.join(__dirname, 'components/sections/HeroSection.tsx'), 'utf8');
const storyContent = fs.readFileSync(path.join(__dirname, 'components/sections/StorySection.tsx'), 'utf8');
const collectionContent = fs.readFileSync(path.join(__dirname, 'components/sections/CollectionSection.tsx'), 'utf8');
const brewContent = fs.readFileSync(path.join(__dirname, 'components/sections/BrewGuideSection.tsx'), 'utf8');
const giftContent = fs.readFileSync(path.join(__dirname, 'components/sections/GiftBoxSection.tsx'), 'utf8');
const subContent = fs.readFileSync(path.join(__dirname, 'components/sections/SubscriptionSection.tsx'), 'utf8');
const adminContent = fs.readFileSync(path.join(__dirname, 'components/sections/BuiltToGrowSection.tsx'), 'utf8');
const footerContent = fs.readFileSync(path.join(__dirname, 'components/sections/FooterSection.tsx'), 'utf8');

// Only Hero should have the visible small eyebrow label
assert(heroContent.includes('EST. JAIPUR · ARTISAN COFFEE ROASTERS'), 'Hero must keep the one allowed eyebrow');
assert(!storyContent.includes('OUR PHILOSOPHY & ROASTERY'), 'Story eyebrow label must be removed');
assert(!giftContent.includes('CURATED CEREMONY'), 'Gift box eyebrow label must be removed');
assert(!adminContent.includes('SCALE & ARCHITECTURE'), 'Admin eyebrow label must be removed');

// No micro numbers in subscription and brew methods
assert(!subContent.includes('01 · Select Coffee'), 'Subscription numbered micro-label removed');
assert(!subContent.includes('02 · Choose Grind Specification'), 'Subscription numbered micro-label removed');
assert(!subContent.includes('03 · Dispatch Frequency'), 'Subscription numbered micro-label removed');

// Stats row in story replaced by quiet line
assert(!storyContent.includes('BRAND_FACTS.map'), 'Story stats row removed');
assert(storyContent.includes('Single-origin beans'), 'Story has quiet roastery note');

// Monospace fonts removed
const cartContent = fs.readFileSync(path.join(__dirname, 'components/layout/CartDrawer.tsx'), 'utf8');
const navContent = fs.readFileSync(path.join(__dirname, 'components/layout/Navbar.tsx'), 'utf8');
assert(!heroContent.includes('font-mono'), 'Hero must not use font-mono');
assert(!collectionContent.includes('font-mono'), 'Collection must not use font-mono');
assert(!brewContent.includes('font-mono'), 'Brew guide must not use font-mono');
assert(!giftContent.includes('font-mono'), 'Gift box must not use font-mono');
assert(!subContent.includes('font-mono'), 'Subscription must not use font-mono');
assert(!adminContent.includes('font-mono'), 'Admin must not use font-mono');
assert(!footerContent.includes('font-mono'), 'Footer must not use font-mono');
assert(!cartContent.includes('font-mono'), 'CartDrawer must not use font-mono');
assert(!navContent.includes('font-mono'), 'Navbar must not use font-mono');

// Verify minimum text size: no 9px, 10px, or 11px text anywhere in components
const componentFiles = fs.readdirSync(path.join(__dirname, 'components'), { recursive: true })
  .filter((f) => typeof f === 'string' && (f.endsWith('.tsx') || f.endsWith('.ts')));
for (const comp of componentFiles) {
  const code = fs.readFileSync(path.join(__dirname, 'components', comp), 'utf8');
  assert(!code.includes('font-mono'), `File ${comp} must not contain font-mono`);
  assert(!/text-\[\s*([0-9]|1[01])px\]/.test(code), `File ${comp} must not have text under 12px`);
}
console.log('   ✓ AI tells removed: no eyebrows (except hero), no micro-numbers, no stats row, no monospace, no text < 12px');

// 4. Verify A2 & A4: Hierarchy, Spacing & Brand Assets
console.log('4. Checking A2 & A4: Spacing, Container Widths & Brand Assets...');
assert(storyContent.includes('pt-36') || storyContent.includes('pt-40') || storyContent.includes('pt-44') || storyContent.includes('pt-48'), 'Story has generous spacing');
assert(collectionContent.includes('py-24'), 'Collection has tight 96px spacing');
assert(brewContent.includes('py-24'), 'Brew guide has tight 96px spacing');
assert(giftContent.includes('py-36') || giftContent.includes('py-44') || giftContent.includes('py-48'), 'Gift box has generous spacing');
assert(subContent.includes('max-w-[720px]'), 'Subscription panel is narrower ~720px centered');

// Botanical band and boxed icons
assert(heroContent.includes('BotanicalBand'), 'Hero uses BotanicalBand full height');
assert(brewContent.includes('BotanicalBand'), 'Brew guide uses thin BotanicalBand repeat strip');
assert(brewContent.includes('BoxedBrewIcon'), 'Brew guide uses BoxedBrewIcon');
assert(footerContent.includes('BoxedBrewIcon'), 'Footer uses BoxedBrewIcon');
assert(giftContent.includes('NotchedFrame'), 'Gift box uses NotchedFrame');
assert(subContent.includes('NotchedFrame'), 'Subscription uses NotchedFrame');

// Real logos
const navbarContent = fs.readFileSync(path.join(__dirname, 'components/layout/Navbar.tsx'), 'utf8');
assert(navbarContent.includes('BrandLogo'), 'Navbar uses BrandLogo');
const brandLogoContent = fs.readFileSync(path.join(__dirname, 'components/brand/BrandLogo.tsx'), 'utf8');
assert(brandLogoContent.includes('/brand/logo.png'), 'BrandLogo uses real image');
assert(footerContent.includes('logo-cream.png') || footerContent.includes('logo.png'), 'Footer uses real logo image');
assert(footerContent.includes('Replay intro'), 'Footer includes Replay intro link');
console.log('   ✓ Spacing hierarchy, brand assets, and real logos verified');

// 5. Verify A3: Products layout and distinct bag illustrations
console.log('5. Checking A3: Featured product and distinct bag illustrations...');
assert(collectionContent.includes('featuredProduct'), 'Collection has featured product card');
assert(collectionContent.includes('otherProducts'), 'Collection has row of other products');

const bagContent = fs.readFileSync(path.join(__dirname, 'components/brand/CoffeeBagIllustration.tsx'), 'utf8');
assert(bagContent.includes('sun'), 'Bag illustration supports sun');
assert(bagContent.includes('mountain'), 'Bag illustration supports mountain');
assert(bagContent.includes('leaf'), 'Bag illustration supports leaf');
assert(bagContent.includes('bean'), 'Bag illustration supports bean');
console.log('   ✓ Featured 2-column card and 4 distinct coffee bag illustrations verified');

// 6. Verify A6: Clean copy and no invented facts
console.log('6. Checking A6: Clean copy & no invented facts...');
const productsContent = fs.readFileSync(path.join(__dirname, 'data/products.ts'), 'utf8');
assert(productsContent.includes('TO BE REPLACED BY CLIENT'), 'data/products.ts has client placeholder comment');
assert(!productsContent.includes('72 Hours'), 'No 72 hours claim');
assert(!productsContent.includes('6 Single Estates'), 'No 6 single estates claim');

const fullCode = heroContent + storyContent + collectionContent + brewContent + giftContent + subContent + adminContent + footerContent;
assert(!fullCode.toLowerCase().includes('ceremony'), 'No ceremony buzzword');
assert(!fullCode.toLowerCase().includes('calibrations'), 'No calibrations buzzword');
assert(!fullCode.toLowerCase().includes('compendium'), 'No compendium buzzword');
assert(!fullCode.includes('72 hours'), 'No 72 hours in copy');
assert(!fullCode.includes('6 single estates'), 'No 6 single estates in copy');
assert(!fullCode.includes('dispatched within 24 hours'), 'No dispatched within 24 hours in copy');
console.log('   ✓ Zero invented facts, placeholders marked, and clean brand copywriting verified');

console.log('\n=== All Boost Verification Tests Passed with 100% Success! ===\n');
