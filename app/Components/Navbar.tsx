
'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="fixed w-full z-20 bg-blend-saturation shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-teal-600 text-2xl font-bold font-serif">
          ST Solutions
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-gray-300 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="#home" className="text-gray-300 text-lg font-semibold nav-link">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 text-lg font-semibold nav-link">
            About
          </Link>
          <Link href="#services" className="text-gray-300 text-lg font-semibold nav-link">
            Services
          </Link>
          <Link href="#pricing" className="text-gray-300 text-lg font-semibold nav-link">
            Pricing
          </Link>
          <Link href="#projects" className="text-gray-300 text-lg font-semibold nav-link">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 text-lg font-semibold nav-link">
            Contact
          </Link>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-30`}
      >
        <div className="flex items-center justify-between px-4 py-4 bg-teal-600">
          <Link href="#" className="text-white text-2xl  font-bold ">
            ST Solutions
          </Link>
          <button onClick={toggleSidebar} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col space-y-6 p-6 ">
          <Link href="#home" className="text-gray-300 text-lg font-semibold" onClick={toggleSidebar}>
            Home
          </Link>
          <Link href="#about" className="text-gray-300 text-lg font-semibold" onClick={toggleSidebar}>
            About
          </Link>
          <Link href="#services" className="text-gray-300 text-lg font-semibold" onClick={toggleSidebar}>
            Services
          </Link>
          <Link href="#pricing" className="text-gray-300 text-lg font-semibold" onClick={toggleSidebar}>
            Pricing
          </Link>
          <Link href="#projects" className="text-gray-300 text-lg font-semibold" onClick={toggleSidebar}>
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 text-lg font-semibold" onClick={toggleSidebar}>
            Contact
          </Link>
        </div>
      </div>

      {/* Background overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
