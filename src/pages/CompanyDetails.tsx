import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import companyHeroBanner from "@/assets/company-hero-banner.jpg";
import iconVerify from "@/assets/icon-step-verify.png";
import iconInspect from "@/assets/icon-step-inspect.png";
import iconDocs from "@/assets/icon-step-docs.png";
import iconShip from "@/assets/icon-step-ship.png";
import iconPackage from "@/assets/icon-step-package.png";
import iconSupport from "@/assets/icon-step-support.png";

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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const CompanyDetails = () => {
  return (
    <>
      <PageHero
        title="Company Details"
        subtitle="Learn about our operations, business model, and commitment to excellence in international trade."
      />

      {/* Company Banner with Facts */}
      <section className="relative h-72 md:h-96 overflow-hidden -mt-1">
        <img
          src={companyHeroBanner}
          alt="Akanta Global headquarters"
          className="w-full h-full object-cover"
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
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/20 backdrop-blur-sm flex items-center justify-center shrink-0">
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

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed mb-16"
          >
            <motion.p variants={fadeUp} custom={0}>
              Akanta Global operates from Nashik, Maharashtra — a strategic location in western India with excellent connectivity to major ports. As an export-focused company, we maintain strong partnerships with verified pen manufacturers across the region.
            </motion.p>
            <motion.p variants={fadeUp} custom={1}>
              Our business model is built on transparency, quality assurance, and international compliance. We handle every step from manufacturer verification to final delivery, allowing our buyers to focus on growing their business.
            </motion.p>
          </motion.div>

          {/* Business Process */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest block">Step by Step</motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-2xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">Our Business Process</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mb-10" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 20px 40px -12px hsl(var(--gold) / 0.2)", transition: { duration: 0.3 } }}
                className="relative bg-card p-8 rounded-lg border border-border premium-shadow cursor-default"
              >
                <span className="absolute top-4 right-4 text-4xl font-bold text-gold/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 mb-4"
                >
                  <img src={step.icon} alt={step.title} className="w-full h-full object-contain" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gold-dark mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyDetails;
