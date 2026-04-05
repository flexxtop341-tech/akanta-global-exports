import { useState, FormEvent } from "react";
import SEOHead from "@/components/SEOHead";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle2, Globe, Shield, Headphones, Instagram, Facebook, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";

const infoCards = [
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["Dnyan Sarita Society, Room No. 1, Ground Floor", "Opp SBI Bank, Near RTO Corner, Meri Mhasrul", "Nashik, Maharashtra 422003, India"],
    color: "from-gold/20 to-amber-500/10",
  },
  { icon: Phone, title: "Call Us", lines: ["+91 96733 98945"], href: "tel:+919673398945", color: "from-emerald-500/20 to-green-400/10" },
  { icon: Mail, title: "Email Us", lines: ["akantaglobal@gmail.com"], href: "mailto:akantaglobal@gmail.com", color: "from-blue-500/20 to-sky-400/10" },
  { icon: Clock, title: "Business Hours", lines: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"], color: "from-purple-500/20 to-violet-400/10" },
];

const highlights = [
  { icon: Globe, text: "Global Trade Expertise" },
  { icon: Shield, text: "Trusted B2B Partner" },
  { icon: Headphones, text: "24hr Response Time" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const inputClass = "w-full px-5 py-4 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-foreground text-base focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60 transition-all duration-300 placeholder:text-muted-foreground/50";

const Contact = () => {
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
    <>
      <SEOHead
        title="Contact Us — Get a Quote for Bulk Ball Pens & Jute Bags India"
        description="Contact Akanta Global for bulk ball pen orders, jute bag inquiries, export partnerships & wholesale stationery. Get a free quote from India's leading pen & jute bag exporter. Call +91 96733 98945."
        path="/contact"
        keywords="contact ball pen exporter india, get quote bulk pens, jute bag order india, wholesale pen inquiry, ball pen order india, stationery export inquiry, pen supplier contact nashik, bulk pen quote, B2B pen order, jute bags wholesale inquiry, pen export partnership, eco-friendly jute bags quote"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Akanta Global",
          "@id": "https://akantaglobal.com/#localbusiness",
          "url": "https://akantaglobal.com/contact",
          "telephone": "+919673398945",
          "email": "akantaglobal@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dnyan Sarita Society, Room No. 1, Ground Floor, Opp SBI Bank, Near RTO Corner, Meri Mhasrul",
            "addressLocality": "Nashik",
            "addressRegion": "Maharashtra",
            "postalCode": "422003",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.9975",
            "longitude": "73.7898"
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "18:00" },
            { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "13:00" }
          ]
        }}
      />
      <PageHero
        title="Get a Quote"
        subtitle="Ready to buy bulk pens or eco-friendly jute bags from India? Contact our team for wholesale pricing, custom product quotes, and export inquiries."
      />

      {/* Info Cards */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <motion.span variants={fadeUp} custom={0} className="inline-block text-gold text-xs font-bold tracking-[0.25em] uppercase bg-gold/5 border border-gold/20 rounded-full px-5 py-1.5 mb-4">
              Reach Out
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gold-gradient-text">How to Find Us</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group/card relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-6 shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.1)] h-full">
                  <div className="flex items-start gap-4">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shrink-0 border border-gold/10`}
                    >
                      <card.icon size={20} className="text-gold" />
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-foreground text-base mb-1.5">{card.title}</h3>
                      {card.lines.map((line, j) =>
                        card.href ? (
                          <a key={j} href={card.href} className="block text-sm text-muted-foreground hover:text-gold transition-colors duration-300 leading-relaxed">{line}</a>
                        ) : (
                          <p key={j} className="text-sm text-muted-foreground leading-relaxed">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/20 via-amber-400/10 to-gold/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-8 md:p-12 shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.1)]">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center shadow-lg shadow-gold/20">
                    <Send size={18} className="text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-foreground text-2xl">Send Us a Message</h2>
                    <p className="text-sm text-muted-foreground">We'd love to hear from you</p>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground bg-gold/5 border border-gold/15 rounded-full px-3 py-1.5"
                    >
                      <h.icon size={12} className="text-gold" />
                      <span>{h.text}</span>
                    </motion.div>
                  ))}
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
                      { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", maxLen: 20 },
                      { key: "company", label: "Company Name", type: "text", placeholder: "Your Company", maxLen: 100 },
                    ].map(f => (
                      <motion.div key={f.key} animate={focusedField === f.key ? { scale: 1.02 } : { scale: 1 }} transition={{ duration: 0.2 }}>
                        <label className="block text-base font-medium text-foreground mb-2">{f.label}</label>
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
                      required rows={6} placeholder="Tell us about your requirements, products, and quantities..."
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

            {/* Map + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Map */}
              <div className="relative group/map">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl opacity-0 group-hover/map:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border border-border/50 h-80 shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.1)]">
                  <iframe
                    title="Akanta Global Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119960.3!2d73.7!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb0b4a5f0b1b%3A0x736885e3b123a9c2!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                    width="100%" height="100%"
                    style={{ border: 0 }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Partnership CTA */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground shadow-[0_8px_30px_-10px_hsl(var(--gold)/0.15)] border border-gold/10"
              >
                {/* Decorative circles */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 gold-gradient-text">Let's Start a Global Partnership</h3>
                  <p className="text-sm text-primary-foreground/70 mb-5 leading-relaxed">
                    Ready to expand your business globally? Our team is here to help you navigate international trade with confidence.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {[
                      { icon: CheckCircle2, text: "Response within 24 hours" },
                      { icon: CheckCircle2, text: "Free consultation" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-gold text-sm">
                        <item.icon size={14} />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <motion.a
                    href="https://wa.me/919673398945"
                    target="_blank" rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-3.5 rounded-xl font-semibold hover:bg-[#1ebe5a] transition-colors shadow-lg shadow-[#25D366]/20"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </motion.a>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-5 shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.05)]"
              >
                <span className="text-sm font-semibold text-foreground">Follow Us:</span>
                {[
                  { icon: Instagram, href: "https://www.instagram.com/akantaglobal/", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61579243288534", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/akanta-global/?viewAsMember=true", label: "LinkedIn" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold/20 to-amber-500/10 border border-gold/20 flex items-center justify-center text-gold hover:from-gold hover:to-amber-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-gold/20"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>

              {/* Quick response badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-3 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-5 shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.05)]"
              >
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">We're online!</span> Our team typically responds within a few hours during business days.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;