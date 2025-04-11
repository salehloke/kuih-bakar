import Image from "next/image";
import Link from "next/link";
import MainLayout from "./components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-xl mb-12 md:mb-16">
          <div className="bg-gradient-to-r from-amber-800 to-green-800 text-white py-10 px-4 md:py-16 lg:py-24 md:px-8 lg:px-12 rounded-xl">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Authentic Malaysian Delights</h1>
              <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8">
                Experience the rich, authentic flavors of Malaysia with our traditional 
                Kuih Bakar and Nasi Lemak, prepared with love and the finest ingredients.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a
                  className="bg-white text-amber-800 hover:bg-amber-100 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                  href="#featured-products"
                >
                  Explore Our Products
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

        {/* About Us Section */}
        <section className="mb-12 md:mb-16 px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4 md:mb-6">Our Malaysian Heritage</h2>
            <p className="text-gray-700 mb-6 md:mb-8 text-sm md:text-base">
              We are passionate about bringing authentic Malaysian flavors to your table. Our recipes have been 
              passed down through generations, preserving the rich culinary heritage of Malaysia. We use only 
              the finest ingredients and traditional cooking methods to ensure an authentic taste experience.
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
                <h3 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-2 sm:mb-3">Kuih Bakar</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                  A beloved Malaysian dessert with rich pandan flavor, coconut milk, and palm sugar, 
                  baked to perfection with a soft interior and slightly crisp top.
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
          <h2 className="text-2xl md:text-3xl font-bold text-center text-amber-800 mb-8 md:mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Authentic Recipes</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Our dishes are prepared following traditional Malaysian recipes that have been 
                passed down through generations, ensuring authentic flavors in every bite.
              </p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Premium Ingredients</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                We source only the finest ingredients, from fresh pandan leaves to premium coconut milk 
                and locally-sourced spices, to create the most authentic Malaysian flavors.
              </p>
            </div>
            <div className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center mb-4 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-amber-800 mb-2">Made with Love</h3>
              <p className="text-gray-700 text-sm sm:text-base">
                Each dish is prepared with care and attention to detail by our skilled chefs who are 
                passionate about sharing Malaysian culinary traditions with the world.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mb-12 md:mb-16 px-4">
          <div className="bg-gradient-to-r from-amber-800 to-green-800 text-white rounded-xl p-6 sm:p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Experience Authentic Malaysian Flavors Today</h2>
              <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8">
                Explore our range of traditional Malaysian delights and bring the authentic taste of Malaysia to your table.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link
                  href="/kuih-bakar"
                  className="bg-white text-amber-800 hover:bg-amber-100 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                >
                  Explore Kuih Bakar
                </Link>
                <Link
                  href="/contact"
                  className="border border-white text-white hover:bg-white/10 px-5 py-3 rounded-full font-medium text-center transition-colors duration-200 text-sm md:text-base"
                >
                  Contact Us
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
            <a href="/contact" className="text-amber-800 hover:text-amber-600">
              Contact Us
            </a>
          </div>
        </footer>
      </div>
    </MainLayout>
  );
}
