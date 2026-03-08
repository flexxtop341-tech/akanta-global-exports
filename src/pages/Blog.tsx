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
          {/* Featured post — first article large */}
          {blogPosts.length > 0 && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Link
                to={`/blog/${blogPosts[0].slug}`}
                className="group block bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--gold)/0.15)] transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-gold bg-gold/10 border border-gold/15 rounded-full px-3 py-1 mb-4 w-fit">
                      Featured
                    </span>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {blogPosts[0].keywords.slice(0, 3).map((kw) => (
                        <span key={kw} className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-muted/60 text-muted-foreground border border-border/50">
                          {kw}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-gold transition-colors duration-300 mb-3 leading-tight">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-gold/70" />
                        {new Date(blogPosts[0].date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-gold/70" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          )}

          {/* Grid of remaining posts */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-card border border-border/60 rounded-2xl overflow-hidden hover:border-gold/30 hover:shadow-[0_16px_40px_-12px_hsl(var(--gold)/0.12)] transition-all duration-500 h-full flex flex-col"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.keywords.slice(0, 2).map((kw) => (
                        <span
                          key={kw}
                          className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/15"
                        >
                          {kw}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-lg font-bold text-foreground group-hover:text-gold transition-colors duration-300 mb-2 leading-snug line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} className="text-gold/70" />
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} className="text-gold/70" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight size={14} className="text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
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
