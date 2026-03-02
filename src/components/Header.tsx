import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/akanta-logo.jpeg";

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
  const location = useLocation();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card shadow-md py-2"
          : "bg-card/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Akanta Global" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <div id="google_translate_element" className="text-sm" />
          <Link
            to="/contact"
            className="bg-gold text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gold-dark transition-colors shadow-md"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === item.path
                    ? "text-gold"
                    : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold text-white px-5 py-2.5 rounded-md text-sm font-semibold text-center mt-2 hover:bg-gold-dark transition-colors"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
