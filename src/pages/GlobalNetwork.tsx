import { Globe, ShieldCheck, Users, MapPin } from "lucide-react";

const GlobalNetwork = () => {
  return (
    <>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Global Network</h1>
          <div className="h-1 w-16 bg-accent rounded mb-10" />

          <p className="text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Akanta Global serves international markets with a reliable supply chain backed by verified Indian manufacturers. Our network spans across continents, delivering writing instruments to importers and distributors worldwide.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: ShieldCheck, title: "Verified Manufacturers", desc: "Every supplier in our network is rigorously vetted for quality and reliability." },
              { icon: Users, title: "International Buyer Support", desc: "Dedicated support team for seamless communication across time zones." },
              { icon: Globe, title: "Global Reach", desc: "Exporting to markets across Asia, Africa, Middle East, and beyond." },
              { icon: MapPin, title: "Strategic Location", desc: "Based in Nashik with proximity to major Indian ports." },
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-lg border border-border card-hover">
                <item.icon size={28} className="text-accent-light mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* World Map Placeholder */}
          <div className="bg-primary rounded-lg p-12 text-center">
            <Globe size={64} className="mx-auto text-accent-light mb-4" />
            <h2 className="text-2xl font-bold text-primary-foreground mb-2">Our Export Regions</h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto">
              We actively export to markets across Asia, Africa, the Middle East, Europe, and South America. Contact us to discuss supply to your region.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalNetwork;
