import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ArrowRight, Linkedin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const XIcon = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  const shareUrl = `https://akantaglobal.com/blog/${post.slug}`;
  const shareText = `${post.title} - Akanta Global`;

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`
  };

  return (
    <>
      <SEOHead
        title={post.seoTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": post.title,
          "description": post.metaDescription,
          "datePublished": post.date,
          "author": { "@type": "Organization", "name": "Akanta Global" },
          "publisher": {
            "@type": "Organization",
            "name": "Akanta Global",
            "url": "https://akantaglobal.com"
          },
          "keywords": post.keywords.join(", ")
        }}
      />

      {/* Hero */}
      <section className="relative bg-primary py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--gold) / 0.5) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="relative container mx-auto px-4 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm font-medium mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
            <span className="gold-gradient-text">{post.title}</span>
          </h1>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          {/* Social Share */}
          <div className="flex items-center gap-3 mt-5">
            <span className="text-xs text-primary-foreground/50 uppercase tracking-wider">Share:</span>
            <a
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/80 flex items-center justify-center text-primary-foreground/70 hover:text-white transition-all duration-300"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X (Twitter)"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/80 flex items-center justify-center text-primary-foreground/70 hover:text-white transition-all duration-300"
            >
              <XIcon size={14} />
            </a>
            <a
              href={shareLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold/80 flex items-center justify-center text-primary-foreground/70 hover:text-white transition-all duration-300"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
          <path d="M0,0 C360,80 1080,80 1440,0 L1440,80 L0,80 Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose-container"
          >
            {post.content.map((section, i) => (
              <div key={i} className="mb-8">
                {section.heading && (
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-10 first:mt-0">
                    {section.heading}
                  </h2>
                )}
                {section.subheading && (
                  <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">
                    {section.subheading}
                  </h3>
                )}
                {section.paragraphs?.map((p, j) => (
                  <p key={j} className="text-muted-foreground leading-relaxed mb-4 text-[16px]">
                    {p}
                  </p>
                ))}
                {section.list && (
                  <ul className="list-none space-y-2 mb-4 ml-1">
                    {section.list.map((item, k) => (
                      <li key={k} className="flex items-start gap-3 text-muted-foreground text-[16px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </motion.div>

          {/* Keywords */}
          <div className="mt-12 pt-8 border-t border-border/60">
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span key={kw} className="text-xs font-medium px-3 py-1.5 rounded-full bg-gold/8 text-gold/80 border border-gold/15">
                  {kw}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 pt-8 border-t border-border/60 flex items-center justify-between gap-4">
            {prevPost ? (
              <Link to={`/blog/${prevPost.slug}`} className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors">
                <ArrowLeft size={16} /> <span className="hidden sm:inline">{prevPost.title.slice(0, 40)}...</span><span className="sm:hidden">Previous</span>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link to={`/blog/${nextPost.slug}`} className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors text-right">
                <span className="hidden sm:inline">{nextPost.title.slice(0, 40)}...</span><span className="sm:hidden">Next</span> <ArrowRight size={16} />
              </Link>
            ) : <div />}
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gold-gradient-text">Ready to Source Quality Pens?</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
            Partner with Akanta Global for reliable ball pen export solutions tailored to your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_8px_30px_-6px_hsl(var(--gold)/0.4)]"
            style={{ background: 'linear-gradient(135deg, hsl(var(--gold-dark)), hsl(var(--gold)))' }}
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
