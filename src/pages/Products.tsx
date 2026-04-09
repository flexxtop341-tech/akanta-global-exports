import { useState } from "react";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import PageHero from "@/components/PageHero";
import ballPens from "@/assets/ball-pens.jpg";
import buttonPens from "@/assets/button-pens.jpg";
import metallicPens from "@/assets/metallic-pens.jpg";
import customPens from "@/assets/custom-pens.jpg";
import juteBags from "@/assets/jute-bags.jpg";
import productsHeroBanner from "@/assets/products-hero-banner.jpg";
import productsQualityBanner from "@/assets/products-quality-banner.jpg";
import penCopper from "@/assets/pen-copper.jpg";
import penBlackGold from "@/assets/pen-black-gold.jpg";
import penSilverClick from "@/assets/pen-silver-click.jpg";
import penBlueGold from "@/assets/pen-blue-gold.jpg";
import penBronzePattern from "@/assets/pen-bronze-pattern.jpg";
import penNavyRosegold from "@/assets/pen-navy-rosegold.jpg";
import penCopperMatte from "@/assets/pen-copper-matte.jpg";
import penBlackMatte from "@/assets/pen-black-matte.jpg";
import penGold from "@/assets/pen-gold.jpg";
import penBlackExecutive from "@/assets/pen-black-executive.jpg";
import penDualTone1 from "@/assets/pen-dual-tone-1.jpg";
import penDualTone2 from "@/assets/pen-dual-tone-2.jpg";
import retractablePen1 from "@/assets/retractable-pen-1.jpg";
import retractablePen2 from "@/assets/retractable-pen-2.jpg";
import retractablePen3 from "@/assets/retractable-pen-3.jpg";
import retractablePen4 from "@/assets/retractable-pen-4.jpg";
import retractablePen5 from "@/assets/retractable-pen-5.jpg";
import retractablePen6 from "@/assets/retractable-pen-6.jpg";
import retractablePen7 from "@/assets/retractable-pen-7.jpg";
import retractablePen8 from "@/assets/retractable-pen-8.jpg";
import retractablePen9 from "@/assets/retractable-pen-9.jpg";
import retractablePen10 from "@/assets/retractable-pen-10.jpg";
import juteBag1 from "@/assets/jute-bag-1.jpg";
import juteBag2 from "@/assets/jute-bag-2.jpg";
import juteBag3 from "@/assets/jute-bag-3.jpg";
import juteBag4 from "@/assets/jute-bag-4.jpg";
import juteBag5 from "@/assets/jute-bag-5.jpg";
import juteBag6 from "@/assets/jute-bag-6.jpg";
import juteBag7 from "@/assets/jute-bag-7.jpg";
import juteBag8 from "@/assets/jute-bag-8.jpg";
import juteBag9 from "@/assets/jute-bag-9.jpg";
import juteBag10 from "@/assets/jute-bag-10.jpg";
import juteBag11 from "@/assets/jute-bag-11.jpg";
import juteBag12 from "@/assets/jute-bag-12.jpg";
import juteBag13 from "@/assets/jute-bag-13.jpg";
import juteBag14 from "@/assets/jute-bag-14.jpg";
import juteBag15 from "@/assets/jute-bag-15.jpg";
import juteBag16 from "@/assets/jute-bag-16.jpg";
import juteBag17 from "@/assets/jute-bag-17.jpg";
import juteBag18 from "@/assets/jute-bag-18.jpg";
import juteBag19 from "@/assets/jute-bag-19.jpg";
import juteBag20 from "@/assets/jute-bag-20.jpg";
import ballPen13 from "@/assets/ball-pen-13.jpg";
import ballPen14 from "@/assets/ball-pen-14.jpg";
import ballPen15 from "@/assets/ball-pen-15.jpg";
import ballPen16 from "@/assets/ball-pen-16.jpg";
import ballPen17 from "@/assets/ball-pen-17.jpg";
import ballPen18 from "@/assets/ball-pen-18.jpg";
import ballPen19 from "@/assets/ball-pen-19.jpg";
import ballPen20 from "@/assets/ball-pen-20.jpg";
import ballPen21 from "@/assets/ball-pen-21.jpg";
import ballPen22 from "@/assets/ball-pen-22.jpg";

const products = [
  {
    image: ballPens,
    title: "Ball Pens",
    desc: "High-quality plastic ball pen manufacturer offering smooth-writing pens for bulk orders, office stationery, and wholesale distribution.",
    specs: ["Ink: Oil-based", "Tip: 0.5mm – 1.0mm", "Body: Plastic / Metal"],
    moq: "10,000 units",
  },
  {
    image: buttonPens,
    title: "Click / Retractable Pens",
    desc: "Retractable pen supplier with sleek push-button designs, ergonomic grip — ideal for promotional and office use.",
    specs: ["Retractable mechanism", "Ergonomic grip", "Body: Plastic / Metal"],
    moq: "10,000 units",
  },
  {
    image: metallicPens,
    title: "Metallic Ball Pens",
    desc: "Premium corporate gift pens supplier — full-metal finish ball pens for executive gifting and brand promotion.",
    specs: ["Ink: Oil-based", "Tip: 0.7mm – 1.0mm", "Body: Full Metal"],
    moq: "5,000 units",
  },
  {
    image: customPens,
    title: "Custom Logo Pens",
    desc: "Custom printed pens supplier offering private-label pens with laser engraving, logo branding, and premium gift packaging.",
    specs: ["Custom engraving", "Premium gift boxes", "Tailored specifications"],
    moq: "2,000 units",
  },
  {
    image: juteBags,
    title: "Jute Bags",
    desc: "Premium eco-friendly jute bags for export — ideal for retail packaging, corporate gifting, and sustainable branding solutions.",
    specs: ["Material: Natural Jute", "Custom printing available", "Multiple sizes & styles"],
    moq: "5,000 units",
  },
  {
    image: juteBag1,
    title: "Printed Jute Bags",
    desc: "Custom printed jute bags with vibrant designs — perfect for retail branding, promotional events, corporate gifting, and eco-conscious packaging.",
    specs: ["Material: Natural Jute", "Full-color custom printing", "Multiple sizes & handle styles"],
    moq: "3,000 units",
  },
];
const retractablePenGallery = [
  { image: retractablePen1, name: "Black Matte Click Pen" },
  { image: retractablePen2, name: "Lime Green Click Pen" },
  { image: retractablePen3, name: "White & Green Click Pen" },
  { image: retractablePen4, name: "Black Classic Click Pen" },
  { image: retractablePen5, name: "Orange Grip Click Pen" },
  { image: retractablePen6, name: "White NovoMed Pen" },
  { image: retractablePen7, name: "White & Blue Click Pen" },
  { image: retractablePen8, name: "White Silver Click Pen" },
  { image: retractablePen9, name: "Blue Cap Ball Pen" },
  { image: retractablePen10, name: "White Blue Cap Pen" },
];

const juteBagGallery = [
  { image: juteBag1, name: "Girls Can Do Anything" },
  { image: juteBag2, name: "Fairy Mushroom Design" },
  { image: juteBag3, name: "African Art Print" },
  { image: juteBag4, name: "Cat & Umbrella" },
  { image: juteBag5, name: "Bee Kind" },
  { image: juteBag6, name: "Pink Hat Lady" },
  { image: juteBag7, name: "I Love My Dog" },
  { image: juteBag8, name: "Leopard Hearts Love" },
  { image: juteBag9, name: "Pink Owl" },
  { image: juteBag10, name: "Girl on Bicycle" },
  { image: juteBag11, name: "Fairy Mushroom (Zip)" },
  { image: juteBag12, name: "Snoopy Love (Zip)" },
  { image: juteBag13, name: "African Art (Zip)" },
  { image: juteBag14, name: "Pink Owl (Juco)" },
  { image: juteBag15, name: "I Love My Dog (Juco)" },
  { image: juteBag16, name: "Pink Hat Lady (Juco)" },
  { image: juteBag17, name: "Bee Kind (Juco)" },
  { image: juteBag18, name: "Girls Can Do Anything (Juco)" },
  { image: juteBag19, name: "Toucan Bird" },
  { image: juteBag20, name: "Snoopy Love Balloons" },
];

const metallicPenGallery = [
  { image: penCopper, name: "Copper Finish Ball Pen" },
  { image: penBlackGold, name: "Black & Gold Ball Pen" },
  { image: penSilverClick, name: "Silver Click Pen" },
  { image: penBlueGold, name: "Blue & Gold Ball Pen" },
  { image: penBronzePattern, name: "Bronze Pattern Ball Pen" },
  { image: penNavyRosegold, name: "Navy Rose Gold Ball Pen" },
  { image: penCopperMatte, name: "Copper Matte Ball Pen" },
  { image: penBlackMatte, name: "Black Matte Ball Pen" },
  { image: penGold, name: "Gold Finish Ball Pen" },
  { image: penBlackExecutive, name: "Black Executive Ball Pen" },
  { image: penDualTone1, name: "Dual Tone Ball Pen" },
  { image: penDualTone2, name: "Dual Tone Cap Pen" },
];

const ballPenGallery = [
  { image: ballPen13, name: "Orange Cap Ball Pen" },
  { image: ballPen14, name: "Blue Stick Ball Pen" },
  { image: ballPen15, name: "Green Striped Ball Pen" },
  { image: ballPen16, name: "Sky Blue Ball Pen" },
  { image: ballPen17, name: "Blue Cap White Body Pen" },
  { image: ballPen18, name: "Black Click Pen" },
  { image: ballPen19, name: "Blue Cap Clear Body Pen" },
  { image: ballPen20, name: "Blue Capped Ball Pen" },
  { image: ballPen21, name: "Blue Grip Ball Pen" },
  { image: ballPen22, name: "Blue Striped Ball Pen" },
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; name: string } | null>(null);
  return (
    <>
      <SEOHead
        title="Ball Pens & Jute Bags Manufacturer India | Retractable, Metallic & Custom Products"
        description="Buy export-grade ball pens and eco-friendly jute bags from India — plastic ball pens, retractable click pens, metallic pens, custom logo pens & premium jute bags. Bulk orders available. Best wholesale manufacturer for global distributors."
        path="/products"
        keywords="ball pen manufacturer india, retractable pen supplier, metallic ball pen exporter, custom logo pens india, bulk pen order india, wholesale writing instruments, promotional pens manufacturer, jute bags exporter india, eco-friendly jute bags wholesale, jute bag manufacturer india, bulk jute bags supplier"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Export-Grade Writing Instruments",
            "description": "Akanta Global's range of export-grade ball pens and writing instruments",
            "url": "https://akantaglobal.com/products",
            "numberOfItems": 5,
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Ball Pens", "url": "https://akantaglobal.com/products#ball-pens" },
              { "@type": "ListItem", "position": 2, "name": "Click / Retractable Pens", "url": "https://akantaglobal.com/products#retractable-pens" },
              { "@type": "ListItem", "position": 3, "name": "Metallic Ball Pens", "url": "https://akantaglobal.com/products#metallic-pens" },
              { "@type": "ListItem", "position": 4, "name": "Custom Solutions", "url": "https://akantaglobal.com/products#custom-pens" },
              { "@type": "ListItem", "position": 5, "name": "Jute Bags", "url": "https://akantaglobal.com/products#jute-bags" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Export-Grade Ball Pens",
            "brand": { "@type": "Brand", "name": "Akanta Global" },
            "description": "High-quality bulk ball pens, writing instruments, and eco-friendly jute bags for export from India. Plastic, metallic, retractable, custom-branded options and jute bags. MOQ from 2,000 units.",
            "category": "Writing Instruments, Stationery & Jute Products",
            "manufacturer": {
              "@type": "Organization",
              "name": "Akanta Global",
              "url": "https://akantaglobal.com"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "eligibleQuantity": { "@type": "QuantitativeValue", "minValue": 10000, "unitText": "units" }
            }
          }
        ]}
      />
      <PageHero
        title="Our Products"
        subtitle="We export a wide range of high-quality writing instruments and eco-friendly jute bags — ball pens, promotional pens, custom logo pens, jute bags, and office stationery designed to meet international quality standards and global export requirements."
      />

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
              Export-grade ball pens, promotional pens, custom logo pens, eco-friendly jute bags, and bulk writing instruments inspected and certified for international markets.
            </motion.p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={scaleIn}
                custom={i}
                className={`group bg-background rounded-xl overflow-hidden border border-border premium-shadow ${(p.title === "Ball Pens" || p.title === "Click / Retractable Pens" || p.title === "Printed Jute Bags" || p.title === "Metallic Ball Pens") ? "cursor-pointer" : ""}`}
                onClick={() => {
                  if (p.title === "Ball Pens" || p.title === "Click / Retractable Pens" || p.title === "Printed Jute Bags" || p.title === "Metallic Ball Pens") {
                    setExpandedCard(expandedCard === p.title ? null : p.title);
                  }
                }}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      Quote <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* View Collection toggle for Ball Pens & Retractable Pens */}
                  {(p.title === "Ball Pens" || p.title === "Click / Retractable Pens" || p.title === "Printed Jute Bags" || p.title === "Metallic Ball Pens") && (
                    <div className="mt-4 pt-3 border-t border-border/50">
                      <button
                        className="flex items-center gap-2 text-gold text-xs font-semibold uppercase tracking-wider w-full justify-center hover:text-gold-light transition-colors"
                      >
                        {expandedCard === p.title ? "Hide Collection" : "View Collection"}
                        <motion.span
                          animate={{ rotate: expandedCard === p.title ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={14} />
                        </motion.span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Expandable Gallery */}
                <AnimatePresence>
                  {((p.title === "Ball Pens" || p.title === "Click / Retractable Pens" || p.title === "Printed Jute Bags" || p.title === "Metallic Ball Pens") && expandedCard === p.title) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        <div className="grid grid-cols-2 gap-3">
                          {(p.title === "Ball Pens" ? ballPenGallery : p.title === "Click / Retractable Pens" ? retractablePenGallery : p.title === "Metallic Ball Pens" ? metallicPenGallery : juteBagGallery).map((pen, j) => (
                            <motion.div
                              key={j}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: j * 0.05, duration: 0.3 }}
                              className="rounded-lg overflow-hidden border border-border/50 bg-muted/20"
                            >
                              <div
                                className="aspect-[3/4] overflow-hidden cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightboxImage({ src: pen.image, name: pen.name });
                                }}
                              >
                                <img
                                  src={pen.image}
                                  alt={`${pen.name} — Akanta Global`}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                              <p className="text-[10px] font-medium text-center py-1.5 text-muted-foreground">{pen.name}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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

      {/* Lightbox Modal */}
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-lg w-full bg-card rounded-2xl overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.src}
                alt={lightboxImage.name}
                className="w-full object-contain max-h-[70vh]"
              />
              <div className="p-4 text-center">
                <p className="text-sm font-semibold text-foreground">{lightboxImage.name}</p>
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-lg hover:bg-black/70 transition-colors"
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

export default Products;
