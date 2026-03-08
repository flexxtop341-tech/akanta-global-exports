import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, PackageCheck, Globe2, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import iconShipping from "@/assets/icon-shipping.png";
import iconQualityProduct from "@/assets/icon-quality-product.png";
import iconGlobalReach from "@/assets/icon-global-reach.png";
import iconDistribution from "@/assets/icon-distribution.png";
import iconPartnership from "@/assets/icon-partnership.png";
import iconAboutPartner from "@/assets/icon-about-partner.png";
import ServicesSection from "@/components/ServicesSection";
import ballPens from "@/assets/ball-pens.jpg";
import buttonPens from "@/assets/button-pens.jpg";
import metallicPens from "@/assets/metallic-pens.jpg";
import globalTrade from "@/assets/global-trade.png";
import shippingBg from "@/assets/shipping-bg.jpg";
import trustedPartnerBg from "@/assets/trusted-partner-bg.png";
import importExportIllustration from "@/assets/import-export-illustration.png";
import pensPattern from "@/assets/pens-pattern.png";
import ctaBg from "@/assets/cta-bg.jpg";
import pensCollection from "@/assets/pens-collection.png";

const inputClass = "w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold/60 transition-all duration-300 placeholder:text-muted-foreground/50";

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
            
            <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 p-8 md:p-10 shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.1)]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center shadow-lg shadow-gold/20">
                  <Send size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">Send Us a Message</h3>
                  <p className="text-xs text-muted-foreground">We'd love to hear from you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true, maxLen: 100 },
                    { key: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true, maxLen: 255 },
                  ].map(f => (
                    <motion.div key={f.key} animate={focusedField === f.key ? { scale: 1.02 } : { scale: 1 }} transition={{ duration: 0.2 }}>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
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
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", required: false, maxLen: 20 },
                    { key: "company", label: "Company Name", type: "text", placeholder: "Your Company", required: false, maxLen: 100 },
                  ].map(f => (
                    <motion.div key={f.key} animate={focusedField === f.key ? { scale: 1.02 } : { scale: 1 }} transition={{ duration: 0.2 }}>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
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
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message <span className="text-gold">*</span>
                  </label>
                  <textarea
                    required rows={5} placeholder="Tell us about your requirements, desired products, and quantities..."
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
                  className="w-full sm:w-auto bg-gradient-to-r from-gold to-amber-600 text-white px-10 py-3.5 rounded-xl font-semibold transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
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
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 border border-gold/10`}
                    >
                      <item.icon size={20} className="text-gold" />
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
  { image: ballPens, title: "Ball Pens", desc: "Classic smooth-writing ball pens for everyday office, school & bulk use." },
  { image: buttonPens, title: "Click / Button Pens", desc: "Retractable push-button pens with sleek designs and comfortable grip." },
  { image: metallicPens, title: "Metallic Ball Pens", desc: "Premium metallic-finish pens for corporate gifting & executive use." },
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
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
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
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 drop-shadow-lg"
            >
              <span className="gold-gradient-text">Connecting Global Markets</span>
              <br />
              <span className="text-white drop-shadow-lg">with Trust & Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md"
            >
              Akanta Global is a trusted Indian export company delivering high-quality, export-grade writing instruments to international markets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="bg-gold text-white px-7 py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 text-white px-7 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Snapshot with Stats */}
      <section className="py-20 bg-background overflow-hidden relative">
        {/* Decorative pen pattern */}
        <img src={pensPattern} alt="" className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-[0.03] pointer-events-none" />
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
                Akanta Global is dedicated to growing in the field of international trade and global sourcing. We connect trusted manufacturers with buyers across domestic and international markets. As a merchant export company, we focus on delivering quality products with smooth and transparent trade processes.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed mb-6">
                We work closely with suppliers and global partners to build strong business relationships. Our goal is to simplify international trade and bridge the gap between buyers and sellers while ensuring reliability, quality, and customer satisfaction in every transaction.
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
                alt="Global trade illustration with pens and shipping boxes around a globe"
                className="w-full max-w-md lg:max-w-lg object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment to Export & Shipping */}
      <section className="relative py-32 overflow-hidden">
        <motion.img
          src={shippingBg}
          alt="International shipping port with cargo containers"
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
                  className="group relative bg-primary-dark rounded-2xl py-8 px-6 border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.3)]"
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
                alt="Global trade network connecting continents with shipping and partnerships"
                className="w-full max-w-lg object-contain relative z-10"
              />
              {/* Floating accent badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 bg-card rounded-xl px-4 py-3 border border-border premium-shadow flex items-center gap-2"
              >
                <Ship className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="text-xs font-bold text-foreground">Global Exports</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 left-4 bg-card rounded-xl px-4 py-3 border border-border premium-shadow flex items-center gap-2"
              >
                <PackageCheck className="w-5 h-5 text-gold" strokeWidth={1.5} />
                <span className="text-xs font-bold text-foreground">Trusted Quality</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Services */}
      <ServicesSection />

      {/* Product Categories */}
      <section className="py-20 bg-card overflow-hidden relative">
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
              High-quality, export-grade writing instruments inspected and certified for international markets.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {categories.slice(0, 3).map((cat, i) => (
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

      {/* International Import-Export Trading */}
      <section className="relative py-28 overflow-hidden">
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
                  alt="International import export trading with ships, planes, trucks and globe"
                  className="w-full max-w-lg mx-auto object-contain relative z-10"
                />
                {/* Floating stat cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-2 -right-2 md:top-2 md:right-2 bg-white/10 backdrop-blur-lg rounded-2xl px-5 py-4 border border-white/15 shadow-2xl z-20"
                >
                  <span className="block text-2xl font-bold gold-gradient-text">100+</span>
                  <span className="text-white/70 text-[11px] font-medium">Products Exported</span>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-2 -left-2 md:bottom-4 md:left-0 bg-white/10 backdrop-blur-lg rounded-2xl px-5 py-4 border border-white/15 shadow-2xl z-20"
                >
                  <span className="block text-2xl font-bold gold-gradient-text">Global</span>
                  <span className="text-white/70 text-[11px] font-medium">Market Presence</span>
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

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <img src={ctaBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(var(--primary) / 0.92), hsl(var(--primary-dark) / 0.88))'
        }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative container mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gold-gradient-text">Let's Grow Your Business Globally</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Partner with Akanta Global for reliable, high-quality pen exports from India to the world.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link
              to="/contact"
              className="inline-block bg-gold text-white px-8 py-3.5 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
            >
              Start a Partnership
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
