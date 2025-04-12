// SEO Configuration for the Kuih Bakar website

// Base metadata that applies to all pages
export const siteConfig = {
  name: "Kuih Bakar Malaysian Delights",
  description: "Authentic Malaysian desserts and dishes, featuring traditional Kuih Bakar and Nasi Lemak prepared with premium ingredients and authentic recipes.",
  url: "https://kuih-bakar.com",
  ogImage: "/images/og-image.jpg", // This should be created and placed in the public folder
  links: {
    twitter: "https://twitter.com/kuihbakar",
    facebook: "https://facebook.com/kuihbakar",
    instagram: "https://instagram.com/kuihbakar"
  },
  keywords: [
    "Malaysian food",
    "Kuih Bakar",
    "Nasi Lemak",
    "Traditional Malaysian desserts",
    "Authentic Malaysian cuisine",
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
}: {
  title: string;
  description?: string;
  path: string;
  ogImage?: string;
}) {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  
  return {
    title: fullTitle,
    description: fullDescription,
    keywords: siteConfig.keywords,
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
