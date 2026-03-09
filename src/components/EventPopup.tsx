import { useState, useEffect } from "react";
import { X, CalendarDays } from "lucide-react";
import { useI18n } from "@/i18n/context";

const EventPopup = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={close} />
      <div className="relative bg-card border border-border max-w-md w-full p-8 shadow-2xl z-10">
        <button onClick={close} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
            <CalendarDays size={20} className="text-primary" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">{t.eventPopup.label}</p>
        </div>

        <h3 className="font-serif text-2xl text-foreground mb-2">{t.eventPopup.title}</h3>
        <p className="text-sm text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t.eventPopup.text }} />

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
          <span>{t.eventPopup.time}</span>
          <span>{t.eventPopup.location}</span>
          <span>{t.eventPopup.limited}</span>
        </div>

        <a
          href="/book"
          onClick={close}
          className="inline-block w-full text-center text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          {t.eventPopup.reserve}
        </a>
      </div>
    </div>
  );
};

export default EventPopup;
