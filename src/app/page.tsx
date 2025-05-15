'use client';
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
  // Query form logic
  const formRef = useRef<HTMLFormElement>(null);
  const [queryStatus, setQueryStatus] = useState<null | "success" | "error">(null);
  const [loading, setLoading] = useState(false);

  const handleQuerySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setQueryStatus(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = new URLSearchParams({
      "entry.1305454885": data.get("fullName") as string,
      "entry.1086564901": data.get("email") as string,
      "entry.1176389270": data.get("phone") as string,
      "entry.1237511207": data.get("message") as string,
    });
    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSeRT6jT-C-4MlJOkp6NBzmRNuWpbZnYOPWjiPuVVGR3U539Ug/formResponse",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: payload.toString(),
        }
      );
      setQueryStatus("success");
      form.reset();
    } catch {
      setQueryStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-stretch w-full">
      {/* HERO SECTION */}
      <section id="home" className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-[90vh] bg-gradient-to-br from-[#1D4727] via-green-200 to-[#e5e5e5] px-6 md:px-24 py-20 overflow-hidden border-b-4 border-green-300 shadow-2xl pb-20 md:pb-20 pt-10 md:pt-20">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 left-0 w-full h-40 opacity-60">
            <defs>
              <linearGradient id="heroGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1D4727" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#e5e5e5" stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <path fill="url(#heroGradient)" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
          <svg className="absolute top-0 right-0 w-1/3 h-32 opacity-30" viewBox="0 0 400 100" fill="none"><ellipse cx="200" cy="50" rx="200" ry="50" fill="#b7e4c7" /></svg>
        </div>
        <div className="flex-1 flex flex-col gap-8 z-10 fade-in md:items-start items-center">
          <Image src="/Logo.jpeg" alt="SVGF Logo" width={70} height={70} className="rounded-full shadow-lg border-4 border-[#1D4727] bg-white animate-fade-in" priority />
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#1D4727] drop-shadow-sm animate-slide-in-left">Waste to Worth: Powering Tomorrow</h1>
          <p className="text-xl text-gray-700 mt-4 animate-fade-in" style={{animationDelay: '0.3s'}}>Shri Vasudev Green Fuels LLP is committed to transforming agricultural waste into clean, sustainable energy. We deliver eco-friendly fuel solutions for a greener tomorrow.</p>
          <div className="flex gap-4 mt-6 animate-fade-in" style={{animationDelay: '0.5s'}}>
            <a href="#about"><button className="bg-[#1D4727] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition shadow-lg">Know More</button></a>
            <a href="#query"><button className="bg-white border border-[#1D4727] text-[#1D4727] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">Submit a Query</button></a>
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

      {/* ABOUT SECTION */}
      <section id="about" className="w-full max-w-6xl mx-auto py-16 px-6 md:px-16 flex flex-col md:flex-row gap-12 fade-in bg-gradient-to-br from-green-50 via-white to-green-100 rounded-xl shadow-2xl -mt-12 z-10 border-l-4 border-green-200 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-gradient-to-br from-green-200 via-green-100 to-white rounded-full opacity-30 blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-green-300 via-white to-green-100 rounded-full opacity-20 blur-2xl z-0" />
        <div className="flex-1 flex flex-col gap-6 md:items-start items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-2 animate-slide-in-left">About Shri Vasudev Green Fuels LLP</h2>
          <p className="text-lg text-gray-700 mb-2 animate-fade-in">Shri Vasudev Green Fuels LLP (SVGF) is dedicated to converting agricultural waste into clean, renewable energy. Our mission is to provide sustainable fuel solutions that benefit both the environment and the community.</p>
          <div className="bg-gray-100 rounded-lg p-6 card-hover transition-all duration-300 animate-fade-in">
            <h3 className="text-xl font-semibold text-[#1D4727] mb-2">Mission</h3>
            <p className="text-gray-700 mb-4">To transform waste into worth by delivering eco-friendly energy solutions for a greener tomorrow.</p>
            <h3 className="text-xl font-semibold text-[#1D4727] mb-2">Vision</h3>
            <p className="text-gray-700">To be a leader in sustainable biofuels, driving positive change for the planet and future generations.</p>
          </div>
          <div className="text-left inline-block bg-white shadow p-4 rounded-lg card-hover transition-all duration-300 animate-fade-in">
            <h4 className="font-semibold text-[#1D4727] mb-1">Registration Details:</h4>
            <ul className="text-gray-700">
              <li><b>GSTIN:</b> 06AFNFS1140K1ZV</li>
              <li><b>LLPIN:</b> ACL-6346</li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center items-center animate-slide-in-right">
          <Image src="/WhatsApp Image 2025-05-14 at 13.33.55 (1).jpeg" alt="Pellets in hand" width={320} height={320} className="rounded-xl shadow-lg object-cover border-4 border-green-100" />
        </div>
      </section>
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#1D4727" fillOpacity="0.07" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,69.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path></svg>

      {/* PRODUCTS SECTION */}
      <section id="products" className="w-full max-w-6xl mx-auto py-16 px-6 md:px-16 flex flex-col md:flex-row gap-12 fade-in bg-gradient-to-br from-green-100 via-white to-green-50 rounded-xl shadow-2xl -mt-12 z-10 border-r-4 border-green-200 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-to-r from-green-200 via-white to-green-100 rounded-full opacity-20 blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tr from-green-300 via-white to-green-100 rounded-full opacity-10 blur-2xl z-0" />
        <div className="flex-1 flex flex-col gap-6 md:items-start items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-2 animate-slide-in-left">Our Product</h2>
          <h3 className="text-2xl font-semibold text-[#1D4727] mb-2 animate-fade-in">Rice Husk Pellets</h3>
          <p className="text-gray-700 mb-4 animate-fade-in">The clean fuel for a green environment. Our rice husk pellets are made from agricultural waste, providing a sustainable and efficient alternative to traditional fossil fuels. They are a renewable, carbon-neutral energy source that helps reduce greenhouse gas emissions and dependence on fossil fuels. Our pellets are manufactured using advanced technology to ensure high calorific value, low ash content, and consistent quality, making them ideal for industrial boilers, power plants, and domestic heating. By choosing rice husk pellets, you contribute to a cleaner environment and support sustainable agriculture.</p>
          <ul className="list-disc list-inside text-gray-700 mb-2 animate-fade-in">
            <li><b>Applications:</b> Industrial boilers, power plants, domestic heating, and more.</li>
            <li><b>Benefits:</b> Low emissions, renewable, cost-effective, eco-friendly, high calorific value, low ash, and easy storage/transport.</li>
            <li><b>Why Choose Us?</b> Consistent quality, reliable supply, and a commitment to green energy.</li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center items-center animate-slide-in-right w-full">
          <Image src="/WhatsApp Image 2025-05-14 at 13.33.55.jpeg" alt="Rice Husk Pellets" width={320} height={320} className="rounded-xl shadow-lg object-cover border-4 border-green-100 w-full max-w-xs" />
          <Image src="/1712040677394.png" alt="Pellets closeup" width={320} height={180} className="rounded-xl shadow-lg object-cover border-4 border-green-50 w-full max-w-xs" />
        </div>
      </section>
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#1D4727" fillOpacity="0.07" d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,69.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path></svg>

      {/* PRESENCE SECTION */}
      <section id="presence" className="w-full max-w-6xl mx-auto py-16 px-6 md:px-16 flex flex-col md:flex-row gap-12 fade-in bg-gradient-to-br from-green-50 via-white to-green-100 rounded-xl shadow-2xl -mt-12 z-10 border-t-4 border-green-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-green-200 via-white to-green-100 rounded-full opacity-20 blur-2xl z-0" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tr from-green-300 via-white to-green-100 rounded-full opacity-10 blur-2xl z-0" />
        <div className="flex-1 flex flex-col gap-6 md:items-start items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-2 animate-slide-in-left">Our Geographic Presence</h2>
          <p className="text-gray-700 mt-2 animate-fade-in">Currently serving: <b>Haryana</b> and expanding to other regions soon.</p>
          <p className="text-xs text-gray-500 mt-1 animate-fade-in">(Future: Interactive geo-tag based filters coming soon)</p>
        </div>
        <div className="flex-1 flex flex-col gap-6 justify-center items-center animate-slide-in-right">
          <div className="relative w-full max-w-xl mx-auto">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=VPO+Phaggu,+Kalanwali,+Sirsa,+Haryana&output=embed"
              width="100%"
              height="300"
              className="rounded-xl shadow-md object-cover border-4 border-green-200"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Animated marker pulse */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="block w-6 h-6 bg-green-500 rounded-full opacity-80 animate-ping"></span>
              <span className="block w-3 h-3 bg-green-700 rounded-full absolute top-1.5 left-1.5"></span>
            </div>
          </div>
        </div>
      </section>
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#1D4727" fillOpacity="0.07" d="M0,32L60,48C120,64,240,96,360,101.3C480,107,600,85,720,69.3C840,53,960,43,1080,42.7C1200,43,1320,53,1380,58.7L1440,64L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path></svg>

      {/* QUERY SECTION */}
      <section
        id="query"
        className="w-full max-w-4xl mx-auto py-20 px-6 md:px-16 flex items-center justify-center fade-in rounded-3xl shadow-2xl -mt-12 z-10 relative overflow-hidden border-4 border-green-400 mb-10"
      >
        <img src="/Query.jpg" alt="Query Background" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="flex-1 flex flex-col gap-6 items-center justify-center relative z-10 backdrop-blur-sm bg-white/60 rounded-2xl p-6 md:p-10 shadow-xl border border-green-200 w-full max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-2 animate-slide-in-left text-center">Submit a Query</h2>
          <p className="text-lg text-gray-700 mb-4 animate-fade-in text-center">Have a question or want to connect? Fill out the form below and we&apos;ll get back to you soon!</p>
          <form ref={formRef} onSubmit={handleQuerySubmit} className="bg-card-gradient rounded-xl shadow p-6 flex flex-col gap-4 card-hover transition-all duration-300 w-full max-w-md animate-fade-in">
            <input name="fullName" type="text" placeholder="Full Name" required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]" />
            <input name="email" type="email" placeholder="Email Address" required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]" />
            <input name="phone" type="tel" placeholder="Phone number" required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]" />
            <textarea name="message" placeholder="Your Message" rows={4} required className="p-3 rounded border border-gray-300 focus:outline-[#1D4727]" />
            <button type="submit" className="bg-[#1D4727] text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition shadow-lg animate-bounce disabled:opacity-60" disabled={loading}>{loading ? "Submitting..." : "Submit Query"}</button>
            {queryStatus === "success" && <div className="text-green-700 font-semibold mt-2 animate-fade-in">Thank you! Your query has been submitted.</div>}
            {queryStatus === "error" && <div className="text-red-600 font-semibold mt-2 animate-fade-in">Something went wrong. Please try again.</div>}
          </form>
        </div>
      </section>
      <svg className="w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#1D4727" fillOpacity="0.07" d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,69.3C840,85,960,107,1080,101.3C1200,96,1320,64,1380,48L1440,32L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path></svg>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="w-full max-w-4xl mx-auto py-20 px-6 md:px-16 flex items-center justify-center fade-in rounded-3xl shadow-2xl mt-6 -mt-12 z-10 relative overflow-hidden border-4 border-green-400 bg-transparent"
      >
        <div className="absolute inset-0 bg-black/40 z-0 hidden" />
        <div className="flex-1 flex flex-col gap-6 items-center justify-center relative z-10 backdrop-blur-sm bg-white/60 rounded-2xl p-6 md:p-10 shadow-xl border border-green-200 w-full max-w-lg mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-2 animate-slide-in-left text-center">Contact Us</h2>
          <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col gap-4 items-center card-hover transition-all duration-300 animate-fade-in w-full">
            <div className="text-gray-700 text-center">
              <p className="mb-2"><b>Address:</b><br />VPO Phaggu, Kalanwali,<br />Distt. Sirsa - 125201, Haryana</p>
              <p className="mb-2"><b>Phone:</b> <a href="tel:+919876142554" className="text-[#1D4727] underline">+91 9876142554</a></p>
              <p className="mb-2"><b>Email:</b> <a href="mailto:sh.vasudev.gfllp@gmail.com" className="text-[#1D4727] underline">sh.vasudev.gfllp@gmail.com</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
