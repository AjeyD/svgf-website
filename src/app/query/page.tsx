import React, { useRef, useState } from "react";

export default function QueryPage() {
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
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 py-16 animate-slide-in-down">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-900">Submit a Query</h1>
      <form ref={formRef} onSubmit={handleQuerySubmit} className="w-full max-w-lg bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col gap-6">
        <input name="fullName" type="text" required placeholder="Full Name" className="input input-bordered" />
        <input name="email" type="email" required placeholder="Email" className="input input-bordered" />
        <input name="phone" type="tel" required placeholder="Phone Number" className="input input-bordered" />
        <textarea name="message" required placeholder="Your Query" className="textarea textarea-bordered min-h-[100px]" />
        <button type="submit" className="btn btn-primary bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg transition-all duration-200">
          {loading ? "Submitting..." : "Submit"}
        </button>
        {queryStatus === "success" && <p className="text-green-600">Query submitted successfully!</p>}
        {queryStatus === "error" && <p className="text-red-600">There was an error. Please try again.</p>}
      </form>
    </main>
  );
}
