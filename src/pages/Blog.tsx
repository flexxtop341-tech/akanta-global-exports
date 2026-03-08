import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  return (
    <>
      <SEOHead
        title="Blog — Ball Pen Export & Stationery Industry Insights"
        description="Read expert articles on ball pen manufacturing, stationery export from India, promotional pens marketing strategies, and global sourcing guides for distributors."
        path="/blog"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Akanta Global Blog",
          "description": "Insights on ball pen manufacturing, stationery export, and promotional products from India",
          "url": "https://akantaglobal.com/blog",
          "publisher": {
            "@type": "Organization",
            "name": "Akanta Global"
          }
        }}
      />

      <PageHero
        title="Industry Insights & Guides"
        subtitle="Expert articles on ball pen manufacturing, stationery export, and promotional marketing strategies for global buyers"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:gap-10 max-w-4xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card border border-border/60 rounded-2xl p-8 md:p-10 hover:border-gold/30 hover:shadow-[0_12px_40px_-12px_hsl(var(--gold)/0.15)] transition-all duration-500"
                >
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="text-[11px] font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/15"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-gold transition-colors duration-300 mb-3 leading-tight">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-5">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-gold/70" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-gold/70" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gold-gradient-text">Looking for a Reliable Pen Supplier?</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Contact Akanta Global for bulk ball pen orders, promotional pen customization, and reliable stationery export solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_-6px_hsl(var(--gold)/0.4)]"
            style={{ background: 'linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold)))' }}
          >
            Request a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Blog;
