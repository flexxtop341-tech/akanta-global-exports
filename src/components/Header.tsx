import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import logo from "@/assets/akanta-logo-new.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Company Details", path: "/company" },
  { label: "Products", path: "/products" },
  { label: "Global Network", path: "/global-network" },
  { label: "Certificates", path: "/certificates" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showTranslate, setShowTranslate] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (showTranslate) {
      const tryInit = () => {
        const w = window as any;
        if (w.google?.translate?.TranslateElement) {
          const desktopEl = document.getElementById('google_translate_desktop');
          const mobileEl = document.getElementById('google_translate_mobile');
          const el = desktopEl || mobileEl;
          if (el) {
            el.innerHTML = '';
            new w.google.translate.TranslateElement(
              { pageLanguage: 'en', layout: w.google.translate.TranslateElement.InlineLayout.SIMPLE },
              el.id
            );
          }
        }
      };
      setTimeout(tryInit, 200);
    }
  }, [showTranslate]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/98 backdrop-blur-md shadow-[0_4px_30px_-8px_hsl(var(--primary)/0.15)]"
          : "bg-card/95 backdrop-blur-sm"
      }`}
    >
      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)), transparent)' }} />

      <div className="w-full mx-auto px-6 lg:px-10">
        {/* Main header row */}
        <div className="flex items-center justify-between h-[80px] lg:h-[90px]">
          {/* Logo + Tagline */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt="Akanta Global"
                className="h-16 md:h-20 lg:h-[80px] w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-gold leading-none -mt-0.5" style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: 'italic', fontWeight: 500 }}>
                Stronger Together
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 mx-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-[13px] font-medium px-2.5 py-2 rounded-md transition-all duration-300 whitespace-nowrap ${
                  location.pathname === item.path
                    ? "text-gold bg-gold/8"
                    : "text-foreground/70 hover:text-gold hover:bg-gold/5"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <div className="relative">
              <button
                onClick={() => setShowTranslate(!showTranslate)}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-md text-[13px] font-medium text-foreground/70 hover:text-gold hover:bg-gold/5 transition-all duration-300 border border-transparent hover:border-gold/20"
              >
                <Globe size={15} />
                <span>Translate</span>
              </button>
              {showTranslate && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-xl p-3 min-w-[200px] z-50">
                  <div id="google_translate_desktop" className="text-sm" />
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="relative overflow-hidden text-primary-foreground px-5 py-2 rounded-md text-[13px] font-semibold transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(var(--gold)/0.5)] group border border-gold/20"
              style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))' }}
            >
              <span className="relative z-10">Request Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold-light/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 text-foreground hover:text-gold transition-colors rounded-md hover:bg-gold/5"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-card border-t border-gold/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium py-2.5 px-3 rounded-md transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-gold bg-gold/8"
                    : "text-foreground/70 hover:text-gold hover:bg-gold/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-3">
              <button
                onClick={() => setShowTranslate(!showTranslate)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-md text-sm font-medium border border-gold/20 text-foreground/70 hover:text-gold transition-colors"
              >
                <Globe size={16} />
                Translate
              </button>
              <Link
                to="/contact"
                className="flex-1 text-center py-2.5 rounded-md text-sm font-semibold text-primary-foreground border border-gold/20"
                style={{ background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))' }}
              >
                Request Quote
              </Link>
            </div>
            {showTranslate && (
              <div className="mt-2 p-3 border border-border rounded-lg">
                <div id="google_translate_mobile" className="text-sm" />
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
