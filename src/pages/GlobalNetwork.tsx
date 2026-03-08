import { Globe, ShieldCheck, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import globalShipping from "@/assets/global-shipping-banner.jpg";
import globalMapNetwork from "@/assets/global-map-network.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const float = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const items = [
  { icon: ShieldCheck, title: "Verified Manufacturers", desc: "Every supplier in our network is rigorously vetted for quality and reliability." },
  { icon: Users, title: "International Buyer Support", desc: "Dedicated support team for seamless communication across time zones." },
  { icon: Globe, title: "Global Reach", desc: "Exporting to markets across Asia, Africa, Middle East, and beyond." },
  { icon: MapPin, title: "Strategic Location", desc: "Based in Nashik with proximity to major Indian ports." },
];

const GlobalNetwork = () => {
  return (
    <>
      <PageHero
        title="Global Network"
        subtitle="Akanta Global serves international markets with a reliable supply chain backed by verified Indian manufacturers."
      />

      {/* Shipping Banner */}
      <section className="relative overflow-hidden">
        <motion.img
          src={globalShipping}
          alt="Global cargo shipping across oceans"
          className="w-full h-64 md:h-80 object-cover"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-bold text-white"
            >
              Connecting <span className="gold-gradient-text">India</span> to the World
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -10, scale: 1.03, boxShadow: "0 20px 40px -12px hsl(var(--gold) / 0.2)", transition: { duration: 0.3 } }}
                className="bg-card p-8 rounded-lg border border-border premium-shadow cursor-default"
              >
                <motion.div
                  animate={float.animate}
                  className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4"
                >
                  <item.icon size={24} className="text-gold" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gold-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* World Map Image */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-lg overflow-hidden premium-shadow relative"
          >
            <img
              src={globalMapNetwork}
              alt="Global trade network map showing export regions"
              className="w-full h-72 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center text-center p-8">
              <motion.div animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                <Globe size={64} className="mx-auto text-gold-light mb-4" />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={0} className="text-2xl md:text-3xl font-bold mb-2 gold-gradient-text">Our Export Regions</motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-white/80 max-w-lg mx-auto">
                We actively export to markets across Asia, Africa, the Middle East, Europe, and South America. Contact us to discuss supply to your region.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} className="mt-6">
                <Link to="/contact" className="inline-block bg-gold text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold-dark transition-colors shadow-md">
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GlobalNetwork;
