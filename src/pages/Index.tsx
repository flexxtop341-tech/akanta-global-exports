import { Link } from "react-router-dom";
import {
  Pen, Search, ClipboardCheck, FileText, Truck, Package,
  ShieldCheck, DollarSign, Clock, Heart, Handshake, Users
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import aboutImg from "@/assets/about-image.jpg";
import ballPens from "@/assets/ball-pens.jpg";
import gelPens from "@/assets/gel-pens.jpg";
import promoPens from "@/assets/promo-pens.jpg";
import customPens from "@/assets/custom-pens.jpg";

const services = [
  { icon: Pen, title: "Writing Instrument Exports", desc: "Premium ball pens, gel pens, and promotional writing instruments." },
  { icon: Search, title: "Verified Manufacturer Sourcing", desc: "Carefully vetted Indian manufacturers meeting international standards." },
  { icon: ClipboardCheck, title: "Quality Inspection & Compliance", desc: "Rigorous multi-stage quality checks before every shipment." },
  { icon: FileText, title: "Export Documentation", desc: "Complete export paperwork and regulatory compliance handled." },
  { icon: Truck, title: "Logistics Coordination", desc: "End-to-end shipping and delivery management worldwide." },
  { icon: Package, title: "Bulk & Private Label Supply", desc: "Custom branding and bulk order capabilities for your brand." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Strict Quality Checks", desc: "Every product passes multi-level inspection." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden costs. Clear, competitive quotes." },
  { icon: Clock, title: "Reliable Shipments", desc: "Consistent on-time delivery track record." },
  { icon: Heart, title: "Ethical Sourcing", desc: "Fair trade practices across our supply chain." },
  { icon: Handshake, title: "Long-Term Partnerships", desc: "We invest in lasting business relationships." },
  { icon: Users, title: "Strong Supplier Network", desc: "Trusted network of verified Indian manufacturers." },
];

const products = [
  { image: ballPens, title: "Ball Pens", desc: "Smooth-writing, durable ball pens in various styles for everyday professional use." },
  { image: gelPens, title: "Gel Pens", desc: "Vibrant gel ink pens offering superior writing comfort and color range." },
  { image: promoPens, title: "Promotional Pens", desc: "Custom-branded pens perfect for corporate events and marketing campaigns." },
  { image: customPens, title: "Custom Branding Pens", desc: "Premium private-label pens with custom engraving and packaging." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Connecting Global Markets with Trust & Excellence
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
              Akanta Global is a trusted Indian export company delivering high-quality, export-grade writing instruments to international markets.
            </p>
            <div className="flex flex-wrap gap-4 fade-in-up stagger-2">
              <Link
                to="/products"
                className="bg-accent text-accent-foreground px-7 py-3 rounded-md font-semibold hover:bg-accent-light transition-colors"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary-foreground/40 text-primary-foreground px-7 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">About Akanta Global</h2>
              <div className="h-1 w-16 bg-accent mb-6 rounded" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in Nashik, Maharashtra, Akanta Global is an export-focused international trade company specializing in high-quality writing instruments from India. We bridge the gap between India's finest pen manufacturers and global markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With a commitment to quality, transparency, and timely delivery, we serve international importers, stationery distributors, and promotional product companies worldwide.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More →
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={aboutImg} alt="Akanta Global office" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-2">What We Do</h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-card p-8 rounded-lg card-hover border border-border">
                <s.icon size={32} className="text-accent-light mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-2">Why Choose Us</h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="p-8 rounded-lg card-hover border border-border bg-background">
                <item.icon size={28} className="text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Products</h2>
            <div className="h-1 w-16 bg-accent mx-auto rounded" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div key={i} className="bg-card rounded-lg overflow-hidden card-hover border border-border">
                <div className="relative">
                  <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                  <span className="absolute top-3 right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Export Ready
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-5 py-2 rounded-md hover:bg-primary-dark transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Let's Grow Your Business Globally
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Partner with Akanta Global for reliable, high-quality pen exports from India to the world.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3.5 rounded-md font-semibold hover:bg-accent-light transition-colors"
          >
            Start a Partnership
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
