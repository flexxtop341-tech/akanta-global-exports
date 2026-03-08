import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import ballPens from "@/assets/ball-pens.jpg";
import gelPens from "@/assets/gel-pens.jpg";
import promoPens from "@/assets/promo-pens.jpg";
import customPens from "@/assets/custom-pens.jpg";
import productsHeroBanner from "@/assets/products-hero-banner.jpg";
import productsQualityBanner from "@/assets/products-quality-banner.jpg";

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

      {/* Premium Collection Banner */}
      <section className="relative h-72 md:h-80 overflow-hidden -mt-1">
        <img
          src={productsHeroBanner}
          alt="Premium pen collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-md"
            >
              <h2 className="text-3xl md:text-4xl font-bold gold-gradient-text mb-3">
                Premium Collection
              </h2>
              <p className="text-primary-foreground/90 text-sm md:text-base">
                Crafted with precision, exported with confidence. Explore our range of internationally certified writing instruments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
                  <span className="absolute top-3 right-3 bg-gold text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-md">
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
                      className="inline-block bg-gold text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-gold-dark transition-colors shadow-md"
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

      {/* Quality Assurance Banner */}
      <section className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={productsQualityBanner}
          alt="Quality inspection process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/75 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
            >
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold gold-gradient-text mb-2">
                  Quality Assured
                </h2>
                <p className="text-primary-foreground/80 text-sm max-w-lg">
                  Every batch undergoes rigorous multi-stage quality inspection before export.
                </p>
              </div>
              <div className="flex gap-6 md:gap-10">
                {["ISO Certified", "Export Grade", "100% Inspected"].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-gold" />
                    <span className="text-primary-foreground/90 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
