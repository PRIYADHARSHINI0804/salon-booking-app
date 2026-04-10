export interface Stylist {
  id: string;
  name: string;
  role: string;
  specialty: string;
  experience: string;
  bio: string;
  rating: number;
  reviewsCount: number;
  image: string;
  portfolio: string[];
}

export interface Service {
  id: string;
  name: string;
  category: 'Hair' | 'Nails' | 'Skin' | 'Massage';
  description: string;
  price: number;
  duration: string;
  image: string;
}

export interface Booking {
  id: string;
  stylistId: string;
  serviceId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}
