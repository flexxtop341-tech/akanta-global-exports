import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, MapPin, Calendar, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import companyHeroBanner from "@/assets/company-hero-banner.jpg";
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

const companyFacts = [
  { icon: Building2, label: "Headquarters", value: "Nashik, Maharashtra" },
  { icon: MapPin, label: "Port Access", value: "JNPT & Mumbai Port" },
  { icon: Calendar, label: "Established", value: "2020" },
  { icon: Users, label: "Markets Served", value: "15+ Countries" },
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
      <PageHero
        title="Company Details"
        subtitle="Learn about our operations, business model, and commitment to excellence in international trade."
      />

      {/* Company Banner with Facts */}
      <section className="relative h-72 md:h-96 overflow-hidden -mt-1">
        <motion.img
          src={companyHeroBanner}
          alt="Akanta Global headquarters"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {companyFacts.map((fact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 bg-primary/30 backdrop-blur-md rounded-lg p-3 border border-gold/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                    <fact.icon size={20} className="text-gold-light" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/60">{fact.label}</p>
                    <p className="text-sm font-semibold text-primary-foreground">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Counter */}
      <section className="relative py-16 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }} />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedCounter key={i} value={stat.value} label={stat.label} />
            ))}
          </div>
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
                Akanta Global operates from Nashik, Maharashtra — a strategic location in western India with excellent connectivity to major ports. As an export-focused company, we maintain strong partnerships with verified pen manufacturers across the region.
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
