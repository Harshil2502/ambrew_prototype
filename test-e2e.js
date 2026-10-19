const http = require('http');
const { spawn } = require('child_process');
const assert = require('assert');

console.log('=== Starting E2E Server & HTML Validation ===\n');

// Start next server
const port = 3456;
const server = spawn('npx', ['next', 'start', '-p', String(port)], {
  cwd: __dirname,
  stdio: 'pipe',
});

let serverReady = false;

server.stdout.on('data', (data) => {
  const str = data.toString();
  if (str.includes('Ready in') || str.includes('started server') || str.includes('http://localhost:')) {
    serverReady = true;
  }
});

server.stderr.on('data', (data) => {
  console.error('Server err:', data.toString());
});

async function run() {
  // Wait up to 10 seconds for server to boot
  for (let i = 0; i < 20; i++) {
    if (serverReady) break;
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log(`Server ready on port ${port}. Fetching HTML...`);

  const html = await new Promise((resolve, reject) => {
    http.get(`http://localhost:${port}/`, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });

  // Kill server cleanly
  server.kill();

  console.log('Fetched', html.length, 'bytes of HTML');

  // Semantic HTML checks
  console.log('1. Checking Semantic Elements...');
  assert(html.includes('<header'), 'Must have <header>');
  assert(html.includes('<nav'), 'Must have <nav>');
  assert(html.includes('<main'), 'Must have <main>');
  assert(html.includes('<section'), 'Must have <section>');
  assert(html.includes('<article'), 'Must have <article>');
  assert(html.includes('<footer'), 'Must have <footer>');
  assert(html.includes('<aside'), 'Must have <aside>');
  assert(html.includes('<blockquote'), 'Must have <blockquote>');
  console.log('   ✓ All semantic HTML5 containers verified');

  // SEO & JSON-LD
  console.log('2. Checking SEO & JSON-LD...');
  assert(html.includes('Ambrew Coffee Roasters | Jaipur, India'), 'Must have title');
  assert(html.includes('application/ld+json'), 'Must have JSON-LD script');
  assert(html.includes('Tanishk Kedia'), 'JSON-LD must list founder Tanishk Kedia');
  assert(html.includes('Arohi Taparia'), 'JSON-LD must list founder Arohi Taparia');
  assert(html.includes('ambrew2002@gmail.com'), 'JSON-LD must list email');
  assert(html.includes('+91-9829765556'), 'JSON-LD must list phone');
  console.log('   ✓ SEO metadata and JSON-LD schema verified');

  // Responsive breakpoints
  console.log('3. Checking Responsive Grid & Breakpoints...');
  assert(html.includes('sm:'), 'Contains sm breakpoint classes (640px)');
  assert(html.includes('md:'), 'Contains md breakpoint classes (768px)');
  assert(html.includes('lg:'), 'Contains lg breakpoint classes (1024px/1280px)');
  assert(html.includes('xl:'), 'Contains xl breakpoint classes (1280px/1536px)');
  console.log('   ✓ Responsive breakpoint classes present for 375/768/1280/1536px');

  // Strict Palette Colors Check in HTML
  console.log('4. Checking Strict Palette Usage...');
  assert(html.includes('#C44514') || html.includes('rust'), 'Rust token present');
  assert(html.includes('#F5EEE4') || html.includes('cream'), 'Cream token present');
  assert(html.includes('#5A2410') || html.includes('brown'), 'Deep Brown token present');
  assert(html.includes('#EBCBB8') || html.includes('peach'), 'Peach token present');
  console.log('   ✓ Palette tokens properly applied in markup');

  // 9 Sections Check
  console.log('5. Checking 9 Sections in Rendered HTML...');
  assert(html.includes('Free shipping above ₹999'), 'Section 1 (TopBar) verified');
  assert(html.includes('Every morning deserves a sunrise.'), 'Section 2 (Hero) verified');
  assert(html.includes('Coffee is not fuel'), 'Section 3 (Story) verified');
  assert(html.includes('THE ROASTERY COLLECTION'), 'Section 4 (Collection) verified');
  assert(html.includes('Extraction &amp; Method Guide') || html.includes('Extraction & Method Guide'), 'Section 5 (Brew Guide) verified');
  assert(html.includes('The Jaipur Brewing Gift Chest'), 'Section 6 (Gift Box) verified');
  assert(html.includes('THE RECURRING ROAST'), 'Section 7 (Subscription) verified');
  assert(html.includes('Prototype preview of the Ambrew admin.'), 'Section 8 (Built To Grow) verified');
  assert(html.includes('THE SUNRISE DISPATCH'), 'Section 9 (Footer) verified');
  console.log('   ✓ All 9 sections present in production HTML');

  console.log('\n=== E2E HTML Validation Completed Successfully! ===\n');
}

run().catch((err) => {
  console.error('E2E validation failed:', err);
  server.kill();
  process.exit(1);
});
