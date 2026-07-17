import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/akanta-logo-new.png";
import CatalogueButton from "@/components/CatalogueButton";

const Footer = () => {
  return (
    <footer className="relative bg-footer text-footer-foreground overflow-hidden">
      {/* Top gold accent line */}
      <div className="h-[2px]" style={{
        background: 'linear-gradient(90deg, transparent 5%, hsl(var(--gold)), hsl(var(--gold-light)), hsl(var(--gold)), transparent 95%)'
      }} />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.8) 1px, transparent 1px)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container mx-auto px-4 pt-16 pb-8 relative">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14 items-start">
          {/* Brand */}
          <div className="lg:pr-4">
            <img src={logo} alt="Akanta Global" className="h-28 w-auto mb-3 brightness-0 invert" />
            <p className="text-sm text-footer-foreground/60 leading-relaxed mb-4">
              Trusted Indian exporter of high-quality writing instruments and eco-friendly jute bags, delivering consistent quality and reliable international supply.
            </p>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-gold/70 border border-gold/20 rounded-full px-3 py-1 mb-4">
              Stronger Together
            </span>
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/akantaglobal/", label: "Instagram" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579243288534", label: "Facebook" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/akanta-global/?viewAsMember=true", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/15 flex items-center justify-center text-gold/60 hover:text-gold hover:bg-gold/20 hover:border-gold/30 transition-all duration-300 hover:scale-110"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-base uppercase tracking-[0.2em] text-gold">Quick Links</h4>
            <div className="h-[2px] w-8 mb-5 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))' }} />
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Global Network", path: "/global-network" },
                { label: "Certificates", path: "/certificates" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-1.5 text-base text-footer-foreground/60 hover:text-gold transition-all duration-300 hover:translate-x-1"
                >
                  <span className="w-1 h-1 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-3 text-base uppercase tracking-[0.2em] text-gold">Our Services</h4>
            <div className="h-[2px] w-8 mb-5 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))' }} />
            <nav className="flex flex-col gap-2.5">
              {[
                "Import & Export",
                "Products Distribution",
                "Merchant Export",
                "Trade Partnerships",
                "Quality Assurance",
              ].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-base text-footer-foreground/60">
                  <span className="w-1 h-1 rounded-full bg-gold/40" />
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-base uppercase tracking-[0.2em] text-gold">Get In Touch</h4>
            <div className="h-[2px] w-8 mb-5 rounded-full" style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))' }} />
            <div className="flex flex-col gap-4">
              <a
                href="mailto:akantaglobal@gmail.com"
                className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 border border-gold/15 shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Mail size={14} className="text-gold" />
                </span>
                <div>
                  <span className="text-xs uppercase tracking-widest text-footer-foreground/40 block">Email</span>
                  <span className="text-base text-footer-foreground/70 group-hover:text-gold transition-colors">akantaglobal@gmail.com</span>
                </div>
              </a>
              <a
                href="tel:+919673398945"
                className="group flex items-start gap-3 hover:translate-x-1 transition-transform duration-300"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 border border-gold/15 shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Phone size={14} className="text-gold" />
                </span>
                <div>
                  <span className="text-xs uppercase tracking-widest text-footer-foreground/40 block">Phone</span>
                  <span className="text-base text-footer-foreground/70 group-hover:text-gold transition-colors">+91 96733 98945</span>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-gold/10 border border-gold/15 shrink-0">
                  <MapPin size={14} className="text-gold" />
                </span>
                <div>
                  <span className="text-xs uppercase tracking-widest text-footer-foreground/40 block">Address</span>
                  <span className="text-base text-footer-foreground/70">Nashik – 422003, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gold separator */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold) / 0.3))' }} />
          <div className="w-1.5 h-1.5 rotate-45 border border-gold/40" />
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, hsl(var(--gold) / 0.3), transparent)' }} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-footer-foreground/40">
            © {new Date().getFullYear()} Akanta Global. All rights reserved.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-gold/70 hover:text-gold transition-colors"
          >
            Request a Quote
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919673398945"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
