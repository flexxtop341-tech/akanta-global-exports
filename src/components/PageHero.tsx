const PageHero = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <>
      <section className="relative bg-primary py-20 overflow-hidden">
        {/* Subtle gold pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-gradient-text">{title}</span>
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">{subtitle}</p>
        </div>
      </section>
      {/* Wave divider */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </>
  );
};

export default PageHero;
