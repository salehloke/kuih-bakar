import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/MainLayout";
import { generateMetadata } from "../seo-config";
import type { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = generateMetadata({
  title: "Kuih Bakar - Traditional Malaysian Dessert",
  description: "Experience our authentic Kuih Bakar, a beloved Malaysian dessert with rich pandan flavor, coconut milk, and palm sugar, baked to perfection.",
  path: "/kuih-bakar",
  ogImage: "/images/kuih-bakar-header.png",
});

// Structured data for rich search results
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Kuih Bakar",
  "image": "https://kuih-bakar.com/images/kuih-bakar-header.png",
  "description": "A beloved Malaysian dessert with rich pandan flavor, coconut milk, and palm sugar, baked to perfection with a soft interior and slightly crisp top.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "MYR",
    "price": "15.00",
    "availability": "https://schema.org/InStock"
  },
  "brand": {
    "@type": "Brand",
    "name": "Kuih Bakar Malaysian Delights"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
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
                src="/images/kuih bakar-header.png" 
                alt="Traditional Malaysian Kuih Bakar dessert with rich pandan flavor and golden crust" 
                fill 
                style={{ objectFit: 'cover' }} 
                priority
                className="rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-900/70 to-transparent flex items-center">
                <div className="max-w-3xl px-4 md:px-8 lg:px-12">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">Authentic Kuih Bakar</h1>
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
          <section className="mb-12 md:mb-16 px-4 bg-amber-50 py-8 md:py-12 rounded-xl">
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
                    Made with premium palm sugar that creates a rich caramel-like flavor and deeper color.
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

          {/* Testimonials Section */}
          <section className="mb-12 md:mb-16 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold mr-4">
                    AS
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">Aisha S.</h4>
                    <div className="flex text-amber-500">
                      <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base italic">
                  "The Kuih Bakar from Malaysian Delights is absolutely authentic! It reminds me of the ones my grandmother used to make. The pandan flavor is perfect, and the texture is just right - soft on the inside with a slightly crisp top."
                </p>
              </div>
              <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center text-amber-800 font-bold mr-4">
                    RL
                  </div>
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">Raymond L.</h4>
                    <div className="flex text-amber-500">
                      <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base italic">
                  "I've tried many versions of Kuih Bakar, but this one stands out. The balance of flavors is exceptional, and you can taste the quality of the ingredients. The Premium Coconut version is my favorite - worth every penny!"
                </p>
              </div>
            </div>
          </section>

          {/* Order Section */}
          <section id="order" className="mb-12 md:mb-16 px-4">
            <div className="bg-gradient-to-r from-amber-700 to-amber-800 text-white rounded-xl p-6 sm:p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to Order?</h2>
                <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8">
                  Place your order now and experience the authentic taste of Malaysian Kuih Bakar. 
                  We offer delivery within Kuala Lumpur and pickup options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <a
                    className="bg-white text-amber-800 hover:bg-amber-100 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                    href="#"
                  >
                    Order Online
                  </a>
                  <Link
                    href="/contact"
                    className="border border-white text-white hover:bg-white/10 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                  >
                    Contact for Catering
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="text-center text-gray-600 py-6 md:py-8 border-t border-gray-200">
            <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Malaysian Delights. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-3 md:mt-4 text-sm md:text-base">
              <a href="#" className="text-amber-800 hover:text-amber-600">
                Privacy Policy
              </a>
              <a href="#" className="text-amber-800 hover:text-amber-600">
                Terms of Service
              </a>
              <Link href="/contact" className="text-amber-800 hover:text-amber-600">
                Contact Us
              </Link>
            </div>
          </footer>
        </div>
      </MainLayout>
    </>
  );
}
