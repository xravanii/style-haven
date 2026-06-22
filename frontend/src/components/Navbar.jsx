import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

export default function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = async () => {
    await logout();
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
  <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800 bg-slate-950">

    <Link
      to="/"
      className="text-3xl font-bold text-rose-300"
    >
      ✨ Style Haven
    </Link>

    <div className="flex gap-6 items-center">

      <Link
        to="/boutiques"
        className="hover:text-rose-300 transition"
      >
        Browse Boutiques
      </Link>

      {!user ? (
        <Link
          to="/login"
          className="bg-rose-300 text-black px-5 py-2 rounded-full font-semibold"
        >
          Login
        </Link>
      ) : (
        <>
          {user.role === "CUSTOMER" && (
            <>
              <Link
                to="/customer-dashboard"
                className="hover:text-rose-300 transition"
              >
                My Requests
              </Link>

              <Link
                to="/create-request"
                className="hover:text-rose-300 transition"
              >
                Create Request
              </Link>
            </>
          )}

          {user.role === "BOUTIQUE_OWNER" && (
            <Link
              to="/boutique-dashboard"
              className="hover:text-rose-300 transition"
            >
              Dashboard
            </Link>
          )}

          <span className="text-slate-400">
            👤 {user.name?.split(" ")[0]}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full text-white font-semibold transition"
          >
            Logout
          </button>
        </>
      )}

    </div>
  </nav>
);
}