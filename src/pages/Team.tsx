import { Globe, Shield, Handshake, TrendingUp, Target, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import founderAvatar from "@/assets/team-founder-avatar.png";

const strengths = [
  { icon: Globe, label: "Global Trade Expertise", desc: "Deep knowledge of international markets and trade regulations." },
  { icon: Shield, label: "Quality Assurance", desc: "Rigorous quality checks across the entire supply chain." },
  { icon: Handshake, label: "Partner Relations", desc: "Building long-term trust with manufacturers and buyers worldwide." },
  { icon: TrendingUp, label: "Market Strategy", desc: "Data-driven approach to identifying export opportunities." },
];

const values = [
  { icon: Target, title: "Mission", desc: "To bridge Indian manufacturers with global markets through transparent, reliable, and efficient export solutions." },
  { icon: Award, title: "Vision", desc: "To become India's most trusted merchant export partner, known for quality, integrity, and global reach." },
];

const milestones = [
  { year: "2020", event: "Company Founded" },
  { year: "2021", event: "First International Shipment" },
  { year: "2022", event: "ISO Certifications Achieved" },
  { year: "2023", event: "Expanded to 10+ Countries" },
  { year: "2024", event: "APEDA & FIEO Registered" },
];

const Team = () => {
  return (
    <>
      <PageHero
        title="Leadership"
        subtitle="Meet the driving force behind Akanta Global's success in international trade."
      />

      {/* Founder Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background glow */}
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
                {/* Decorative ring */}
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

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold/30 premium-shadow"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary-dark)))",
                  }}
                >
                  <img
                    src={founderAvatar}
                    alt="Babita Gunjal - Founder"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>

                {/* Floating badge */}
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
              <p className="text-gold/80 font-medium mb-6">Founder & Export Coordinator</p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                With extensive experience in international trade and supplier management, Babita leads
                Akanta Global's export operations. Her expertise in quality assurance, manufacturer
                relationships, and export coordination ensures reliable service for every global partner.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Under her leadership, Akanta Global has expanded its reach across multiple continents,
                establishing the company as a trusted bridge between Indian manufacturers and international buyers.
              </p>

              {/* Decorative divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="h-0.5 w-24 bg-gradient-to-r from-gold to-gold-light origin-left mb-8"
              />

              {/* Quick Stats */}
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

      {/* Core Strengths */}
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
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={24} className="text-gold-light" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gold-gradient-text">Our Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Key milestones in Akanta Global's growth story.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden md:block" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`flex items-center gap-6 mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                    className="bg-card border border-border rounded-lg p-5 premium-shadow inline-block cursor-default"
                  >
                    <span className="text-2xl font-bold gold-gradient-text">{m.year}</span>
                    <p className="text-sm text-muted-foreground mt-1">{m.event}</p>
                  </motion.div>
                </div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.12 }}
                  className="hidden md:flex w-4 h-4 bg-gold rounded-full border-4 border-background shadow-md flex-shrink-0 z-10"
                />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, boxShadow: "0 20px 50px -12px hsl(var(--gold) / 0.18)", transition: { duration: 0.3 } }}
                className="bg-card rounded-xl border border-gold/20 p-8 cursor-default relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-gold/5 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <v.icon size={22} className="text-gold-light" />
                  </div>
                  <h3 className="text-xl font-bold gold-gradient-text mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
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
            Looking for a reliable export partner? Let's discuss how Akanta Global can help you
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
