import Image from "next/image";

export default function Products() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-8 text-center">Our Product</h2>
      <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 rounded-xl shadow p-6">
        <Image src="/WhatsApp Image 2025-05-14 at 13.33.55.jpeg" alt="Rice Husk Pellets" width={320} height={320} className="rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-[#1D4727] mb-2">Rice Husk Pellets</h3>
          <p className="text-gray-700 mb-4">The clean fuel for a green environment. Our rice husk pellets are made from agricultural waste, providing a sustainable and efficient alternative to traditional fossil fuels.</p>
          <ul className="list-disc list-inside text-gray-700 mb-2">
            <li><b>Applications:</b> Industrial boilers, power plants, domestic heating, and more.</li>
            <li><b>Benefits:</b> Low emissions, renewable, cost-effective, and eco-friendly.</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Image src="/WhatsApp Image 2025-05-14 at 13.33.55 (1).jpeg" alt="Pellets in hand" width={120} height={120} className="rounded shadow object-cover" />
            <Image src="/1712040677394.png" alt="Pellets closeup" width={120} height={120} className="rounded shadow object-cover" />
          </div>
        </div>
      </div>
    </main>
  );
} 