import React from "react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 py-16 animate-slide-in-right">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">Our Products</h1>
      <section className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700 bg-gray-50 rounded-xl shadow-lg p-8">
        {/* Add your Products section content here */}
        <ul className="list-disc pl-6">
          <li>Biodiesel</li>
          <li>Biofuel</li>
          <li>Eco-friendly Additives</li>
        </ul>
      </section>
    </main>
  );
}
