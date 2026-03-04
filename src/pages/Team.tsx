import { User } from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";

const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const },
  },
};

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
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -8, boxShadow: "0 24px 48px -12px hsl(var(--gold) / 0.25)", transition: { duration: 0.3 } }}
              className="bg-card rounded-lg border border-border p-8 premium-shadow text-center cursor-default"
            >
              <motion.div
                animate={float.animate}
                className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <User size={40} className="text-gold-light" />
              </motion.div>
              <h2 className="text-xl font-semibold gold-gradient-text mb-1">Babita Gunjal</h2>
              <p className="text-gold text-sm font-medium mb-4">Founder & Export Coordinator</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                With extensive experience in international trade and supplier management, Babita leads Akanta Global's export operations. Her expertise in quality assurance, manufacturer relationships, and export coordination ensures reliable service for every global partner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
