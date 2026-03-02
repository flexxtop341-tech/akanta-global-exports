import { Globe, ShieldCheck, Users, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";

const GlobalNetwork = () => {
  return (
    <>
      <PageHero
        title="Global Network"
        subtitle="Akanta Global serves international markets with a reliable supply chain backed by verified Indian manufacturers."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: ShieldCheck, title: "Verified Manufacturers", desc: "Every supplier in our network is rigorously vetted for quality and reliability." },
              { icon: Users, title: "International Buyer Support", desc: "Dedicated support team for seamless communication across time zones." },
              { icon: Globe, title: "Global Reach", desc: "Exporting to markets across Asia, Africa, Middle East, and beyond." },
              { icon: MapPin, title: "Strategic Location", desc: "Based in Nashik with proximity to major Indian ports." },
            ].map((item, i) => (
              <div key={i} className="bg-card p-8 rounded-lg border border-border card-hover premium-shadow">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gold-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* World Map Placeholder */}
          <div className="bg-primary rounded-lg p-12 text-center premium-shadow relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
              backgroundSize: '24px 24px'
            }} />
            <div className="relative">
              <Globe size={64} className="mx-auto text-gold-light mb-4" />
              <h2 className="text-2xl font-bold mb-2 gold-gradient-text">Our Export Regions</h2>
              <p className="text-primary-foreground/70 max-w-lg mx-auto">
                We actively export to markets across Asia, Africa, the Middle East, Europe, and South America. Contact us to discuss supply to your region.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalNetwork;
