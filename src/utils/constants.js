// ── API ──────────────────────────────────────────────────────────────────────
export const API_URL =
  'https://nxtwave-assessments-backend-nxtwave-media-static.s3-ap-south-1.amazonaws.com/topin_beta/media/content_loading/uploads/19e5009c-c751-4324-a3fe-3a29d46587f2_destinationData.json';

// ── Navigation Links ──────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',       href: '#hero'         },
  { label: 'About',      href: '#about'        },
  { label: 'Schedule',   href: '#schedule'     },
  { label: 'Membership', href: '#membership'   },
  { label: 'Pricing',    href: '#pricing'      },
];

// ── Destination Filter Tags ───────────────────────────────────────────────────
export const FILTER_TAGS = [
  'All',
  'Beach Paradise',
  'Cultural Gem',
  'Island Escape',
  'Luxury',
  'Adventure',
  'Romantic',
  'Pristine',
  'Hidden Gem',
  'Exotic',
  'Scenic',
  'Remote',
  'Relaxation',
];

// ── Fallback Destinations (used when API fails / CORS) ────────────────────────
export const FALLBACK_DESTINATIONS = [
  {
    id: 1,
    name: 'Maldives',
    location: 'South Asia',
    image: 'https://images.unsplash.com/photo-1573790387438-4da905039392?w=600&q=80',
    rating: 4.9,
    tag: 'Beach Paradise',
    price: 2400,
    description: 'Crystal-clear waters and overwater bungalows in the Indian Ocean.',
  },
  {
    id: 2,
    name: 'Bali',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    rating: 4.8,
    tag: 'Cultural Gem',
    price: 1200,
    description: 'Lush rice terraces, ancient temples and vibrant nightlife.',
  },
  {
    id: 3,
    name: 'Phuket',
    location: 'Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&q=80',
    rating: 4.7,
    tag: 'Island Escape',
    price: 980,
    description: 'Emerald waters, white sand beaches and vibrant culture.',
  },
  {
    id: 4,
    name: 'Seychelles',
    location: 'Indian Ocean',
    image: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=600&q=80',
    rating: 4.9,
    tag: 'Luxury',
    price: 3100,
    description: 'Pristine granite boulders, coral reefs and rare wildlife.',
  },
  {
    id: 5,
    name: 'Santorini',
    location: 'Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    rating: 4.8,
    tag: 'Scenic',
    price: 1800,
    description: 'Iconic whitewashed cliffs overlooking the azure Aegean.',
  },
  {
    id: 6,
    name: 'Hawaii',
    location: 'Pacific Ocean',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80',
    rating: 4.7,
    tag: 'Adventure',
    price: 2200,
    description: 'Volcanic landscapes, sea turtles and legendary surf breaks.',
  },
  {
    id: 7,
    name: 'Fiji',
    location: 'South Pacific',
    image: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=600&q=80',
    rating: 4.8,
    tag: 'Remote',
    price: 2600,
    description: '314 islands of pure tropical bliss with coral reefs.',
  },
  {
    id: 8,
    name: 'Palawan',
    location: 'Philippines',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80',
    rating: 4.9,
    tag: 'Pristine',
    price: 890,
    description: 'UNESCO-listed lagoons and the world\'s most beautiful island.',
  },
  {
    id: 9,
    name: 'Zanzibar',
    location: 'East Africa',
    image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?w=600&q=80',
    rating: 4.6,
    tag: 'Exotic',
    price: 1450,
    description: 'Spice island with turquoise waters and historic Stone Town.',
  },
  {
    id: 10,
    name: 'Ko Samui',
    location: 'Thailand',
    image: 'https://images.unsplash.com/photo-1502700807168-484a3e7889d0?w=600&q=80',
    rating: 4.7,
    tag: 'Relaxation',
    price: 1050,
    description: 'Coconut groves, luxury spas and stunning Gulf of Thailand.',
  },
  {
    id: 11,
    name: 'Tahiti',
    location: 'French Polynesia',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600&q=80',
    rating: 4.8,
    tag: 'Romantic',
    price: 3400,
    description: 'Black-sand beaches and impossibly blue lagoons await.',
  },
  {
    id: 12,
    name: 'Langkawi',
    location: 'Malaysia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80',
    rating: 4.6,
    tag: 'Hidden Gem',
    price: 780,
    description: 'Duty-free island of legend with mangrove forests and waterfalls.',
  },
];

// ── Hero Stats ────────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: '200+', label: 'Destinations' },
  { value: '50K+', label: 'Happy Travelers' },
  { value: '4.9★', label: 'Avg Rating'  },
];

// ── Promo Offers ──────────────────────────────────────────────────────────────
export const PROMO_OFFERS = [
  { value: '30%', label: 'Students Off'    },
  { value: 'Free', label: 'Cancellation'  },
  { value: '2×',  label: 'Reward Points'  },
];

// ── Booking Perks ─────────────────────────────────────────────────────────────
export const BOOKING_PERKS = [
  'Best price guarantee — we match any deal',
  '24/7 dedicated travel support team',
  'Flexible cancellation up to 48 hours before',
  'Curated, expert-verified destinations only',
];

// ── Trust Stats ───────────────────────────────────────────────────────────────
export const TRUST_STATS = [
  { value: '50K+', label: 'Bookings' },
  { value: '4.9★', label: 'Rating'   },
  { value: '100%', label: 'Secure'   },
];

// ── Footer Links ──────────────────────────────────────────────────────────────
export const FOOTER_LINKS = {
  Explore:  ['Destinations', 'Featured', 'New Arrivals', 'Top Rated', 'Offers'],
  Company:  ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
  Support:  ['Help Center', 'Cancellation', 'Refund Policy', 'Privacy', 'Terms'],
};
