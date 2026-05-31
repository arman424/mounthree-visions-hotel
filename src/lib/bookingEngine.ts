type BookingCommand = [string, ...unknown[]];

/**
 * Queues Booking Engine commands and ensures the provider loader is present.
 * Safe to call on route mounts in an SPA.
 */
export const runBookingEngine = (commands: BookingCommand[]) => {
  const w = window as Window & { bookingengine?: Record<string, unknown> };

  (function (e: Window & { bookingengine?: Record<string, unknown> }, n: BookingCommand[]) {
    const t = "bookingengine";
    const o = "integration";
    const i = (e[t] = (e[t] as Record<string, unknown>) || {});
    const a = (i[o] = (i[o] as Record<string, unknown>) || {});
    const r = "__cq";
    const c = "__loader";
    const d = "getElementsByTagName";

    const queue = (a[r] as BookingCommand[] | undefined) || [];
    a[r] = queue.concat(n || []);

    if (!a[c]) {
      a[c] = true;
      const l = e.document;
      const g = l[d]("head")[0] || l[d]("body")[0];

      (function load(hosts: string[]) {
        if (hosts.length === 0) return;

        const s = l.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = `https://${hosts[0]}/integration/loader.js`;
        s.onerror = s.onload = (function (scriptEl: HTMLScriptElement, next: () => void) {
          return function () {
            const loaded = Boolean(
              e[t] &&
                (e[t] as Record<string, unknown>)[o] &&
                ((e[t] as Record<string, unknown>)[o] as Record<string, unknown>).loaded,
            );
            if (!loaded) {
              g.removeChild(scriptEl);
              next();
            }
          };
        })(s, () => load(hosts.slice(1)));

        g.appendChild(s);
      })(["am-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"]);
    }
  })(w, commands);
};

