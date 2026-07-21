import { ArrowRight, Linkedin, Mail, Instagram, Facebook } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import founderAvatar from "@/assets/team-founder-avatar.png";
const karanAvatarAsset = { url: `${import.meta.env.BASE_URL}karan-portrait.jpg` };
import iconGlobal from "@/assets/icon-team-global.png";
import iconQuality from "@/assets/icon-team-quality.png";
import iconPartner from "@/assets/icon-team-partner.png";
import iconStrategy from "@/assets/icon-team-strategy.png";

const strengths = [
  { icon: iconGlobal, label: "Global Trade Expertise", desc: "Deep knowledge of international markets and trade regulations." },
  { icon: iconQuality, label: "Quality Assurance", desc: "Rigorous quality checks across the entire supply chain." },
  { icon: iconPartner, label: "Partner Relations", desc: "Building long-term trust with manufacturers and buyers worldwide." },
  { icon: iconStrategy, label: "Market Strategy", desc: "Data-driven approach to identifying export opportunities." },
];

const Team = () => {
  return (
    <>
      <SEOHead
        title="Our Team — Babita Gunjal & Karan Gunjal | Pen & Jute Bag Export Leaders"
        description="Meet the founders of Akanta Global — Babita Gunjal (Founder) & Karan Gunjal (Co-Founder) driving India's ball pen & jute bag export excellence."
        path="/team"
        keywords="akanta global founder, babita gunjal, karan gunjal, pen export company leadership, jute bag exporter team, stationery business india founders, ball pen exporter team, indian export company leaders"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Team — Akanta Global",
          "url": "https://akantaglobal.com/team",
          "mainEntity": [
            {
              "@type": "Person",
              "name": "Babita Gunjal",
              "jobTitle": "Founder & Managing Director",
              "worksFor": { "@type": "Organization", "name": "Akanta Global" }
            },
            {
              "@type": "Person",
              "name": "Karan Gunjal",
              "jobTitle": "Co-Founder & Business Head",
              "worksFor": { "@type": "Organization", "name": "Akanta Global" }
            }
          ]
        }}
      />
      <PageHero
        title="Leadership"
        subtitle="Meet the driving force behind Akanta Global's success in international trade."
      />

      {/* Founder Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            {/* Avatar Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-gold/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border border-dashed border-gold/10"
                />

                <div
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/30 premium-shadow"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))",
                  }}
                >
                  <img
                    src={founderAvatar}
                    alt="Babita Gunjal - Founder"
                    className="w-full h-full object-cover object-center"
                  />

                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  animate={{ y: [0, -5, 0] }}
                  className="absolute -bottom-2 -right-2 bg-card border border-gold/30 rounded-full px-4 py-2 premium-shadow"
                >
                  <span className="text-xs font-semibold gold-gradient-text">Founder & CEO</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Info Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            >
              <span className="text-gold font-semibold text-xs uppercase tracking-[0.2em]">
                Meet Our Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
                <span className="gold-gradient-text">Babita Gunjal</span>
              </h2>
              <p className="text-gold/80 font-medium mb-4">Founder & Export Coordinator</p>

              <div className="flex gap-3 mb-6">
                <a href="https://www.linkedin.com/in/babita-gunjal-ak/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-200 premium-shadow">
                  <Linkedin size={16} className="text-gold-light" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61587503647707" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-200 premium-shadow">
                  <Facebook size={16} className="text-gold-light" />
                </a>
                <a href="https://www.instagram.com/akantaglobal/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-200 premium-shadow">
                  <Instagram size={16} className="text-gold-light" />
                </a>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With extensive experience in international trade and supplier management, Babita leads
                Akanta Global's export operations for writing instruments and eco-friendly jute bags. Her expertise in quality assurance, manufacturer
                relationships, and export coordination ensures reliable service for every global partner.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Under her leadership, Akanta Global has expanded its reach across multiple continents,
                establishing the company as a trusted bridge between Indian manufacturers and international buyers.
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-0.5 w-24 bg-gradient-to-r from-gold to-gold-light origin-left mb-8"
              />

              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "5+", label: "Years Experience" },
                  { val: "10+", label: "Countries Served" },
                  { val: "50+", label: "Partners" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                    className="text-center"
                  >
                    <p className="text-2xl font-bold gold-gradient-text">{stat.val}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Karan Gunjal Section */}
      <section className="py-20 bg-muted/20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
            {/* Info Side (reversed) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="order-2 md:order-1"
            >
              <span className="text-gold font-semibold text-xs uppercase tracking-[0.2em]">
                Co-Founder
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-1">
                <span className="gold-gradient-text">Karan Gunjal</span>
              </h2>
              <p className="text-gold/80 font-medium mb-4">Co-Founder & Operations Head</p>

              <div className="flex gap-3 mb-6">
                <a href="https://www.linkedin.com/company/akanta-global/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-200 premium-shadow">
                  <Linkedin size={16} className="text-gold-light" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579243288534" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-200 premium-shadow">
                  <Facebook size={16} className="text-gold-light" />
                </a>
                <a href="https://www.instagram.com/akantaglobal/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-transform duration-200 premium-shadow">
                  <Instagram size={16} className="text-gold-light" />
                </a>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Karan brings strong operational expertise to Akanta Global, overseeing logistics, supply chain management, and client relations. His strategic approach ensures seamless execution from sourcing to delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a focus on efficiency and innovation, Karan plays a pivotal role in scaling the company's operations and strengthening its global network of partners and suppliers.
              </p>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-0.5 w-24 bg-gradient-to-r from-gold to-gold-light origin-left"
              />
            </motion.div>

            {/* Avatar Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="flex justify-center order-1 md:order-2"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 rounded-full border-2 border-dashed border-gold/20"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 rounded-full border border-dashed border-gold/10"
                />

                <div
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/30 premium-shadow"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))",
                  }}
                >
                  <img
                    src={karanAvatarAsset.url}
                    alt="Karan Gunjal - Co-Founder"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Strengths with Vector Art */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gold-gradient-text">Core Strengths</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The expertise and dedication that powers every Akanta Global partnership.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {strengths.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, boxShadow: "0 16px 40px -10px hsl(var(--gold) / 0.15)", transition: { duration: 0.3 } }}
                className="bg-card rounded-xl border border-border p-6 text-center cursor-default group"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-16 h-16 mx-auto mb-4 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative container mx-auto px-4 text-center max-w-3xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gold-gradient-text">
            Work With Us
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            Looking for a reliable export partner for pens and jute bags? Let's discuss how Akanta Global can help you
            access quality Indian products for your international markets.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-primary font-semibold px-8 py-3 rounded-lg premium-shadow hover:shadow-lg transition-shadow"
            >
              Get In Touch <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Team;
