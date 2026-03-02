import { Globe, ShieldCheck, Users, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";

const whatWeDo = [
  "Export high-quality, export-grade writing instruments",
  "Supply to importers, distributors & promotional companies",
  "Quality inspection for performance, durability & consistency",
  "Transparent pricing & clear documentation",
  "On-time shipments with reliable logistics",
  "Ethical sourcing from verified Indian manufacturers",
];

const strengths = [
  { icon: Globe, title: "Global Reach", desc: "Supplying export-grade writing instruments to importers, distributors, and promotional product companies worldwide." },
  { icon: ShieldCheck, title: "Quality Assured", desc: "Every pen is carefully selected and inspected to ensure smooth writing performance, durability, and consistency." },
  { icon: Users, title: "Partner Focus", desc: "Building long-term, trust-based partnerships through transparent pricing, timely delivery, and dependable service." },
];

const milestones = [
  { year: "2008", title: "Foundation", desc: "Akanta Global was established with a vision to connect Indian manufacturers with global markets." },
  { year: "2012", title: "First Export", desc: "Successfully completed our first international shipment of writing instruments." },
  { year: "2016", title: "ISO Certification", desc: "Achieved ISO 9001:2015 certification for quality management systems." },
  { year: "2020", title: "25+ Countries", desc: "Expanded operations to serve buyers in over 25 countries worldwide." },
  { year: "2024", title: "50+ Countries", desc: "Expanded to 50+ countries, serving 500+ clients with diverse product portfolios." },
];

const businessSteps = [
  { num: "01", title: "Supplier Sourcing", desc: "We identify and vet reliable suppliers through rigorous due diligence processes." },
  { num: "02", title: "Quality Checks", desc: "Every product undergoes comprehensive quality inspection at multiple stages." },
  { num: "03", title: "Logistics & Compliance", desc: "Complete documentation, customs clearance, and optimized shipping solutions." },
  { num: "04", title: "Delivery & Support", desc: "Timely delivery with real-time tracking and dedicated after-sales support." },
];

const About = () => {
  return (
    <>
      <PageHero
        title="About Akanta Global"
        subtitle="Your trusted partner for high-quality Indian-made writing instruments, serving international markets with integrity and excellence."
      />

      {/* Who We Are */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
                <span className="gold-gradient-text">A Trusted Global Supplier</span>{" "}
                <span className="text-foreground">of Writing Instruments from India</span>
              </h2>
              <div className="gold-divider mb-6" />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Akanta Global is an international export company focused on supplying high-quality, export-grade pens that meet international standards. We support our buyers with transparent pricing, timely delivery, and dependable service.
                </p>
                <p>
                  Our mission is to help importers, distributors, and promotional product companies grow their businesses through ethical sourcing, strong supplier partnerships, and customer-focused solutions.
                </p>
                <p>
                  We envision Indian-made pens gaining worldwide recognition for their value, consistency, and craftsmanship — and Akanta Global is committed to making that vision a reality.
                </p>
              </div>
            </div>
            <div className="bg-primary rounded-xl p-8 text-primary-foreground premium-shadow">
              <h3 className="text-xl font-bold mb-6 gold-gradient-text">What We Do</h3>
              <div className="space-y-4">
                {whatWeDo.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-14">
            <span className="gold-gradient-text">Our Core Strengths</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((s, i) => (
              <div key={i} className="bg-background rounded-lg p-8 border border-border text-center card-hover premium-shadow">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gold-dark mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <PageHero
        title="Our Journey"
        subtitle="From a small trading company to a global export-import leader, discover our story of growth and excellence."
      />
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our History</span>
            <h2 className="text-3xl font-bold mt-2">
              <span className="gold-gradient-text">Key Milestones</span>
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex items-start mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-card rounded-lg p-6 border border-border premium-shadow">
                    <span className="text-gold font-bold text-lg">{m.year}</span>
                    <h3 className="font-semibold text-foreground mt-1">{m.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold top-6 hidden md:block shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">How We Work</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">Our Business Model</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach designed to deliver quality and efficiency at every step.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessSteps.map((step, i) => (
              <div key={i} className="bg-background rounded-lg p-8 border border-border card-hover premium-shadow">
                <span className="text-4xl font-bold text-gold/20">{step.num}</span>
                <h3 className="text-lg font-semibold text-gold-dark mt-2 mb-2">{step.title}</h3>
                <div className="gold-divider mb-3" style={{ width: '24px' }} />
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
