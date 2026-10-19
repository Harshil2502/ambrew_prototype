const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== Starting Ambrew Landing Page Verification Suite ===\n');

// 1. Verify Brand Files
console.log('1. Checking Brand Assets...');
assert(fs.existsSync(path.join(__dirname, 'public/brand/logo.png')), 'logo.png must exist');
assert(fs.existsSync(path.join(__dirname, 'public/brand/letterhead.png')), 'letterhead.png must exist');
console.log('   ✓ Brand assets verified');

// 2. Verify Data Files
console.log('2. Checking Data Integrity...');
// Verify product content via fs read
const productsContent = fs.readFileSync(path.join(__dirname, 'data/products.ts'), 'utf8');
assert(productsContent.includes('Araku Valley Honey'), 'Must contain Araku Valley Honey');
assert(productsContent.includes('Monsoon Malabar AA'), 'Must contain Monsoon Malabar AA');
assert(productsContent.includes('Ratnagiri Estate Peaberry'), 'Must contain Ratnagiri Estate Peaberry');
assert(productsContent.includes('Jaipur Sunrise Blend'), 'Must contain Jaipur Sunrise Blend');
console.log('   ✓ Products catalogue contains all 4 roaster selections');

const brewContent = fs.readFileSync(path.join(__dirname, 'data/brewMethods.ts'), 'utf8');
assert(brewContent.includes('South Indian Filter'), 'Must contain South Indian Filter');
assert(brewContent.includes('Pour Over (V60)'), 'Must contain Pour Over (V60)');
assert(brewContent.includes('French Press'), 'Must contain French Press');
assert(brewContent.includes('Aeropress'), 'Must contain Aeropress');
assert(brewContent.includes('Moka Pot'), 'Must contain Moka Pot');
assert(brewContent.includes('Cold Brew Immersion'), 'Must contain Cold Brew');
console.log('   ✓ Brew guide contains all 6 brew methods');

// 3. Verify Components
console.log('3. Checking 9 Mandatory Sections & Components...');
const expectedFiles = [
  'components/layout/TopBar.tsx',
  'components/layout/Navbar.tsx',
  'components/layout/CartDrawer.tsx',
  'components/sections/HeroSection.tsx',
  'components/sections/StorySection.tsx',
  'components/sections/CollectionSection.tsx',
  'components/sections/BrewGuideSection.tsx',
  'components/sections/GiftBoxSection.tsx',
  'components/sections/SubscriptionSection.tsx',
  'components/sections/BuiltToGrowSection.tsx',
  'components/sections/FooterSection.tsx',
  'components/brand/BotanicalBand.tsx',
  'components/brand/CoffeeBagIllustration.tsx',
  'components/brand/GiftBoxIllustration.tsx',
  'components/brand/BoxedBrewIcon.tsx',
  'components/brand/SunMark.tsx',
  'components/brand/BrandLogo.tsx',
  'components/ui/NotchedFrame.tsx',
  'components/ui/RoastLevelBar.tsx',
  'components/context/CartContext.tsx',
  'app/layout.tsx',
  'app/page.tsx',
  'app/globals.css',
  'app/robots.ts',
  'app/sitemap.ts',
];

expectedFiles.forEach((file) => {
  assert(fs.existsSync(path.join(__dirname, file)), `File missing: ${file}`);
});
console.log(`   ✓ All ${expectedFiles.length} structural components & pages present`);

// 4. Verify Strict Palette Compliance
console.log('4. Verifying Palette Rule Compliance...');
const tailwindContent = fs.readFileSync(path.join(__dirname, 'tailwind.config.ts'), 'utf8');
assert(tailwindContent.includes('#C44514'), 'Must define Rust #C44514');
assert(tailwindContent.includes('#F5EEE4'), 'Must define Cream #F5EEE4');
assert(tailwindContent.includes('#5A2410'), 'Must define Deep Brown #5A2410');
assert(tailwindContent.includes('#EBCBB8'), 'Must define Peach #EBCBB8');

// Check that no forbidden buzzwords exist in copy
console.log('5. Checking Copywriting for Forbidden Buzzwords...');
const pageContent = fs.readFileSync(path.join(__dirname, 'components/sections/HeroSection.tsx'), 'utf8') +
  fs.readFileSync(path.join(__dirname, 'components/sections/StorySection.tsx'), 'utf8') +
  fs.readFileSync(path.join(__dirname, 'components/sections/CollectionSection.tsx'), 'utf8');

const forbiddenWords = ['Revolutionize', 'Elevate', 'Unleash', 'Seamless', 'Crafted with passion'];
forbiddenWords.forEach((word) => {
  assert(!pageContent.toLowerCase().includes(word.toLowerCase()), `Forbidden buzzword found: ${word}`);
});
console.log('   ✓ Zero forbidden marketing buzzwords found');

// 6. Verify Signature Elements
console.log('6. Verifying Signature Brand Elements...');
const heroContent = fs.readFileSync(path.join(__dirname, 'components/sections/HeroSection.tsx'), 'utf8');
assert(heroContent.includes('Every morning deserves a sunrise.'), 'Hero must have specified headline');
assert(heroContent.includes('BotanicalBand'), 'Hero must use BotanicalBand');
assert(heroContent.includes('CoffeeBagIllustration'), 'Hero must use CoffeeBagIllustration');

const storyContent = fs.readFileSync(path.join(__dirname, 'components/sections/StorySection.tsx'), 'utf8');
assert(storyContent.includes('Tanishk Kedia & Arohi Taparia'), 'Story must include founder signatures');

const adminContent = fs.readFileSync(path.join(__dirname, 'components/sections/BuiltToGrowSection.tsx'), 'utf8');
assert(adminContent.includes('Prototype preview of the Ambrew admin.'), 'Admin section must include required caption');

const footerContent = fs.readFileSync(path.join(__dirname, 'components/sections/FooterSection.tsx'), 'utf8');
assert(footerContent.includes('ambrew2002@gmail.com'), 'Footer must contain email');
assert(footerContent.includes('@ambrew.in'), 'Footer must contain Instagram handle');

console.log('   ✓ All signature brand requirements satisfied');
console.log('\n=== All Tests Passed Successfully! ===\n');
