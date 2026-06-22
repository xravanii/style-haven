import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CreateRequest() {
const [formData, setFormData] = useState({
  title: "",
  description: "",
  budgetMin: "",
  budgetMax: "",
});
const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const user = JSON.parse(
      localStorage.getItem("user")
    );


    const response = await fetch(
      "http://localhost:5000/api/requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify({
        ...formData,
        customerId: user.id,
        budgetMin: Number(formData.budgetMin),
        budgetMax: Number(formData.budgetMax),
      }),
      }
    );

const data = await response.json();



if (!response.ok) {
  alert(data.message || "Failed");
  return;
}

alert("Request Created Successfully ✨");

navigate("/customer-dashboard");

    setFormData({
      title: "",
      description: "",
      budgetMin: "",
      budgetMax: "",
    });

  } catch (error) {
    console.error(error);
    alert("Failed to create request");
  }
};
  return (
     <>
        <Navbar />
    <div className="min-h-screen bg-[#020726] text-white p-10">
      <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-3xl">
        <h1 className="text-4xl font-bold mb-8">
          Create Custom Request ✨
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          <input
            type="text"
            name="title"
            placeholder="Outfit Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <textarea
            name="description"
            placeholder="Describe your dream outfit..."
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 rounded-xl bg-slate-800"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="budgetMin"
              placeholder="Minimum Budget"
              value={formData.budgetMin}
              onChange={handleChange}
              className="p-3 rounded-xl bg-slate-800"
            />

            <input
              type="number"
              name="budgetMax"
              placeholder="Maximum Budget"
              value={formData.budgetMax}
              onChange={handleChange}
              className="p-3 rounded-xl bg-slate-800"
            />
          </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-rose-300 text-slate-900 py-3 rounded-xl font-bold hover:bg-rose-200 disabled:opacity-50"
        >
          {loading
            ? "Submitting..."
            : "Submit Request"}
        </button>
        </form>
      </div>
    </div>
     </>
        
  );
}