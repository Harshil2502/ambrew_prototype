import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { CartProvider } from '../components/context/CartContext';
import { CartDrawer } from '../components/layout/CartDrawer';
import { TopBar } from '../components/layout/TopBar';
import { Navbar } from '../components/layout/Navbar';
import { Preloader } from '../components/Preloader';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ambrew.in'),
  title: 'Ambrew Coffee Roasters | Jaipur, India',
  description:
    'Artisan shade-grown single-origin arabicas and seasonal microlots roasted fresh in Jaipur, Rajasthan. Roasted in small batches.',
  keywords: [
    'Ambrew Coffee',
    'Jaipur coffee roasters',
    'Specialty coffee India',
    'Araku Valley Honey',
    'Monsoon Malabar',
    'Ratnagiri Peaberry',
    'Artisan Indian Coffee',
  ],
  authors: [
    { name: 'Tanishk Kedia' },
    { name: 'Arohi Taparia' },
  ],
  creator: 'Ambrew Coffee Roasters',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ambrew.in',
    siteName: 'Ambrew Coffee',
    title: 'Ambrew Coffee Roasters | Every morning deserves a sunrise.',
    description:
      'Artisan shade-grown single-origin arabicas and seasonal microlots roasted fresh in Jaipur, Rajasthan.',
    images: [
      {
        url: '/brand/letterhead.png',
        width: 1132,
        height: 1600,
        alt: 'Ambrew Coffee Roasters Jaipur Brand Stationery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ambrew Coffee Roasters | Jaipur, India',
    description:
      'Artisan shade-grown single-origin arabicas roasted fresh in Jaipur, Rajasthan.',
    images: ['/brand/letterhead.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://ambrew.in/#organization',
        name: 'Ambrew Coffee Roasters',
        url: 'https://ambrew.in',
        logo: 'https://ambrew.in/brand/logo.png',
        email: 'ambrew2002@gmail.com',
        telephone: '+91-9829765556',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Jaipur',
          addressRegion: 'Rajasthan',
          postalCode: '302001',
          addressCountry: 'IN',
        },
        founders: [
          {
            '@type': 'Person',
            name: 'Tanishk Kedia',
            jobTitle: 'Founder & Head Roaster',
          },
          {
            '@type': 'Person',
            name: 'Arohi Taparia',
            jobTitle: 'Co-Founder',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ambrew.in/#website',
        url: 'https://ambrew.in',
        name: 'Ambrew Coffee',
        publisher: {
          '@id': 'https://ambrew.in/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('ambrew_preloader_seen')&&!window.location.search.includes('preloader=1')){document.documentElement.classList.add('preloader-skipped');}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-cream text-brown font-sans antialiased selection:bg-rust selection:text-cream min-h-screen flex flex-col">
        <Preloader />
        <CartProvider>
          <TopBar />
          <Navbar />
          <main className="flex-1">{children}</main>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
