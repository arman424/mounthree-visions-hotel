interface PageHeroProps {
  image: string;
  title: string;
  subtitle?: string;
}

const PageHero = ({ image, title, subtitle }: PageHeroProps) => {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url(${image})` }} />
      <div className="hero-overlay" />
      <div className="relative z-10 text-center px-6">
        {subtitle && <p className="hotel-subheading mb-4">{subtitle}</p>}
        <h1 className="hotel-heading text-foreground">{title}</h1>
        <div className="gold-divider mt-6" />
      </div>
    </section>
  );
};

export default PageHero;
