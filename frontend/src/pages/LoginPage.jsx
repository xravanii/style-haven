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

    navigate("/role");

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="min-h-screen bg-[#020b3a] flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-3xl text-center">

        <h1 className="text-5xl font-bold text-white mb-6">
          Style Haven ✨
        </h1>

        <p className="text-slate-400 mb-8">
          Continue with Google
        </p>

        <button
          onClick={handleGoogleLogin}
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
        >
          Sign in with Google
        </button>

      </div>

    </div>
  );
}