import { User } from "lucide-react";

const Team = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-foreground mb-2">Our Team</h1>
        <div className="h-1 w-16 bg-accent rounded mb-10" />

        <div className="max-w-md">
          <div className="bg-background rounded-lg border border-border p-8 card-hover">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <User size={40} className="text-primary-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground text-center mb-1">Babita Gunjal</h2>
            <p className="text-accent text-sm font-medium text-center mb-4">Founder & Export Coordinator</p>
            <p className="text-sm text-muted-foreground text-center leading-relaxed">
              With extensive experience in international trade and supplier management, Babita leads Akanta Global's export operations. Her expertise in quality assurance, manufacturer relationships, and export coordination ensures reliable service for every global partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
