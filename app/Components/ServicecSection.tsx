
'use client'
// components/ServicesSection.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServicesSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    { title: 'Web Designing', desc: 'Creative and innovative web designs to give your brand an outstanding digital presence.' },
    { title: 'Web Development', desc: 'Reliable and high-performance web development tailored to your business needs.' },
    { title: 'Graphic Designing', desc: 'Visually stunning graphic designs that capture the essence of your brand.' },
    { title: 'Logo Designing', desc: 'Unique and creative logo designs to give your brand a lasting identity.' },
    { title: 'Custom GPTs', desc: 'AI-driven custom GPT solutions that transform the way you engage with your customers.' },
    { title: 'Video Editing', desc: 'Transform your footage into captivating videos with professional editing, enhancing visuals, sound, and storytelling.' },
  ];

  return (
    <section id="services" className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-teal-400 mb-16" data-aos="zoom-in">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6   ">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-gray-800 rounded-lg shadow-lg transform transition-all duration-500 hover:bg-teal-600 hover:scale-105"
              data-aos="fade-up"
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-lg transition-opacity duration-300 hover:opacity-30"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
