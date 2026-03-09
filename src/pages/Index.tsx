import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import EventPopup from "@/components/EventPopup";
import { Wifi, Dumbbell, UtensilsCrossed, Wine, ArrowRight } from "lucide-react";

const rooms = [
  { name: "Standard Room", image: "/images/room2.jpg", guests: 2, area: "26-31 m²", price: "58,000֏" },
  { name: "Deluxe Room", image: "/images/room3.jpg", guests: 2, area: "36 m²", price: "On request" },
  { name: "Family Suite", image: "/images/room4.jpg", guests: 2, area: "43-63 m²", price: "On request" },
  { name: "Signature Suite", image: "/images/room5.jpg", guests: 2, area: "43-63 m²", price: "125,000֏" },
];

const benefits = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "Stay connected with high-speed internet throughout the resort" },
  { icon: Dumbbell, title: "Sport Center", desc: "Modern gym and sports facilities for active guests" },
  { icon: UtensilsCrossed, title: "Restaurant", desc: "Fine dining with locally sourced ingredients" },
  { icon: Wine, title: "Hotel Bar", desc: "Curated cocktails and premium spirits" },
];

const Index = () => {
  return (
    <Layout>
      <EventPopup />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <p className="hotel-subheading mb-6">Welcome to</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground">
            Mounthree
          </h1>
          <p className="font-serif text-xl md:text-2xl text-foreground/70 mt-4 italic font-light">
            Mystic Peaks
          </p>
          <div className="gold-divider mt-8" />
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Link
              to="/rooms"
              className="text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Explore Rooms
            </Link>
            <Link
              to="/book"
              className="text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <p className="hotel-subheading">About</p>
            <h2 className="hotel-heading text-foreground">Hotel Mounthree</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">
              Mounthree is poised to become Lori's foremost destination, attracting tourists from around the world and significantly contributing to the local economy. Through meticulous planning and execution, the resort offers unparalleled accommodations, exceptional service, and a unique blend of natural beauty and modern convenience.
            </p>
            <Link
              to="/hotel"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors mt-2"
            >
              Discover More <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative">
            <img
              src="/images/hero.jpg"
              alt="Hotel Mounthree aerial view"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/location.jpg)" }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
          <p className="hotel-subheading">Location</p>
          <h2 className="hotel-heading text-foreground">Heart of Armenia</h2>
          <div className="gold-divider" />
          <p className="hotel-body">
            Nestled on the banks of the picturesque Pambak River, amidst the breathtaking natural beauty of Lori. Located adjacent to the charming Pambak Village, surrounded by majestic mountains and lush forests, offering an unparalleled sense of tranquility.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="hotel-subheading">Amenities</p>
            <h2 className="hotel-heading text-foreground">Our Benefits</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {benefits.map((b) => (
              <div key={b.title} className="space-y-4 text-center">
                <div className="w-16 h-16 mx-auto border border-primary/30 flex items-center justify-center">
                  <b.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <p className="hotel-subheading">Accommodations</p>
            <h2 className="hotel-heading text-foreground">Rooms & Suites</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <Link
                key={room.name}
                to="/rooms"
                className="group relative overflow-hidden aspect-[3/2]"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1">
                  <h3 className="font-serif text-2xl text-foreground">{room.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {room.guests} Guests · {room.area} · From {room.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors"
            >
              View All Rooms <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img
              src="/images/restaurant-hero.jpg"
              alt="Mounthree Restaurant"
              className="w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <p className="hotel-subheading">Dining</p>
            <h2 className="hotel-heading text-foreground">Restaurant & Lounge Bar</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">
              Our elegant bar and restaurant on the first floor offers delicious dishes made from fresh, locally sourced ingredients for up to 70 guests. Experience fine dining with breathtaking mountain views.
            </p>
            <Link
              to="/dining"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors mt-2"
            >
              Explore Dining <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/spa.jpg)" }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-6 space-y-6">
          <p className="hotel-subheading">Experience</p>
          <h2 className="hotel-heading text-foreground">Begin Your Journey</h2>
          <div className="gold-divider" />
          <p className="hotel-body max-w-xl mx-auto">
            Discover the ultimate oasis of relaxation at Mounthree. Pool, spa, sauna, and unforgettable mountain views await.
          </p>
          <Link
            to="/book"
            className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-4"
          >
            Book Your Stay
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
