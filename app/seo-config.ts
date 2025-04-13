// SEO Configuration for the Kuih Bakar website

// Base metadata that applies to all pages
export const siteConfig = {
  name: "Kuih Bakar Malaysian Delights",
  description: "Authentic Malaysian Kuih Bakar - Traditional pandan coconut cake made with premium ingredients following authentic recipes. The best Kuih Bakar in Malaysia.",
  url: "https://kuih-bakar.com",
  ogImage: "/images/og-image.jpg", // This should be created and placed in the public folder
  links: {
    twitter: "https://twitter.com/kuihbakar",
    facebook: "https://facebook.com/kuihbakar",
    instagram: "https://instagram.com/kuihbakar"
  },
  keywords: [
    "Kuih Bakar",
    "Malaysian Kuih Bakar",
    "Traditional Kuih Bakar",
    "Best Kuih Bakar",
    "Authentic Kuih Bakar",
    "Pandan Kuih Bakar",
    "Coconut Kuih Bakar",
    "Malaysian desserts",
    "Traditional Malaysian cake",
    "Malaysian delicacies",
    "Pandan desserts",
    "Coconut milk desserts",
    "Malaysian street food",
    "Asian desserts"
  ],
  authors: [
    {
      name: "Kuih Bakar Team",
      url: "https://kuih-bakar.com/about",
    },
  ],
  creator: "Kuih Bakar Malaysian Delights",
  themeColor: "#8B4513", // Brown color that matches the Kuih Bakar theme
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  locale: "en-US",
  type: "website",
};

// Helper function to generate metadata for a specific page
export function generateMetadata({
  title,
  description,
  path,
  ogImage = siteConfig.ogImage,
  keywords = [],
}: {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}) {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const combinedKeywords = [...new Set([...keywords, ...siteConfig.keywords])];
  
  return {
    title: fullTitle,
    description: fullDescription,
    keywords: combinedKeywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: siteConfig.type,
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description: fullDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      images: [ogImage],
      creator: "@kuihbakar",
    },
  };
}
