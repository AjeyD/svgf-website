import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 py-16 animate-slide-in-up">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">Contact Us</h1>
      <section className="max-w-2xl text-lg md:text-xl leading-relaxed text-gray-700 bg-gray-50 rounded-xl shadow-lg p-8">
        {/* Add your Contact section content here */}
        <div>
          <p>Email: <a href="mailto:info@svgf.com" className="text-green-700 underline">info@svgf.com</a></p>
          <p>Phone: <a href="tel:+911234567890" className="text-green-700 underline">+91 12345 67890</a></p>
          <p>Address: 123 Green Energy Park, Mumbai, India</p>
        </div>
      </section>
    </main>
  );
}
