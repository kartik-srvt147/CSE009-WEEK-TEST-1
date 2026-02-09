import { useEffect, useState } from "react";

function CatFact() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchFact = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://catfact.ninja/fact");
      const data = await res.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Failed to fetch cat fact.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="h-screen bg-gray-950 flex flex-col items-center justify-center">
      <div className="bg-white rounded-lg flex flex-col items-center justify-center px-8 py-5 gap-2 border-4 border-sky-300 w-112.5">
        <h2 className="text-3xl font-extrabold tracking-tight">Cat Fact</h2>
        <p className="text-gray-700 font-bold italic">
          {loading ? "Loading..." : fact}
        </p>
        <button
          onClick={fetchFact}
          className="bg-sky-300/80 px-4 py-2 rounded-lg text-sm font-extrabold text-gray-950 mt-1 cursor-pointer hover:scale-110 transition transform"
        >
          Get New Fact
        </button>
      </div>
    </div>
  );
}

export default CatFact;
