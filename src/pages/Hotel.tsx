import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/i18n/context";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Hotel = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="images/main.webp" title={t.facilitiesPage.title} subtitle={t.facilitiesPage.subtitle} />

      {/* Room Service */}
      <section className="hotel-section bg-card">
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

      {/* Swimming Pool & Spa */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <p className="hotel-subheading">{t.facilitiesPage.wellnessLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.facilitiesPage.wellnessTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.facilitiesPage.wellnessText}</p>
            <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-4">
              {t.facilitiesPage.bookYourStay}
            </Link>
          </div>
          <img src="images/spa.jpg" alt="Swimming Pool & Spa" className="w-full aspect-[4/3] object-cover" loading="lazy" />
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
          <Carousel className="w-full group" opts={{ loop: true }}>
            <CarouselContent>
              {["images/gym1.jpg", "images/gym2.jpg"].map((img, i) => (
                <CarouselItem key={i}>
                  <img src={img} alt={`Gym & Game Zone ${i + 1}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 border-0 hover:bg-background/80" />
            <CarouselNext className="right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 border-0 hover:bg-background/80" />
          </Carousel>
        </div>
      </section>

      {/* Play Room */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Carousel className="w-full group" opts={{ loop: true }}>
            <CarouselContent>
              {["images/playroom1.jpg", "images/playroom2.jpg"].map((img, i) => (
                <CarouselItem key={i}>
                  <img src={img} alt={`Play Room ${i + 1}`} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 border-0 hover:bg-background/80" />
            <CarouselNext className="right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 border-0 hover:bg-background/80" />
          </Carousel>
          <div className="space-y-6">
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
