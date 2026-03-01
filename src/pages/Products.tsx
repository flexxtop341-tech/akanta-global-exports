import { Link } from "react-router-dom";
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
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Our Products</h1>
          <div className="h-1 w-16 bg-accent rounded mb-4" />
          <p className="text-muted-foreground mb-12 max-w-2xl">
            We export a wide range of high-quality writing instruments from India. Every product is inspected and certified for international export.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {products.map((p, i) => (
              <div key={i} className="bg-background rounded-lg overflow-hidden border border-border card-hover">
                <div className="relative">
                  <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Export Ready
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-foreground mb-2">{p.title}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/70 mb-2">Specifications</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {p.specs.map((s, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">MOQ: {p.moq}</p>
                  <Link
                    to="/contact"
                    className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
