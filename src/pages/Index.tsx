import { Link } from "react-router-dom";
import {
  Pen, Search, ClipboardCheck, FileText, Truck, Package,
  Globe, ShieldCheck, DollarSign, Clock, Heart, Award
} from "lucide-react";
import ballPens from "@/assets/ball-pens.jpg";
import gelPens from "@/assets/gel-pens.jpg";
import promoPens from "@/assets/promo-pens.jpg";
import customPens from "@/assets/custom-pens.jpg";

const stats = [
  { value: "45+", label: "Countries Served", dark: true },
  { value: "98%", label: "On-Time Delivery", dark: false },
  { value: "12+", label: "Years of Experience", dark: true },
  { value: "100%", label: "Quality Assured", dark: false },
];

const services = [
  { icon: Pen, title: "Writing Instrument Exports", desc: "Premium ball pens, gel pens, and promotional writing instruments." },
  { icon: Search, title: "Verified Manufacturer Sourcing", desc: "Carefully vetted Indian manufacturers meeting international standards." },
  { icon: ClipboardCheck, title: "Quality Inspection & Compliance", desc: "Rigorous multi-stage quality checks before every shipment." },
  { icon: FileText, title: "Export Documentation", desc: "Complete export paperwork and regulatory compliance handled." },
  { icon: Truck, title: "Logistics Coordination", desc: "End-to-end shipping and delivery management worldwide." },
  { icon: Package, title: "Bulk & Private Label Supply", desc: "Custom branding and bulk order capabilities for your brand." },
];

const whyUs = [
  { icon: Globe, title: "Global Network", desc: "Extensive partner network spanning 50+ countries for seamless international trade operations." },
  { icon: ShieldCheck, title: "Quality Control", desc: "Stringent quality assurance at every step ensures only premium products reach our clients." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Strategic sourcing and efficient operations enable us to offer the best market prices." },
  { icon: Clock, title: "Timely Delivery", desc: "Reliable logistics and proactive tracking ensure your shipments arrive on schedule." },
  { icon: Heart, title: "Ethical Practices", desc: "Committed to sustainable and ethical business practices throughout our supply chain." },
  { icon: Award, title: "Certified Excellence", desc: "ISO certified operations with industry-recognized quality and compliance standards." },
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
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* No overlay - video plays clearly */}
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-2xl fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 drop-shadow-lg">
              <span className="gold-gradient-text">Connecting Global Markets</span>
              <br />
              <span className="text-white drop-shadow-lg">with Trust & Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              Akanta Global is a trusted Indian export company delivering high-quality, export-grade writing instruments to international markets.
            </p>
            <div className="flex flex-wrap gap-4 fade-in-up stagger-2">
              <Link
                to="/products"
                className="bg-gold text-white px-7 py-3 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
              >
                Explore Our Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/50 text-white px-7 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot with Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">About Akanta Global</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-2">
                <span className="gold-gradient-text">Trusted Supplier</span>{" "}
                <span className="text-foreground">of Writing Instruments from India</span>
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Akanta Global is committed to exporting high-quality, export-grade pens that meet international standards — supporting buyers with transparent pricing, timely delivery, and dependable service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We help importers, distributors, and promotional product companies grow their businesses through ethical sourcing, strong supplier partnerships, and customer-focused solutions.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-gold font-semibold hover:text-gold-light transition-colors border border-gold rounded-md px-5 py-2.5"
              >
                Learn More About Us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-6 premium-shadow ${
                    stat.dark
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border"
                  }`}
                >
                  <span className="text-3xl font-bold gold-gradient-text">{stat.value}</span>
                  <p className={`text-sm mt-1 ${stat.dark ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">What We Do</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive trade solutions designed to connect your business with global markets efficiently and reliably.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-background p-8 rounded-lg card-hover border border-border premium-shadow">
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-gold" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Advantages</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">Why Choose Akanta Global</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partner with a company that prioritizes your success through reliability, transparency, and exceptional service.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="p-8 rounded-lg card-hover border border-border bg-card premium-shadow">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-gold-light" />
                </div>
                <h3 className="text-lg font-semibold text-gold-dark mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-semibold text-sm uppercase tracking-widest">Our Collection</span>
            <h2 className="text-3xl font-bold mt-2 mb-2">
              <span className="gold-gradient-text">Featured Products</span>
            </h2>
            <div className="gold-divider mx-auto mt-3" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p, i) => (
              <div key={i} className="bg-background rounded-lg overflow-hidden card-hover border border-border premium-shadow">
                <div className="relative">
                  <img src={p.image} alt={p.title} className="w-full h-56 object-cover" />
                  <span className="absolute top-3 right-3 bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
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
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gold-gradient-text">Let's Grow Your Business Globally</span>
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Partner with Akanta Global for reliable, high-quality pen exports from India to the world.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-md font-semibold hover:bg-gold-dark transition-colors shadow-lg"
          >
            Start a Partnership
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
