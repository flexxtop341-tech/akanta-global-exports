import { Globe, ShieldCheck, Users, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import globalMapBg from "@/assets/global-map-bg.jpg";
import globalNetworkHero from "@/assets/global-network-hero.jpg";

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

      {/* Shipping Port Banner */}
      <section className="relative h-64 md:h-80 overflow-hidden -mt-1">
        <img
          src={globalNetworkHero}
          alt="International shipping port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-primary-foreground/90 text-sm md:text-base max-w-xl"
            >
              Strategically connected to India's major seaports and airports, ensuring timely global delivery.
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

          {/* World Map with Real Image */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-lg overflow-hidden premium-shadow relative"
          >
            <img
              src={globalMapBg}
              alt="Global trade network map"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-primary/60 flex items-center justify-center">
              <div className="text-center px-4">
                <motion.div animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
                  <Globe size={64} className="mx-auto text-gold-light mb-4" />
                </motion.div>
                <motion.h2 variants={fadeUp} custom={0} className="text-2xl md:text-3xl font-bold mb-2 gold-gradient-text">Our Export Regions</motion.h2>
                <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70 max-w-lg mx-auto text-sm md:text-base">
                  We actively export to markets across Asia, Africa, the Middle East, Europe, and South America. Contact us to discuss supply to your region.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GlobalNetwork;
