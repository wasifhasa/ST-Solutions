
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-32 text-white bg-fixed bg-cover bg-center   "
      style={{
        backgroundImage: "url('/a.avif')", // Replace with your image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 "></div>

      {/* Content */}
      <div className="relative container mx-auto text-center z-10 px-6">
        <h2
          className="text-5xl font-extrabold tracking-wider mb-8"
          data-aos="fade-up"
        >
          About Us
        </h2>
        <p
          className="mt-4 max-w-3xl mx-auto text-lg leading-relaxed tracking-wide"
          data-aos="fade-in"
        >
          We are a passionate team dedicated to elevating your online presence.
          Our mission is to create innovative and engaging social media solutions
          that captivate your audience and drive meaningful results. We strive to
          empower businesses to connect with their customers in a more impactful
          way.
        </p>
        <div className="mt-12 flex justify-center space-x-6" data-aos="zoom-in">
          <a
            href="#services"
            className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-teal-600 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-16 left-16 w-20 h-20 bg-teal-500 rounded-full opacity-75 animate-pulse"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 bg-teal-700 rounded-full opacity-50 animate-ping"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white opacity-20 rounded-full blur-xl"></div>
    </section>
  );
};

export default AboutSection;
