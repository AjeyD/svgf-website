import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 py-16 animate-slide-in-left">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">About Us</h1>
      <section className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700 bg-gray-50 rounded-xl shadow-lg p-8">
        {/* Add your About section content here */}
        <p>
          Shri Vasudev Green Fuels LLP is committed to sustainable energy solutions, delivering high-quality green fuel products and services across India. Our mission is to drive innovation and environmental stewardship in the renewable energy sector.
        </p>
      </section>
    </main>
  );
}
