import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/context";

const Hotel = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="/images/main.webp" title={t.hotelPage.title} subtitle={t.hotelPage.subtitle} />

      {/* Overview */}
      <section className="hotel-section">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="hotel-body">{t.hotelPage.overview1}</p>
          <p className="hotel-body">{t.hotelPage.overview2}</p>
          <Link to="/rooms" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors mt-4">
            {t.hotelPage.viewRooms} <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Bar & Restaurant */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <img src="/images/restaurant.webp" alt="Restaurant" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="space-y-6">
            <p className="hotel-subheading">{t.hotelPage.diningLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.hotelPage.diningTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.hotelPage.diningText}</p>
            <Link to="/dining" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors">
              {t.hotelPage.exploreDining} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Rooftop */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 md:order-1">
            <p className="hotel-subheading">{t.hotelPage.rooftopLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.hotelPage.rooftopTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.hotelPage.rooftopText}</p>
          </div>
          <img src="/images/dining2.jpg" alt="Rooftop Bar" className="w-full aspect-[4/3] object-cover md:order-2" loading="lazy" />
        </div>
      </section>

      {/* Pool & Spa */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(/images/spa.jpg)" }} />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
          <p className="hotel-subheading">{t.hotelPage.wellnessLabel}</p>
          <h2 className="hotel-heading text-foreground">{t.hotelPage.wellnessTitle}</h2>
          <div className="gold-divider" />
          <p className="hotel-body">{t.hotelPage.wellnessText}</p>
          <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-4">
            {t.hotelPage.bookYourStay}
          </Link>
        </div>
      </section>

      {/* 24h Check-in */}
      <section className="hotel-section bg-card text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="hotel-subheading">{t.hotelPage.serviceLabel}</p>
          <h2 className="hotel-heading text-foreground">{t.hotelPage.serviceTitle}</h2>
          <div className="gold-divider" />
          <p className="hotel-body">{t.hotelPage.serviceText}</p>
          <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mt-4">
            {t.hotelPage.bookNow}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Hotel;
