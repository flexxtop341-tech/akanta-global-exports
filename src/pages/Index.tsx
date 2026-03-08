import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, PackageCheck, Globe2 } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import ballPens from "@/assets/ball-pens.jpg";
import gelPens from "@/assets/gel-pens.jpg";
import promoPens from "@/assets/promo-pens.jpg";
import customPens from "@/assets/custom-pens.jpg";
import globalTrade from "@/assets/global-trade.png";
import shippingBg from "@/assets/shipping-bg.jpg";
import trustedPartnerBg from "@/assets/trusted-partner-bg.png";
import importExportIllustration from "@/assets/import-export-illustration.png";


const categories = [
  { image: ballPens, title: "Ball Pens", desc: "Smooth-writing, durable pens for office, school & promotional use." },
  { image: gelPens, title: "Gel Pens", desc: "Vibrant gel ink pens with superior writing comfort." },
  { image: promoPens, title: "Promotional Pens", desc: "Custom-branded pens for events & marketing campaigns." },
  { image: customPens, title: "Custom Solutions", desc: "Private-label pens with engraving & gift packaging." },
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
      <section className="py-20 bg-background overflow-hidden">
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
                { icon: Ship, label: "Reliable Shipping", sub: "Smooth logistics worldwide", stat: "45+" , statLabel: "Countries" },
                { icon: PackageCheck, label: "Quality Products", sub: "Export-grade standards", stat: "100%", statLabel: "Inspected" },
                { icon: Globe2, label: "Global Reach", sub: "Markets across continents", stat: "24/7", statLabel: "Support" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={4 + i}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group relative bg-white/[0.08] backdrop-blur-md rounded-2xl py-8 px-6 border border-white/10 hover:border-gold/40 transition-all duration-500 hover:bg-white/[0.12] hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.2)]"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-14 h-14 rounded-2xl bg-gold/15 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-500">
                    <item.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
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
      <section className="py-20 bg-card overflow-hidden">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Final CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.4) 1px, transparent 1px)`,
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
