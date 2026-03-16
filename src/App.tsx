import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { I18nProvider } from "@/i18n/context";
import Index from "./pages/Index";
import Rooms from "./pages/Rooms";
import Hotel from "./pages/Hotel";
import Dining from "./pages/Dining";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <I18nProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Routes>
            <Route path="*" element={<Index />} />
            {/*<Route path="/" element={<Index />} />*/}
            {/*<Route path="/rooms" element={<Rooms />} />*/}
            {/*<Route path="/hotel" element={<Hotel />} />*/}
            {/*<Route path="/dining" element={<Dining />} />*/}
            {/*<Route path="/contact" element={<Contact />} />*/}
            {/*<Route path="/book" element={<BookNow />} />*/}
            {/*<Route path="*" element={<NotFound />} />*/}
          </Routes>
        </HashRouter>
      </I18nProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
