import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  keywords?: string;
  jsonLd?: object | object[];
  imageUrl?: string;
  noIndex?: boolean;
  article?: {
    publishedTime?: string;
    author?: string;
  };
}

const SEOHead = ({
  title,
  description,
  path,
  type = "website",
  keywords,
  jsonLd,
  imageUrl,
  noIndex = false,
  article,
}: SEOHeadProps) => {
  const baseUrl = "https://akantaglobal.com";
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = `${title} | Akanta Global`;
  const ogImage = imageUrl || `${baseUrl}/favicon.ico`;

  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  const robotsContent = noIndex
    ? "noindex, nofollow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Hreflang */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />

      {/* Keywords */}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Nashik, Maharashtra, India" />
      <meta name="geo.position" content="19.9975;73.7898" />
      <meta name="ICBM" content="19.9975, 73.7898" />

      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Akanta Global" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG */}
      {article?.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article?.author && (
        <meta property="article:author" content={article.author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Author & Publisher */}
      <meta name="author" content="Akanta Global" />
      <meta name="publisher" content="Akanta Global" />

      {/* JSON-LD */}
      {jsonLdArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
