import { Stylist, Service } from './types';

export const STYLISTS: Stylist[] = [
  {
    id: '1',
    name: 'Julianne Vance',
    role: 'Creative Director',
    specialty: 'Architectural Cutting & Bespoke Color',
    experience: '12+ Years',
    bio: 'Specializing in architectural cutting and bespoke color transitions. With over 12 years of experience in London and Paris ateliers, Julianne brings a structural yet organic approach to every client.',
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=800',
    portfolio: [
      'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800'
    ]
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Master Stylist',
    specialty: 'Texture Expert',
    experience: '10+ Years',
    bio: 'Marcus is renowned for his ability to work with natural textures, creating effortless looks that enhance the individual\'s unique hair pattern.',
    rating: 4.8,
    reviewsCount: 95,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
    portfolio: []
  },
  {
    id: '3',
    name: 'Elena Rossi',
    role: 'Senior Colorist',
    specialty: 'Artisan Balayage',
    experience: '8+ Years',
    bio: 'Elena is a master of light and shadow, specializing in hand-painted balayage that mimics the natural sun-kissed glow of childhood.',
    rating: 4.9,
    reviewsCount: 112,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800',
    portfolio: []
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    name: 'Atelier Signature Cut',
    category: 'Hair',
    description: 'A precision-tailored cut designed by our master stylists to complement your unique features and lifestyle.',
    price: 120,
    duration: '60 Mins',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    name: 'Artisan Balayage',
    category: 'Hair',
    description: 'Hand-painted highlights for a sun-kissed, dimensionally rich finish that grows out seamlessly.',
    price: 250,
    duration: '180 Mins',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    name: 'Luminous Renewal Facial',
    category: 'Skin',
    description: 'A multi-step journey involving enzyme peels, ultrasound infusion, and cold-pressed botanical serums.',
    price: 185,
    duration: '90 Mins',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    name: 'The Sculpted Gel',
    category: 'Nails',
    description: 'Durable, high-gloss extensions sculpted to perfection. Includes meticulous cuticle care and hydration.',
    price: 95,
    duration: '75 Mins',
    image: 'https://images.unsplash.com/photo-1604654894610-df490c81726a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's5',
    name: 'Deep Tissue Atelier',
    category: 'Massage',
    description: 'Focuses on realigning deeper layers of muscles and connective tissue through intentional, slow strokes.',
    price: 145,
    duration: '60 Mins',
    image: 'https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800'
  }
];
