export interface AdminOrder {
  id: string;
  customer: string;
  city: string;
  items: string;
  amount: string;
  status: 'Dispatched' | 'Roasting' | 'Packed' | 'Delivered';
  date: string;
}

export interface AdminLowStock {
  item: string;
  quantity: string;
  status: string;
}

export interface AdminCapability {
  title: string;
  description: string;
}

export const ADMIN_ORDERS: AdminOrder[] = [
  {
    id: 'AMB-1084',
    customer: 'Rohini S.',
    city: 'Mumbai',
    items: '2 × Araku Valley Honey (250g)',
    amount: '₹1,080',
    status: 'Dispatched',
    date: '10:42 AM',
  },
  {
    id: 'AMB-1083',
    customer: 'Kabir Mehta',
    city: 'Bengaluru',
    items: '1 × Ratnagiri Peaberry (500g)',
    amount: '₹1,140',
    status: 'Roasting',
    date: '09:15 AM',
  },
  {
    id: 'AMB-1082',
    customer: 'Ananya Varma',
    city: 'Jaipur',
    items: '1 × Ambrew Gift Chest',
    amount: '₹2,450',
    status: 'Packed',
    date: 'Yesterday',
  },
  {
    id: 'AMB-1081',
    customer: 'Siddharth N.',
    city: 'New Delhi',
    items: 'Monsoon Malabar AA (250g)',
    amount: '₹441',
    status: 'Delivered',
    date: '18 Oct',
  },
];

export const ADMIN_LOW_STOCK: AdminLowStock[] = [
  { item: 'Araku Green Bean Lot', quantity: '18 kg remaining', status: 'Roast scheduled' },
];

export const ADMIN_CAPABILITIES: AdminCapability[] = [
  {
    title: 'Inventory & Roasts',
    description: 'Track green bean lots, roast dates, and live bag counts across every harvest.',
  },
  {
    title: 'Orders & Subscriptions',
    description: 'Manage recurring deliveries, custom grind requests, and dispatch labels in one place.',
  },
  {
    title: 'Storefront Content',
    description: 'Update seasonal tasting notes, origin stories, and brew advice without technical help.',
  },
  {
    title: 'Sales & Margins',
    description: 'Review daily order volume, recurring subscription revenue, and delivery thresholds.',
  },
];

