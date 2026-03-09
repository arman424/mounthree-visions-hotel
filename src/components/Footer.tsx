import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { useI18n } from "@/i18n/context";

const Footer = () => {
  const { t } = useI18n();

  const quickLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.rooms, path: "/rooms" },
    { label: t.nav.hotel, path: "/hotel" },
    { label: t.nav.dining, path: "/dining" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <img src="/images/logo.jpg" alt="Mounthree" className="h-12" />
            <p className="hotel-body text-sm">{t.footer.brandText}</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/346457221890276" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/mounthree.mp/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="hotel-subheading text-xs">{t.footer.quickLinks}</h4>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="hotel-subheading text-xs">{t.footer.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <span className="text-sm text-muted-foreground">4, 1 Street, Pambak, Lori Region, Armenia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+37460449444" className="text-sm text-muted-foreground hover:text-primary transition-colors">+374 60 449 444</a>
                  <a href="tel:+37444444090" className="text-sm text-muted-foreground hover:text-primary transition-colors">+374 44 444 090</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@mounthree.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@mounthree.com</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="hotel-subheading text-xs">{t.footer.hours}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-foreground">{t.footer.checkin}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.footer.restaurantHours}</p>
                </div>
              </div>
            </div>
            <Link to="/book" className="inline-block text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              {t.footer.bookNow}
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} {t.footer.rights}</p>
        <div className="flex gap-6">
          <span className="text-xs text-muted-foreground">Mystic Peaks</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
