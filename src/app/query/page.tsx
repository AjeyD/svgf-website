import React from "react";

export default function Query() {
  return (
    <main className="max-w-xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-8 text-center">Submit a Query</h2>
      <form className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4">
        <input type="text" name="name" placeholder="Name" required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]" />
        <input type="text" name="contact" placeholder="Email or Phone" required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]" />
        <select name="type" required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]">
          <option value="">Query Type</option>
          <option value="General">General</option>
          <option value="Partnership">Partnership</option>
          <option value="Technical">Technical</option>
          <option value="Other">Other</option>
        </select>
        <textarea name="message" placeholder="Message" rows={4} required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]" />
        <div className="flex items-center gap-2">
          <input type="checkbox" required />
          <span className="text-sm text-gray-600">I'm not a robot (Captcha placeholder)</span>
        </div>
        <button type="submit" className="bg-[#1D4727] text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-900 transition mt-2">Submit</button>
      </form>
    </main>
  );
} 