import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useI18n } from "@/i18n/context";
import { Wifi, Dumbbell, UtensilsCrossed, Wine, Car, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const rooms = [
  { nameKey: "deluxeMountain" as const, images: ["images/delux-forest1.jpeg", "images/delux-forest2.jpeg", "images/delux-forest3.jpeg"], guests: 2, area: "36 m²", price: "87,000֏" },
  { nameKey: "standardCourtyard" as const, images: ["images/standard-countryard1.jpeg", "images/standard-countryard2.jpeg", "images/standard-countryard3.jpeg"], guests: 2, area: "26-31 m²", price: "67,000֏" },
  { nameKey: "familySuite" as const, images: ["images/family1.jpeg", "images/family2.jpeg", "images/family3.jpeg", "images/family4.jpeg"], guests: 2, area: "43-63 m²", price: "98,000֏" },
  { nameKey: "deluxeCourtyard" as const, images: ["images/delux-countryard1.jpeg", "images/delux-countryard2.jpeg", "images/delux-countryard3.jpeg", "images/delux-countryard4.jpeg"], guests: 2, area: "36 m²", price: "87,000֏" },
  { nameKey: "signatureSuite" as const, images: ["images/signature-lux4.jpeg", "images/signature-lux2.jpeg", "images/signature-lux3.jpeg"], guests: 2, area: "43-63 m²", price: "148,000֏" },
  { nameKey: "chalet" as const, images: ["images/shale1.jpeg", "images/shale2.jpeg", "images/shale3.jpeg", "images/shale4.jpeg"], guests: 2, area: "45 m²", price: "108,000֏" },
];

const Index = () => {
  const { t } = useI18n();

  const benefits = [
    { icon: Wifi, title: t.amenities.wifi, desc: t.amenities.wifiDesc },
    { icon: Dumbbell, title: t.amenities.sport, desc: t.amenities.sportDesc },
    { icon: UtensilsCrossed, title: t.amenities.restaurant, desc: t.amenities.restaurantDesc },
    { icon: Wine, title: t.amenities.bar, desc: t.amenities.barDesc },
    { icon: Car, title: t.amenities.parking, desc: t.amenities.parkingDesc },
  ];

  return (
    <Layout>
      {/*<EventPopup />*/}
      <section className="relative h-[88vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          <video className="w-full h-full object-cover" playsInline autoPlay loop muted>
            <source type="video/mp4" src="images/mounthree.mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <p className="hotel-subheading mb-3 md:mb-6">{t.hero.welcomeTo}</p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide text-foreground">Mounthree</h1>
          <p className="font-serif text-lg md:text-2xl text-foreground/70 mt-2 md:mt-4 italic font-light">{t.hero.subtitle}</p>
          <div className="gold-divider mt-4 md:mt-8"/>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-10 justify-center">
            <Link to="/rooms"
                  className="text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.hero.exploreRooms}
            </Link>
            <Link to="/book"
                  className="text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              {t.hero.bookNow}
            </Link>
          </div>
          {/* start Search form script */}
          <div id="block-search">
            <div id="be-search-form" className="be-container">
              <a href="https://exely.com/" rel="nofollow" target="_blank">Hotel management software</a>
            </div>
          </div>
          {/* end Search form script */}
        </div>
      </section>

      {/* About */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="space-y-6">
            <p className="hotel-subheading">{t.about.label}</p>
            <h2 className="hotel-heading text-foreground">{t.about.title}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.about.text}</p>
            <Link to="/hotel" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors mt-2">
              {t.about.discoverMore} <ArrowRight size={14} />
            </Link>
          </div>
          <div className="relative">
            <img src="images/main.webp" alt="Hotel Mounthree aerial view" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(images/location.jpg)" }} />
        <div className="hero-overlay" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 space-y-6">
          <p className="hotel-subheading">{t.location.label}</p>
          <h2 className="hotel-heading text-foreground">{t.location.title}</h2>
          <div className="gold-divider" />
          <p className="hotel-body">{t.location.text}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="hotel-subheading">{t.amenities.label}</p>
            <h2 className="hotel-heading text-foreground">{t.amenities.title}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
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
            <p className="hotel-subheading">{t.roomsPreview.label}</p>
            <h2 className="hotel-heading text-foreground">{t.roomsPreview.title}</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <div key={room.nameKey} className="group relative overflow-hidden">
                <Carousel className="w-full" opts={{ loop: true }}>
                  <CarouselContent>
                    {room.images.map((img, i) => (
                      <CarouselItem key={i}>
                        <img src={img} alt={`${t.roomsPage.roomNames[room.nameKey]} ${i + 1}`} className="w-full aspect-[3/2] object-cover" loading="lazy" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 border-0 hover:bg-background/80" />
                  <CarouselNext className="right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 border-0 hover:bg-background/80" />
                </Carousel>
                <div className="p-4 space-y-2">
                  <h3 className="font-serif text-xl text-foreground">{t.roomsPage.roomNames[room.nameKey]}</h3>
                  <p className="text-sm text-muted-foreground">
                    {room.guests} {t.roomsPreview.guests} · {room.area} · {t.roomsPreview.from} {room.price}
                  </p>
                  <Link to="/rooms" className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.15em] font-semibold text-primary hover:text-gold-light transition-colors">
                    {t.roomsPreview.viewAll} <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center !mt-6">
            <Link to="/rooms" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.1em] font-semibold px-5 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.roomsPreview.seeMore} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Restaurant Preview */}
      <section className="hotel-section bg-card">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="relative order-2 md:order-1">
            <img src="images/restaurant.webp" alt="Mounthree Restaurant" className="w-full aspect-[4/5] object-cover" loading="lazy" />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <p className="hotel-subheading">{t.restaurantPreview.label}</p>
            <h2 className="hotel-heading text-foreground">{t.restaurantPreview.title}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.restaurantPreview.text}</p>
            <Link to="/dining" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-primary hover:text-gold-light transition-colors mt-2">
              {t.restaurantPreview.exploreDining} <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(images/spa.jpg)" }} />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-6 space-y-6">
          <p className="hotel-subheading">{t.cta.label}</p>
          <h2 className="hotel-heading text-foreground">{t.cta.title}</h2>
          <div className="gold-divider" />
          <p className="hotel-body max-w-xl mx-auto">{t.cta.text}</p>
          <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all mt-4">
            {t.cta.bookYourStay}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
