import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const rooms = [
  {
    name: "Standard Mounthree View",
    images: ["/images/room2.jpg", "/images/room7.jpg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 15, price: "58,000֏",
    features: [
      "Comfortable King size beds for a restful sleep",
      "Bathrooms equipped with showers",
      "Modern amenities to ensure a pleasant and convenient stay",
      "Most rooms feature private balconies with beautiful views",
    ],
  },
  {
    name: "Standard Courtyard View",
    images: ["/images/room1.jpeg", "/images/room11.jpeg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 6, price: "56,000֏",
    features: [
      "Comfortable twin size beds for a restful sleep",
      "Bathrooms equipped with showers",
      "Modern amenities to ensure a pleasant stay",
      "Private balconies with courtyard views",
    ],
  },
  {
    name: "Standard Without Balcony",
    images: ["/images/room2.jpg", "/images/room7.jpg"],
    guests: 2, bathrooms: 1, area: "26-31 m²", qty: 15, price: "54,000֏",
    features: [
      "Comfortable King size beds for a restful sleep",
      "Bathrooms equipped with showers",
      "Modern amenities to ensure a pleasant stay",
    ],
  },
  {
    name: "Deluxe Room",
    images: ["/images/room3.jpg", "/images/room10.jpg"],
    guests: 2, bathrooms: 1, area: "36 m²", qty: 2, price: "On request",
    features: [
      "Comfortable King-size beds for a restful sleep",
      "Bathrooms equipped with showers",
      "Spacious interiors furnished with soft, elegant furniture",
      "Modern amenities to ensure a pleasant stay",
      "Private balconies with beautiful views",
    ],
  },
  {
    name: "Family Suite",
    images: ["/images/room4.jpg", "/images/room9.jpg"],
    guests: 2, bathrooms: 1, area: "43-63 m²", qty: 3, price: "On request",
    features: [
      "Comfortable King-size beds for a restful sleep",
      "Spacious bedroom with private bathroom and entrance hall",
      "Spacious interiors with soft, elegant furniture and sofa",
      "Private balconies with beautiful views",
    ],
  },
  {
    name: "Signature Suite",
    images: ["/images/room5.jpg", "/images/room8.jpg"],
    guests: 2, bathrooms: 1, area: "43-63 m²", qty: 5, price: "125,000֏",
    features: [
      "Comfortable super king size beds",
      "Spacious bedroom with tub and beautiful view",
      "Spacious interiors with soft, elegant furniture and sofa",
      "Private and sharing balconies with views",
    ],
  },
  {
    name: "Chalet",
    images: ["/images/room5.jpg", "/images/room8.jpg"],
    guests: 2, bathrooms: 1, area: "45 m²", qty: 2, price: "125,000֏",
    features: [
      "Comfortable super King size beds",
      "Bathrooms equipped with shower, tub with view",
      "Spacious interiors with soft, elegant furniture",
      "Terrace with beautiful views and relaxing outdoor space",
    ],
  },
];

const Rooms = () => {
  return (
    <Layout>
      <PageHero
        image="/images/room3.jpg"
        title="Rooms & Suites"
        subtitle="Accommodations"
      />

      <section className="hotel-section">
        <div className="max-w-5xl mx-auto space-y-6 text-center mb-16">
          <p className="hotel-body max-w-3xl mx-auto">
            Mounthree offers a diverse range of accommodations to suit every guest's preference and ensure a luxurious and comfortable stay. Each room features breathtaking views of the canyon, forest, or our beautifully landscaped yard.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {rooms.map((room, idx) => (
            <div
              key={room.name}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                idx % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`space-y-2 ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="grid grid-cols-2 gap-3">
                  {room.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${room.name} ${i + 1}`}
                      className="w-full aspect-[3/2] object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
              </div>
              <div className={`space-y-5 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="font-serif text-3xl md:text-4xl text-foreground font-light">{room.name}</h3>
                <div className="gold-divider !mx-0" />
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{room.guests} Guests</span>
                  <span>·</span>
                  <span>{room.bathrooms} Bathroom</span>
                  <span>·</span>
                  <span>{room.area}</span>
                  <span>·</span>
                  <span>{room.qty} rooms</span>
                </div>
                <ul className="space-y-2">
                  {room.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all mt-2"
                >
                  Book Now — From {room.price}
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
