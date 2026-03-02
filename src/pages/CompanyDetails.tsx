import { Search, ClipboardCheck, FileText, Truck, Package, HeadphonesIcon } from "lucide-react";
import PageHero from "@/components/PageHero";

const steps = [
  { icon: Search, title: "Manufacturer Verification", desc: "We carefully vet and verify Indian pen manufacturers for quality and reliability." },
  { icon: ClipboardCheck, title: "Quality Inspection", desc: "Multi-stage inspection process ensuring every product meets export standards." },
  { icon: FileText, title: "Export Documentation", desc: "Complete handling of all export paperwork and regulatory compliance." },
  { icon: Truck, title: "Logistics Coordination", desc: "End-to-end shipping management with reliable international freight partners." },
  { icon: Package, title: "Timely Delivery", desc: "Consistent on-time delivery across all international markets." },
  { icon: HeadphonesIcon, title: "Buyer Support", desc: "Dedicated post-delivery support and ongoing relationship management." },
];

const CompanyDetails = () => {
  return (
    <>
      <PageHero
        title="Company Details"
        subtitle="Learn about our operations, business model, and commitment to excellence in international trade."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed mb-16">
            <p>
              Akanta Global operates from Nashik, Maharashtra — a strategic location in western India with excellent connectivity to major ports. As an export-focused company, we maintain strong partnerships with verified pen manufacturers across the region.
            </p>
            <p>
              Our business model is built on transparency, quality assurance, and international compliance. We handle every step from manufacturer verification to final delivery, allowing our buyers to focus on growing their business.
            </p>
          </div>

          <span className="text-gold font-semibold text-sm uppercase tracking-widest">Step by Step</span>
          <h2 className="text-2xl font-bold mt-2 mb-2">
            <span className="gold-gradient-text">Our Business Process</span>
          </h2>
          <div className="gold-divider mb-10" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative bg-card p-8 rounded-lg border border-border card-hover premium-shadow">
                <span className="absolute top-4 right-4 text-4xl font-bold text-gold/15">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <step.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gold-dark mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyDetails;
