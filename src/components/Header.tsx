import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import logo from "@/assets/akanta-logo-new.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Company Details", path: "/company" },
  { label: "Products", path: "/products" },
  { label: "Global Network", path: "/global-network" },
  { label: "Certificates", path: "/certificates" },
  { label: "Team", path: "/team" },
  { label: "Blog", path: "/blog" },
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
          ? "bg-card/[0.98] backdrop-blur-xl shadow-[0_4px_40px_-8px_hsl(var(--primary)/0.18)]"
          : "bg-card backdrop-blur-sm"
      }`}
    >
      {/* Top gold accent bar */}
      <div className="h-[3px] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, hsl(var(--gold-dark)), hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)), hsl(var(--gold-dark)))'
        }} />
        <div className="absolute inset-0 opacity-50" style={{
          background: 'linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)',
          animation: 'shimmer 3s ease-in-out infinite',
        }} />
      </div>

      <div className="w-full mx-auto px-6 lg:px-10">
        {/* Main header row */}
        <div className="flex items-center justify-between h-[80px] lg:h-[145px]">
          {/* Logo + Tagline */}
          <Link to="/" className="flex items-center group shrink-0">
            <div className="flex flex-col items-center">
              <img
                src={logo}
                alt="Akanta Global"
                className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                  isScrolled ? "h-14 md:h-24 lg:h-[100px]" : "h-16 md:h-32 lg:h-[135px]"
                }`}
              />
              <span
                className={`uppercase tracking-[0.25em] leading-none transition-all duration-500 ${
                  isScrolled ? "text-[7px] md:text-[9px] lg:text-[10px] -mt-0.5" : "text-[8px] md:text-[11px] lg:text-[12px] -mt-1 lg:-mt-3"
                }`}
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontStyle: 'italic',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
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
                className={`relative text-[15px] font-medium px-3 py-2 rounded-lg transition-all duration-300 whitespace-nowrap group ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-foreground/65 hover:text-foreground"
                }`}
              >
                {item.label}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full transition-all duration-300 ${
                    location.pathname === item.path
                      ? "w-6 opacity-100"
                      : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-60"
                  }`}
                  style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))' }}
                />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <div className="relative">
              <button
                onClick={() => setShowTranslate(!showTranslate)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[14px] font-medium text-foreground/60 hover:text-gold transition-all duration-300 border border-border/60 hover:border-gold/30 hover:bg-gold/5"
              >
                <Globe size={15} />
                <span>Translate</span>
                <ChevronDown size={12} className={`transition-transform duration-200 ${showTranslate ? 'rotate-180' : ''}`} />
              </button>
              {showTranslate && (
                <div className="absolute top-full right-0 mt-2 bg-card border border-gold/15 rounded-xl shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.2)] p-3 min-w-[200px] z-50">
                  <div id="google_translate_desktop" className="text-sm" />
                </div>
              )}
            </div>

            {/* Separator */}
            <div className="h-8 w-[1px]" style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--border)), transparent)' }} />

            <Link
              to="/contact"
              className="relative overflow-hidden text-white px-5 py-1.5 rounded-md text-[14px] font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_-6px_hsl(var(--gold)/0.4)] group"
              style={{ background: 'linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold)))' }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Request Quote
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gold-light/30 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2.5 text-foreground hover:text-gold transition-all duration-300 rounded-lg hover:bg-gold/5 border border-transparent hover:border-gold/20"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ${isMobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-card border-t border-gold/10">
          {/* Gold line accent */}
          <div className="h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3), transparent)' }} />
          <nav className="container mx-auto px-4 py-5 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center gap-2 ${
                  location.pathname === item.path
                    ? "text-gold bg-gold/8 border-l-2 border-gold"
                    : "text-foreground/70 hover:text-gold hover:bg-gold/5 border-l-2 border-transparent"
                }`}
              >
                {location.pathname === item.path && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                )}
                {item.label}
              </Link>
            ))}

            <div className="h-[1px] my-3" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold) / 0.2), transparent)' }} />

            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowTranslate(!showTranslate)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium border border-gold/20 text-foreground/70 hover:text-gold hover:bg-gold/5 transition-all duration-300"
              >
                <Globe size={16} />
                Translate
              </button>
              <Link
                to="/contact"
                className="flex-1 text-center py-3 rounded-lg text-sm font-semibold text-white shadow-lg"
                style={{ background: 'linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold)))' }}
              >
                Request Quote
              </Link>
            </div>
            {showTranslate && (
              <div className="mt-3 p-3 border border-gold/15 rounded-xl bg-muted/30">
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
