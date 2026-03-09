import Layout from "@/components/Layout";
import { useI18n } from "@/i18n/context";

const BOOKING_URL = "https://am-ibe.hopenapi.com/booking2/hotel/index.gge.html?int=true&accommodationMode=auto&adults=2&fullScreenOnMobile=false&providerId=505672&reactApp=true&theme=505672_2024-12-27&defaultAdults=2&language=en&date=2026-03-09&nights=1&childrenAge=&width=100%25";

const BookNow = () => {
  const { t, lang } = useI18n();

  // Update booking URL language parameter
  const bookingUrl = BOOKING_URL.replace("language=en", `language=${lang === "am" ? "hy" : lang}`);

  return (
    <Layout>
      <section className="hotel-section">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="hotel-subheading">{t.bookPage.label}</p>
            <h1 className="hotel-heading text-foreground">{t.bookPage.title}</h1>
            <div className="gold-divider" />
            <p className="hotel-body max-w-xl mx-auto">{t.bookPage.text}</p>
          </div>

          <div className="w-full border border-border bg-card">
            <iframe src={bookingUrl} className="w-full min-h-[700px] md:min-h-[800px]" style={{ border: "none" }} title="Book a room at Mounthree" allowFullScreen />
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              {t.bookPage.needAssistance}{" "}
              <a href="tel:+37460449444" className="text-primary hover:text-gold-light transition-colors">+374 60 449 444</a>
            </p>
            <p className="text-sm text-muted-foreground">
              {t.bookPage.orEmail}{" "}
              <a href="mailto:info@mounthree.com" className="text-primary hover:text-gold-light transition-colors">info@mounthree.com</a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookNow;
