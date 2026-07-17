import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Images } from "lucide-react";
import PageHero from "@/components/PageHero";
import CatalogueButton from "@/components/CatalogueButton";

import productsHeroBanner from "@/assets/products-hero-banner.jpg";
import productsQualityBanner from "@/assets/products-quality-banner.jpg";
import { productCategories } from "@/data/productCategories";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const Products = () => {
  return (
    <>
      <SEOHead
        title="Ball Pens & Jute Bags — Bulk Manufacturer India"
        description="Export-grade ball pens & eco-friendly jute bags from India. Plastic, retractable, metallic, custom logo pens & jute bags in bulk."
        path="/products"
        keywords="ball pen manufacturer india, retractable pen supplier, metallic ball pen exporter, custom logo pens india, bulk pen order india, jute bags exporter india"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Export-Grade Writing Instruments & Jute Bags",
            "url": "https://akantaglobal.com/products",
            "numberOfItems": productCategories.length,
            "itemListElement": productCategories.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.title,
              url: `https://akantaglobal.com/products/${c.slug}`,
            })),
          },
        ]}
      />

      <PageHero
        title="Our Products"
        subtitle="Browse our product categories — click any category to view the full gallery, specifications, and request a quote."
      />

      {/* Catalogue CTA */}
      <section className="bg-card py-8 border-b border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <p className="text-foreground font-semibold text-base md:text-lg">
            Explore our complete pen collection in one file —
          </p>
          <CatalogueButton label="Download Full Catalogue (PDF)" />
        </div>
      </section>



      {/* Premium Collection Banner */}
      <section className="relative h-72 md:h-80 overflow-hidden -mt-1">
        <img
          src={productsHeroBanner}
          alt="Ball pen manufacturer India — premium pen collection for export"
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
                Crafted with precision, exported with confidence. Tap a category to see the full collection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery-style Category Grid */}
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
              Each category opens into a dedicated gallery page with the full collection, specifications, and quote options.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((p, i) => (
              <motion.div
                key={p.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                custom={i}
              >
                <Link
                  to={`/products/${p.slug}`}
                  className="group block bg-background rounded-xl overflow-hidden border border-border premium-shadow h-full transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <span className="absolute top-3 right-3 bg-gold text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md uppercase tracking-wider">
                      Export Ready
                    </span>
                    {p.gallery.length > 0 && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-black/55 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        <Images size={11} /> {p.gallery.length} designs
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 right-3 text-white font-bold text-lg drop-shadow-lg">
                      {p.title}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-3">{p.desc}</p>
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
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                        MOQ: {p.moq}
                      </span>
                      <span className="inline-flex items-center text-gold text-sm font-semibold group-hover:text-gold-light transition-colors gap-1">
                        View Gallery <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Banner */}
      <section className="relative h-64 md:h-72 overflow-hidden">
        <img
          src={productsQualityBanner}
          alt="Quality inspection of ball pens for export — bulk pen exporter India"
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
