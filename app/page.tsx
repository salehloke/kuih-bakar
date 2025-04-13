import Image from "next/image";
import Link from "next/link";
import MainLayout from "./components/MainLayout";
import { generateMetadata } from "./seo-config";
import type { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: "Authentic Kuih Bakar - Malaysian Traditional Pandan Coconut Cake",
  description: "Experience authentic Malaysian Kuih Bakar - a traditional pandan coconut cake made with premium ingredients following authentic recipes. The best Kuih Bakar in Malaysia.",
  path: "/",
  keywords: [
    "Kuih Bakar",
    "Malaysian Kuih Bakar",
    "Traditional Kuih Bakar",
    "Authentic Kuih Bakar recipe",
    "Best Kuih Bakar in Malaysia",
    "Pandan coconut cake"
  ]
});

// Structured data for organization and website
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kuih Bakar Malaysian Delights",
  "url": "https://kuih-bakar.com",
  "logo": "https://kuih-bakar.com/icon-512.png",
  "sameAs": [
    "https://facebook.com/kuihbakar",
    "https://instagram.com/kuihbakar",
    "https://twitter.com/kuihbakar"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+60-12-345-6789",
    "contactType": "customer service",
    "availableLanguage": ["English", "Malay"]
  },
  "description": "Authentic Malaysian Kuih Bakar - Traditional pandan coconut cake made with premium ingredients following authentic recipes. The best Kuih Bakar in Malaysia."
};

// Structured data for local business
const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kuih Bakar Malaysian Delights",
  "image": "https://kuih-bakar.com/images/kuih-bakar-header.png",
  "@id": "https://kuih-bakar.com",
  "url": "https://kuih-bakar.com",
  "telephone": "+60 12-345 6789",
  "priceRange": "RM",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Jalan Bukit Bintang",
    "addressLocality": "Kuala Lumpur",
    "postalCode": "50200",
    "addressCountry": "MY"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 3.1478,
    "longitude": 101.7068
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script id="organization-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <Script id="local-business-structured-data" type="application/ld+json">
        {JSON.stringify(localBusinessData)}
      </Script>
      <MainLayout>
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-xl mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-amber-800 to-green-800 text-white py-10 px-4 md:py-16 lg:py-24 md:px-8 lg:px-12 rounded-xl">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Authentic Malaysian Kuih Bakar</h1>
                <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8">
                  Experience the rich, authentic flavors of traditional Malaysian Kuih Bakar - 
                  a beloved pandan coconut cake prepared with premium ingredients and authentic recipes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    className="bg-white text-amber-800 hover:bg-amber-100 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                    href="#featured-products"
                  >
                    Explore Our Kuih Bakar
                  </a>
                  <a
                    className="border border-white text-white hover:bg-white/10 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 md:w-64 h-48 md:h-64 bg-amber-600 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-36 md:w-48 h-36 md:h-48 bg-green-600 rounded-full opacity-30 blur-3xl"></div>
          </section>

          {/* About Kuih Bakar Section */}
          <section className="mb-12 md:mb-16 px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4 md:mb-6">What is Kuih Bakar?</h2>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                <strong>Kuih Bakar</strong> is a traditional Malaysian dessert that holds a special place in Malaysian culinary heritage. 
                The name "Kuih Bakar" literally translates to "baked cake" in English, though it's quite different from Western-style cakes.
              </p>
              <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">
                Made with a rich batter of coconut milk, eggs, flour, and pandan leaves (which give it its distinctive green color and fragrant aroma), 
                Kuih Bakar is traditionally baked in special copper molds over charcoal fire, resulting in a dessert with a soft, custard-like interior 
                and a slightly crisp, caramelized top.
              </p>
              <p className="text-gray-700 text-sm md:text-base">
                Our passion is bringing authentic Malaysian flavors to your table. Our Kuih Bakar recipes have been 
                passed down through generations, preserving the rich culinary heritage of Malaysia.
              </p>
            </div>
          </section>

          {/* Featured Products Section */}
          <section id="featured-products" className="mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">Our Signature Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Kuih Bakar Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 sm:h-64 bg-amber-200 flex items-center justify-center relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-amber-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-semibold">
                    Kuih Bakar
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    Traditional Dessert
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-2 sm:mb-3">Authentic Kuih Bakar</h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                    A beloved Malaysian dessert with rich pandan flavor, coconut milk, and palm sugar, 
                    baked to perfection with a soft interior and slightly crisp top. Made following traditional recipes.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl font-bold text-amber-800">From RM 15.00</span>
                    <Link 
                      href="/kuih-bakar"
                      className="bg-amber-800 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Nasi Lemak Card */}
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="h-48 sm:h-64 bg-green-200 flex items-center justify-center relative">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 bg-green-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-semibold">
                    Nasi Lemak
                  </div>
                  <div className="absolute top-4 right-4 bg-green-800 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    National Dish
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-green-800 mb-2 sm:mb-3">Nasi Lemak</h3>
                  <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                    Malaysia's national dish featuring fragrant coconut rice, spicy sambal, crispy anchovies, 
                    roasted peanuts, cucumber slices, and a perfectly cooked egg.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-xl font-bold text-green-800">From RM 12.00</span>
                    <Link 
                      href="#"
                      className="bg-green-800 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-md transition-colors duration-200 text-sm sm:text-base"
                    >
                      Coming Soon
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="mb-12 md:mb-16 px-4 bg-amber-50 py-8 md:py-12 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">Why Our Kuih Bakar is Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mb-4 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Authentic Recipes</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Our Kuih Bakar is prepared following traditional Malaysian recipes that have been 
                  passed down through generations, ensuring authentic flavors in every bite.
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
                  and high-quality palm sugar, to create the most authentic Kuih Bakar experience.
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

          {/* Customer Testimonials */}
          <section className="mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 text-sm sm:text-base italic">
                  "The most authentic Kuih Bakar I've tasted outside of my grandmother's kitchen. Perfect balance of pandan and coconut flavors!"
                </p>
                <p className="text-amber-800 font-medium">- Sarah Tan, Kuala Lumpur</p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-3 text-sm sm:text-base italic">
                  "I've tried many versions of Kuih Bakar, but this one stands out. The balance of flavors is exceptional, and you can taste the quality of the ingredients."
                </p>
                <p className="text-amber-800 font-medium">- Ahmad Ibrahim, Penang</p>
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
                <Link
                  href="/kuih-bakar"
                  className="bg-white text-amber-800 hover:bg-amber-100 px-6 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                >
                  Explore Kuih Bakar
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white hover:bg-white/10 px-6 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </MainLayout>
    </>
  );
}
