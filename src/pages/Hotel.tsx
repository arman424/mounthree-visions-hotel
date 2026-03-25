import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { ArrowRight, Dumbbell, Baby, Presentation } from "lucide-react";
import { useI18n } from "@/i18n/context";

const Hotel = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="images/main.webp" title={t.facilitiesPage.title} subtitle={t.facilitiesPage.subtitle} />

      {/* Room Service */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <img src="images/room2.jpg" alt="Room Service" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="space-y-6">
            <p className="hotel-subheading">{t.facilitiesPage.roomServiceLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.facilitiesPage.roomServiceTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.facilitiesPage.roomServiceText}</p>
          </div>
        </div>
      </section>

      {/* Bar & Restaurant */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6 md:order-1">
            <p className="hotel-subheading">{t.facilitiesPage.diningLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.facilitiesPage.diningTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.facilitiesPage.diningText}</p>
            <Link to="/dining" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors">
              {t.facilitiesPage.viewMenu} <ArrowRight size={14} />
            </Link>
          </div>
          <img src="images/restaurant.webp" alt="Restaurant" className="w-full aspect-[4/3] object-cover md:order-2" loading="lazy" />
        </div>
      </section>

      {/* Aery Rooftop */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <img src="images/dining2.jpg" alt="Aery Rooftop Bar" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="space-y-6">
            <p className="hotel-subheading">{t.facilitiesPage.rooftopLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.facilitiesPage.rooftopTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.facilitiesPage.rooftopText}</p>
            <Link to="/dining" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors">
              {t.facilitiesPage.viewMenu} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Swimming Pool & Spa */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(images/spa.jpg)" }} />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
          <p className="hotel-subheading">{t.facilitiesPage.wellnessLabel}</p>
          <h2 className="hotel-heading text-foreground">{t.facilitiesPage.wellnessTitle}</h2>
          <div className="gold-divider" />
          <p className="hotel-body">{t.facilitiesPage.wellnessText}</p>
          <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-4">
            {t.facilitiesPage.bookYourStay}
          </Link>
        </div>
      </section>

      {/* 24h Check-in */}
      <section className="hotel-section bg-card text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="hotel-subheading">{t.facilitiesPage.serviceLabel}</p>
          <h2 className="hotel-heading text-foreground">{t.facilitiesPage.serviceTitle}</h2>
          <div className="gold-divider" />
          <p className="hotel-body">{t.facilitiesPage.serviceText}</p>
        </div>
      </section>

      {/* GYM & GAMEZONE */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <p className="hotel-subheading">{t.facilitiesPage.gymLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.facilitiesPage.gymTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.facilitiesPage.gymText}</p>
          </div>
          <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center">
            <Dumbbell size={64} className="text-primary/40" />
          </div>
        </div>
      </section>

      {/* Play Room */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="w-full aspect-[4/3] bg-muted flex items-center justify-center md:order-1">
            <Baby size={64} className="text-primary/40" />
          </div>
          <div className="space-y-6 md:order-2">
            <p className="hotel-subheading">{t.facilitiesPage.playRoomLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.facilitiesPage.playRoomTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.facilitiesPage.playRoomText}</p>
          </div>
        </div>
      </section>

      {/* Conference Hall */}
      <section className="hotel-section text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="hotel-subheading">{t.facilitiesPage.conferenceLabel}</p>
          <h2 className="hotel-heading text-foreground">{t.facilitiesPage.conferenceTitle}</h2>
          <div className="gold-divider" />
          <p className="hotel-body">{t.facilitiesPage.conferenceText}</p>
          <ul className="flex flex-wrap justify-center gap-4 mt-4">
            {t.facilitiesPage.conferenceIncludes.map((item) => (
              <li key={item} className="text-sm text-muted-foreground border border-border px-4 py-2">
                {item}
              </li>
            ))}
          </ul>
          <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mt-4">
            {t.facilitiesPage.bookNow}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Hotel;
