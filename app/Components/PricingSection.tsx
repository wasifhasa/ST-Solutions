
'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PricingSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const pricingPlans = [
    {
      title: 'Basic Website',
      price: '$15 Per Page',
      priceTag: 'Most Affordable',
      features: ['Ideal for small businesses or personal websites looking for a web presence without many custom features.'],
      moreFeatures: ['Responsive Design', 'Basic SEO Setup', 'Basic Analytics Integration'],
    },
    {
      title: 'Standard Website',
      price: '$25 Per Page',
      priceTag: 'Popular Choice',
      features: ['Includes more advanced features like e-commerce, blog integration, and enhanced analytics.'],
      moreFeatures: ['Enhanced Customization', 'Advanced SEO Optimization', 'E-commerce Integration'],
    },
    {
      title: 'Premium Website',
      price: '$35 Per Page',
      priceTag: 'Most Features',
      features: ['Offers extensive customization, advanced e-commerce capabilities, custom features, and comprehensive support.'],
      moreFeatures: ['Custom Functionality', 'Advanced SEO Services', 'Priority Support'],
    },
  ];

  const graphicPlans = [
    {
      title: 'Basic Graphics',
      price: '$25',
      priceTag: 'Starter Pack',
      features: ['Simple logo designs', 'Basic social media graphics', 'Basic branding materials'],
      moreFeatures: ['Custom Illustrations', 'Basic Animation', 'High-Resolution Files'],
    },
    {
      title: 'Standard Graphics',
      price: '$30',
      priceTag: 'Great Value',
      features: ['Advanced logo designs', 'Custom social media graphics', 'Branded marketing materials'],
      moreFeatures: ['Infographics', 'Advanced Animation', 'Print-Ready Designs'],
    },
    {
      title: 'Premium Graphics',
      price: '$40',
      priceTag: 'Top Choice',
      features: ['Premium logo designs', 'Complete branding packages', 'Advanced marketing materials'],
      moreFeatures: ['Custom Illustrations', 'Complex Animations', 'Unlimited Revisions'],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-5xl font-extrabold text-center text-teal-400 mb-16" data-aos="fade-in">
          Pricing Plans
        </h2>
        
        {/* Website Pricing */}
        <div className="mt-10">
          <h3 className="text-4xl font-bold text-center text-teal-400 mb-10" data-aos="fade-in">
            Website Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="pricing-card relative mx-auto transform transition-all duration-500 hover:scale-105"
                data-aos="flip-left"
              >
                <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-3 py-1 rounded-br-lg transform -translate-y-3 translate-x-3">
                  {plan.priceTag}
                </div>
                <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-center hover:shadow-2xl">
                  <h3 className="text-3xl font-bold text-teal-400">{plan.title}</h3>
                  <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Graphics Pricing */}
        <div className="mt-20">
          <h3 className="text-4xl font-bold text-center text-teal-400 mb-10" data-aos="fade-in">
            Graphics Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {graphicPlans.map((plan, index) => (
              <div
                key={index}
                className="pricing-card relative mx-auto transform transition-all duration-500 hover:scale-105"
                data-aos="flip-left"
              >
                <div className="absolute top-0 left-0 bg-teal-500 text-white text-xs px-3 py-1 rounded-br-lg transform -translate-y-3 translate-x-3">
                  {plan.priceTag}
                </div>
                <div className="p-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg shadow-lg text-center hover:shadow-2xl">
                  <h3 className="text-3xl font-bold text-teal-400">{plan.title}</h3>
                  <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
                  <ul className="mt-6 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
