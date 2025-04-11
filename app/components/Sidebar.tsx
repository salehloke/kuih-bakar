'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Kuih Bakar', path: '/kuih-bakar' },
    { label: 'Nasi Lemak', path: '#', disabled: true },
    { label: 'Contact Us', path: '/contact' },
  ];

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 && isOpen) {
        // Close sidebar on small screens when resizing
        toggleSidebar();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && window.innerWidth < 768 && !target.closest('.sidebar') && !target.closest('.sidebar-toggle')) {
        toggleSidebar();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isOpen && window.innerWidth < 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className={`sidebar-toggle fixed top-4 ${isOpen ? 'left-[248px] md:left-[248px]' : 'left-4'} z-50 p-2 rounded-lg bg-amber-800 text-white hover:bg-amber-700 transition-all duration-200`}
        aria-label="Toggle Sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div 
        className={`sidebar fixed top-0 left-0 h-screen w-[85vw] max-w-[300px] md:w-64 bg-gradient-to-b from-amber-800 to-green-800 text-white p-4 transform transition-transform duration-200 ease-in-out z-50 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 mt-16">
          <h2 className="text-2xl font-bold text-center">Malaysian Delights</h2>
          <p className="text-center text-amber-200 mt-2">Authentic Flavors</p>
        </div>
        
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                {item.disabled ? (
                  <span className="block px-4 py-3 rounded text-gray-300 cursor-not-allowed flex items-center text-base">
                    {item.label}
                    <span className="ml-2 text-xs bg-gray-600 text-white px-2 py-0.5 rounded-full">Coming Soon</span>
                  </span>
                ) : (
                  <Link 
                    href={item.path}
                    className="block px-4 py-3 rounded hover:bg-white/10 transition-colors duration-200 text-base"
                    onClick={() => window.innerWidth < 768 && toggleSidebar()}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-8 left-4 right-4">
          <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded transition-colors duration-200 text-base">
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
