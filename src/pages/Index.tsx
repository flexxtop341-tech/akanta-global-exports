import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "45+", label: "Countries Served", dark: true },
  { value: "98%", label: "On-Time Delivery", dark: false },
  { value: "12+", label: "Years of Experience", dark: true },
  { value: "100%", label: "Quality Assured", dark: false },
];

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

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 drop-shadow-lg"
            >
              <span className="gold-gradient-text">Connecting Global Markets</span>
              <br />
              <span className="text-white drop-shadow-lg">with Trust & Excellence</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md"
            >
              Akanta Global is a trusted Indian export company delivering high-quality, export-grade writing instruments to international markets.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="bg-gold text-white px-7 py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 text-white px-7 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Snapshot with Stats */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest block">About Akanta Global</motion.span>
              <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 mb-2">
                <span className="gold-gradient-text">Global Trading,</span>{" "}
                <span className="text-foreground">Sourcing & Distribution</span>
              </motion.h2>
              <motion.div variants={fadeUp} custom={2} className="gold-divider mb-6" />
              <motion.p variants={fadeUp} custom={3} className="text-muted-foreground leading-relaxed mb-4">
                Akanta Global is dedicated to growing in the field of international trade and global sourcing. We connect trusted manufacturers with buyers across domestic and international markets. As a merchant export company, we focus on delivering quality products with smooth and transparent trade processes.
              </motion.p>
              <motion.p variants={fadeUp} custom={4} className="text-muted-foreground leading-relaxed mb-6">
                We work closely with suppliers and global partners to build strong business relationships. Our goal is to simplify international trade and bridge the gap between buyers and sellers while ensuring reliability, quality, and customer satisfaction in every transaction.
              </motion.p>
              <motion.div variants={fadeUp} custom={5}>
                <Link
                  to="/about"
                  className="inline-flex items-center text-gold font-semibold hover:text-gold-light transition-colors border border-gold rounded-md px-5 py-2.5"
                >
                  Learn More About Us →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  custom={i}
                  className={`rounded-xl p-6 premium-shadow ${
                    stat.dark
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <span className="text-3xl font-bold gold-gradient-text">{stat.value}</span>
                  <p className={`text-sm mt-1 ${stat.dark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative container mx-auto px-4 text-center"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gold-gradient-text">Let's Grow Your Business Globally</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Partner with Akanta Global for reliable, high-quality pen exports from India to the world.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link
              to="/contact"
              className="inline-block bg-gold text-white px-8 py-3.5 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
            >
              Start a Partnership
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Index;
