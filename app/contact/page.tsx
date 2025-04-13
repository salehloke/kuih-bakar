'use client';

import { useState } from 'react';
import MainLayout from '../components/MainLayout';
import Script from 'next/script';

// Structured data for local business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Kuih Bakar Malaysian Delights",
  "image": "https://kuih-bakar.com/images/kuih-bakar-header.png",
  "@id": "https://kuih-bakar.com",
  "url": "https://kuih-bakar.com",
  "telephone": "+60 12-345 6789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Jalan Bukit Bintang",
    "addressLocality": "Kuala Lumpur",
    "postalCode": "50200",
    "addressCountry": "MY"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "16:00"
    }
  ],
  "priceRange": "RM"
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Script id="local-business-structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
      <MainLayout>
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-xl mb-12 md:mb-16">
            <div className="bg-gradient-to-r from-amber-800 to-green-800 text-white py-10 px-4 md:py-16 lg:py-24 md:px-8 lg:px-12 rounded-xl">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
                <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8">
                  Have questions about our products or services? We'd love to hear from you!
                  Reach out to us using the contact information below.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 md:w-64 h-48 md:h-64 bg-amber-600 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-36 md:w-48 h-36 md:h-48 bg-green-600 rounded-full opacity-30 blur-3xl"></div>
          </section>

          {/* Contact Information */}
          <section className="mb-12 md:mb-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 md:mb-6">Get In Touch</h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-gray-800">Phone</h3>
                      <p className="text-gray-600 text-sm md:text-base">+60 12-345 6789</p>
                      <p className="text-gray-600 text-sm md:text-base">Monday to Friday, 9am to 6pm</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-gray-800">Email</h3>
                      <p className="text-gray-600 text-sm md:text-base">info@malaysiandelights.com</p>
                      <p className="text-gray-600 text-sm md:text-base">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-800 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg text-gray-800">Address</h3>
                      <p className="text-gray-600 text-sm md:text-base">123 Jalan Bukit Bintang</p>
                      <p className="text-gray-600 text-sm md:text-base">Kuala Lumpur, 50200</p>
                      <p className="text-gray-600 text-sm md:text-base">Malaysia</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <h2 className="text-xl md:text-2xl font-bold text-amber-800 mb-4 md:mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-amber-800 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 text-sm md:text-base"
                  >
                    Send Message
                  </button>
                </form>
                {isSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                    <strong className="font-bold">Thank you for your message!</strong>
                    <span className="block sm:inline"> We'll get back to you soon.</span>
                  </div>
                ) : null}
              </div>
            </div>
          </section>

          {/* Business Hours */}
          <section className="mb-12 md:mb-16 px-4">
            <div className="bg-amber-50 p-5 sm:p-6 md:p-8 rounded-xl">
              <h2 className="text-xl md:text-2xl font-bold text-center text-amber-800 mb-4 md:mb-6">Business Hours</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-base md:text-lg text-amber-800 mb-2">Store Hours</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-base md:text-lg text-amber-800 mb-2">Delivery Hours</h3>
                  <ul className="space-y-2 text-sm md:text-base">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">10:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">11:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
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
    </>
  );
}
