import { Helmet } from "react-helmet-async";

const SITE_URL = "https://johnniesliquor.com";
const DEFAULT_IMAGE = `${SITE_URL}/johnniesliquor.webp`;
const DEFAULT_TITLE = "Johnnies Liquor Store | Premium Spirits, Wine & Beer in Austin, TX";
const DEFAULT_DESCRIPTION =
  "Austin's premier liquor store since 2004. Premium whiskey, wine, beer, tequila & spirits at 13201 Pond Springs Rd. Expert staff, 3,200+ labels. Visit us Mon–Sat.";

interface SeoProps {
  title?: string;
  description?: string;
  /** Route path, e.g. "/catalog". Defaults to the homepage. */
  path?: string;
  image?: string;
  noindex?: boolean;
  /** Extra JSON-LD objects to inject for this page (breadcrumbs, events, etc). */
  jsonLd?: object[];
}

export const Seo = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  noindex = false,
  jsonLd = [],
}: SeoProps) => {
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Johnnies Liquor Store" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
