import Layout from "@/components/Layout";
import { useI18n } from "@/i18n/context";
import { getBookingEngineLang, runBookingEngine } from "@/lib/bookingEngine";
import { useEffect } from "react";

const LoyaltyJoin = () => {
  const { t, lang } = useI18n();

  useEffect(() => {
    const bookingLang = getBookingEngineLang(lang);
    const container = document.getElementById("be-guest-account");

    if (container) {
      container.innerHTML = "";
    }

    runBookingEngine([
      ["setContext", "BE-INT-mounthree-com_2024-12-27", bookingLang],
      ["embed", "guest-account", { container: "be-guest-account" }],
    ]);
  }, [lang]);

  return (
    <>
      <style>{`
        #be-guest-account {
          width: 100%;
          max-width: 1020px;
          margin: 0 auto;
        }
      `}</style>
      <Layout>
        <section className="hotel-section">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <p className="hotel-subheading">{t.loyaltyPage.subtitle}</p>
              <h1 className="hotel-heading text-foreground">{t.loyaltyPage.joinNow}</h1>
              <div className="gold-divider" />
            </div>

            {/* start guest account */}
            <div id="be-guest-account"></div>
            {/* end guest account */}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default LoyaltyJoin;

