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

const roomsData = [
  {
    nameKey: "standardMountain" as const,
    images: ["images/room2.jpg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 15, price: "69,000֏",
    featureKeys: ["kingBed", "showerBathroom", "modernAmenities", "balconyViews"] as const,
  },
  {
    nameKey: "standardCourtyard" as const,
    images: ["images/standard-countryard1.jpeg", "images/standard-countryard2.jpeg", "images/standard-countryard3.jpeg", "images/standard-countryard4.jpeg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 6, price: "67,000֏",
    featureKeys: ["twinBeds", "showerBathroom", "modernAmenitiesPleasant", "courtyardBalcony"] as const,
  },
  {
    nameKey: "standardNoBalcony" as const,
    images: ["images/room2.jpg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 15, price: "64,000֏",
    featureKeys: ["kingBed", "showerBathroom", "modernAmenitiesPleasant"] as const,
  },
  {
    nameKey: "standardTwin" as const,
    images: ["images/room1.jpeg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 3, price: "67,000֏",
    featureKeys: ["twinBeds", "showerBathroom", "modernAmenitiesPleasant", "balconyViews"] as const,
  },
  {
    nameKey: "standardTwinNoBalcony" as const,
    images: ["images/no-balcony1.jpeg", "images/no-balcony2.jpeg", "images/no-balcony3.jpeg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 2, price: "64,000֏",
    featureKeys: ["twinBeds", "showerBathroom", "modernAmenitiesPleasant"] as const,
  },
  {
    nameKey: "deluxeMountain" as const,
    images: ["images/delux-forest1.jpeg", "images/delux-forest2.jpeg", "images/delux-forest3.jpeg", "images/delux-forest4.jpeg"],
    guests: 2, bathrooms: 1, area: "36 m²", qty: 2, price: "87,000֏",
    featureKeys: ["kingBedComfort", "showerBathroom", "spaciousElegant", "modernAmenitiesPleasant", "balconyViewsBeautiful"] as const,
  },
  {
    nameKey: "deluxeCourtyard" as const,
    images: ["images/delux-countryard1.jpeg", "images/delux-countryard2.jpeg", "images/delux-countryard3.jpeg", "images/delux-countryard4.jpeg"],
    guests: 2, bathrooms: 1, area: "36 m²", qty: 2, price: "83,000֏",
    featureKeys: ["kingBedComfort", "showerBathroom", "spaciousElegant", "courtyardBalcony"] as const,
  },
  {
    nameKey: "deluxe2Room" as const,
    images: ["images/delux-2room1.jpeg", "images/delux-2room2.jpeg", "images/delux-2room3.jpeg", "images/delux-2room4.jpeg", "images/delux-2room5.jpeg"],
    guests: 4, bathrooms: 1, area: "50 m²", qty: 2, price: "108,000֏",
    featureKeys: ["kingBedComfort", "privateEntrance", "elegantSofa", "balconyViewsBeautiful"] as const,
  },
  {
    nameKey: "familySuite" as const,
    images: ["images/family1.jpeg", "images/family2.jpeg", "images/family3.jpeg", "images/family4.jpeg"],
    guests: 4, bathrooms: 1, area: "43-63 m²", qty: 3, price: "98,000֏",
    featureKeys: ["kingBedComfort", "privateEntrance", "elegantSofa", "balconyViewsBeautiful"] as const,
  },
  {
    nameKey: "signatureSuite" as const,
    images: ["images/signature-lux4.jpeg", "images/signature-lux2.jpeg", "images/signature-lux3.jpeg"],
    guests: 2, bathrooms: 1, area: "43-63 m²", qty: 5, price: "148,000֏",
    featureKeys: ["superKingBed", "tubView", "elegantFurnitureSofa", "sharingBalconies"] as const,
  },
  {
    nameKey: "suite" as const,
    images: ["images/lux1.jpeg", "images/lux2.jpeg", "images/lux3.jpeg", "images/lux4.jpeg"],
    guests: 2, bathrooms: 1, area: "55 m²", qty: 2, price: "108,000֏",
    featureKeys: ["superKingBed", "tubView", "elegantFurnitureSofa", "balconyViewsBeautiful"] as const,
  },
  {
    nameKey: "presidential" as const,
    images: ["images/presidental.jpeg", "images/presidental2.jpeg", "images/presidental3.jpeg", "images/presidental4.jpeg", "images/presidental5.jpeg", "images/presidental6.jpeg"],
    guests: 4, bathrooms: 2, area: "120 m²", qty: 1, price: "390,000֏",
    featureKeys: ["superKingBed", "showerTubView", "elegantFurnitureSofa", "sharingBalconies", "terraceViews"] as const,
  },
  {
    nameKey: "chalet" as const,
    images: ["images/shale.jpeg", "images/shale1.jpeg", "images/shale2.jpeg", "images/shale3.jpeg"],
    guests: 2, bathrooms: 1, area: "45 m²", qty: 2, price: "108,000֏",
    featureKeys: ["superKingBed", "showerTubView", "elegantFurniture", "terraceViews"] as const,
  },
  {
    nameKey: "chalet2Floor" as const,
    images: ["images/2shale1.jpeg", "images/2shale2.jpeg", "images/2shale3.jpeg", "images/2shale4.jpeg"],
    guests: 4, bathrooms: 2, area: "90 m²", qty: 1, price: "240,000֏",
    featureKeys: ["superKingBed", "showerTubView", "elegantFurniture", "spaciousElegant", "terraceViews"] as const,
  },
];

const Rooms = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="images/room3.jpg" title={t.roomsPage.title} subtitle={t.roomsPage.subtitle} />

      <section className="hotel-section">
        <div className="max-w-5xl mx-auto space-y-6 text-center mb-16">
          <p className="hotel-body max-w-3xl mx-auto">{t.roomsPage.intro}</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {roomsData.map((room, idx) => (
            <div key={room.nameKey} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className={`space-y-2 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <Carousel className="w-full group" opts={{ loop: true }}>
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
              </div>
              <div className={`space-y-5 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground font-light">{t.roomsPage.roomNames[room.nameKey]}</h3>
                <div className="gold-divider !mx-0" />
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{room.guests} {t.roomsPage.guests}</span>
                  <span>&middot;</span>
                  <span>{room.bathrooms} {t.roomsPage.bathroom}</span>
                  <span>&middot;</span>
                  <span>{room.area}</span>
                  <span>&middot;</span>
                  <span>{room.qty} {t.roomsPage.rooms}</span>
                </div>
                <ul className="space-y-2">
                  {room.featureKeys.map((fk) => (
                    <li key={fk} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">&#x25C6;</span>
                      {t.roomsPage.features[fk]}
                    </li>
                  ))}
                </ul>
                <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mt-2">
                  {t.roomsPage.bookNowFrom} {room.price}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Rooms;
