'use client';
import Image from "next/image";
import Link from "next/link";
import LiquidChrome from "./components/LiquidChrome";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch w-full">
      {/* HERO SECTION */}
      <section id="home" className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-[90vh] bg-transparent px-6 md:px-24 py-20 overflow-hidden border-b-4 border-green-300 shadow-2xl pb-20 md:pb-20 pt-10 md:pt-20">
        <LiquidChrome style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -5 }} />
        <div className="flex-1 flex flex-col gap-8 z-10 fade-in md:items-start items-center">
          <Image src="/LOGO-01.svg" alt="SVGF Logo" width={70} height={70} className="rounded-full shadow-lg border-4 border-[#1D4727] bg-white animate-fade-in" priority />
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1D4727] drop-shadow-sm animate-slide-in-left">Waste to Worth: Powering Tomorrow</h1>
          <p className="text-xl text-gray-700 mt-4 animate-fade-in" style={{animationDelay: '0.3s'}}>Shri Vasudev Green Fuels LLP is committed to transforming agricultural waste into clean, sustainable energy. We deliver eco-friendly fuel solutions for a greener tomorrow.</p>
          <div className="flex gap-4 mt-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <Link href="/about"><button className="bg-[#1D4727] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition shadow-lg">Know More</button></Link>
            <Link href="/query"><button className="bg-white border border-[#1D4727] text-[#1D4727] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">Submit a Query</button></Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center z-10 animate-slide-in-right mt-8 md:mt-0 mb-10 md:mb-0">
          <div className="relative w-full max-w-xl">
            <Image src="/1712040677394.png" alt="Rice Husk Pellets" width={600} height={400} className="rounded-2xl shadow-2xl w-full object-cover border-4 border-green-200" />
            <div className="absolute bottom-4 right-4 bg-white/80 text-[#1D4727] px-4 py-2 rounded-lg shadow font-semibold text-lg animate-bounce">Clean Fuel, Green Future</div>
          </div>
        </div>
      </section>
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#1D4727" fillOpacity="0.07" d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,69.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>

      {/* ABOUT US SECTION */}
      <section className="w-full max-w-6xl mx-auto py-16 px-6 md:px-16 flex flex-col gap-12 fade-in bg-gradient-to-br from-green-50 via-white to-green-100 rounded-xl shadow-2xl mt-12 z-10 border-l-4 border-green-200 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-green-200 via-green-100 to-white rounded-full opacity-30 blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-green-300 via-white to-green-100 rounded-full opacity-20 blur-2xl z-0" />
        <div className="flex flex-col gap-8 items-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-2 animate-slide-in-left">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in border border-green-100">
              <div className="relative mb-4 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                <Image src="/leader1.jpg" alt="Aarav Sharma" width={112} height={112} className="w-28 h-28 rounded-full object-cover border-4 border-white relative z-10 shadow-lg group-hover:border-green-200 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D4727] group-hover:text-green-800">Aarav Sharma</h3>
              <div className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium mb-2">Managing Director</div>
              <p className="text-gray-600 text-center mt-2 leading-relaxed">Visionary leader with 15+ years in renewable energy and sustainable business.</p>
            </div>
            <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in border border-green-100" style={{animationDelay: '0.2s'}}>
              <div className="relative mb-4 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                <Image src="/leader2.jpg" alt="Priya Verma" width={112} height={112} className="w-28 h-28 rounded-full object-cover border-4 border-white relative z-10 shadow-lg group-hover:border-green-200 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D4727] group-hover:text-green-800">Priya Verma</h3>
              <div className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium mb-2">Chief Operations Officer</div>
              <p className="text-gray-600 text-center mt-2 leading-relaxed">Expert in project management and operational excellence in the biofuels sector.</p>
            </div>
            <div className="flex flex-col items-center bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-6 hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-fade-in border border-green-100" style={{animationDelay: '0.4s'}}>
              <div className="relative mb-4 group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full opacity-75 blur group-hover:opacity-100 transition duration-300"></div>
                <Image src="/leader3.jpg" alt="Rohit Singh" width={112} height={112} className="w-28 h-28 rounded-full object-cover border-4 border-white relative z-10 shadow-lg group-hover:border-green-200 transition-all" />
              </div>
              <h3 className="text-xl font-semibold text-[#1D4727] group-hover:text-green-800">Rohit Singh</h3>
              <div className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full font-medium mb-2">Head of R&D</div>
              <p className="text-gray-600 text-center mt-2 leading-relaxed">Driving innovation with a focus on advanced biofuel technologies and sustainability.</p>
            </div>
          </div>
        </div>
      </section>
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#1D4727" fillOpacity="0.07" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,69.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path></svg>
    </main>
  );
}
