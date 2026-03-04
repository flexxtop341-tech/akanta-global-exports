import { Award, ShieldCheck, FileText, CheckCircle2, Shield } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const badges = [
  "100% Compliance Rate",
  "Regular Third-Party Audits",
  "Transparent Documentation",
  "International Standards",
];

const certs = [
  { icon: Award, category: "Quality Management", title: "ISO 9001:2015", desc: "International standard for quality management systems, ensuring consistent quality in all operations." },
  { icon: Shield, category: "Environmental Management", title: "ISO 14001:2015", desc: "Certification for environmental management systems, demonstrating our commitment to sustainability." },
  { icon: FileText, category: "Food Safety", title: "FSSAI License", desc: "Food Safety and Standards Authority of India certification for all food product exports." },
  { icon: CheckCircle2, category: "Import-Export Code", title: "IEC Registration", desc: "Government of India Import Export Code, mandatory for all international trade operations." },
  { icon: Award, category: "Agricultural Exports", title: "APEDA Registration", desc: "Agricultural and Processed Food Products Export Development Authority registration." },
  { icon: Shield, category: "Trade Association", title: "FIEO Membership", desc: "Federation of Indian Export Organizations membership for premier export support." },
];

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

const Certificates = () => {
  return (
    <>
      <PageHero
        title="Certifications"
        subtitle="Our commitment to quality and compliance is backed by internationally recognized certifications."
      />

      {/* Badges */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.08, transition: { duration: 0.2 } }}
                className="flex items-center gap-2 bg-card border border-gold/20 rounded-full px-5 py-2.5 premium-shadow cursor-default"
              >
                <CheckCircle2 size={16} className="text-gold" />
                <span className="text-sm font-medium text-foreground">{badge}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cert Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px -12px hsl(var(--gold) / 0.2)", transition: { duration: 0.3 } }}
                className="bg-card rounded-lg border border-border p-8 premium-shadow text-center cursor-default"
              >
                <motion.div
                  animate={float.animate}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <cert.icon size={26} className="text-gold-light" />
                </motion.div>
                <span className="text-gold font-semibold text-xs uppercase tracking-widest">{cert.category}</span>
                <h3 className="text-xl font-bold gold-gradient-text mt-1 mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative container mx-auto px-4 text-center max-w-3xl"
        >
          <motion.h2 variants={fadeUp} custom={0} className="text-2xl md:text-3xl font-bold mb-4 gold-gradient-text">Our Commitment to Compliance</motion.h2>
          <motion.p variants={fadeUp} custom={1} className="text-primary-foreground/80 leading-relaxed">
            At Akanta Global, we maintain the highest standards of regulatory compliance across all markets we operate in. Our certifications are regularly renewed and audited by independent third-party organizations to ensure continued adherence to international standards.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Certificates;
