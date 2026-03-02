import { User } from "lucide-react";
import PageHero from "@/components/PageHero";

const Team = () => {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet the people behind Akanta Global's success in international trade."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-lg border border-border p-8 card-hover premium-shadow text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <User size={40} className="text-gold-light" />
              </div>
              <h2 className="text-xl font-semibold gold-gradient-text mb-1">Babita Gunjal</h2>
              <p className="text-gold text-sm font-medium mb-4">Founder & Export Coordinator</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With extensive experience in international trade and supplier management, Babita leads Akanta Global's export operations. Her expertise in quality assurance, manufacturer relationships, and export coordination ensures reliable service for every global partner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
