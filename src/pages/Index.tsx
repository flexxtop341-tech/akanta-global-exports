import { useState, FormEvent } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, PackageCheck, Globe2, Send, MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { toast } from "sonner";
import iconShipping from "@/assets/icon-shipping.png";
import iconQualityProduct from "@/assets/icon-quality-product.png";
import iconGlobalReach from "@/assets/icon-global-reach.png";
import iconDistribution from "@/assets/icon-distribution.png";
import iconPartnership from "@/assets/icon-partnership.png";
import iconAboutPartner from "@/assets/icon-about-partner.png";
import ServicesSection from "@/components/ServicesSection";
import ballPens from "@/assets/ball-pens.jpg";
import juteBags from "@/assets/jute-bags.jpg";
import buttonPens from "@/assets/button-pens.jpg";
import metallicPens from "@/assets/metallic-pens.jpg";
import globalTrade from "@/assets/global-trade.png";
import shippingBg from "@/assets/shipping-bg.jpg";
import trustedPartnerBg from "@/assets/trusted-partner-bg.png";
import importExportIllustration from "@/assets/import-export-illustration.png";
import pensPattern from "@/assets/pens-pattern.png";
import ctaBg from "@/assets/cta-bg.jpg";
import pensCollection from "@/assets/pens-collection.png";

const inputClass = "w-full px-5 py-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-foreground text-base focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60 transition-all duration-300 placeholder:text-muted-foreground/50";

const contactInfoItems = [
  { image: iconDistribution, title: "Visit Our Office", text: "Dnyan Sarita Society, Room No. 1, Ground Floor, Opp SBI Bank, Near RTO Corner, Nashik – 422003", color: "from-gold/20 to-amber-500/10" },
  { image: iconPartnership, title: "Call Us Directly", text: "+91 96733 98945", href: "tel:+919673398945", color: "from-emerald-500/20 to-green-400/10" },
  { image: iconAboutPartner, title: "Send an Email", text: "akantaglobal@gmail.com", href: "mailto:akantaglobal@gmail.com", color: "from-blue-500/20 to-sky-400/10" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [sending, setSending] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) return;
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      toast.error("Please shorten your inputs.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you shortly.");
      setForm({ name: "", email: "", phone: "", company: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="text-center mb-14">
          <motion.span variants={fadeUp} custom={0} className="inline-block text-gold text-xs font-bold tracking-[0.25em] uppercase bg-gold/5 border border-gold/20 rounded-full px-5 py-1.5 mb-4">
            Get In Touch
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold mt-2 mb-3">
            <span className="gold-gradient-text">Let's Work Together</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-5" />
          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Ready to expand your business globally? Share your requirements and our team will respond within 24 hours.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-6xl mx-auto items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-3 relative group"
          >
            {/* Gold glow behind form */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-amber-400/10 to-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-8 md:p-12 shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.1)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center shadow-lg shadow-gold/20">
                  <Send size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-2xl">Send Us a Message</h3>
                  <p className="text-sm text-muted-foreground">We'd love to hear from you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true, maxLen: 100 },
                    { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true, maxLen: 255 },
                  ].map(f => (
                    <motion.div key={f.key} animate={focusedField === f.key ? { scale: 1.02 } : { scale: 1 }} transition={{ duration: 0.2 }}>
                      <label className="block text-base font-medium text-foreground mb-2">
                        {f.label} {f.required && <span className="text-gold">*</span>}
                      </label>
                      <input
                        type={f.type} required={f.required} placeholder={f.placeholder} maxLength={f.maxLen}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        onFocus={() => setFocusedField(f.key)}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass}
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", required: false, maxLen: 20 },
                    { key: "company", label: "Company Name", type: "text", placeholder: "Your Company", required: false, maxLen: 100 },
                  ].map(f => (
                    <motion.div key={f.key} animate={focusedField === f.key ? { scale: 1.02 } : { scale: 1 }} transition={{ duration: 0.2 }}>
                      <label className="block text-base font-medium text-foreground mb-2">
                        {f.label}
                      </label>
                      <input
                        type={f.type} placeholder={f.placeholder} maxLength={f.maxLen}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        onFocus={() => setFocusedField(f.key)}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass}
                      />
                    </motion.div>
                  ))}
                </div>
                <motion.div animate={focusedField === "message" ? { scale: 1.01 } : { scale: 1 }} transition={{ duration: 0.2 }}>
                  <label className="block text-base font-medium text-foreground mb-2">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    required rows={6} placeholder="Tell us about your requirements, desired products, and quantities..."
                    maxLength={1000}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClass} resize-none`}
                  />
                  <p className="text-xs text-muted-foreground/50 mt-1 text-right">{form.message.length}/1000</p>
                </motion.div>
                <motion.button
                  type="submit" disabled={sending}
                  whileHover={{ scale: 1.03, boxShadow: "0 8px 30px -5px hsl(var(--gold) / 0.4)" }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-gold to-amber-600 text-white px-12 py-4 rounded-xl font-semibold text-base transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                >
                  {sending ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                  ) : (
                    <>Send Message <Send size={16} /></>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfoItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group/card relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-6 shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.1)]">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 border border-gold/20 p-2.5 shadow-lg`}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain drop-shadow-lg brightness-110 contrast-110" />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-foreground text-sm mb-1.5">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300 leading-relaxed">{item.text}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick response badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 border border-gold/10 shadow-[0_8px_30px_-10px_hsl(var(--gold)/0.15)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                <span className="text-sm font-semibold text-primary-foreground">Quick Response Guaranteed</span>
              </div>
              <p className="text-xs text-primary-foreground/70 leading-relaxed mb-4">
                Our dedicated team responds to all inquiries within 24 hours. For urgent matters, call us directly.
              </p>
              <motion.a
                href="https://wa.me/919673398945"
                target="_blank" rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3 rounded-xl font-semibold hover:bg-[#1ebe5a] transition-colors text-sm shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const categories = [
  { image: ballPens, title: "Ball Pens", desc: "High-quality plastic ball pens for bulk orders — ideal for office stationery, school supplies, and wholesale distribution." },
  { image: buttonPens, title: "Click / Retractable Pens", desc: "Retractable push-button pens with ergonomic grip — popular with bulk pen distributors and promotional product companies." },
  { image: metallicPens, title: "Metallic Ball Pens", desc: "Premium metallic-finish pens for corporate gift pen suppliers and executive branding — smooth writing, durable build." },
  { image: juteBags, title: "Jute Bags", desc: "Eco-friendly jute bags for wholesale and export — perfect for retail, gifting, and sustainable packaging solutions." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <>
      <SEOHead
        title="Ball Pen & Jute Bag Exporter India | Bulk Supplier & Manufacturer"
        description="Akanta Global — India's leading ball pen exporter, jute bag supplier & stationery manufacturer. We supply bulk promotional pens, retractable pens, metallic pens, eco-friendly jute bags & custom branded products to global distributors and wholesale buyers."
        path="/"
        keywords="ball pen exporter india, jute bag exporter india, jute bags wholesale supplier, eco-friendly jute bags manufacturer, ball pen manufacturer india, bulk pen supplier india, wholesale stationery supplier, promotional pen manufacturer, writing instruments exporter, custom branded pens india, jute bag manufacturer nashik, B2B pen supplier, retractable pen exporter, metallic ball pen supplier"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Akanta Global",
            "alternateName": "Akanta Global Exports",
            "url": "https://akantaglobal.com",
            "logo": "https://akantaglobal.com/favicon.ico",
            "description": "Leading ball pen exporter, jute bag supplier, and wholesale stationery manufacturer from India serving global distributors and importers.",
            "foundingDate": "2008",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dnyan Sarita Society, Room No. 1, Ground Floor, Opp SBI Bank, Near RTO Corner",
              "addressLocality": "Nashik",
              "addressRegion": "Maharashtra",
              "postalCode": "422003",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919673398945",
              "contactType": "sales",
              "areaServed": ["US", "GB", "AE", "IN", "ZA", "NG", "KE", "DE", "FR"],
              "availableLanguage": ["English", "Hindi"]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://akantaglobal.com/" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What products does Akanta Global export?",
                "acceptedAnswer": { "@type": "Answer", "text": "We export a wide range of writing instruments including plastic ball pens, retractable click pens, metallic ball pens, custom branded/logo pens, and eco-friendly jute bags. All products are export-grade and manufactured to international quality standards." }
              },
              {
                "@type": "Question",
                "name": "What is the minimum order quantity (MOQ) for bulk orders?",
                "acceptedAnswer": { "@type": "Answer", "text": "Our standard MOQ is 10,000 units for pens and 5,000 units for jute bags per product variant. We offer flexible MOQs for custom branded and promotional orders depending on the project scope." }
              },
              {
                "@type": "Question",
                "name": "Which countries does Akanta Global export to?",
                "acceptedAnswer": { "@type": "Answer", "text": "We export pens and jute bags to 50+ countries across 6 continents including the USA, UK, UAE, South Africa, Nigeria, Kenya, Germany, France, and many more markets in Asia, Europe, and Africa." }
              },
              {
                "@type": "Question",
                "name": "Does Akanta Global offer custom logo printing on pens?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes, we offer complete custom branding solutions including logo printing, custom colors, and packaging. Our custom pen service is ideal for promotional campaigns, corporate gifting, and private label distribution." }
              },
              {
                "@type": "Question",
                "name": "What certifications does Akanta Global hold?",
                "acceptedAnswer": { "@type": "Answer", "text": "Akanta Global holds ISO 9001:2015, ISO 14001:2015, FSSAI, IEC (Import Export Code), APEDA, and FIEO certifications — ensuring the highest international compliance standards for quality and export operations." }
              },
              {
                "@type": "Question",
                "name": "How can I request a quote for bulk pen or jute bag orders from India?",
                "acceptedAnswer": { "@type": "Answer", "text": "You can request a quote for pens or jute bags by visiting our Contact page, calling us at +91 96733 98945, or emailing akantaglobal@gmail.com. Our team typically responds within 24 hours with competitive pricing and order details." }
              }
            ]
          }
        ]}
      />
      {/* Hero */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 md:mb-6 drop-shadow-lg"
            >
              <span className="gold-gradient-text">Leading Ball Pen & Jute Bag Exporter</span>
              <br />
              <span className="text-white drop-shadow-lg">from India</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-md"
            >
              Akanta Global is a trusted ball pen exporter, jute bag supplier, and stationery manufacturer from India. We supply bulk promotional pens, eco-friendly jute bags, office stationery, and custom branded writing instruments to global distributors and wholesale buyers.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="bg-gold text-white px-6 py-2.5 md:px-7 md:py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg text-sm md:text-base"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 text-white px-6 py-2.5 md:px-7 md:py-3 rounded-md font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm text-sm md:text-base"
              >
                Contact Us
              </Link>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex items-center gap-3 mt-6"
            >
              <span className="text-white/60 text-sm font-medium mr-1">Follow Us:</span>
              {[
                { href: "https://www.instagram.com/akantaglobal/", label: "Instagram", svg: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                )},
                { href: "https://www.facebook.com/profile.php?id=61579243288534", label: "Facebook", svg: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                )},
                { href: "https://www.linkedin.com/company/akanta-global/?viewAsMember=true", label: "LinkedIn", svg: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )},
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-gold hover:bg-gold/20 hover:border-gold/40 transition-all duration-300 hover:scale-110"
                >
                  {social.svg}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <ServicesSection />

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-card overflow-hidden relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest block">
              What We Export
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">Our Product Categories</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-4" />
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-xl mx-auto">
              Export-grade ball pens, promotional pens, custom logo pens, eco-friendly jute bags, and office stationery — inspected and certified for international markets.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-background rounded-xl overflow-hidden border border-border premium-shadow cursor-pointer"
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-lg drop-shadow-lg">
                    {cat.title}
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{cat.desc}</p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-gold text-sm font-semibold hover:text-gold-light transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>



          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-block bg-gold text-white px-8 py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
            >
              Explore All Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snapshot with Stats */}
      <section className="py-16 md:py-24 bg-background overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest block">About Akanta Global</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 mb-2">
                <span className="gold-gradient-text">Global Trading,</span>{" "}
                <span className="text-foreground">Sourcing & Distribution</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="gold-divider mb-6" />
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-4">
                Akanta Global is a trusted ball pen exporter, jute bag supplier, and stationery manufacturer from India committed to delivering reliable export solutions for writing instruments, eco-friendly jute bags, and promotional stationery. With strong manufacturing partnerships and strict quality control, we supply affordable and durable ball pens and premium jute bags designed for distributors, retailers, and corporate promotional campaigns.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed mb-6">
                As a wholesale pen supplier, jute bag exporter, and global trade partner, we work closely with suppliers and international partners to build strong business relationships. Our goal is to simplify international trade and bridge the gap between buyers and sellers while ensuring reliability, quality, and customer satisfaction in every transaction.
              </motion.p>
              <motion.div variants={fadeUp} custom={5}>
                <Link
                  to="/about"
                  className="inline-flex items-center text-gold font-semibold hover:text-gold-light transition-colors border border-gold rounded-md px-5 py-2.5"
                >
                  Learn More About Us →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={scaleIn}
              custom={0}
              className="flex items-center justify-center"
            >
              <img
                src={globalTrade}
                alt="Ball pen exporter India — global trade illustration with writing instruments and shipping"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment to Export & Shipping */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <motion.img
          src={shippingBg}
          alt="Bulk ball pen exporter India — international shipping and logistics"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.92) 0%, hsl(var(--primary-dark) / 0.85) 50%, hsl(var(--primary) / 0.88) 100%)'
        }} />
        <div className="absolute inset-0 opacity-[0.07]" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.6) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />

        {/* Decorative gold corner accents */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t-2 border-l-2 border-gold/25 rounded-tl-lg hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b-2 border-r-2 border-gold/25 rounded-br-lg hidden lg:block" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative container mx-auto px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              variants={fadeUp} custom={0}
              className="inline-flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-[0.3em] mb-4 bg-gold/10 px-4 py-1.5 rounded-full border border-gold/20 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Our Promise
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              <span className="gold-gradient-text">Our Commitment to</span>
              <br />
              <span className="text-white drop-shadow-lg">Export & Shipping</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="flex items-center justify-center gap-3 mb-8">
              <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold/50" />
              <span className="w-2 h-2 rotate-45 border border-gold/60" />
              <span className="h-[2px] w-16 bg-gradient-to-r from-gold to-gold-light" />
              <span className="w-2 h-2 rotate-45 border border-gold/60" />
              <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold/50" />
            </motion.div>
            <motion.p variants={fadeUp} custom={3} className="text-white/80 text-base md:text-lg leading-relaxed mb-14 max-w-2xl mx-auto">
              At Akanta Global, we focus on exporting quality products to international markets with reliable shipping and smooth trade processes. We aim to create opportunities for businesses, distributors, and buyers who want to grow in global markets. By partnering with us, you get the opportunity to access quality products and expand your business through trusted export solutions.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { image: iconShipping, label: "Reliable Shipping", sub: "Smooth logistics worldwide", stat: "45+" , statLabel: "Countries" },
                { image: iconQualityProduct, label: "Quality Products", sub: "Export-grade standards", stat: "100%", statLabel: "Inspected" },
                { image: iconGlobalReach, label: "Global Reach", sub: "Markets across continents", stat: "24/7", statLabel: "Support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={4 + i}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group relative bg-gradient-to-br from-primary-dark via-primary to-primary-dark rounded-2xl py-8 px-6 border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.3)]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 p-2 rounded-2xl bg-white/10 border border-white/10 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500">
                    <img src={item.image} alt={item.label} className="w-full h-full object-contain drop-shadow-[0_2px_8px_rgba(255,255,255,0.3)]" />
                  </div>
                  <span className="block text-2xl font-bold gold-gradient-text mb-0.5">{item.stat}</span>
                  <span className="block text-white/50 text-xs uppercase tracking-widest mb-3">{item.statLabel}</span>
                  <span className="block text-white font-semibold text-base mb-1">{item.label}</span>
                  <span className="block text-white/50 text-sm">{item.sub}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trusted Export Partner */}
      <section className="relative py-24 bg-background overflow-hidden">
        {/* Vector art background */}
        <img
          src={trustedPartnerBg}
          alt=""
          className="absolute inset-0 w-full h-full object-contain opacity-[0.06] pointer-events-none"
        />
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ background: 'hsl(var(--gold) / 0.3)' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ background: 'hsl(var(--primary) / 0.25)' }} />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — Content */}
            <div>
              <motion.span variants={fadeUp} custom={0} className="inline-flex items-center gap-2 text-gold font-semibold text-xs uppercase tracking-[0.25em] mb-4">
                <span className="w-8 h-[2px] bg-gold rounded-full" />
                Why Choose Us
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                <span className="gold-gradient-text">Akanta Global:</span>{" "}
                <span className="text-foreground">A Trusted Export Partner</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="gold-divider mb-6" />
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-4">
                Akanta Global is committed to exporting quality products to international markets. With growing global demand for reliable and affordable products, export trade creates strong opportunities for businesses worldwide. Our focus is to supply dependable products while ensuring smooth and efficient export processes.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed mb-8">
                Akanta Global provides a reliable platform that connects international buyers with trusted manufacturers and suppliers. We aim to bridge the gap between global demand and supply by delivering quality products to different parts of the world. With a focus on trust, consistency, and strong partnerships, Akanta Global works to build long-term relationships in international trade.
              </motion.p>
              <motion.div variants={fadeUp} custom={5}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
                >
                  Partner With Us →
                </Link>
              </motion.div>
            </div>

            {/* Right — Illustration with floating accents */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleIn}
              custom={0}
              className="relative flex items-center justify-center"
            >
              <div className="absolute inset-0 rounded-3xl opacity-30" style={{
                background: 'radial-gradient(circle at center, hsl(var(--gold) / 0.15), transparent 70%)'
              }} />
              <img
                src={trustedPartnerBg}
                alt="Wholesale pen supplier India — trusted export partner for bulk writing instruments"
                className="w-full max-w-lg object-contain relative z-10"
              />
              {/* Floating accent badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-card rounded-xl px-3 py-2 md:px-4 md:py-3 border border-border premium-shadow flex items-center gap-2 hidden sm:flex"
              >
                <Ship className="w-4 h-4 md:w-5 md:h-5 text-gold" strokeWidth={1.5} />
                <span className="text-[10px] md:text-xs font-bold text-foreground">Global Exports</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 left-4 bg-card rounded-xl px-3 py-2 md:px-4 md:py-3 border border-border premium-shadow flex items-center gap-2 hidden sm:flex"
              >
                <PackageCheck className="w-4 h-4 md:w-5 md:h-5 text-gold" strokeWidth={1.5} />
                <span className="text-[10px] md:text-xs font-bold text-foreground">Trusted Quality</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* International Import-Export Trading */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        {/* Unique diagonal split background */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(160deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 55%, hsl(var(--primary-dark)) 55%, hsl(var(--primary-dark)) 100%)'
        }} />
        {/* Subtle animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--gold) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--gold) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        {/* Gold accent line on the diagonal */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 bottom-0 left-[55%] w-[2px] origin-top-left rotate-[20deg] hidden lg:block" style={{
            background: 'linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.3), transparent)'
          }} />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Illustration with layered effects */}
            <motion.div
              variants={scaleIn}
              custom={0}
              className="relative order-2 lg:order-1"
            >
              <div className="absolute -inset-8 rounded-3xl opacity-20 blur-2xl" style={{
                background: 'radial-gradient(ellipse at center, hsl(var(--gold) / 0.3), transparent 70%)'
              }} />
              <div className="relative">
                <img
                  src={importExportIllustration}
                  alt="Import ball pens from India — international stationery export company"
                  className="w-full max-w-lg mx-auto object-contain relative z-10"
                />
                {/* Floating stat cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 md:top-2 md:right-2 bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl px-3 py-2 md:px-5 md:py-4 border border-white/15 shadow-2xl z-20 hidden sm:block"
                >
                  <span className="block text-lg md:text-2xl font-bold gold-gradient-text">100+</span>
                  <span className="text-white/70 text-[10px] md:text-[11px] font-medium">Products Exported</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 md:bottom-4 md:left-0 bg-white/10 backdrop-blur-lg rounded-xl md:rounded-2xl px-3 py-2 md:px-5 md:py-4 border border-white/15 shadow-2xl z-20 hidden sm:block"
                >
                  <span className="block text-lg md:text-2xl font-bold gold-gradient-text">Global</span>
                  <span className="text-white/70 text-[10px] md:text-[11px] font-medium">Market Presence</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Right — Content */}
            <div className="order-1 lg:order-2">
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gold/15 border border-gold/25">
                  <Globe2 className="w-5 h-5 text-gold" strokeWidth={1.5} />
                </span>
                <span className="text-gold font-semibold text-xs uppercase tracking-[0.25em]">International Trading</span>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 leading-[1.15]">
                <span className="text-white">International</span>{" "}
                <span className="gold-gradient-text">Import–Export</span>
                <br />
                <span className="text-white">Trading Company</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="flex items-center gap-2 mb-7">
                <span className="h-[2px] w-10 bg-gradient-to-r from-gold to-gold-light rounded-full" />
                <span className="h-[2px] w-5 bg-gold/40 rounded-full" />
                <span className="h-[2px] w-2 bg-gold/20 rounded-full" />
              </motion.div>
              <motion.p variants={fadeUp} custom={3} className="text-white/75 leading-relaxed mb-4 text-base">
                Akanta Global plays an important role in global trade by supporting the smooth movement of goods across international markets. We focus on reliable sourcing, efficient export processes, and timely shipping to meet the growing demand for quality products worldwide. Our aim is to create a strong and dependable platform that connects global buyers with trusted suppliers.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-white/75 leading-relaxed mb-10 text-base">
                As an export-focused trading company, Akanta Global works closely with manufacturers, distributors, and international partners to simplify the export process. From product sourcing and export coordination to logistics and delivery, we help businesses expand into global markets and build strong international trade relationships.
              </motion.p>

              {/* Feature pills */}
              <motion.div variants={fadeUp} custom={5} className="flex flex-wrap gap-3 mb-8">
                {["Reliable Sourcing", "Export Coordination", "Global Logistics", "Trusted Suppliers"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-gold bg-gold/10 border border-gold/20 rounded-full px-4 py-2 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} custom={6}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors border border-gold/30 hover:border-gold/60 rounded-md px-6 py-3 bg-gold/5 hover:bg-gold/10 backdrop-blur-sm"
                >
                  Discover Our Story →
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Us */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-gold mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about ordering bulk pens, jute bags, custom branding, and export from India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  q: "What products does Akanta Global export?",
                  a: "We export a wide range of writing instruments including plastic ball pens, retractable click pens, metallic ball pens, custom branded/logo pens, and eco-friendly jute bags. All products are export-grade and manufactured to international quality standards."
                },
                {
                  q: "What is the minimum order quantity (MOQ) for bulk orders?",
                  a: "Our standard MOQ is 10,000 units for pens and 5,000 units for jute bags per product variant. We offer flexible MOQs for custom branded and promotional orders depending on the project scope."
                },
                {
                  q: "Which countries does Akanta Global export to?",
                  a: "We export pens and jute bags to 50+ countries across 6 continents including the USA, UK, UAE, South Africa, Nigeria, Kenya, Germany, France, and many more markets in Asia, Europe, and Africa."
                },
                {
                  q: "Does Akanta Global offer custom logo printing on pens?",
                  a: "Yes, we offer complete custom branding solutions including logo printing, custom colors, and packaging. Our custom pen service is ideal for promotional campaigns, corporate gifting, and private label distribution."
                },
                {
                  q: "What certifications does Akanta Global hold?",
                  a: "Akanta Global holds ISO 9001:2015, ISO 14001:2015, FSSAI, IEC (Import Export Code), APEDA, and FIEO certifications — ensuring the highest international compliance standards for quality and export operations."
                },
                {
                  q: "How can I request a quote for bulk pen or jute bag orders from India?",
                  a: "You can request a quote for pens or jute bags by visiting our Contact page, calling us at +91 96733 98945, or emailing akantaglobal@gmail.com. Our team typically responds within 24 hours with competitive pricing and order details."
                },
              ].map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-card border border-border/60 rounded-xl px-6 hover:border-gold/30 transition-colors duration-300 data-[state=open]:border-gold/40 data-[state=open]:shadow-lg data-[state=open]:shadow-gold/5"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-foreground hover:text-gold transition-colors py-5 [&[data-state=open]]:text-gold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.94) 0%, hsl(var(--primary-dark) / 0.92) 50%, hsl(var(--primary) / 0.90) 100%)'
        }} />
        
        {/* Radial glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20" 
          style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.4) 0%, transparent 70%)' }} 
        />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" 
          style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.5) 0%, transparent 60%)' }} 
        />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15" 
          style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.3) 0%, transparent 60%)' }} 
        />
        
        {/* Animated particle dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gold/40"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${15 + ((i % 4) * 20)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-12 left-[8%] w-24 h-24 rounded-full border-2 border-gold/15"
          animate={{ y: [0, -25, 0], rotate: [0, 180, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-[12%] w-16 h-16 rounded-full bg-gradient-to-br from-gold/15 to-gold/5"
          animate={{ y: [0, 20, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-[6%] w-8 h-8 rotate-45 border-2 border-gold/25"
          animate={{ rotate: [45, 225, 45], y: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[4%] w-20 h-20 rounded-2xl border border-gold/10 rotate-12"
          animate={{ rotate: [12, -15, 12], scale: [1, 0.85, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[20%] right-[30%] w-4 h-4 rounded-full bg-gold/50"
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[25%] w-3 h-3 rounded-full bg-gold/40"
          animate={{ scale: [1, 1.8, 1], y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Hexagon shapes */}
        <motion.div
          className="absolute top-[15%] left-[35%] w-12 h-12 opacity-20"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'linear-gradient(135deg, hsl(var(--gold)), hsl(var(--gold-light)))' }}
          animate={{ rotate: [0, 60, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[20%] right-[35%] w-8 h-8 opacity-15"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', background: 'hsl(var(--gold))' }}
          animate={{ rotate: [0, -60, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Animated curved lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" fill="none" preserveAspectRatio="xMidYMid slice">
          <motion.path
            d="M -50 350 Q 200 100 400 200 T 850 100"
            stroke="hsl(var(--gold) / 0.12)" strokeWidth="1" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          />
          <motion.path
            d="M -50 300 Q 150 150 350 250 T 850 150"
            stroke="hsl(var(--gold) / 0.08)" strokeWidth="0.8" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "easeOut", delay: 0.4 }}
          />
          <motion.path
            d="M -50 250 Q 250 50 500 180 T 850 80"
            stroke="hsl(var(--gold) / 0.06)" strokeWidth="0.6" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3.5, ease: "easeOut", delay: 0.8 }}
          />
        </svg>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative container mx-auto px-4 text-center"
        >
          {/* Animated globe with glow ring */}
          <motion.div
            className="mx-auto mb-8 relative"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            {/* Outer glow ring */}
            <motion.div
              className="absolute inset-0 w-24 h-24 -m-4 rounded-full"
              style={{ background: 'radial-gradient(circle, hsl(var(--gold) / 0.3) 0%, transparent 70%)' }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Rotating ring */}
            <motion.div
              className="absolute inset-0 w-20 h-20 -m-2 rounded-full border border-dashed border-gold/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="w-16 h-16 rounded-full bg-gradient-to-br from-gold/20 via-gold/10 to-gold/20 border border-gold/30 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-gold/20"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Globe2 size={28} className="text-gold drop-shadow-lg" />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Heading with shimmer effect */}
          <motion.h2 
            variants={fadeUp} 
            custom={0} 
            className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="gold-gradient-text drop-shadow-lg">
              Let's Grow Your Business
            </span>
            <br />
            <motion.span 
              className="text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Globally
            </motion.span>
          </motion.h2>
          
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70 max-w-2xl mx-auto mb-12 text-lg md:text-xl leading-relaxed">
            Partner with India's leading ball pen & jute bag exporter for reliable, high-quality writing instruments and eco-friendly products shipped worldwide.
          </motion.p>
          
          {/* Enhanced CTA button */}
          <motion.div variants={fadeUp} custom={2} className="relative inline-block">
            {/* Button glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-xl"
              style={{ background: 'hsl(var(--gold) / 0.4)' }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              whileHover={{ scale: 1.08, boxShadow: "0 0 50px hsl(var(--gold) / 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-gold via-gold-light to-gold text-primary px-8 py-4 md:px-12 md:py-5 rounded-full font-bold text-base md:text-lg hover:from-gold-light hover:via-gold hover:to-gold-light transition-all duration-500 shadow-2xl shadow-gold/30 overflow-hidden"
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                />
                <span className="relative z-10">Start a Partnership</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Trust tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-primary-foreground/50 text-sm flex items-center justify-center gap-2"
          >
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-gold/40" />
            <span>Trusted by 500+ businesses worldwide</span>
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-gold/40" />
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
