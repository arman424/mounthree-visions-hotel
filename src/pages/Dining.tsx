import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const menuItems = [
  { name: "Veal Steak", price: "11,000 AMD" },
  { name: "Tolma with Grape Leaves", price: "3,300 AMD" },
  { name: "Tzhvzhik with Mashed Potatoes", price: "4,500 AMD" },
  { name: "Steamed Trout", price: "6,500 AMD" },
  { name: "Grilled Chicken", price: "4,200 AMD" },
  { name: "Grilled Seabass", price: "7,000 AMD" },
  { name: "Rabbit Cutlet", price: "5,500 AMD" },
  { name: "Lamb Shoulder", price: "19,000 AMD" },
  { name: "Leg of Lamb", price: "7,500 AMD" },
];

const Dining = () => {
  return (
    <Layout>
      <PageHero
        image="/images/restaurant-hero.jpg"
        title="Fine Dining"
        subtitle="Culinary Experience"
      />

      {/* Intro */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="space-y-6">
            <p className="hotel-subheading">Restaurant</p>
            <h2 className="hotel-heading text-foreground">A Culinary Journey</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">
              Fine dining is a culinary experience that transcends the ordinary meal, offering guests not just food, but a beautifully curated atmosphere that enhances every bite. This sophisticated dining style features exquisite dishes prepared by talented chefs with meticulous attention to detail.
            </p>
            <p className="hotel-body">
              From the setting and presentation of the meals to the selection of high-quality ingredients, the ambiance is refined—characterized by elegant decor, soft lighting, and a welcoming atmosphere.
            </p>
          </div>
          <img
            src="/images/dining1.jpg"
            alt="Fine dining"
            className="w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Menu */}
      <section className="hotel-section bg-card">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <p className="hotel-subheading">Menu</p>
            <h2 className="hotel-heading text-foreground">Food & Snacks</h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-0">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between py-4 border-b border-border/50"
              >
                <span className="font-serif text-lg text-foreground">{item.name}</span>
                <span className="text-sm text-primary font-medium">{item.price}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="http://oddmenu.com/p/van"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View Full Menu
            </a>
          </div>
        </div>
      </section>

      {/* Second image section */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <img
            src="/images/dining2.jpg"
            alt="Restaurant ambience"
            className="w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <div className="space-y-6">
            <p className="hotel-subheading">Rooftop</p>
            <h2 className="hotel-heading text-foreground">Aery Rooftop Bar</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">
              On the sixth floor, our Rooftop Bar provides an unparalleled dining experience. Indulge in exquisite dishes and signature cocktails while enjoying breathtaking views and curated music from our open-air venue.
            </p>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section className="hotel-section bg-card text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="hotel-subheading">Hours</p>
          <h2 className="hotel-heading text-foreground">Reserve a Table</h2>
          <div className="gold-divider" />
          <p className="hotel-body">Monday — Sunday · 4:00 PM — 11:00 PM</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a
              href="tel:+37460449444"
              className="text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Call +374 60 449 444
            </a>
            <a
              href="mailto:info@mounthree.com"
              className="text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dining;
