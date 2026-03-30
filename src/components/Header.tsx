import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/i18n/context";
import { Lang } from "@/i18n/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const langs: { code: Lang; label: string; full: string }[] = [
  { code: "en", label: "EN", full: "English" },
  { code: "ru", label: "RU", full: "Русский" },
  { code: "am", label: "AM", full: "Հայերեն" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useI18n();

  const currentLang = langs.find((l) => l.code === lang)!;

  const navItems = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.rooms, path: "/rooms" },
    { label: t.nav.facilities, path: "/hotel" },
    { label: t.nav.dining, path: "/dining" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4 min-h-[72px]">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="images/logo.jpg" alt="Mounthree" className="w-24 sm:w-28 md:w-32 h-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] font-medium text-foreground/70 hover:text-foreground transition-colors px-2 py-1.5 border border-border/50 outline-none">
              <Globe size={14} />
              {currentLang.label}
              <ChevronDown size={12} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-0 w-max">
              {langs.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-xs cursor-pointer whitespace-nowrap ${
                    lang === l.code ? "text-primary font-semibold" : ""
                  }`}
                >
                  {l.full}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/book"
            className="text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            {t.nav.bookNow}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm uppercase tracking-[0.15em] font-medium py-2 transition-colors ${
                  location.pathname === item.path ? "text-primary" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 py-2">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={`text-xs uppercase tracking-[0.15em] font-medium px-3 py-1.5 border transition-colors ${
                    lang === l.code
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-[0.15em] font-semibold px-6 py-3 border border-primary text-primary text-center mt-2"
            >
              {t.nav.bookNow}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
