import Layout from "@/components/Layout";
import { useI18n } from "@/i18n/context";

const BookNow = () => {
  const { t, lang } = useI18n();

  return (
      <>
        <style>{`
        #be-booking-form {
          width: 100%;
          max-width: 944px;
          margin: 0 auto;
        }

        #tl-booking-cart {
          z-index: 1 !important;
        }
      `}</style>
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
                {/* start Booking form script */}
                <div id="be-booking-form"></div>
                {/* end Booking form script */}
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
      </>
  );
};

export default BookNow;