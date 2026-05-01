import { useState } from "react";
import { CheckCircle2, ArrowRight, Eye, Download, X, Calendar, Building2, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import iconCertIso from "@/assets/icon-cert-iso.png";
import iconCertEnv from "@/assets/icon-cert-env.png";


const badges = [
  "100% Compliance Rate",
  "Regular Third-Party Audits",
  "Transparent Documentation",
  "International Standards",
];

const certs = [
  {
    icon: iconCertIso, category: "Quality Management", title: "ISO 9001:2015",
    desc: "International standard for quality management systems, ensuring consistent quality in all operations.",
    highlight: true,
    certNo: "QMS-2023-AG-04821",
    issuer: "Bureau Veritas Certification",
    issued: "March 15, 2023",
    expires: "March 14, 2026",
    scope: "Export of consumer goods, writing instruments, and industrial products with full supply chain quality management.",
  },
  {
    icon: iconCertEnv, category: "Environmental Management", title: "ISO 14001:2015",
    desc: "Certification for environmental management systems, demonstrating our commitment to sustainability.",
    highlight: false,
    certNo: "EMS-2023-AG-07392",
    issuer: "TÜV SÜD South Asia",
    issued: "June 10, 2023",
    expires: "June 9, 2026",
    scope: "Environmental management for warehousing, packaging, and logistics operations across all export activities.",
  },
];

const stats = [
  { value: "6+", label: "Certifications" },
  { value: "100%", label: "Compliance" },
  { value: "Annual", label: "Audits" },
  { value: "Global", label: "Standards" },
];

type CertType = typeof certs[number];

const CertificateModal = ({ cert, open, onClose }: { cert: CertType | null; open: boolean; onClose: () => void }) => {
  if (!cert) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-lg p-0 overflow-hidden border-gold/20 bg-card">
        <DialogTitle className="sr-only">{cert.title} Certificate</DialogTitle>

        {/* Header */}
        <div className="bg-primary p-6 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.4) 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }} />
          <div className="relative">
            <img src={cert.icon} alt={cert.title} className="w-16 h-16 mx-auto mb-3 drop-shadow-lg" />
            <p className="text-gold font-semibold text-xs uppercase tracking-[0.2em]">{cert.category}</p>
            <h3 className="text-2xl font-bold gold-gradient-text mt-1">{cert.title}</h3>
          </div>
        </div>

        {/* Certificate Body */}
        <div className="p-6">
          {/* Certificate Preview */}
          <div className="border border-border rounded-lg p-5 mb-5 bg-background relative">
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <ShieldCheck size={120} />
            </div>

            <div className="text-center mb-4">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Certificate of Registration</p>
              <h4 className="text-lg font-bold text-foreground mt-1">{cert.title}</h4>
              <p className="text-sm text-muted-foreground">Awarded to <span className="font-semibold text-foreground">Akanta Global</span></p>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-4" />

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Building2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Issuing Authority</p>
                  <p className="text-sm font-medium text-foreground">{cert.issuer}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Certificate Number</p>
                  <p className="text-sm font-medium text-foreground font-mono">{cert.certNo}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground">Issued</p>
                    <p className="text-sm font-medium text-foreground">{cert.issued}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Expires</p>
                    <p className="text-sm font-medium text-foreground">{cert.expires}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-4" />

            <div>
              <p className="text-xs text-muted-foreground mb-1">Scope of Certification</p>
              <p className="text-sm text-foreground leading-relaxed">{cert.scope}</p>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded-full px-4 py-1.5 text-xs font-semibold">
              <CheckCircle2 size={14} /> Active & Verified
            </span>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 border border-border rounded-lg px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              <X size={16} /> Close
            </button>
            <button
              onClick={() => {
                // Placeholder - would download actual PDF
                alert(`PDF download for ${cert.title} will be available soon. Please contact us to request a copy.`);
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-light text-primary rounded-lg px-4 py-2.5 text-sm font-semibold hover:shadow-lg transition-shadow"
            >
              <Download size={16} /> Download PDF
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<CertType | null>(null);

  return (
    <>
      <SEOHead
        title="Certifications — ISO 9001, IEC, APEDA, FIEO Certified Pen & Jute Bag Exporter"
        description="Akanta Global holds ISO 9001:2015, ISO 14001, FSSAI, IEC, APEDA & FIEO certifications — ensuring world-class quality standards for ball pen export, jute bag supply, and trade compliance from India."
        path="/certificates"
        keywords="ISO certified pen exporter india, APEDA registered exporter, FIEO member stationery, IEC certificate pen company, ISO 9001 ball pen manufacturer, certified jute bag exporter india, certified stationery supplier india, export compliance certificates, quality certified pen exporter nashik"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Certifications & Compliance — Akanta Global",
          "description": "ISO 9001, ISO 14001, FSSAI, IEC, APEDA, FIEO certified ball pen & jute bag exporter from India.",
          "url": "https://akantaglobal.com/certificates",
          "about": {
            "@type": "Organization",
            "name": "Akanta Global",
            "hasCredential": [
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "Quality Management", "name": "ISO 9001:2015" },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "Environmental", "name": "ISO 14001:2015" },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "Export License", "name": "IEC Certificate" },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "Export Registration", "name": "APEDA Registration" },
              { "@type": "EducationalOccupationalCredential", "credentialCategory": "Trade Membership", "name": "FIEO Membership" }
            ]
          }
        }}
      />
      <PageHero
        title="Certifications & Compliance"
        subtitle="Our commitment to quality and compliance is backed by internationally recognized certifications and rigorous standards."
      />


      {/* Badges */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="gold-gradient-text">Our Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each certification reflects our dedication to maintaining the highest global standards in trade and compliance. Click on any certificate to view details.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 50px -12px hsl(var(--gold) / 0.18)",
                  transition: { duration: 0.3 },
                }}
                onClick={() => setSelectedCert(cert)}
                className={`relative bg-card rounded-xl border p-8 text-center cursor-pointer overflow-hidden group ${
                  cert.highlight ? "border-gold/30" : "border-border"
                }`}
              >
                {cert.highlight && (
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-colors duration-500" />
                )}

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                  className="relative z-10"
                >
                  <img src={cert.icon} alt={cert.title} className="w-20 h-20 mx-auto object-contain drop-shadow-md" />
                </motion.div>

                <div className="relative z-10 mt-5">
                  <span className="text-gold font-semibold text-xs uppercase tracking-[0.2em]">{cert.category}</span>
                  <h3 className="text-xl font-bold gold-gradient-text mt-1 mb-3">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{cert.desc}</p>

                  {/* View button */}
                  <span className="inline-flex items-center gap-1.5 text-gold text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={14} /> View Certificate
                  </span>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold/0 via-gold to-gold/0 origin-center"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment CTA */}
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
            Our Commitment to Compliance
          </h2>
          <p className="text-primary-foreground/80 leading-relaxed mb-8">
            At Akanta Global, we maintain the highest standards of regulatory compliance across all markets we operate in. Our certifications are regularly renewed and audited by independent third-party organizations to ensure continued adherence to international standards.
          </p>
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-light text-primary font-semibold px-8 py-3 rounded-lg premium-shadow hover:shadow-lg transition-shadow"
            >
              Partner With Us <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Certificate Modal */}
      <CertificateModal cert={selectedCert} open={!!selectedCert} onClose={() => setSelectedCert(null)} />
    </>
  );
};

export default Certificates;
