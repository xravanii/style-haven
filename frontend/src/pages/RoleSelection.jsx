import { useNavigate } from "react-router-dom";
import { updateRole } from "../services/authService";

export default function RoleSelection() {
  const navigate = useNavigate();
const handleRoleSelect = async (
  role
) => {
  try {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const updatedUser =
      await updateRole(
        user.id,
        role
      );

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    if (role === "CUSTOMER") {
      navigate(
        "/customer-dashboard"
      );
    } else {
      navigate(
        "/boutique-dashboard"
      );
    }

  } catch (error) {
    console.error(error);
  }
};
  return (
    <div className="min-h-screen bg-[#020b3a] text-white flex items-center justify-center">

      <div className="max-w-4xl w-full px-6">

        <h1 className="text-6xl font-bold text-center mb-4">
          Welcome to Style Haven ✨
        </h1>

        <p className="text-center text-slate-400 mb-12 text-lg">
          Choose how you'd like to continue
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          <div
            onClick={() =>
                handleRoleSelect("CUSTOMER")
              }
            className="bg-slate-900 rounded-3xl p-10 cursor-pointer border border-slate-800 hover:border-rose-300 transition"
          >
            <h2 className="text-3xl font-bold mb-4">
              👗 Customer
            </h2>

            <p className="text-slate-400">
              Create outfit requests, upload inspiration
              images and receive proposals from boutiques.
            </p>
          </div>

          <div
            onClick={() =>
              handleRoleSelect("BOUTIQUE_OWNER")
            }
            className="bg-slate-900 rounded-3xl p-10 cursor-pointer border border-slate-800 hover:border-purple-300 transition"
          >
            <h2 className="text-3xl font-bold mb-4">
              ✂️ Boutique Owner
            </h2>

            <p className="text-slate-400">
              Browse customer requests and submit
              custom tailoring proposals.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}