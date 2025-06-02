import React from "react";
import Image from "next/image";

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-white text-black px-4 py-16 animate-fade-in">
      <div className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-[#1D4727] text-center relative">
          <span className="inline-block relative">
            Our Product
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-700 rounded-full"></span>
          </span>
        </h1>
        
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto mt-6">
          Eco-friendly renewable fuel solutions for a sustainable future
        </p>
        
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-8 mb-12 border border-green-100 hover:border-green-200 transition-all duration-300">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2 relative group overflow-hidden rounded-lg">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-green-700 rounded-lg blur-md opacity-25 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white rounded-lg overflow-hidden">
                <Image 
                  src="/paddy-straw-pellet.jpg" 
                  alt="Paddy Straw Pellet" 
                  width={600} 
                  height={400}
                  className="w-full h-auto object-cover rounded-lg transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#1D4727] mb-4">Paddy Straw Pellet</h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our premium paddy straw pellets are an eco-friendly biofuel solution derived from agricultural waste. We transform rice straw that would otherwise be burned in fields into valuable renewable energy pellets.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Environmentally Friendly</h3>
                    <p className="text-gray-600">Reduces air pollution from crop burning while providing a renewable energy source</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">High Energy Content</h3>
                    <p className="text-gray-600">Superior calorific value compared to raw biomass, making it an efficient fuel source</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0-2.25l2.25 1.313M12 21.75V19.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Consistent Quality</h3>
                    <p className="text-gray-600">Uniform size and density for reliable performance in various heating applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 rounded-xl p-8 shadow-md border border-green-100">
          <h3 className="text-2xl font-bold text-[#1D4727] mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 font-medium">Diameter</p>
              <p className="text-gray-900 font-bold">8mm</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 font-medium">Length</p>
              <p className="text-gray-900 font-bold">10-30mm</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 font-medium">Moisture Content</p>
              <p className="text-gray-900 font-bold">&lt; 10%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 font-medium">Ash Content</p>
              <p className="text-gray-900 font-bold">&lt; 5%</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 font-medium">Calorific Value</p>
              <p className="text-gray-900 font-bold">~3500-4000 kcal/kg</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <p className="text-gray-600 font-medium">Bulk Density</p>
              <p className="text-gray-900 font-bold">650-700 kg/m³</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
