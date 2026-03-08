import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
    desc: "Classic smooth-writing ball pens for everyday office, school & bulk use.",
    specs: ["Ink: Oil-based", "Tip: 0.5mm – 1.0mm", "Body: Plastic / Metal"],
    moq: "10,000 units",
  },
  {
    image: buttonPens,
    title: "Click / Button Pens",
    desc: "Retractable push-button pens with sleek designs and comfortable grip.",
    specs: ["Retractable mechanism", "Ergonomic grip", "Body: Plastic / Metal"],
    moq: "10,000 units",
  },
  {
    image: metallicPens,
    title: "Metallic Ball Pens",
    desc: "Premium metallic-finish pens for corporate gifting & executive use.",
    specs: ["Ink: Oil-based", "Tip: 0.7mm – 1.0mm", "Body: Full Metal"],
    moq: "5,000 units",
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

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

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

      {/* Product Categories - Same style as Home */}
      <section className="py-20 bg-card overflow-hidden relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.span variants={fadeUp} custom={0} className="text-gold font-semibold text-sm uppercase tracking-widest block">
              What We Export
            </motion.span>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">Our Product Range</span>
            </motion.h2>
            <motion.div variants={fadeUp} custom={2} className="gold-divider mx-auto mb-4" />
            <motion.p variants={fadeUp} custom={3} className="text-muted-foreground max-w-xl mx-auto">
              High-quality, export-grade writing instruments inspected and certified for international markets.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-background rounded-xl overflow-hidden border border-border premium-shadow cursor-pointer"
              >
                <div className="relative overflow-hidden h-52">
                  <motion.img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
                  <span className="absolute top-3 right-3 bg-gold text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                    Export Ready
                  </span>
                  <span className="absolute bottom-3 left-3 text-white font-bold text-lg drop-shadow-lg">
                    {p.title}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                  <div className="mb-4">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-gold-dark mb-2">Specifications</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {p.specs.map((s, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-gold rounded-full shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">MOQ: {p.moq}</span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center text-gold text-sm font-semibold hover:text-gold-light transition-colors gap-1"
                    >
                      Quote <ArrowRight size={14} />
                    </Link>
                  </div>
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
