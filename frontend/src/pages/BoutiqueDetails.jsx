import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBoutiqueById } from "../services/boutiqueService";

export default function BoutiqueDetails() {
  const { id } = useParams();

  const [boutique, setBoutique] = useState(null);

  useEffect(() => {
    const fetchBoutique = async () => {
      try {
        const data = await getBoutiqueById(id);
        setBoutique(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoutique();
  }, [id]);

  if (!boutique) {
    return (
      <div className="min-h-screen bg-slate-950 text-white p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-5xl font-bold">
        {boutique.name}
      </h1>

      <p className="text-rose-300 mt-2">
        📍 {boutique.city}
      </p>

      <p className="mt-6 text-slate-300">
        {boutique.description}
      </p>

      <p className="mt-4">
        Experience: {boutique.experienceYears} years
      </p>

      <button className="mt-8 bg-rose-500 text-white font-bold py-3 px-6 rounded-full hover:bg-rose-600 transition">
        Request Custom Outfit
      </button>

      <h2 className="text-3xl font-bold mt-12 mb-6">
        Portfolio
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {boutique.portfolioItems.map((item) => (
    <div
      key={item.id}
      className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-rose-300 transition"
    >
      <div className="h-56 bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 flex items-center justify-center">
        <span className="text-6xl">👗</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">
          {item.title}
        </h3>

        <p className="text-rose-300 text-sm mt-1">
          {item.category}
        </p>

        <p className="text-slate-400 mt-3">
          {item.description}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}