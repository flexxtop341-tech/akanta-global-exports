import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, RotateCcw } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import companyHeroBanner from "@/assets/shipping-bg.jpg";
import logo from "@/assets/akanta-logo-new.png";
import iconGlobalReach from "@/assets/icon-global-reach.png";
import iconQualityProduct from "@/assets/icon-quality-product.png";
import iconShipping from "@/assets/icon-shipping.png";
import iconVerify from "@/assets/icon-step-verify.png";
import iconInspect from "@/assets/icon-step-inspect.png";
import iconDocs from "@/assets/icon-step-docs.png";
import iconShip from "@/assets/icon-step-ship.png";
import iconPackage from "@/assets/icon-step-package.png";
import iconSupport from "@/assets/icon-step-support.png";
import aboutPartnership from "@/assets/about-partnership.jpg";

const steps = [
  { icon: iconVerify, title: "Manufacturer Verification", desc: "We carefully vet and verify Indian pen manufacturers for quality and reliability." },
  { icon: iconInspect, title: "Quality Inspection", desc: "Multi-stage inspection process ensuring every product meets export standards." },
  { icon: iconDocs, title: "Export Documentation", desc: "Complete handling of all export paperwork and regulatory compliance." },
  { icon: iconShip, title: "Logistics Coordination", desc: "End-to-end shipping management with reliable international freight partners." },
  { icon: iconPackage, title: "Timely Delivery", desc: "Consistent on-time delivery across all international markets." },
  { icon: iconSupport, title: "Buyer Support", desc: "Dedicated post-delivery support and ongoing relationship management." },
];


const stats = [
  { value: "500K+", label: "Units Exported Monthly" },
  { value: "15+", label: "Countries Served" },
  { value: "99%", label: "On-Time Delivery" },
  { value: "50+", label: "Verified Suppliers" },
];

const whyUs = [
  "Direct sourcing from verified Indian manufacturers",
  "Complete export documentation & compliance",
  "Multi-stage quality inspection process",
  "Competitive pricing with flexible MOQs",
  "Dedicated relationship manager for every client",
  "Fast turnaround with reliable logistics partners",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
      className="text-center"
    >
      <motion.span
        className="text-4xl md:text-5xl font-extrabold gold-gradient-text block"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}
      </motion.span>
      <p className="text-sm text-primary-foreground/70 mt-1">{label}</p>
    </motion.div>
  );
};

const CompanyDetails = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <SEOHead
        title="Company Details — Pen Manufacturing Company India"
        description="Akanta Global is a pen manufacturing company in India offering complete export solutions — from manufacturer verification and quality inspection to logistics and delivery of bulk writing instruments."
        path="/company"
      />
      <PageHero
        title="Company Details"
        subtitle="India pen export company — learn about our operations, quality assurance, and commitment to excellence in international stationery trade."
      />

      {/* Business Card Section */}
      <section className="py-16 md:py-24 bg-muted/30 -mt-1">
        <div className="container mx-auto px-4 flex justify-center" style={{ perspective: '1200px' }}>
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 6 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.015, boxShadow: '0 40px 100px -20px hsl(var(--primary) / 0.3)' }}
            className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-[0_30px_80px_-20px_hsl(var(--primary)/0.25)] border border-gold/20"
          >
            <div className="grid md:grid-cols-2 min-h-[360px] md:min-h-[420px]">
              {/* Left — Shipping Image with animated overlay */}
              <div className="relative overflow-hidden group">
                <motion.img
                  src={companyHeroBanner}
                  alt="Akanta Global shipping and logistics"
                  className="w-full h-full object-cover min-h-[220px] transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                {/* Floating vector icons */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="absolute top-6 left-6 flex flex-col gap-3"
                >
                  {[
                    { icon: iconGlobalReach, label: "Global Reach" },
                    { icon: iconQualityProduct, label: "Quality Products" },
                    { icon: iconShipping, label: "Fast Shipping" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-3 py-2 border border-white/15"
                    >
                      <img src={item.icon} alt={item.label} className="w-7 h-7 object-contain drop-shadow-lg" />
                      <span className="text-xs font-semibold text-white/90">{item.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute bottom-5 left-5 right-5"
                >
                  <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 bg-gold/30 backdrop-blur-sm rounded-full px-4 py-1.5 border border-gold/20">
                    ✦ Trusted Export Partner
                  </span>
                </motion.div>
              </div>

              {/* Right — Logo & Info (visiting card style) */}
              <div className="relative bg-card flex flex-col items-center justify-center p-8 md:p-10 text-center overflow-hidden">
                {/* Animated corner accents */}
                {[
                  "top-3 left-3 border-t-2 border-l-2 rounded-tl-sm",
                  "top-3 right-3 border-t-2 border-r-2 rounded-tr-sm",
                  "bottom-3 left-3 border-b-2 border-l-2 rounded-bl-sm",
                  "bottom-3 right-3 border-b-2 border-r-2 rounded-br-sm",
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className={`absolute w-7 h-7 border-gold/40 ${pos}`}
                  />
                ))}

                {/* Radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-[0.06] pointer-events-none"
                  style={{ background: 'radial-gradient(circle, hsl(var(--gold)), transparent 70%)' }}
                />

                {/* Dot pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                  backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.8) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />

                <div className="relative z-10">
                  <motion.img
                    src={logo}
                    alt="Akanta Global"
                    className="h-24 md:h-32 w-auto mx-auto mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
                  />

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-16 h-[2px] mx-auto mb-4 rounded-full origin-center"
                    style={{ background: 'linear-gradient(90deg, hsl(var(--gold)), hsl(var(--gold-light)))' }}
                  />

                  <motion.h2
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="text-xl md:text-2xl font-bold mb-2"
                  >
                    Excellence in <span className="gold-gradient-text">Global Trade</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="text-muted-foreground text-sm mb-5 max-w-xs mx-auto"
                  >
                    Trusted Indian exporter of premium writing instruments to global markets.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground/70"
                  >
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 border border-border/50 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300">
                      📍 Nashik, India
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 border border-border/50 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300">
                      🌍 Global Exports
                    </span>
                    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 border border-border/50 hover:border-gold/30 hover:bg-gold/5 transition-all duration-300">
                      ✅ ISO Certified
                    </span>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About Section - Split Layout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="space-y-5"
            >
              <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest">
                Who We Are
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold">
                <span className="gold-gradient-text">Your Trusted Export Partner</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="gold-divider" />
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed">
                Akanta Global operates from Nashik, Maharashtra — a strategic location in western India with excellent connectivity to major ports. As a leading ball pen exporter and stationery export company, we maintain strong partnerships with verified pen manufacturers across the region.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed">
                Our business model is built on transparency, quality assurance, and international compliance. We handle every step from manufacturer verification to final delivery.
              </motion.p>
            </motion.div>

            {/* Why Choose Us - Interactive List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-card rounded-xl border border-border p-8 premium-shadow"
            >
              <h3 className="text-lg font-bold text-gold-dark mb-6">Why Choose Akanta Global?</h3>
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-start gap-3 group cursor-default"
                  >
                    <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline Process */}
      <section className="py-20 bg-muted/50" ref={timelineRef}>
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest block">Step by Step</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">Our Business Process</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto" />
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-px">
              <motion.div
                className="w-full bg-gradient-to-b from-gold to-gold-light rounded-full"
                style={{ height: lineHeight }}
              />
            </div>

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`relative flex items-start gap-6 mb-12 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-background -translate-x-1/2 mt-6 z-10 shadow-md shadow-gold/30"
                  />

                  {/* Content card */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <motion.div
                      whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsl(var(--gold) / 0.2)" }}
                      transition={{ duration: 0.3 }}
                      className="bg-card p-6 rounded-xl border border-border premium-shadow"
                    >
                      <div className={`flex items-center gap-4 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <motion.div
                          animate={{ y: [0, -6, 0] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                          className="w-14 h-14 shrink-0"
                        >
                          <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                        </motion.div>
                        <div>
                          <span className="text-xs font-bold text-gold/40 block">STEP {String(i + 1).padStart(2, "0")}</span>
                          <h3 className="text-lg font-semibold text-gold-dark">{step.title}</h3>
                        </div>
                      </div>
                      <p className={`text-sm text-muted-foreground ${isLeft ? "md:text-right" : ""}`}>{step.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative h-72 md:h-80 overflow-hidden">
        <img
          src={aboutPartnership}
          alt="Business partnership"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70 flex items-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
                Let's discuss how Akanta Global can be your trusted export partner for premium writing instruments.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-primary-foreground font-semibold px-8 py-3 rounded-md hover:bg-gold-dark transition-colors shadow-lg"
                >
                  Get in Touch
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyDetails;
