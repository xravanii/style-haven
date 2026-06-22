import { useState } from "react";
import { useParams } from "react-router-dom";
import { submitResponse } from "../services/requestService";

export default function RespondRequest() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    feasibility: "FEASIBLE",
    estimatedPrice: "",
    deliveryDays: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitResponse({
        requestId: id,
        boutiqueId: "cmqb80c930001fzy09v9yyess",
        feasibility: formData.feasibility,
        estimatedPrice: Number(formData.estimatedPrice),
        deliveryDays: Number(formData.deliveryDays),
        comment: formData.comment,
      });

      alert("Response Submitted Successfully 🎉");

      setFormData({
        feasibility: "FEASIBLE",
        estimatedPrice: "",
        deliveryDays: "",
        comment: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to submit response");
    }
  };

  return (
    <div className="min-h-screen bg-[#020726] text-white p-10">
      <div className="max-w-2xl mx-auto">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h1 className="text-4xl font-bold mb-2">
            Respond to Request ✨
          </h1>

          <p className="text-slate-400 mb-8">
            Submit your proposal for this customer request.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Feasibility */}
            <div>
              <label className="block mb-2 font-medium text-rose-300">
                Feasibility
              </label>

              <select
                name="feasibility"
                value={formData.feasibility}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white"
              >
                <option value="FEASIBLE">
                  FEASIBLE
                </option>

                <option value="PARTIALLY_FEASIBLE">
                  PARTIALLY FEASIBLE
                </option>

                <option value="NOT_FEASIBLE">
                  NOT FEASIBLE
                </option>
              </select>
            </div>

            {/* Estimated Price */}
            <div>
              <label className="block mb-2 font-medium text-rose-300">
                Estimated Price (₹)
              </label>

              <input
                type="number"
                name="estimatedPrice"
                value={formData.estimatedPrice}
                onChange={handleChange}
                placeholder="Enter estimated price"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
              />
            </div>

            {/* Delivery Days */}
            <div>
              <label className="block mb-2 font-medium text-rose-300">
                Delivery Days
              </label>

              <input
                type="number"
                name="deliveryDays"
                value={formData.deliveryDays}
                onChange={handleChange}
                placeholder="Enter delivery days"
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
              />
            </div>

            {/* Comment */}
            <div>
              <label className="block mb-2 font-medium text-rose-300">
                Comment
              </label>

              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={5}
                placeholder="Describe how you would create this outfit..."
                className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-300 text-slate-900 py-4 rounded-xl font-bold text-lg hover:bg-rose-200 transition"
            >
              Submit Response →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}