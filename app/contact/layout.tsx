import { generateMetadata } from '../seo-config';
import type { Metadata } from 'next';

// Export metadata for the Contact page
export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description: "Get in touch with Kuih Bakar Malaysian Delights. Contact us for inquiries about our authentic Malaysian desserts, catering services, or to place an order.",
  path: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
