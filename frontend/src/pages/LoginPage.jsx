import {
  signInWithGoogle,
  loginUser,
} from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

const handleGoogleLogin = async () => {
  try {
    const result =
      await signInWithGoogle();

    const dbUser =
      await loginUser({
        firebaseUid: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
      });

      localStorage.setItem(
        "user",
        JSON.stringify(dbUser)
      );

      if (dbUser.role === "CUSTOMER") {
        navigate("/customer-dashboard");
      }
      else if (
        dbUser.role === "BOUTIQUE_OWNER"
      ) {
        navigate("/boutique-dashboard");
      }
      else {
        navigate("/role");
      }

  } catch (error) {
    console.error(error);
  }
};

return (
  <div className="min-h-screen bg-slate-950 text-white">

    <div className="max-w-6xl mx-auto min-h-screen grid md:grid-cols-2">

      {/* Left Side */}
      <div className="flex flex-col justify-center px-12">

        <h1 className="text-7xl font-bold leading-tight">
          Design Your
          <span className="text-rose-300">
            {" "}Dream Outfit
          </span>
        </h1>

        <p className="text-slate-400 text-lg mt-6 max-w-md">
          Connect with talented boutique designers,
          share inspiration, receive proposals,
          and bring your custom fashion ideas to life.
        </p>

        <div className="flex gap-4 mt-8">
          <div className="bg-slate-900 px-5 py-3 rounded-2xl">
            👗 Custom Designs
          </div>

          <div className="bg-slate-900 px-5 py-3 rounded-2xl">
            ✂️ Expert Boutiques
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center p-8">

        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-3">
            Welcome Back ✨
          </h2>

          <p className="text-slate-400 mb-8">
            Sign in to continue to Style Haven
          </p>

          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Continue with Google
          </button>

          <p className="text-center text-slate-500 text-sm mt-6">
            Secure authentication powered by Google
          </p>

        </div>

      </div>

    </div>

  </div>
);
}