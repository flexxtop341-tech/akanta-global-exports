import { motion } from "framer-motion";
import pensPattern from "@/assets/pens-pattern.png";
import iconImportExport from "@/assets/icon-import-export.png";
import iconDistribution from "@/assets/icon-distribution.png";
import iconMerchantExport from "@/assets/icon-merchant-export.png";
import iconPartnership from "@/assets/icon-partnership.png";
import iconQuality from "@/assets/icon-quality.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const services = [
  {
    image: iconImportExport,
    title: "Import & Export",
    desc: "Akanta Global connects trusted pen manufacturers and jute bag suppliers with global buyers through reliable import and export services.",
  },
  {
    image: iconDistribution,
    title: "Products Distribution",
    desc: "Akanta Global supports businesses with global sourcing of writing instruments and jute bags, and product distribution to international markets.",
  },
  {
    image: iconMerchantExport,
    title: "Merchant Export Services",
    desc: "We handle export documentation, logistics, and delivery to ensure smooth international trade.",
  },
  {
    image: iconPartnership,
    title: "Trade Partnerships",
    desc: "We aim to build long-term partnerships with buyers, distributors, and sourcing agents across global markets.",
  },
  {
    image: iconQuality,
    title: "Quality Assurance",
    desc: "We focus on delivering quality pens and jute bags by working with trusted suppliers and maintaining reliable sourcing standards.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/40 overflow-hidden relative">
      <img src={pensPattern} alt="" className="absolute bottom-0 left-0 w-1/2 h-full object-cover opacity-[0.03] pointer-events-none scale-x-[-1]" />
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-xs uppercase tracking-[0.25em] block">
            What We Do
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-3 mb-3">
            <span className="gold-gradient-text">Our Services</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-5" />
          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Empowering global trade with reliable solutions — from sourcing and logistics to quality assurance and distribution.
          </motion.p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {services.slice(3).map((service, i) => (
            <ServiceCard key={i + 3} service={service} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  service: typeof services[number];
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative bg-card rounded-2xl p-8 text-center flex flex-col items-center border border-border/60 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.15)] overflow-hidden"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)' }}
      />

      {/* Vector Icon */}
      <div className="w-24 h-24 flex items-center justify-center mb-5 p-2 rounded-2xl bg-muted/50 border border-border/40 transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/5 group-hover:border-gold/20">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-gold">
        {service.title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
        {service.desc}
      </p>
    </motion.div>
  );
};

export default ServicesSection;
