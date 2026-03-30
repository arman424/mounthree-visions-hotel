import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/i18n/context";

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
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="images/restaurant.webp" title={t.diningPage.title} subtitle={t.diningPage.subtitle} />

      {/* Intro */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="space-y-6 min-w-0">
            <p className="hotel-subheading">{t.diningPage.restaurantLabel}</p>
            <h2 className="hotel-heading text-foreground break-words">{t.diningPage.restaurantTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.diningPage.restaurantText1}</p>
            <p className="hotel-body">{t.diningPage.restaurantText2}</p>
          </div>
          <img src="images/dining1.jpg" alt="Fine dining" className="w-full aspect-[4/5] object-cover" loading="lazy" />
        </div>
      </section>

      {/* Menu */}
      <section className="hotel-section bg-card">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <p className="hotel-subheading">{t.diningPage.menuLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.diningPage.menuTitle}</h2>
            <div className="gold-divider" />
          </div>
          <div className="space-y-0">
            {menuItems.map((item) => (
              <div key={item.name} className="flex items-center justify-between py-4 border-b border-border/50">
                <span className="font-serif text-lg text-foreground">{item.name}</span>
                <span className="text-sm text-primary font-medium">{item.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://mabell.io/am/restaurant/01980835-1fe1-7114-a814-7e0ea99b9e16/service/0198312b-68b1-708b-93eb-43a3e0c0d3c5" target="_blank" rel="noopener noreferrer" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.diningPage.viewFullMenu}
            </a>
          </div>
        </div>
      </section>

      {/* Rooftop */}
      <section className="hotel-section">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <img src="images/dining2.jpg" alt="Restaurant ambience" className="w-full aspect-[4/3] object-cover" loading="lazy" />
          <div className="space-y-6">
            <p className="hotel-subheading">{t.diningPage.rooftopLabel}</p>
            <h2 className="hotel-heading text-foreground">{t.diningPage.rooftopTitle}</h2>
            <div className="gold-divider !mx-0" />
            <p className="hotel-body">{t.diningPage.rooftopText}</p>
            <a href="https://mabell.io/am/restaurant/01980835-1fe1-7114-a814-7e0ea99b9e16/service/019d2ed6-d078-7296-991e-0eb5ffdd10f4" target="_blank" rel="noopener noreferrer" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.diningPage.viewFullMenu}
            </a>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section className="hotel-section bg-card text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <p className="hotel-subheading">{t.diningPage.hoursLabel}</p>
          <h2 className="hotel-heading text-foreground">{t.diningPage.hoursTitle}</h2>
          <div className="gold-divider" />
          <p className="hotel-body">{t.diningPage.hoursText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <a href="tel:+37460449444" className="text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.diningPage.callUs} +374 60 449 444
            </a>
            <a href="mailto:info@mounthree.com" className="text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all">
              {t.diningPage.emailUs}
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Dining;
