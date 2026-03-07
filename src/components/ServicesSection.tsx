import { motion } from "framer-motion";
import { ArrowRightLeft, Truck, FileText, Handshake, ShieldCheck } from "lucide-react";

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

const services = [
  {
    icon: ArrowRightLeft,
    title: "Import & Export",
    desc: "Akanta Global connects trusted suppliers with global buyers through reliable import and export services.",
  },
  {
    icon: Truck,
    title: "Products Distribution",
    desc: "Akanta Global supports businesses with global sourcing and product distribution to international markets.",
  },
  {
    icon: FileText,
    title: "Merchant Export Services",
    desc: "We handle export documentation, logistics, and delivery to ensure smooth international trade.",
  },
  {
    icon: Handshake,
    title: "Trade Partnerships",
    desc: "We aim to build long-term partnerships with buyers, distributors, and sourcing agents across global markets.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "We focus on delivering quality products by working with trusted suppliers and maintaining reliable sourcing standards.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest block">
            What We Do
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 mb-2">
            <span className="gold-gradient-text">Our Services</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-4" />
          <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive trade solutions to help businesses expand across international markets.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-card rounded-xl p-6 border border-border premium-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
