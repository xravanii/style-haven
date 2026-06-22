import { useEffect, useState } from "react";
import { getBoutiques } from "../services/boutiqueService";
import { Link } from "react-router-dom";

export default function BoutiquesPage() {
  const [boutiques, setBoutiques] = useState([]);

  useEffect(() => {
    const fetchBoutiques = async () => {
      try {
        const data = await getBoutiques();
        setBoutiques(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBoutiques();
  }, []);

  return (
    <div className="min-h-screen bg-[#050B2C] text-white px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-3">
          Browse Boutiques ✨
        </h1>

        <p className="text-slate-400 mb-10">
          Discover talented designers and explore their work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boutiques.map((boutique) => (
            <div
              key={boutique.id}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-rose-300 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-56 bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 flex items-center justify-center">
                <span className="text-6xl">🧵</span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-1">
                  {boutique.name}
                </h2>

                <p className="text-rose-300 text-sm mb-4">
                  📍 {boutique.city}
                </p>

                <p className="text-slate-300 mb-4">
                  {boutique.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">
                    {boutique.experienceYears
                      ? `${boutique.experienceYears} Years Experience`
                      : "New Boutique"}
                  </span>

                  <Link
                    to={`/boutiques/${boutique.id}`}
                    className="bg-rose-300 text-slate-900 px-4 py-2 rounded-full font-semibold hover:bg-rose-200 transition"
                  >
                    View →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {boutiques.length === 0 && (
          <div className="text-center mt-20">
            <h2 className="text-2xl font-semibold">
              No boutiques found
            </h2>
            <p className="text-slate-400 mt-2">
              Add your first boutique from the backend.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}