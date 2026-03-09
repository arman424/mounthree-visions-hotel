import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/i18n/context";

const roomsData = [
  {
    nameKey: "standardMountain" as const,
    images: ["/images/room2.jpg", "/images/room7.jpg"],
    guests: 2, bathrooms: 1, area: "26-31 m\u00B2", qty: 15, price: "58,000\u058F",
    featureKeys: ["kingBed", "showerBathroom", "modernAmenities", "balconyViews"] as const,
  },
  {
    nameKey: "standardCourtyard" as const,
    images: ["/images/room1.jpeg", "/images/room11.jpeg"],
    guests: 2, bathrooms: 1, area: "26-31 m\u00B2", qty: 6, price: "56,000\u058F",
    featureKeys: ["twinBeds", "showerBathroom", "modernAmenitiesPleasant", "courtyardBalcony"] as const,
  },
  {
    nameKey: "standardNoBalcony" as const,
    images: ["/images/room2.jpg", "/images/room7.jpg"],
    guests: 2, bathrooms: 1, area: "26-31 m\u00B2", qty: 15, price: "54,000\u058F",
    featureKeys: ["kingBed", "showerBathroom", "modernAmenitiesPleasant"] as const,
  },
  {
    nameKey: "deluxe" as const,
    images: ["/images/room3.jpg", "/images/room10.jpg"],
    guests: 2, bathrooms: 1, area: "36 m\u00B2", qty: 2, price: "On request",
    featureKeys: ["kingBedComfort", "showerBathroom", "spaciousElegant", "modernAmenitiesPleasant", "balconyViewsBeautiful"] as const,
  },
  {
    nameKey: "familySuite" as const,
    images: ["/images/room4.jpg", "/images/room9.jpg"],
    guests: 2, bathrooms: 1, area: "43-63 m\u00B2", qty: 3, price: "On request",
    featureKeys: ["kingBedComfort", "privateEntrance", "elegantSofa", "balconyViewsBeautiful"] as const,
  },
  {
    nameKey: "signatureSuite" as const,
    images: ["/images/room5.jpg", "/images/room8.jpg"],
    guests: 2, bathrooms: 1, area: "43-63 m\u00B2", qty: 5, price: "125,000\u058F",
    featureKeys: ["superKingBed", "tubView", "elegantFurnitureSofa", "sharingBalconies"] as const,
  },
  {
    nameKey: "chalet" as const,
    images: ["/images/room5.jpg", "/images/room8.jpg"],
    guests: 2, bathrooms: 1, area: "45 m\u00B2", qty: 2, price: "125,000\u058F",
    featureKeys: ["superKingBed", "showerTubView", "elegantFurniture", "terraceViews"] as const,
  },
];

const Rooms = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="/images/room3.jpg" title={t.roomsPage.title} subtitle={t.roomsPage.subtitle} />

      <section className="hotel-section">
        <div className="max-w-5xl mx-auto space-y-6 text-center mb-16">
          <p className="hotel-body max-w-3xl mx-auto">{t.roomsPage.intro}</p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {roomsData.map((room, idx) => (
            <div key={room.nameKey} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <div className={`space-y-2 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="grid grid-cols-2 gap-3">
                  {room.images.map((img, i) => (
                    <img key={i} src={img} alt={`${t.roomsPage.roomNames[room.nameKey]} ${i + 1}`} className="w-full aspect-[3/2] object-cover" loading="lazy" />
                  ))}
                </div>
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
