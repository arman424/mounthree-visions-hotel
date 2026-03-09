import { useState, useEffect } from "react";
import { X, CalendarDays } from "lucide-react";

const EventPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("event-popup-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    setVisible(false);
    localStorage.setItem("event-popup-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-fade-in">
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={close} />
      <div className="relative bg-card border border-border max-w-md w-full p-8 shadow-2xl z-10">
        <button
          onClick={close}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 border border-primary/30 flex items-center justify-center">
            <CalendarDays size={20} className="text-primary" />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Upcoming Event</p>
        </div>

        <h3 className="font-serif text-2xl text-foreground mb-2">Summer Wine & Dine Evening</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Join us on <span className="text-foreground font-medium">July 12, 2026</span> for an exclusive evening of curated wines paired with a five-course tasting menu, set against the stunning mountain backdrop of Mounthree.
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-6">
          <span>🕖 7:00 PM</span>
          <span>📍 Rooftop Terrace</span>
          <span>👥 Limited to 40 guests</span>
        </div>

        <a
          href="/book"
          onClick={close}
          className="inline-block w-full text-center text-xs uppercase tracking-[0.2em] font-semibold px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
        >
          Reserve Your Spot
        </a>
      </div>
    </div>
  );
};

export default EventPopup;
