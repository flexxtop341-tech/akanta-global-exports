import { Link } from "react-router-dom";


const stats = [
  { value: "45+", label: "Countries Served", dark: true },
  { value: "98%", label: "On-Time Delivery", dark: false },
  { value: "12+", label: "Years of Experience", dark: true },
  { value: "100%", label: "Quality Assured", dark: false },
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
