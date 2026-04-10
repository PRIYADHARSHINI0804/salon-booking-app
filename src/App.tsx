import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  Calendar, 
  Scissors, 
  User as UserIcon, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  MapPin, 
  ArrowRight,
  Quote,
  Check,
  Clock,
  Plus
} from 'lucide-react';
import { STYLISTS, SERVICES } from './constants';
import { Stylist, Service, Booking } from './types';

// --- Components ---

const TopAppBar = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <header className="bg-background/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-outline-variant/10">
    <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <button 
        onClick={onMenuClick}
        className="text-on-background hover:opacity-70 transition-opacity active:scale-95 duration-200"
      >
        <Menu size={24} />
      </button>
      <h1 className="text-2xl font-bold tracking-[0.2em] text-on-background font-serif italic">ATELIER</h1>
      <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/20">
        <img 
          alt="User profile" 
          className="w-full h-full object-cover" 
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  </header>
);

const BottomNavBar = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Sparkles },
    { id: 'services', label: 'Services', icon: Scissors },
    { id: 'stylists', label: 'Stylists', icon: UserIcon },
    { id: 'bookings', label: 'Bookings', icon: Calendar },
  ];

  return (
    <nav className="bg-background/80 backdrop-blur-xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 z-50 rounded-t-3xl shadow-[0_-4px_24px_rgba(28,27,27,0.04)] border-t border-outline-variant/20">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            activeTab === tab.id ? 'text-primary-container scale-110' : 'text-on-background/60 hover:text-primary-container'
          }`}
        >
          <tab.icon size={24} fill={activeTab === tab.id ? 'currentColor' : 'none'} />
          <span className="font-sans text-[10px] uppercase tracking-tighter mt-1">{tab.label}</span>
        </button>
      ))}
    </nav>
  );
};

// --- Pages ---

const HomePage = ({ onNavigate }: { onNavigate: (page: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-16 pb-32"
  >
    {/* Hero Section */}
    <section className="relative h-[70vh] w-full flex items-center px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Salon Interior" 
          className="w-full h-full object-cover brightness-[0.85]" 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-background/40 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-2xl space-y-8">
        <div className="space-y-4">
          <span className="text-primary-container font-serif italic tracking-widest text-lg uppercase">The Art of Refinement</span>
          <h2 className="text-background font-serif text-5xl md:text-7xl leading-tight">Define Your <br/><span className="italic">Signature</span> Style</h2>
          <p className="text-background/80 text-lg md:text-xl font-light leading-relaxed max-w-md">Experience bespoke grooming in an environment designed for the modern connoisseur.</p>
        </div>
        <button 
          onClick={() => onNavigate('booking')}
          className="bg-gradient-to-r from-primary to-primary-container text-background px-10 py-5 rounded-lg font-semibold tracking-wide shadow-2xl hover:opacity-90 active:scale-95 transition-all duration-300 flex items-center gap-3"
        >
          BOOK AN APPOINTMENT
          <ArrowRight size={18} />
        </button>
      </div>
    </section>

    {/* Featured Services */}
    <section className="mt-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div className="space-y-2">
          <h3 className="font-serif text-4xl text-on-background">Our Services</h3>
          <div className="h-1 w-20 bg-primary-container"></div>
        </div>
        <button 
          onClick={() => onNavigate('services')}
          className="text-primary font-medium tracking-wider text-sm hover:underline underline-offset-8"
        >
          VIEW ALL SERVICES
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
        <div className="md:col-span-7 group relative overflow-hidden rounded-xl bg-surface flex flex-col justify-end p-8">
          <img 
            alt="Hair Styling" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src={SERVICES[0].image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/80 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h4 className="font-serif text-3xl text-background mb-2">Master Artistry</h4>
            <p className="text-background/70 max-w-sm mb-6">Bespoke cuts and coloring tailored to your unique facial architecture and lifestyle.</p>
            <div className="inline-flex px-4 py-2 bg-background/10 backdrop-blur-md border border-background/20 rounded-full text-background text-sm uppercase tracking-widest">Starting at $120</div>
          </div>
        </div>
        <div className="md:col-span-5 grid grid-rows-2 gap-6">
          <div className="group relative overflow-hidden rounded-xl bg-surface flex flex-col justify-end p-6">
            <img 
              alt="Spa Treatment" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={SERVICES[2].image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
            <div className="relative z-10">
              <h4 className="font-serif text-2xl text-background">The Ritual Spa</h4>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-xl bg-surface flex flex-col justify-end p-6">
            <img 
              alt="Grooming" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={SERVICES[3].image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
            <div className="relative z-10">
              <h4 className="font-serif text-2xl text-background">Precision Grooming</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Artisans */}
    <section className="mt-32 px-6 md:px-12 max-w-7xl mx-auto">
      <h3 className="font-serif text-4xl text-on-background mb-12 text-center">The Artisans</h3>
      <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar scroll-smooth snap-x">
        {STYLISTS.map((stylist) => (
          <div 
            key={stylist.id} 
            className="min-w-[280px] md:min-w-[340px] snap-center cursor-pointer group"
            onClick={() => onNavigate(`stylist-${stylist.id}`)}
          >
            <div className="bg-surface rounded-2xl overflow-hidden mb-6 aspect-[3/4]">
              <img 
                alt={stylist.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                src={stylist.image}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-center space-y-1">
              <h5 className="font-serif text-xl text-on-background">{stylist.name}</h5>
              <p className="text-on-background/60 uppercase text-xs tracking-widest font-semibold">{stylist.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Testimonial */}
    <section className="mt-32 px-6 py-24 bg-surface text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <Quote className="mx-auto text-primary-container" size={48} />
        <p className="font-serif text-2xl md:text-3xl italic text-on-background leading-relaxed">
          "Atelier isn't just a salon; it's a sanctuary. The attention to detail and the sense of exclusivity is unlike anything else in the city."
        </p>
        <div className="space-y-1">
          <h6 className="font-bold tracking-widest uppercase text-sm">Alexandra Sterling</h6>
          <p className="text-on-background/60 text-xs">Vogue Contributor</p>
        </div>
      </div>
    </section>
  </motion.div>
);

const ServicesPage = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  const categories = ['Hair', 'Nails', 'Skin', 'Massage'];
  const [activeCategory, setActiveCategory] = useState('Hair');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 px-6 max-w-6xl mx-auto"
    >
      <section className="mb-16">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight leading-none text-on-background">
          Curated <span className="italic text-primary font-light">Services</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-on-background/70 max-w-xl leading-relaxed">
          Expertly crafted treatments designed to elevate your natural beauty. Experience the art of modern grooming in our flagship atelier.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3 space-y-4 lg:sticky lg:top-24 h-fit">
          <div className="space-y-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`block w-full text-left py-2 tracking-wide border-l-2 pl-4 transition-all ${
                  activeCategory === cat 
                    ? 'text-primary font-semibold border-primary' 
                    : 'text-on-background/60 hover:text-primary border-transparent'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </aside>

        <div className="lg:col-span-9 space-y-24">
          <section>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <h2 className="font-serif text-4xl text-on-background">{activeCategory} Artistry</h2>
              <span className="text-xs uppercase tracking-[0.3em] text-on-background/40 font-bold">Signature Collection</span>
            </div>
            <div className="grid grid-cols-1 gap-12">
              {SERVICES.filter(s => s.category === activeCategory).map((service) => (
                <div key={service.id} className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-surface p-4 rounded-xl">
                  <div className="aspect-[4/5] overflow-hidden rounded-lg">
                    <img 
                      alt={service.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      src={service.image}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex flex-col justify-center pr-4">
                    <div className="flex justify-between items-baseline mb-4">
                      <h3 className="font-serif text-2xl">{service.name}</h3>
                      <span className="font-sans text-primary font-bold text-xl">${service.price}</span>
                    </div>
                    <p className="text-on-background/70 mb-8 leading-relaxed italic">{service.description}</p>
                    <button 
                      onClick={() => onNavigate('booking')}
                      className="w-full md:w-fit px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-background rounded-md font-bold tracking-widest text-sm uppercase transition-transform active:scale-95 shadow-lg"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const StylistDetailPage = ({ stylist, onNavigate }: { stylist: Stylist, onNavigate: (page: string) => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-24 pb-32 px-6 max-w-7xl mx-auto"
  >
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-20">
      <div className="md:col-span-5 relative">
        <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface">
          <img 
            className="w-full h-full object-cover" 
            src={stylist.image}
            alt={stylist.name}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-primary-container p-6 rounded-xl hidden md:block">
          <div className="flex items-center gap-2 text-background">
            <Star size={20} fill="currentColor" />
            <span className="font-bold text-xl">{stylist.rating}</span>
            <span className="text-sm uppercase tracking-widest opacity-80">({stylist.reviewsCount} Reviews)</span>
          </div>
        </div>
      </div>
      <div className="md:col-span-7 pb-4">
        <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4 block">{stylist.role}</span>
        <h1 className="font-serif text-6xl md:text-8xl leading-tight mb-6 text-on-background">
          {stylist.name.split(' ')[0]} <br/>{stylist.name.split(' ')[1]}
        </h1>
        <p className="text-lg text-on-background/70 leading-relaxed max-w-xl mb-10 font-light">
          {stylist.bio}
        </p>
        <button 
          onClick={() => onNavigate('booking')}
          className="bg-gradient-to-r from-primary to-primary-container text-background px-10 py-5 rounded-lg flex items-center gap-4 hover:opacity-90 active:scale-95 transition-all shadow-xl"
        >
          <span className="font-bold tracking-widest uppercase text-sm">Book with {stylist.name.split(' ')[0]}</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </section>

    <section className="mb-24">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-surface p-8 rounded-xl flex flex-col justify-between h-40">
          <span className="text-on-background/40 uppercase tracking-tighter text-xs">Experience</span>
          <span className="text-3xl font-serif">{stylist.experience}</span>
        </div>
        <div className="bg-background border border-outline-variant/10 p-8 rounded-xl flex flex-col justify-between h-40">
          <span className="text-on-background/40 uppercase tracking-tighter text-xs">Specialty</span>
          <span className="text-2xl font-serif leading-tight">{stylist.specialty.split(' ')[0]}</span>
        </div>
        <div className="bg-surface p-8 rounded-xl flex flex-col justify-between h-40">
          <span className="text-on-background/40 uppercase tracking-tighter text-xs">Rating</span>
          <span className="text-3xl font-serif">{stylist.rating}</span>
        </div>
        <div className="bg-background border border-outline-variant/10 p-8 rounded-xl flex flex-col justify-between h-40">
          <span className="text-on-background/40 uppercase tracking-tighter text-xs">Reviews</span>
          <span className="text-3xl font-serif">{stylist.reviewsCount}</span>
        </div>
      </div>
    </section>

    {stylist.portfolio.length > 0 && (
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-serif text-4xl mb-2">The Portfolio</h2>
            <p className="text-on-background/40 font-light">Selected works from recent sessions.</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-8 aspect-video rounded-xl overflow-hidden bg-surface">
            <img className="w-full h-full object-cover" src={stylist.portfolio[0]} alt="Portfolio 1" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-square rounded-xl overflow-hidden bg-surface">
            <img className="w-full h-full object-cover" src={stylist.portfolio[1]} alt="Portfolio 2" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-6 md:col-span-4 aspect-square rounded-xl overflow-hidden bg-surface">
            <img className="w-full h-full object-cover" src={stylist.portfolio[2]} alt="Portfolio 3" referrerPolicy="no-referrer" />
          </div>
          <div className="col-span-12 md:col-span-8 aspect-video rounded-xl overflow-hidden bg-surface">
            <img className="w-full h-full object-cover" src={stylist.portfolio[3]} alt="Portfolio 4" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>
    )}
  </motion.div>
);

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [selectedStylist, setSelectedStylist] = useState<Stylist | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(9);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const [isBooked, setIsBooked] = useState(false);

  if (isBooked) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-32 pb-32 px-6 flex flex-col items-center text-center max-w-md mx-auto"
      >
        <div className="w-24 h-24 bg-primary-container/20 rounded-full flex items-center justify-center mb-8">
          <Check className="text-primary-container" size={48} />
        </div>
        <h2 className="font-serif text-4xl mb-4">Reservation Confirmed</h2>
        <p className="text-on-background/60 mb-12 leading-relaxed">
          Your appointment with {selectedStylist?.name} for {selectedService?.name} has been secured for Oct 9 at {selectedTime}.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-on-background text-background rounded-lg font-bold tracking-widest uppercase text-sm"
        >
          Return Home
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto"
    >
      <section className="mb-12">
        <span className="font-sans text-primary-container uppercase tracking-widest text-xs font-bold mb-2 block">Reservation</span>
        <h2 className="font-serif text-4xl text-on-background leading-tight">Secure your <br/><i className="font-serif italic">moment of luxury.</i></h2>
      </section>

      {/* Stylist Selection */}
      <section className="mb-10">
        <div className="flex justify-between items-end mb-4">
          <h3 className="font-serif text-lg text-on-surface">Select Stylist</h3>
          <span className="text-xs text-on-background/40 tracking-wider uppercase">Lead Artisans</span>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x">
          {STYLISTS.map((stylist) => (
            <div 
              key={stylist.id} 
              onClick={() => setSelectedStylist(stylist)}
              className={`flex-none w-40 snap-start cursor-pointer transition-all duration-300 ${
                selectedStylist?.id === stylist.id ? 'opacity-100' : 'opacity-60 grayscale'
              }`}
            >
              <div className="relative rounded-xl overflow-hidden mb-2 aspect-[3/4] group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src={stylist.image}
                  alt={stylist.name}
                  referrerPolicy="no-referrer"
                />
                {selectedStylist?.id === stylist.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="text-background text-xs font-bold tracking-tighter uppercase">Selected</span>
                    </div>
                    <div className="absolute top-2 right-2 bg-primary-container text-background p-1 rounded-full">
                      <Check size={14} />
                    </div>
                  </>
                )}
              </div>
              <p className="font-serif text-md text-on-background">{stylist.name}</p>
              <p className="text-xs text-on-background/60">{stylist.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service Selection */}
      <section className="mb-10">
        <h3 className="font-serif text-lg mb-4">Select Service</h3>
        <div className="space-y-3">
          {SERVICES.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              className={`w-full p-4 rounded-xl border transition-all flex items-center justify-between ${
                selectedService?.id === service.id 
                  ? 'border-primary-container bg-primary-container/5' 
                  : 'border-outline-variant/20 bg-surface'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selectedService?.id === service.id ? 'bg-primary-container text-background' : 'bg-background text-primary-container'
                }`}>
                  <Scissors size={20} />
                </div>
                <div className="text-left">
                  <p className="font-serif font-medium">{service.name}</p>
                  <p className="text-xs text-on-background/40">{service.duration}</p>
                </div>
              </div>
              <span className="font-bold">${service.price}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Calendar */}
      <section className="mb-10 p-6 bg-surface rounded-xl border border-outline-variant/10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-serif text-lg">October 2024</h3>
          <div className="flex gap-4">
            <button className="text-on-surface hover:text-primary transition-colors"><ChevronLeft size={20} /></button>
            <button className="text-on-surface hover:text-primary transition-colors"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-y-4 text-center">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
            <div key={day} className="text-[10px] uppercase tracking-widest text-on-background/40 font-bold">{day}</div>
          ))}
          {[26, 27, 28, 29].map(d => (
            <div key={d} className="text-on-background/20 py-2">{d}</div>
          ))}
          {[1, 2, 3, 4, 5, 6, 7, 8].map(d => (
            <div key={d} className="text-on-background py-2 hover:bg-background rounded-lg cursor-pointer transition-colors">{d}</div>
          ))}
          <div className="bg-primary-container text-background py-2 rounded-lg font-bold shadow-lg shadow-primary-container/20 cursor-default">9</div>
          {[10, 11, 12, 13, 14, 15].map(d => (
            <div key={d} className="text-on-background py-2 hover:bg-background rounded-lg cursor-pointer transition-colors font-medium">{d}</div>
          ))}
        </div>
      </section>

      {/* Time Slots */}
      <section className="mb-10">
        <h3 className="font-serif text-lg mb-4">Available Slots</h3>
        <div className="grid grid-cols-3 gap-3">
          {times.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-3 px-2 border rounded-lg text-sm font-medium transition-all ${
                selectedTime === time 
                  ? 'bg-primary-container text-background border-primary-container shadow-md' 
                  : 'border-outline-variant/30 hover:bg-primary-container/10'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </section>

      {/* Summary Bento */}
      {selectedService && (
        <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-background rounded-2xl border border-outline-variant/10 md:col-span-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center">
                <Scissors className="text-primary-container" size={24} />
              </div>
              <div>
                <p className="text-xs text-on-background/40 uppercase tracking-tighter">Selected Service</p>
                <h4 className="font-serif text-lg">{selectedService.name}</h4>
              </div>
            </div>
            <p className="font-serif text-xl">${selectedService.price}</p>
          </div>
          <div className="p-6 bg-background rounded-2xl border border-outline-variant/10 flex flex-col justify-center">
            <p className="text-xs text-on-background/40 uppercase tracking-tighter mb-1">Date & Time</p>
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-lg">Oct 9</span>
              <span className="text-sm text-on-background/40">at</span>
              <span className="font-serif text-lg">{selectedTime || '--:--'}</span>
            </div>
          </div>
          <div className="p-6 bg-background rounded-2xl border border-outline-variant/10 flex flex-col justify-center">
            <p className="text-xs text-on-background/40 uppercase tracking-tighter mb-1">Location</p>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary-container" size={14} />
              <span className="font-serif text-md">Upper East Side Atelier</span>
            </div>
          </div>
        </section>
      )}

      {/* Action Button */}
      <div className="flex flex-col gap-4">
        <button 
          onClick={() => setIsBooked(true)}
          disabled={!selectedStylist || !selectedService || !selectedTime}
          className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-background rounded-lg font-bold tracking-widest uppercase text-sm shadow-xl shadow-primary/10 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Confirm Appointment
        </button>
        <p className="text-[10px] text-center text-on-background/40 leading-relaxed px-6">
          By confirming, you agree to our 24-hour cancellation policy. A deposit may be required for certain signature services.
        </p>
      </div>
    </motion.div>
  );

};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');

  // Handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(tab);
    window.scrollTo(0, 0);
  };

  // Handle direct navigation (e.g. from buttons)
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (currentPage === 'home') return <HomePage onNavigate={handleNavigate} />;
    if (currentPage === 'services') return <ServicesPage onNavigate={handleNavigate} />;
    if (currentPage === 'stylists') return (
      <div className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl mb-12">The Artisans</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {STYLISTS.map(s => (
            <div 
              key={s.id} 
              className="cursor-pointer group"
              onClick={() => handleNavigate(`stylist-${s.id}`)}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={s.image} alt={s.name} referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-serif text-2xl mb-1">{s.name}</h3>
              <p className="text-primary-container font-medium uppercase tracking-widest text-xs">{s.role}</p>
            </div>
          ))}
        </div>
      </div>
    );
    if (currentPage === 'bookings' || currentPage === 'booking') return <BookingPage />;
    
    // Stylist Detail
    if (currentPage.startsWith('stylist-')) {
      const id = currentPage.split('-')[1];
      const stylist = STYLISTS.find(s => s.id === id);
      if (stylist) return <StylistDetailPage stylist={stylist} onNavigate={handleNavigate} />;
    }

    return <HomePage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-background text-on-background selection:bg-primary-container/30">
      <TopAppBar onMenuClick={() => {}} />
      
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>

      <BottomNavBar activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Floating Action Button for quick booking */}
      {currentPage !== 'booking' && (
        <button 
          onClick={() => handleNavigate('booking')}
          className="fixed right-6 bottom-28 z-40 bg-gradient-to-br from-primary to-primary-container text-background w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <Plus size={32} />
        </button>
      )}
    </div>
  );
}

