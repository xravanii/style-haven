import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import Navbar from "../components/Navbar";
import fashion1 from "../assets/fashion1.png";
import fashion2 from "../assets/fashion2.png";
import fashion3 from "../assets/fashion3.png";
import fashion4 from "../assets/fashion4.png";

export default function LandingPage() {
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
     <>
        <Navbar />
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-8 py-24">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h1 className="text-6xl font-bold leading-tight">
              Discover
              <span className="text-rose-300">
                {" "}Dream Outfits
              </span>
            </h1>

            <p className="text-slate-300 text-lg mt-6">
              Connect with talented boutique designers,
              browse portfolios, share inspiration,
              and receive custom outfit proposals.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/boutiques"
                className="bg-rose-300 text-black px-6 py-3 rounded-full font-semibold"
              >
                Explore Boutiques
              </Link>

              <Link
                to="/create-request"
                className="border border-rose-300 px-6 py-3 rounded-full"
              >
                Post Request
              </Link>
            </div>
          </div>

          {/* Fashion Grid */}
          <div className="grid grid-cols-2 gap-4">

<img
  src={fashion1}
  alt=""
  className="h-64 w-full object-cover rounded-3xl"
/>

<img
  src={fashion2}
  alt=""
  className="h-40 w-full object-cover rounded-3xl"
/>

<img
  src={fashion3}
  alt=""
  className="h-40 w-full object-cover rounded-3xl"
/>

<img
  src={fashion4}
  alt=""
  className="h-64 w-full object-cover rounded-3xl"
/>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-6xl mx-auto px-8 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              Browse
            </h3>

            <p className="text-slate-300">
              Explore boutique portfolios and find
              designers whose style matches yours.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              Request
            </h3>

            <p className="text-slate-300">
              Upload inspiration images and describe
              your dream outfit.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-3">
              Compare
            </h3>

            <p className="text-slate-300">
              Receive quotes and proposals from
              multiple boutiques.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Boutiques */}
      <section className="max-w-6xl mx-auto px-8 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Boutiques
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-3xl overflow-hidden">
            <div className="h-56 bg-pink-200"></div>

            <div className="p-5">
              <h3 className="text-xl font-bold">
                Elegant Threads
              </h3>

              <p className="text-slate-400">
                Bangalore
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden">
            <div className="h-56 bg-purple-200"></div>

            <div className="p-5">
              <h3 className="text-xl font-bold">
                Royal Couture
              </h3>

              <p className="text-slate-400">
                Hyderabad
              </p>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl overflow-hidden">
            <div className="h-56 bg-yellow-100"></div>

            <div className="p-5">
              <h3 className="text-xl font-bold">
                Blossom Studio
              </h3>

              <p className="text-slate-400">
                Chennai
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        © 2026 Style Haven
      </footer>

    </div>
    
</>
  );
}