import { Award, ShieldCheck, FileText, CheckCircle2, Shield } from "lucide-react";
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
              <div key={i} className="flex items-center gap-2 bg-card border border-gold/20 rounded-full px-5 py-2.5 premium-shadow">
                <CheckCircle2 size={16} className="text-gold" />
                <span className="text-sm font-medium text-foreground">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cert Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((cert, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-8 card-hover premium-shadow text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <cert.icon size={26} className="text-gold-light" />
                </div>
                <span className="text-gold font-semibold text-xs uppercase tracking-widest">{cert.category}</span>
                <h3 className="text-xl font-bold gold-gradient-text mt-1 mb-2">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.desc}</p>
              </div>
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
        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gold-gradient-text">Our Commitment to Compliance</h2>
          <p className="text-primary-foreground/80 leading-relaxed">
            At Akanta Global, we maintain the highest standards of regulatory compliance across all markets we operate in. Our certifications are regularly renewed and audited by independent third-party organizations to ensure continued adherence to international standards.
          </p>
        </div>
      </section>
    </>
  );
};

export default Certificates;
