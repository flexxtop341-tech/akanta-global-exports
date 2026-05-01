import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { getCategoryBySlug, productCategories } from "@/data/productCategories";

const ProductCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = getCategoryBySlug(slug);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; name: string } | null>(null);

  if (!category) return <Navigate to="/products" replace />;

  return (
    <>
      <SEOHead
        title={`${category.title} — Manufacturer & Exporter India | Akanta Global`}
        description={category.desc}
        path={`/products/${category.slug}`}
      />

      {/* Hero */}
      <section className="relative h-[260px] md:h-[340px] overflow-hidden">
        <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-gold text-sm mb-3 transition-colors"
            >
              <ArrowLeft size={16} /> Back to Products
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold gold-gradient-text mb-2">
              {category.title}
            </h1>
            <p className="text-primary-foreground/90 max-w-2xl text-sm md:text-base">
              {category.longDesc || category.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {category.specs.map((s, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 size={14} className="text-gold" />
                {s}
              </span>
            ))}
          </div>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            MOQ: {category.moq}
          </span>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          {category.gallery.length === 0 ? (
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-2xl font-bold mb-3 gold-gradient-text">Custom-Made For You</h2>
              <p className="text-muted-foreground mb-6">
                This range is fully customisable. Contact our team to discuss specifications, branding, and bulk pricing.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-gold-light transition-colors"
              >
                Request a Quote <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <span className="text-gold font-semibold text-xs uppercase tracking-widest">
                  Full Collection
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                  <span className="gold-gradient-text">{category.title} Gallery</span>
                </h2>
                <div className="gold-divider mx-auto mt-3" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
                {category.gallery.map((item, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: (j % 8) * 0.05, duration: 0.4 }}
                    className="group rounded-xl overflow-hidden border border-border bg-card premium-shadow cursor-pointer"
                    onClick={() => setLightboxImage({ src: item.image, name: item.name })}
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-muted/30">
                      <img
                        src={item.image}
                        alt={`${item.name} — Akanta Global`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-center py-2.5 text-foreground/80">
                      {item.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Other categories */}
      <section className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-gold mb-6">
            Explore Other Categories
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {productCategories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/products/${c.slug}`}
                  className="px-4 py-2 rounded-full border border-border bg-background hover:border-gold hover:text-gold text-sm transition-colors"
                >
                  {c.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-2xl w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.name}
                className="w-full object-contain max-h-[75vh]"
              />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-foreground">{lightboxImage.name}</p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-lg hover:bg-black/80 transition-colors"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductCategory;
