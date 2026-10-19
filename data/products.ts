// TO BE REPLACED BY CLIENT: The 4 placeholder coffees below represent initial catalog offerings.
export interface ProductSizeOption {
  weight: '250g' | '500g';
  price: number;
}

export interface Product {
  id: string;
  name: string; // TO BE REPLACED BY CLIENT
  category: 'Single Origin' | 'Signature Roast' | 'Microlot';
  tastingNotes: string;
  roastLevel: number; // 1 to 5
  roastName: string;
  altitude: string;
  process: string;
  origin: string;
  description?: string;
  iconType: 'sun' | 'mountain' | 'leaf' | 'bean';
  sizes: ProductSizeOption[];
  bagColor: 'cream' | 'rust' | 'peach' | 'brown';
  accentColor: string;
  inStock: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'araku-valley-honey',
    name: 'Araku Valley Honey', // TO BE REPLACED BY CLIENT
    category: 'Single Origin',
    tastingNotes: 'Dark cocoa, orange peel, long caramel finish.',
    description: 'Single-origin beans, roasted in small batches. A balanced yellow honey harvest with sweet citrus acidity and deep cocoa warmth.',
    roastLevel: 3,
    roastName: 'Medium Roast',
    altitude: 'High-Elevation Shade Grown',
    process: 'Honey Process',
    origin: 'Eastern Ghats · Small batch roasted',
    iconType: 'sun',
    sizes: [
      { weight: '250g', price: 540 },
      { weight: '500g', price: 980 },
    ],
    bagColor: 'cream',
    accentColor: '#C44514',
    inStock: true,
  },
  {
    id: 'monsoon-malabar-aa',
    name: 'Monsoon Malabar AA', // TO BE REPLACED BY CLIENT
    category: 'Signature Roast',
    tastingNotes: 'Earthy cedar, pipe tobacco, heavy baker’s chocolate.',
    description: 'Naturally aged beans exposed to coastal monsoon winds, delivering a thick crema, low acidity, and a deep smoky sweetness.',
    roastLevel: 4,
    roastName: 'Medium-Dark Roast',
    altitude: 'Coastal Micro-Climate',
    process: 'Monsooned Washed',
    origin: 'Malabar Coast · Small batch roasted',
    iconType: 'mountain',
    sizes: [
      { weight: '250g', price: 490 },
      { weight: '500g', price: 890 },
    ],
    bagColor: 'rust',
    accentColor: '#F5EEE4',
    inStock: true,
  },
  {
    id: 'ratnagiri-estate-peaberry',
    name: 'Ratnagiri Estate Peaberry', // TO BE REPLACED BY CLIENT
    category: 'Microlot',
    tastingNotes: 'Ripe black plum, toasted cardamom, sweet brown sugar.',
    description: 'Rare single-bean peaberry cherries sorted by density, yielding exceptional aromatic complexity and delicate spiced notes.',
    roastLevel: 2,
    roastName: 'Light-Medium Roast',
    altitude: 'High-Altitude Micro-lot',
    process: 'Natural Process',
    origin: 'Western Highlands · Small batch roasted',
    iconType: 'leaf',
    sizes: [
      { weight: '250g', price: 620 },
      { weight: '500g', price: 1140 },
    ],
    bagColor: 'peach',
    accentColor: '#5A2410',
    inStock: true,
  },
  {
    id: 'jaipur-sunrise-blend',
    name: 'Jaipur Sunrise Blend', // TO BE REPLACED BY CLIENT
    category: 'Signature Roast',
    tastingNotes: 'Toasted hazelnut, candied citrus, silky date syrup.',
    description: 'Our roastery signature blend, balanced specifically for morning filter and stovetop extractions with rich golden body.',
    roastLevel: 3,
    roastName: 'Medium Roast',
    altitude: 'South Indian Shade Grown',
    process: 'Washed Arabica Blend',
    origin: 'Jaipur Roastery Blend · Small batch roasted',
    iconType: 'bean',
    sizes: [
      { weight: '250g', price: 460 },
      { weight: '500g', price: 840 },
    ],
    bagColor: 'brown',
    accentColor: '#F5EEE4',
    inStock: true,
  },
];

