import { Globe, Plane, Ship, Anchor, Package, TrendingUp, Users, MapPin, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
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

interface RegionData {
  id: string;
  label: string;
  x: string;
  y: string;
  countries: string[];
  products: string[];
  partners: number;
  growth: string;
  description: string;
}

const regions: RegionData[] = [
  {
    id: "middle-east",
    label: "Middle East",
    x: "58%",
    y: "38%",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman"],
    products: ["Premium Gel Pens", "Corporate Stationery", "Custom Branding Pens"],
    partners: 45,
    growth: "+32%",
    description: "Our largest export region with strong demand for premium writing instruments and corporate gifting solutions."
  },
  {
    id: "africa",
    label: "Africa",
    x: "45%",
    y: "55%",
    countries: ["Nigeria", "Kenya", "South Africa", "Egypt", "Ghana"],
    products: ["Ball Pens", "School Supplies", "Promotional Pens"],
    partners: 28,
    growth: "+24%",
    description: "Rapidly growing market with focus on educational supplies and cost-effective writing solutions."
  },
  {
    id: "south-asia",
    label: "South Asia",
    x: "68%",
    y: "45%",
    countries: ["Bangladesh", "Sri Lanka", "Nepal", "Myanmar"],
    products: ["Gel Pens", "Metallic Pens", "Bulk Orders"],
    partners: 35,
    growth: "+28%",
    description: "Regional neighbors with cultural affinity and strong trade relationships for diverse pen categories."
  },
  {
    id: "europe",
    label: "Europe",
    x: "42%",
    y: "25%",
    countries: ["UK", "Germany", "France", "Netherlands", "Poland"],
    products: ["Eco-Friendly Pens", "Designer Collections", "Premium Gifts"],
    partners: 18,
    growth: "+15%",
    description: "Premium market segment focusing on sustainable products and high-quality craftsmanship."
  },
  {
    id: "south-america",
    label: "South America",
    x: "25%",
    y: "60%",
    countries: ["Brazil", "Argentina", "Chile", "Colombia"],
    products: ["Promotional Pens", "Custom Logo Pens", "Office Supplies"],
    partners: 12,
    growth: "+18%",
    description: "Emerging market with growing demand for promotional products and office stationery."
  },
];

const GlobalNetwork = () => {
  const [selectedRegion, setSelectedRegion] = useState<RegionData | null>(null);

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

          {/* Interactive Export Regions Map */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="rounded-2xl overflow-hidden relative bg-primary"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 50%, hsl(var(--gold) / 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 30%, hsl(var(--gold) / 0.05) 0%, transparent 40%)`,
            }}
          >
            <div className="flex flex-col lg:flex-row min-h-[600px] md:min-h-[700px]">
              {/* Map Side */}
              <div className="relative flex-1 min-h-[400px] lg:min-h-0">
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
                  { Icon: Plane, x: "12%", y: "15%", delay: 0, size: 20 },
                  { Icon: Ship, x: "80%", y: "70%", delay: 0.5, size: 22 },
                  { Icon: Anchor, x: "72%", y: "18%", delay: 1, size: 18 },
                  { Icon: Globe, x: "18%", y: "75%", delay: 1.5, size: 20 },
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

                {/* Clickable region dots */}
                {regions.map((region, i) => (
                  <motion.button
                    key={region.id}
                    className={`absolute flex flex-col items-center group z-20 focus:outline-none ${selectedRegion?.id === region.id ? 'z-30' : ''}`}
                    style={{ left: region.x, top: region.y }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.3, type: "spring", bounce: 0.5 }}
                    onClick={() => setSelectedRegion(selectedRegion?.id === region.id ? null : region)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className={`w-5 h-5 rounded-full shadow-lg relative transition-colors duration-300 ${
                        selectedRegion?.id === region.id 
                          ? 'bg-gold ring-4 ring-gold/30 shadow-gold/60' 
                          : 'bg-gold shadow-gold/40'
                      }`}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />
                    </motion.div>
                    <motion.span
                      className={`mt-2 text-xs font-semibold whitespace-nowrap backdrop-blur-sm px-3 py-1 rounded-full border transition-all duration-300 ${
                        selectedRegion?.id === region.id
                          ? 'bg-gold/20 border-gold/40 text-gold-light opacity-100'
                          : 'bg-primary/80 border-gold/20 text-gold-light opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {region.label}
                    </motion.span>
                  </motion.button>
                ))}

                {/* Center heading */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[400px] lg:min-h-full px-4 pointer-events-none">
                  <motion.div
                    animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Globe size={64} className="mx-auto text-gold mb-4 drop-shadow-lg" style={{ filter: "drop-shadow(0 0 20px hsl(var(--gold) / 0.4))" }} />
                  </motion.div>
                  <motion.h2 variants={fadeUp} custom={0} className="text-2xl md:text-3xl font-bold mb-2 gold-gradient-text text-center">
                    Click a Region to Explore
                  </motion.h2>
                  <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/60 max-w-md mx-auto text-sm text-center">
                    Tap any glowing dot to view export details for that market
                  </motion.p>
                </div>
              </div>

              {/* Detail Panel Side */}
              <div className="lg:w-[380px] xl:w-[420px] border-t lg:border-t-0 lg:border-l border-gold/10 relative">
                <AnimatePresence mode="wait">
                  {selectedRegion ? (
                    <motion.div
                      key={selectedRegion.id}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="p-6 md:p-8 h-full flex flex-col"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <MapPin size={16} className="text-gold" />
                            <span className="text-xs uppercase tracking-wider text-gold/70 font-semibold">Export Region</span>
                          </div>
                          <h3 className="text-2xl font-bold text-gold-light">{selectedRegion.label}</h3>
                        </div>
                        <button
                          onClick={() => setSelectedRegion(null)}
                          className="text-primary-foreground/40 hover:text-primary-foreground/80 transition-colors p-1 rounded-full hover:bg-gold/10"
                        >
                          <X size={18} />
                        </button>
                      </div>

                      {/* Description */}
                      <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
                        {selectedRegion.description}
                      </p>

                      {/* Stats Row */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-gold/5 border border-gold/10 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <Users size={14} className="text-gold/70" />
                            <span className="text-xs text-primary-foreground/50">Partners</span>
                          </div>
                          <span className="text-2xl font-bold text-gold-light">{selectedRegion.partners}+</span>
                        </div>
                        <div className="bg-gold/5 border border-gold/10 rounded-xl p-4">
                          <div className="flex items-center gap-2 mb-1">
                            <TrendingUp size={14} className="text-gold/70" />
                            <span className="text-xs text-primary-foreground/50">YoY Growth</span>
                          </div>
                          <span className="text-2xl font-bold text-emerald-400">{selectedRegion.growth}</span>
                        </div>
                      </div>

                      {/* Countries */}
                      <div className="mb-5">
                        <h4 className="text-xs uppercase tracking-wider text-gold/60 font-semibold mb-3">Key Markets</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedRegion.countries.map((c) => (
                            <span key={c} className="text-xs bg-gold/10 border border-gold/15 text-gold-light px-3 py-1.5 rounded-full">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Products */}
                      <div className="mb-6">
                        <h4 className="text-xs uppercase tracking-wider text-gold/60 font-semibold mb-3">Top Products</h4>
                        <div className="space-y-2">
                          {selectedRegion.products.map((p) => (
                            <div key={p} className="flex items-center gap-2 text-sm text-primary-foreground/70">
                              <Package size={14} className="text-gold/50 shrink-0" />
                              {p}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-auto">
                        <Link
                          to="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 bg-gold/20 border border-gold/30 text-gold-light font-semibold px-5 py-3 rounded-full hover:bg-gold/30 transition-colors backdrop-blur-sm text-sm"
                        >
                          Inquire About {selectedRegion.label}
                          <Globe size={14} />
                        </Link>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center p-8 text-center"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mb-4"
                      >
                        <MapPin size={28} className="text-gold/40" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-primary-foreground/60 mb-2">Select a Region</h3>
                      <p className="text-sm text-primary-foreground/40 max-w-[250px]">
                        Click on any glowing marker on the map to view detailed export information
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GlobalNetwork;