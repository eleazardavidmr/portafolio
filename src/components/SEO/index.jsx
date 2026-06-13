import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

const SITE_NAME = "Eleazar Muñoz — Dev";
const SITE_URL = "https://edmr.dev";
const DEFAULT_IMAGE = `${SITE_URL}/img/profile.jpg`;
const TWITTER_HANDLE = "@edmr_dev";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
  robots = "index, follow",
  noTitleSuffix = false,
}) => {
  const canonicalUrl = url ? `${SITE_URL}${url}` : SITE_URL;
  const ogImage = image || DEFAULT_IMAGE;
  const fullTitle = title
    ? noTitleSuffix
      ? title
      : `${title} | Eleazar Muñoz`
    : SITE_NAME;

  const isArticle = type === "article";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Eleazar Muñoz" />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Article-specific OG tags */}
      {isArticle && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {isArticle && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {isArticle && tags && tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD for articles */}
      {isArticle && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            description: description,
            image: ogImage,
            url: canonicalUrl,
            datePublished: publishedTime,
            dateModified: modifiedTime || publishedTime,
            author: {
              "@type": "Person",
              name: "Eleazar Muñoz",
              url: SITE_URL,
            },
            publisher: {
              "@type": "Person",
              name: "Eleazar Muñoz",
              url: SITE_URL,
            },
            keywords: tags ? tags.join(", ") : keywords,
            inLanguage: "es",
          })}
        </script>
      )}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  publishedTime: PropTypes.string,
  modifiedTime: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  robots: PropTypes.string,
  noTitleSuffix: PropTypes.bool,
};

export default SEO;
