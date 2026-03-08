import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import ballPens from "@/assets/ball-pens.jpg";
import gelPens from "@/assets/gel-pens.jpg";
import promoPens from "@/assets/promo-pens.jpg";
import customPens from "@/assets/custom-pens.jpg";

const products = [
  {
    image: ballPens,
    title: "Ball Pens",
    desc: "Smooth-writing, durable ball pens available in multiple styles. Ideal for office, school, and promotional use.",
    specs: ["Ink: Oil-based", "Tip: 0.5mm – 1.0mm", "Body: Plastic / Metal"],
    moq: "10,000 units",
  },
  {
    image: gelPens,
    title: "Gel Pens",
    desc: "Vibrant gel ink pens offering superior writing comfort with a wide range of colors.",
    specs: ["Ink: Water-based gel", "Tip: 0.38mm – 0.7mm", "Body: Plastic"],
    moq: "10,000 units",
  },
  {
    image: promoPens,
    title: "Promotional Pens",
    desc: "Custom-branded pens for corporate events, trade shows, and marketing campaigns.",
    specs: ["Custom logo printing", "Multiple color options", "Bulk packaging available"],
    moq: "5,000 units",
  },
  {
    image: customPens,
    title: "Custom Solutions",
    desc: "Premium private-label pens with custom engraving, branding, and gift packaging.",
    specs: ["Custom engraving", "Premium gift boxes", "Tailored specifications"],
    moq: "2,000 units",
  },
];

const Products = () => {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="We export a wide range of high-quality writing instruments from India. Every product is inspected and certified for international export."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-card rounded-lg overflow-hidden border border-border premium-shadow group"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Export Ready
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold gold-gradient-text mb-2">{p.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-2">Specifications</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {p.specs.map((s, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">MOQ: {p.moq}</p>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to="/contact"
                      className="inline-block bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold-dark transition-colors shadow-md"
                    >
                      Request Quote
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
