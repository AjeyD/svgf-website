import Image from "next/image";

export default function Presence() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1D4727] mb-8">Our Geographic Presence</h2>
      <div className="flex flex-col items-center gap-4">
        <Image src="/1712040677394.png" alt="Map Placeholder" width={600} height={300} className="rounded-xl shadow-md object-cover" />
        <p className="text-gray-700 mt-2">Currently serving: <b>Haryana</b> and expanding to other regions soon.</p>
        <p className="text-xs text-gray-500 mt-1">(Future: Interactive geo-tag based filters coming soon)</p>
      </div>
    </main>
  );
} 