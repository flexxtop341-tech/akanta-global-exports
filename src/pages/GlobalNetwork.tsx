import { Globe, Plane, Ship, Anchor } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import globalNetworkHero from "@/assets/global-network-hero.jpg";
import iconQuality from "@/assets/icon-quality.png";
import iconPartnership from "@/assets/icon-partnership.png";
import iconGlobalReach from "@/assets/icon-global-reach.png";
import iconShipping from "@/assets/icon-shipping.png";

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
  { icon: iconQuality, title: "Verified Manufacturers", desc: "Every supplier in our network is rigorously vetted for quality and reliability." },
  { icon: iconPartnership, title: "International Buyer Support", desc: "Dedicated support team for seamless communication across time zones." },
  { icon: iconGlobalReach, title: "Global Reach", desc: "Exporting to markets across Asia, Africa, Middle East, and beyond." },
  { icon: iconShipping, title: "Strategic Location", desc: "Based in Nashik with proximity to major Indian ports." },
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
                  className="w-24 h-24 rounded-xl bg-gold/10 flex items-center justify-center mb-4 p-4"
                >
                  <img src={item.icon} alt={item.title} className="w-full h-full object-contain drop-shadow-md" />
                </motion.div>
                <h3 className="text-lg font-semibold text-gold-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Export Regions */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl overflow-hidden relative bg-primary min-h-[500px] md:min-h-[600px]"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--gold) / 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, hsl(var(--gold) / 0.05) 0%, transparent 40%)`,
            }}
          >
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />

            {/* Floating route lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500" fill="none" preserveAspectRatio="xMidYMid slice">
              <motion.path
                d="M 100 350 Q 300 200 500 280 T 750 200"
                stroke="hsl(var(--gold) / 0.2)" strokeWidth="1.5" strokeDasharray="8 6" fill="none"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }}
              />
              <motion.path
                d="M 150 400 Q 350 150 550 300 T 700 150"
                stroke="hsl(var(--gold) / 0.15)" strokeWidth="1" strokeDasharray="6 8" fill="none"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 2.5, delay: 0.8 }}
              />
              <motion.path
                d="M 80 250 Q 250 350 450 200 T 720 300"
                stroke="hsl(var(--gold) / 0.12)" strokeWidth="1" strokeDasharray="4 6" fill="none"
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
                viewport={{ once: true }} transition={{ duration: 3, delay: 1 }}
              />
            </svg>

            {/* Animated floating icons */}
            {[
              { Icon: Plane, x: "15%", y: "20%", delay: 0, size: 20 },
              { Icon: Ship, x: "75%", y: "65%", delay: 0.5, size: 22 },
              { Icon: Anchor, x: "60%", y: "25%", delay: 1, size: 18 },
              { Icon: Globe, x: "30%", y: "70%", delay: 1.5, size: 20 },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="absolute w-10 h-10 rounded-full bg-gold/10 backdrop-blur-sm border border-gold/20 flex items-center justify-center"
                style={{ left: item.x, top: item.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: item.delay }}
                animate={{ y: [0, -10, 0] }}
              >
                <item.Icon size={item.size} className="text-gold/60" />
              </motion.div>
            ))}

            {/* Glowing region dots */}
            {[
              { label: "Middle East", x: "58%", y: "38%", delay: 0.3 },
              { label: "Africa", x: "45%", y: "55%", delay: 0.6 },
              { label: "South Asia", x: "65%", y: "45%", delay: 0.9 },
              { label: "Europe", x: "42%", y: "25%", delay: 1.2 },
              { label: "South America", x: "25%", y: "60%", delay: 1.5 },
            ].map((region, i) => (
              <motion.div
                key={i}
                className="absolute flex flex-col items-center group cursor-default"
                style={{ left: region.x, top: region.y }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: region.delay, type: "spring", bounce: 0.5 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full bg-gold shadow-lg shadow-gold/40 relative"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
                </motion.div>
                <motion.span
                  className="mt-2 text-xs font-semibold text-gold-light whitespace-nowrap bg-primary/80 backdrop-blur-sm px-2 py-0.5 rounded-full border border-gold/20 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  {region.label}
                </motion.span>
              </motion.div>
            ))}

            {/* Center content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[500px] md:min-h-[600px] px-4">
              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Globe size={72} className="mx-auto text-gold mb-6 drop-shadow-lg" style={{ filter: "drop-shadow(0 0 20px hsl(var(--gold) / 0.4))" }} />
              </motion.div>
              <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-3 gold-gradient-text text-center">
                Our Export Regions
              </motion.h2>
              <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70 max-w-lg mx-auto text-sm md:text-base text-center mb-8">
                We actively export to markets across Asia, Africa, the Middle East, Europe, and South America.
              </motion.p>
              <motion.div variants={fadeUp} custom={2} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 text-gold-light font-semibold px-6 py-3 rounded-full hover:bg-gold/30 transition-colors backdrop-blur-sm"
                >
                  Discuss Your Region
                  <Globe size={16} />
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
