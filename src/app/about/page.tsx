'use client';
import { useState } from "react";
import Image from "next/image";

export default function About() {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  return (
    <div className="w-full py-16 px-6 md:px-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1D4727] mb-6 animate-slide-in-right">About Shri Vasudev Green Fuel LLP</h1>
        <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto animate-fade-in">We are dedicated to transforming agricultural waste into sustainable biomass pellets, reducing pollution and creating a cleaner environment.</p>
        <Image src="/paddy-straw-pellet.jpg" alt="Paddy Straw Pellets" width={600} height={400} className="rounded-xl shadow-2xl border-4 border-[#1D4727] mx-auto mb-10 transform hover:scale-105 transition-transform duration-500 animate-fade-in" priority />
      </div>
      
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-[#1D4727] mt-10 fade-in-up">
        <div className="flex flex-col md:flex-row justify-center mx-auto text-xl md:text-2xl font-semibold text-[#1D4727]">
          <button 
            className={`py-4 px-6 focus:outline-none transition-colors duration-300 border-b-2 ${activeTab === 'mission' ? 'bg-green-200 border-[#1D4727]' : 'bg-green-50 border-transparent hover:bg-green-100'}`} 
            onClick={() => setActiveTab('mission')}
          >
            Mission
          </button>
          <button 
            className={`py-4 px-6 focus:outline-none transition-colors duration-300 border-b-2 ${activeTab === 'vision' ? 'bg-green-200 border-[#1D4727]' : 'bg-green-50 border-transparent hover:bg-green-100'}`} 
            onClick={() => setActiveTab('vision')}
          >
            Vision
          </button>
          <button 
            className={`py-4 px-6 focus:outline-none transition-colors duration-300 border-b-2 ${activeTab === 'values' ? 'bg-green-200 border-[#1D4727]' : 'bg-green-50 border-transparent hover:bg-green-100'}`} 
            onClick={() => setActiveTab('values')}
          >
            Core Values
          </button>
        </div>

        <div className="p-6 text-gray-700 text-lg md:text-xl max-h-[60vh] overflow-y-auto text-left">
          {activeTab === 'mission' && (
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-[#1D4727] mb-3">Mission Statement</h3>
              <p className="mb-4">To transform agricultural waste into clean, renewable energy by producing high-quality biomass pellets from paddy straw, thereby reducing stubble burning and environmental pollution. We are committed to empowering communities, fostering inclusive growth, and operating with integrity, responsibility, and respect for every individual associated with our journey.</p>
            </div>
          )}
          {activeTab === 'vision' && (
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-[#1D4727] mb-3">Vision Statement</h3>
              <p className="mb-4">To become India’s leading biomass energy producer by championing sustainable innovation, reducing pollution, and creating a cleaner, greener, and more harmonious planet for future generations—guided by the timeless values of honesty, leadership, and dharmic responsibility.</p>
            </div>
          )}
          {activeTab === 'values' && (
            <div className="fade-in">
              <h3 className="text-2xl font-bold text-[#1D4727] mb-3">Core Values</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Environmental Stewardship</strong> – We are dedicated to protecting the planet through sustainable fuel solutions that reduce harmful emissions and promote clean energy.</li>
                <li><strong>Integrity and Honesty</strong> – Inspired by the path laid by Hindu deities, we conduct our business with unwavering truthfulness and ethical conduct.</li>
                <li><strong>Leadership by Example</strong> – We lead with purpose and humility, fostering innovation and responsible growth that sets industry benchmarks.</li>
                <li><strong>Accountability</strong> – We take ownership of our actions and deliver on our promises to partners, communities, and the environment.</li>
                <li><strong>Respect and Autonomy</strong> – We value every individual as family, encouraging independence, dignity, and mutual respect across all levels of engagement.</li>
                <li><strong>Reliability</strong> – We are dependable partners in sustainability, consistently delivering quality products and services that meet our clients’ needs.</li>
                <li><strong>Inclusive Growth</strong> – We believe in holistic development that uplifts not only our business but also the lives of farmers, workers, and communities around us.</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
