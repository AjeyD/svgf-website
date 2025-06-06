'use client';

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="w-full flex flex-col items-center justify-between min-h-screen px-6 md:px-24 py-10 pt-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <section id="contact" className="w-full max-w-5xl mx-auto py-16 px-6 md:px-16 flex flex-col gap-12 fade-in bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl mt-12 z-10 border-l-4 border-green-200 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-green-200 via-green-100 to-white rounded-full opacity-30 blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-green-300 via-white to-green-100 rounded-full opacity-20 blur-2xl z-0" />
        <div className="flex flex-col gap-8 items-center z-10 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-2">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl text-center leading-relaxed">We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
            <div className="flex flex-col gap-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="bg-green-50 p-6 rounded-lg shadow-inner border border-green-100 hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1D4727] mb-2">Contact Information</h3>
                <div className="flex flex-col gap-3 text-gray-700">
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <a href="tel:+919876142554" className="hover:text-green-600 transition-colors">+91 9876142554</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:sh.vasudev.gfllp@gmail.com" className="hover:text-green-600 transition-colors">sh.vasudev.gfllp@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <a href="http://www.shrivasudev.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">www.shrivasudev.com</a>
                  </div>
                  <div className="flex items-start gap-3 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <div className="flex flex-col">
                      <span>VPO Phaggu, Kalanwali</span>
                      <span>Distt. Sirsa - 125201, Haryana</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <span className="text-green-800 font-medium">GSTIN: 06AFNFS1140K1ZV</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-800 font-medium">LLPIN: ACL-6346</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg shadow-inner border border-green-100 hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1D4727] mb-2">Office Hours</h3>
                <div className="flex flex-col gap-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="bg-green-50 p-6 rounded-lg shadow-inner border border-green-100 h-full hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold text-[#1D4727] mb-4">Location</h3>
                <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-green-200">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.162263139664!2d74.97607431509585!3d29.83541898196221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917b6f8b7d3f6d9%3A0xafe2c5e1a561c8f7!2sPhaggu%2C%20Haryana%20125201!5e0!3m2!1sen!2sin!4v1625748399123!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
