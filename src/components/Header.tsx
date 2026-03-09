import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Rooms & Suites", path: "/rooms" },
  { label: "Hotel", path: "/hotel" },
  { label: "Dining", path: "/dining" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Mounthree" className="h-10 md:h-12" />
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
          <Link
            to="/book"
            className="text-xs uppercase tracking-[0.2em] font-semibold px-6 py-2.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Book Now
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
            <Link
              to="/book"
              onClick={() => setIsOpen(false)}
              className="text-sm uppercase tracking-[0.15em] font-semibold px-6 py-3 border border-primary text-primary text-center mt-2"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
