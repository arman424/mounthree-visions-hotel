import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const Hotel = () => {
  return (
    <Layout>
      <PageHero
        image="/images/hero.jpg"
        title="Hotel Mounthree"
        subtitle="About Us"
      />

      {/* Overview */}
      <section className="hotel-section">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="hotel-body">
            Mounthree proudly offers a diverse array of accommodations meticulously designed to cater to the preferences of every guest while ensuring a stay that is both luxurious and exceedingly comfortable. Our extensive selection comprises six distinct types of rooms and two enchanting types of chalets, each crafted to deliver an exceptional experience that exceeds expectations.
          </p>
          <p className="hotel-body">
            Every room and chalet boasts breathtaking vistas of either the majestic canyon, the tranquil forest, or our exquisitely landscaped yard adorned with beautiful fountains. All accommodations come equipped with ultra-comfortable mattresses, LED TVs, advanced heating and cooling systems, and personalized service.
          </p>
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors mt-4"
          >
            View Rooms & Suites <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Bar & Restaurant */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <img
            src="/images/restaurant-hero.jpg"
            alt="Restaurant"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <div className="space-y-6">
            <p className="hotel-subheading">Dining</p>
            <h2 className="hotel-heading text-foreground">Bar & Restaurant</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">
              The elegantly designed bar and restaurant, located on the welcoming first floor, serves an extensive array of delectable dishes crafted from the freshest, locally sourced ingredients. Accommodating up to 70 guests, it's ideal for intimate dinners and larger celebrations alike.
            </p>
            <Link
              to="/dining"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors"
            >
              Explore Dining <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Rooftop */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 md:order-1">
            <p className="hotel-subheading">6th Floor</p>
            <h2 className="hotel-heading text-foreground">Aery Rooftop Bar</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">
              On the sixth floor of the main building, our Rooftop Bar and Restaurant provides an unparalleled dining experience. Guests can indulge in exquisite dishes and savor signature cocktails while taking in breathtaking views and enjoying curated music from our open-air venue.
            </p>
          </div>
          <img
            src="/images/dining2.jpg"
            alt="Rooftop Bar"
            className="w-full aspect-[4/3] object-cover md:order-2"
            loading="lazy"
          />
        </div>
      </section>

      {/* Pool & Spa */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/images/spa.jpg)" }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
          <p className="hotel-subheading">Wellness</p>
          <h2 className="hotel-heading text-foreground">Swimming Pool & Spa</h2>
          <div className="gold-divider" />
          <p className="hotel-body">
            Discover the ultimate oasis of relaxation at our stunning swimming pool and spa. Featuring a 12-meter adult swimming pool, a dedicated children's pool, a luxurious jacuzzi, and exquisite spa services including traditional Russian and Finnish saunas.
          </p>
          <Link
            to="/book"
            className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-4"
          >
            Book Your Stay
          </Link>
        </div>
      </section>

      {/* 24h Check-in */}
      <section className="hotel-section bg-card text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="hotel-subheading">Service</p>
          <h2 className="hotel-heading text-foreground">24h Check-in</h2>
          <div className="gold-divider" />
          <p className="hotel-body">
            We welcome you at any time of day or night. Our 24-hour check-in ensures your convenience, no matter when you arrive.
          </p>
          <Link
            to="/book"
            className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mt-4"
          >
            Book Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Hotel;
