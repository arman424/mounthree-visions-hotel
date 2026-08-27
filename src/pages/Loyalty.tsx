import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { useI18n } from "@/i18n/context";
import { Link } from "react-router-dom";

const cardImages = [
  "/images/loyalty/base.png",
  "/images/loyalty/silver.png",
  "/images/loyalty/gold.png",
  "/images/loyalty/platinum.png",
];

const Loyalty = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="images/main.webp" title={t.loyaltyPage.title} subtitle={t.loyaltyPage.subtitle} />

      <section className="hotel-section">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="hotel-body max-w-3xl mx-auto">{t.loyaltyPage.intro}</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12">
          {t.loyaltyPage.cards.map((card, idx) => (
            <div
              key={card.title}
              className="bg-card border border-border/50 overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={cardImages[idx]}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow text-center">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground font-light mb-4">
                  {card.title}
                </h3>
                <div className="gold-divider mx-auto mb-5" />
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                  {card.description}
                </p>
                <Link
                  to="/loyalty/join"
                  className="inline-block self-center mt-6 text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {t.loyaltyPage.joinNow}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Loyalty;
