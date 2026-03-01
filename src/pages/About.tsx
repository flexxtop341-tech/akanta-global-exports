import aboutImg from "@/assets/about-image.jpg";

const About = () => {
  return (
    <>
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">About Akanta Global</h1>
          <div className="h-1 w-16 bg-accent rounded mb-10" />

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Who We Are</h2>
                <p>
                  Akanta Global is an export-focused international trade company headquartered in Nashik, Maharashtra, India. We specialize in sourcing and exporting high-quality writing instruments from verified Indian manufacturers to global markets.
                </p>
                <p className="mt-3">
                  Our expertise lies in connecting the world's stationery distributors, promotional product companies, and private label buyers with India's best pen manufacturers, ensuring consistent quality, competitive pricing, and reliable delivery.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Our Vision</h2>
                <p>
                  To become a trusted global supplier of writing instruments from India, recognized for quality, reliability, and long-term partnerships.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">Our Mission</h2>
                <p>
                  To export high-quality pens meeting international standards while ensuring transparency, ethical sourcing, and timely delivery to our global partners.
                </p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src={aboutImg} alt="Akanta Global" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
