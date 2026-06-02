import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useI18n } from "@/i18n/context";

const Contact = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <PageHero image="images/location.jpg" title={t.contactPage.title} subtitle={t.contactPage.subtitle} />

      <section className="hotel-section">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-10">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground">{t.contactPage.address}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{t.contactPage.addressValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground">{t.contactPage.phone}</h4>
                  <a href="tel:+37460449444" className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-1">+374 60 449 444</a>
                  <a href="tel:+37444444090" className="text-sm text-muted-foreground hover:text-primary transition-colors block">+374 44 444 090</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground">{t.contactPage.email}</h4>
                  <a href="mailto:info@mounthree.com" className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-1">info@mounthree.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground">{t.contactPage.restaurantHours}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{t.contactPage.restaurantHoursValue}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4 justify-center">
              <a href="https://www.facebook.com/346457221890276" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/mounthree.mp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] bg-card border-t border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.0!2d44.35!3d40.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPambak%2C+Lori+Region%2C+Armenia!5e0!3m2!1sen!2s!4v1234567890"
          width="100%" height="100%" style={{ border: 0, filter: "grayscale(0.5) brightness(0.8)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mounthree location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
