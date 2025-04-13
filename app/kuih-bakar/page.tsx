import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import { generateMetadata } from "../seo-config";
import type { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: "Authentic Malaysian Kuih Bakar - Traditional Pandan Coconut Cake",
  description: "Experience our authentic Kuih Bakar, a beloved Malaysian dessert with rich pandan flavor, coconut milk, and palm sugar. Handmade with traditional recipes passed down through generations.",
  path: "/kuih-bakar",
  ogImage: "/images/kuih-bakar-header.png",
  keywords: [
    "Kuih Bakar recipe",
    "Buy Kuih Bakar",
    "Kuih Bakar near me",
    "Homemade Kuih Bakar",
    "Traditional Kuih Bakar",
    "Pandan cake",
    "Malaysian pandan dessert"
  ]
});

// Structured data for rich search results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Authentic Malaysian Kuih Bakar",
  "image": [
    "https://kuih-bakar.com/images/kuih-bakar-header.png",
    "https://kuih-bakar.com/images/kuih-bakar-classic.png",
    "https://kuih-bakar.com/images/kuih-bakar-premium.png"
  ],
  "description": "A beloved Malaysian dessert with rich pandan flavor, coconut milk, and palm sugar, baked to perfection with a soft interior and slightly crisp top. Made with authentic traditional recipes.",
  "sku": "KB-CLASSIC-001",
  "mpn": "KB001",
  "brand": {
    "@type": "Brand",
    "name": "Kuih Bakar Malaysian Delights"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://kuih-bakar.com/kuih-bakar",
    "priceCurrency": "MYR",
    "price": "15.00",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sarah Tan"
      },
      "datePublished": "2024-03-15",
      "reviewBody": "The most authentic Kuih Bakar I've tasted outside of my grandmother's kitchen. Perfect balance of pandan and coconut flavors!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Ahmad Ibrahim"
      },
      "datePublished": "2024-02-20",
      "reviewBody": "Absolutely delicious! The texture is perfect - soft inside with a slightly crisp top. Will definitely order again!"
    }
  ]
};

export default function KuihBakar() {
  return (
    <>
      <Script id="product-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <MainLayout>
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Image */}
          <section className="relative overflow-hidden rounded-xl mb-12 md:mb-16">
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-xl overflow-hidden">
              <Image 
                src="/images/kuih-bakar-header.png" 
                alt="Traditional Malaysian Kuih Bakar dessert with rich pandan flavor and golden crust" 
                fill 
                style={{ objectFit: 'cover' }} 
                priority
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-transparent flex items-center">
                <div className="max-w-3xl px-4 md:px-8 lg:px-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">Authentic Malaysian Kuih Bakar</h1>
                  <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8 max-w-xl drop-shadow-md">
                    Experience the rich, authentic flavors of Malaysia with our traditional 
                    Kuih Bakar, prepared with love and the finest ingredients.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                    <a
                      className="bg-white text-amber-800 hover:bg-amber-100 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                      href="#learn-more"
                    >
                      Learn More
                    </a>
                    <a
                      className="border border-white text-white hover:bg-white/10 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                      href="#order"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What is Kuih Bakar Section */}
          <section className="mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-6 md:mb-8">What is Kuih Bakar?</h2>
            <div className="bg-amber-50 p-6 md:p-8 rounded-xl">
              <p className="text-gray-700 mb-4 text-base md:text-lg">
                <strong>Kuih Bakar</strong> is a traditional Malaysian dessert that holds a special place in Malaysian culinary heritage. The name "Kuih Bakar" literally translates to "baked cake" in English, though it's quite different from Western-style cakes.
              </p>
              <p className="text-gray-700 mb-4 text-base md:text-lg">
                Made with a rich batter of coconut milk, eggs, flour, and pandan leaves (which give it its distinctive green color and fragrant aroma), Kuih Bakar is traditionally baked in special copper molds over charcoal fire, resulting in a dessert with a soft, custard-like interior and a slightly crisp, caramelized top.
              </p>
              <p className="text-gray-700 text-base md:text-lg">
                Our <strong>authentic Kuih Bakar</strong> follows traditional recipes passed down through generations, ensuring you experience the true taste of Malaysian heritage in every bite.
              </p>
            </div>
          </section>

          {/* Features Section */}
          <section id="learn-more" className="mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">What Makes Our Kuih Bakar Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Authentic Recipe</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Our Kuih Bakar is made following a traditional Malaysian recipe that has been 
                  passed down through generations, ensuring an authentic taste experience.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Premium Ingredients</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  We use only the finest ingredients, including fresh pandan leaves, premium coconut milk, 
                  and high-quality palm sugar, to create the most authentic flavors.
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Handcrafted with Love</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Each Kuih Bakar is handcrafted with care and attention to detail by our skilled chefs who are 
                  passionate about sharing Malaysian culinary traditions.
                </p>
              </div>
            </div>
          </section>

          {/* Product Varieties Section */}
          <section id="order" className="mb-12 md:mb-16 px-4 bg-amber-50 py-8 md:py-12 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">Our Kuih Bakar Varieties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 sm:h-56 bg-amber-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-amber-800 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                    Classic
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Classic Pandan</h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Our signature Kuih Bakar with rich pandan flavor and a perfect balance of sweetness.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl font-bold text-amber-800">RM 15.00</span>
                    <button className="bg-amber-800 hover:bg-amber-700 text-white px-3 sm:px-4 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 sm:h-56 bg-amber-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-amber-800 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                    Premium
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Premium Coconut</h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Enhanced with extra coconut milk and topped with toasted coconut flakes for added texture.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl font-bold text-amber-800">RM 18.00</span>
                    <button className="bg-amber-800 hover:bg-amber-700 text-white px-3 sm:px-4 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 sm:h-56 bg-amber-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-amber-800 rounded-full flex items-center justify-center text-white text-lg font-semibold">
                    Deluxe
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Deluxe Palm Sugar</h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    Our premium version with a rich palm sugar caramel layer on top for an indulgent experience.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl font-bold text-amber-800">RM 20.00</span>
                    <button className="bg-amber-800 hover:bg-amber-700 text-white px-3 sm:px-4 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">March 15, 2024</span>
                </div>
                <p className="text-gray-700 mb-3 text-sm sm:text-base italic">
                  "The most authentic Kuih Bakar I've tasted outside of my grandmother's kitchen. Perfect balance of pandan and coconut flavors!"
                </p>
                <p className="text-amber-800 font-medium">- Sarah Tan</p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">February 20, 2024</span>
                </div>
                <p className="text-gray-700 mb-3 text-sm sm:text-base italic">
                  "Absolutely delicious! The texture is perfect - soft inside with a slightly crisp top. Will definitely order again!"
                </p>
                <p className="text-amber-800 font-medium">- Ahmad Ibrahim</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12 md:mb-16 px-4 bg-amber-50 py-8 md:py-12 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">What is Kuih Bakar made of?</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Traditional Kuih Bakar is made with a mixture of flour, eggs, coconut milk, pandan leaves (for flavor and color), and palm sugar. Our recipe follows authentic Malaysian traditions while ensuring the perfect texture and taste.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">How long does Kuih Bakar stay fresh?</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Our Kuih Bakar stays fresh for up to 3 days when stored in an airtight container at room temperature. For longer freshness, you can refrigerate it for up to a week. We recommend warming it slightly before serving for the best taste experience.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Do you offer delivery services?</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Yes, we offer delivery services within Kuala Lumpur and selected areas. Delivery fees vary based on location. For more information about our delivery options, please visit our contact page or reach out to us directly.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Is your Kuih Bakar suitable for vegetarians?</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Yes, our Kuih Bakar is suitable for vegetarians as it contains no meat products. However, it does contain eggs and dairy (coconut milk), so it's not suitable for vegans or those with egg allergies.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-12 md:mb-16 px-4">
            <div className="bg-gradient-to-r from-amber-800 to-green-800 text-white py-8 px-6 md:py-12 md:px-8 rounded-xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience Authentic Kuih Bakar?</h2>
              <p className="text-lg text-amber-100 mb-6 max-w-2xl mx-auto">
                Order now and taste the rich tradition of Malaysian desserts, delivered fresh to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                <a
                  className="bg-white text-amber-800 hover:bg-amber-100 px-6 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                  href="#order"
                >
                  Order Now
                </a>
                <a
                  className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                  href="/contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}
