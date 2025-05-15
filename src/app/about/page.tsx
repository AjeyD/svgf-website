import React from "react";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-6">About Shri Vasudev Green Fuels LLP</h2>
      <p className="text-lg text-gray-700 mb-6">
        Shri Vasudev Green Fuels LLP (SVGF) is dedicated to converting agricultural waste into clean, renewable energy. Our mission is to provide sustainable fuel solutions that benefit both the environment and the community.
      </p>
      <div className="bg-gray-100 rounded-lg p-6 mb-6">
        <h3 className="text-xl font-semibold text-[#1D4727] mb-2">Mission</h3>
        <p className="text-gray-700 mb-4">To transform waste into worth by delivering eco-friendly energy solutions for a greener tomorrow.</p>
        <h3 className="text-xl font-semibold text-[#1D4727] mb-2">Vision</h3>
        <p className="text-gray-700">To be a leader in sustainable biofuels, driving positive change for the planet and future generations.</p>
      </div>
      <div className="text-left inline-block bg-white shadow p-4 rounded-lg">
        <h4 className="font-semibold text-[#1D4727] mb-1">Registration Details:</h4>
        <ul className="text-gray-700">
          <li><b>GSTIN:</b> 06AFNFS1140K1ZV</li>
          <li><b>LLPIN:</b> ACL-6346</li>
        </ul>
      </div>
    </main>
  );
} 