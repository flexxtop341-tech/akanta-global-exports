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

const services = [
  {
    icon: ArrowRightLeft,
    title: "Import & Export",
    desc: "Akanta Global connects trusted suppliers with global buyers through reliable import and export services.",
    color: "hsl(var(--gold))",
  },
  {
    icon: Truck,
    title: "Products Distribution",
    desc: "Akanta Global supports businesses with global sourcing and product distribution to international markets.",
    color: "hsl(var(--accent))",
  },
  {
    icon: FileText,
    title: "Merchant Export Services",
    desc: "We handle export documentation, logistics, and delivery to ensure smooth international trade.",
    color: "hsl(var(--destructive))",
  },
  {
    icon: Handshake,
    title: "Trade Partnerships",
    desc: "We aim to build long-term partnerships with buyers, distributors, and sourcing agents across global markets.",
    color: "hsl(var(--primary))",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "We focus on delivering quality products by working with trusted suppliers and maintaining reliable sourcing standards.",
    color: "hsl(var(--gold-dark))",
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
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-2xl md:text-3xl font-semibold text-foreground">
            Akanta Global Services
          </motion.h2>
          <motion.div variants={fadeUp} custom={1} className="gold-divider mx-auto mt-3" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              custom={i}
              className="bg-card rounded-xl p-8 text-center flex flex-col items-center"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                style={{ backgroundColor: `color-mix(in srgb, ${service.color} 15%, transparent)` }}
              >
                <service.icon
                  className="w-7 h-7"
                  strokeWidth={1.5}
                  style={{ color: service.color }}
                />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
