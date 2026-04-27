import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Obsidian Chronograph',
    price: 495,
    category: 'Watch',
    description: 'A masterpiece of precision and elegance. Features a matte obsidian dial with gold accents and a genuine leather strap.',
    image: 'https://picsum.photos/seed/watch1/800/600',
    featured: true
  },
  {
    id: '2',
    name: 'Emerald Vanity Bag',
    price: 850,
    category: 'Bags',
    description: 'Crafted from premium Italian leather, this emerald green handbag is the perfect statement piece for any evening.',
    image: 'https://picsum.photos/seed/bag1/800/600',
    featured: true
  },
  {
    id: '3',
    name: 'Solaris Pendant',
    price: 1200,
    category: 'Jewelry',
    description: '18k gold pendant featuring a central ethically sourced diamond. A timeless piece that captures the essence of light.',
    image: 'https://picsum.photos/seed/jewelry1/800/600',
    featured: true
  },
  {
    id: '4',
    name: 'Midnight Oud',
    price: 180,
    category: 'Perfume',
    description: 'A deep, mysterious fragrance with notes of rare oud, dark chocolate, and spicy saffron.',
    image: 'https://picsum.photos/seed/perfume1/800/600',
    featured: true
  },
  {
    id: '5',
    name: 'Lunar Minimalist',
    price: 320,
    category: 'Watch',
    description: 'Sleek silver finish with a white minimalist dial. Designed for those who value simplicity and clarity.',
    image: 'https://picsum.photos/seed/watch2/800/600'
  },
  {
    id: '6',
    name: 'Noir Tote',
    price: 650,
    category: 'Bags',
    description: 'Spacious yet refined. The Noir Tote is your companion for both the boardroom and the weekend getaway.',
    image: 'https://picsum.photos/seed/bag2/800/600'
  },
  {
     id: '7',
     name: 'Ethereal Mist',
     price: 150,
     category: 'Perfume',
     description: 'Light, airy, and floral. A breath of fresh jasmine and citrus for the modern romantic.',
     image: 'https://picsum.photos/seed/perfume2/800/600'
  },
  {
    id: '8',
    name: 'Aurelia Hoops',
    price: 450,
    category: 'Jewelry',
    description: 'Classic gold hoops with a hammered texture for a unique, artisanal feel.',
    image: 'https://picsum.photos/seed/jewelry2/800/600'
  }
];

export const CATEGORIES: string[] = ['All', 'Watch', 'Bags', 'Perfume', 'Jewelry'];
