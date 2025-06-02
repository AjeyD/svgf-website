import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-black px-4 py-16 animate-fade-in">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#1D4727] text-center relative">
          <span className="inline-block relative">
            About Us
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-700 rounded-full"></span>
          </span>
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto mt-6">
          Pioneering sustainable energy solutions through agricultural innovation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8 border border-green-100 hover:border-green-200 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold text-[#1D4727] mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Shri Vasudev Green Fuels LLP, our mission is to transform agricultural waste into valuable renewable energy resources. We are dedicated to providing sustainable alternatives to fossil fuels while addressing the critical issue of crop residue burning in Northern India.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We strive to create a cleaner environment, support local farmers with additional income sources, and contribute to India's energy independence through our innovative paddy straw pellet production.
              </p>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-8 border border-green-100 hover:border-green-200 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold text-[#1D4727] mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We envision a future where agricultural waste is viewed not as a disposal problem but as a valuable resource. Our goal is to become the leading producer of high-quality biomass pellets in Northern India, setting industry standards for quality and sustainability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through our work, we aim to significantly reduce air pollution from crop burning, support the transition to cleaner energy sources, and create a circular economy model that benefits farmers, industry, and the environment alike.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-xl p-8 shadow-md border border-green-100 mb-12">
          <h2 className="text-2xl font-bold text-[#1D4727] mb-6">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Beginning</h3>
              <p className="text-gray-600">
                Founded in 2019, we started with a simple idea: convert agricultural waste that was being burned into useful energy products. Our founders witnessed firsthand the environmental impact of crop residue burning in Punjab and Haryana.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                After extensive research and development, we perfected our processing technology to convert paddy straw into high-quality fuel pellets. Our facility in Kalanwali, Sirsa was established with state-of-the-art equipment.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
              <p className="text-gray-600">
                Today, we work with hundreds of local farmers, providing them with an alternative to burning crop residue while creating sustainable fuel products that serve industrial and commercial heating needs across North India.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 border border-green-100">
          <h2 className="text-2xl font-bold text-[#1D4727] mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.58 3.37a1.879 1.879 0 01.56 1.346v16.562a1.879 1.879 0 01-3.207 1.33L7.288 17.874a1.879 1.879 0 010-2.66l5.645-4.733A1.879 1.879 0 0115.58 3.37z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.1 7.286l3.028 2.033-3.029 2.033m4.544-3.048h3.358m-3.358 0v4.066m10.245-8.135l-3.029 2.032 3.029 2.033m-4.544-3.048h-3.358m3.358 0V7.286" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Sustainability</h3>
                <p className="text-gray-600">We are committed to environmental stewardship in everything we do, from our production processes to our end products.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
                <p className="text-gray-600">We continuously seek better ways to convert agricultural waste into valuable resources through technological advancement.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Community</h3>
                <p className="text-gray-600">We work closely with local farmers and communities, ensuring our operations benefit the rural economy and improve quality of life.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Quality</h3>
                <p className="text-gray-600">We maintain rigorous quality standards in our production process, ensuring our pellets provide consistent performance for our customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
