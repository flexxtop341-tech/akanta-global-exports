import { Globe, ShieldCheck, Users, CheckCircle2, Target, Eye, Award, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import aboutImage from "@/assets/about-image.jpg";
import globalTrade from "@/assets/global-trade.png";

const whatWeDo = [
  "Export high-quality, export-grade writing instruments",
  "Supply to importers, distributors & promotional companies",
  "Quality inspection for performance, durability & consistency",
  "Transparent pricing & clear documentation",
  "On-time shipments with reliable logistics",
  "Ethical sourcing from verified Indian manufacturers",
];

const strengths = [
  { icon: Globe, title: "Global Reach", desc: "Supplying export-grade writing instruments to importers, distributors, and promotional product companies worldwide.", color: "from-blue-500/20 to-sky-400/10" },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Every pen is carefully selected and inspected to ensure smooth writing performance, durability, and consistency.", color: "from-emerald-500/20 to-green-400/10" },
  { icon: Users, title: "Partner Focus", desc: "Building long-term, trust-based partnerships through transparent pricing, timely delivery, and dependable service.", color: "from-gold/20 to-amber-500/10" },
];

const milestones = [
  { year: "2008", title: "Foundation", desc: "Akanta Global was established with a vision to connect Indian manufacturers with global markets." },
  { year: "2012", title: "First Export", desc: "Successfully completed our first international shipment of writing instruments." },
  { year: "2016", title: "ISO Certification", desc: "Achieved ISO 9001:2015 certification for quality management systems." },
  { year: "2020", title: "25+ Countries", desc: "Expanded operations to serve buyers in over 25 countries worldwide." },
  { year: "2024", title: "50+ Countries", desc: "Expanded to 50+ countries, serving 500+ clients with diverse product portfolios." },
];

const businessSteps = [
  { num: "01", title: "Supplier Sourcing", desc: "We identify and vet reliable suppliers through rigorous due diligence processes.", icon: Target },
  { num: "02", title: "Quality Checks", desc: "Every product undergoes comprehensive quality inspection at multiple stages.", icon: ShieldCheck },
  { num: "03", title: "Logistics & Compliance", desc: "Complete documentation, customs clearance, and optimized shipping solutions.", icon: TrendingUp },
  { num: "04", title: "Delivery & Support", desc: "Timely delivery with real-time tracking and dedicated after-sales support.", icon: Award },
];

const stats = [
  { value: "50+", label: "Countries Served" },
  { value: "500+", label: "Happy Clients" },
  { value: "16+", label: "Years Experience" },
  { value: "100%", label: "Quality Commitment" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const About = () => {
  return (
    <>
      <PageHero
        title="About Akanta Global"
        subtitle="Your trusted partner for high-quality Indian-made writing instruments, serving international markets with integrity and excellence."
      />

      {/* Stats Bar */}
      <section className="relative -mt-10 z-10 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="relative group/stat"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/15 to-amber-400/10 rounded-2xl opacity-0 group-hover/stat:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl border border-border/50 p-6 text-center shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.1)]">
                  <span className="text-3xl md:text-4xl font-bold gold-gradient-text">{stat.value}</span>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span variants={fadeUp} custom={0} className="inline-block text-gold text-xs font-bold tracking-[0.25em] uppercase bg-gold/5 border border-gold/20 rounded-full px-5 py-1.5 mb-4">
                Who We Are
              </motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 mb-2">
                <span className="gold-gradient-text">A Trusted Global Supplier</span>{" "}
                <span className="text-foreground">of Writing Instruments from India</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="gold-divider mb-6" />
              <motion.div variants={fadeUp} custom={3} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Akanta Global is an international export company focused on supplying high-quality, export-grade pens that meet international standards. We support our buyers with transparent pricing, timely delivery, and dependable service.</p>
                <p>Our mission is to help importers, distributors, and promotional product companies grow their businesses through ethical sourcing, strong supplier partnerships, and customer-focused solutions.</p>
                <p>We envision Indian-made pens gaining worldwide recognition for their value, consistency, and craftsmanship — and Akanta Global is committed to making that vision a reality.</p>
              </motion.div>

              {/* Mission & Vision cards */}
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { icon: Target, title: "Our Mission", text: "Connect Indian pen manufacturers with global markets through ethical, quality-driven export solutions." },
                  { icon: Eye, title: "Our Vision", text: "Indian-made writing instruments recognized worldwide for their value, consistency, and craftsmanship." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={4 + i}
                    whileHover={{ y: -4, transition: { duration: 0.3 } }}
                    className="relative group/mv"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/10 to-transparent rounded-xl opacity-0 group-hover/mv:opacity-100 blur-sm transition-opacity duration-500" />
                    <div className="relative bg-card/80 backdrop-blur-xl rounded-xl border border-border/50 p-5 shadow-[0_4px_20px_-8px_hsl(var(--primary)/0.08)]">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold/15 to-amber-500/5 flex items-center justify-center mb-3 border border-gold/10">
                        <item.icon size={16} className="text-gold" />
                      </div>
                      <h4 className="font-bold text-foreground text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* What We Do Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-gold/15 via-primary/10 to-gold/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 md:p-10 text-primary-foreground shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.3)] border border-gold/10 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gold/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center shadow-lg shadow-gold/20">
                      <CheckCircle2 size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold gold-gradient-text">What We Do</h3>
                      <p className="text-xs text-primary-foreground/60">Our core capabilities</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {whatWeDo.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                        whileHover={{ x: 8, transition: { duration: 0.2 } }}
                        className="flex items-start gap-3 cursor-default group/item"
                      >
                        <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center shrink-0 mt-0.5 border border-gold/20 group-hover/item:bg-gold/20 transition-colors">
                          <CheckCircle2 size={12} className="text-gold" />
                        </div>
                        <span className="text-sm text-primary-foreground/85 group-hover/item:text-primary-foreground transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card to-card/30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gold/[0.02] rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <motion.span variants={fadeUp} custom={0} className="inline-block text-gold text-xs font-bold tracking-[0.25em] uppercase bg-gold/5 border border-gold/20 rounded-full px-5 py-1.5 mb-4">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 mb-3">
              <span className="gold-gradient-text">Our Core Strengths</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-4" />
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-xl mx-auto">
              What sets us apart in the global writing instruments market.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((s, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn} custom={i}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group/strength"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl opacity-0 group-hover/strength:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border/50 text-center shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.1)] h-full">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5 border border-gold/10`}
                  >
                    <s.icon size={28} className="text-gold" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="inline-block text-gold text-xs font-bold tracking-[0.25em] uppercase bg-gold/5 border border-gold/20 rounded-full px-5 py-1.5 mb-4">
              Our History
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold mt-2 mb-3">
              <span className="gold-gradient-text">Our Journey</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-4" />
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-xl mx-auto">
              From a small trading company to a global export leader — key milestones in our growth story.
            </motion.p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full bg-gradient-to-b from-gold/40 via-gold/20 to-transparent"
              />
            </div>

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                className={`relative flex items-start mb-14 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:pl-14'}`}>
                  <motion.div
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="relative group/milestone"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl opacity-0 group-hover/milestone:opacity-100 blur-sm transition-opacity duration-500" />
                    <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-6 border border-border/50 shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.08)]">
                      <span className="inline-block text-xl font-bold gold-gradient-text mb-1">{m.year}</span>
                      <h3 className="font-bold text-foreground text-base">{m.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{m.desc}</p>
                    </div>
                  </motion.div>
                </div>
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 300 }}
                  className="absolute left-1/2 -translate-x-1/2 top-6 hidden md:flex items-center justify-center"
                >
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-gold to-amber-600 shadow-lg shadow-gold/30 border-2 border-background" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card/20 via-card to-card/30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <motion.span variants={fadeUp} custom={0} className="inline-block text-gold text-xs font-bold tracking-[0.25em] uppercase bg-gold/5 border border-gold/20 rounded-full px-5 py-1.5 mb-4">
              How We Work
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-bold mt-2 mb-3">
              <span className="gold-gradient-text">Our Business Model</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-4" />
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach designed to deliver quality and efficiency at every step of the supply chain.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSteps.map((step, i) => (
              <motion.div
                key={i}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp} custom={i}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group/step"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold/10 to-transparent rounded-2xl opacity-0 group-hover/step:opacity-100 blur-sm transition-opacity duration-500" />
                <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-8 border border-border/50 shadow-[0_8px_30px_-10px_hsl(var(--primary)/0.08)] h-full">
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-5xl font-black text-gold/10 leading-none">{step.num}</span>
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                      className="w-11 h-11 rounded-xl bg-gradient-to-br from-gold/15 to-amber-500/5 flex items-center justify-center border border-gold/10"
                    >
                      <step.icon size={20} className="text-gold" />
                    </motion.div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-gold-light rounded mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting arrows - desktop only */}
          <div className="hidden lg:flex justify-center items-center gap-2 mt-8">
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="flex items-center gap-1"
              >
                <div className="w-20 h-px bg-gradient-to-r from-gold/30 to-gold/10" />
                <ArrowRight size={14} className="text-gold/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/90" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-bold mb-4">
              <span className="gold-gradient-text">Ready to Partner With Us?</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/70 max-w-xl mx-auto text-lg mb-8 leading-relaxed">
              Join 500+ satisfied clients across 50+ countries. Let's grow your business together.
            </motion.p>
            <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-amber-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold px-8 py-3.5 rounded-xl font-semibold hover:bg-gold/5 hover:border-gold/60 transition-all duration-300"
              >
                View Products
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;