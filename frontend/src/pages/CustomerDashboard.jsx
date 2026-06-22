import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCustomerRequests } from "../services/requestService";

export default function CustomerDashboard() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
          const user = JSON.parse(
            localStorage.getItem("user")
          );

          const data =
            await getCustomerRequests(
              user.id
            );

        setRequests(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequests();
  }, []);

 return (
  <div className="min-h-screen bg-[#020b3a] text-white">
    <div className="max-w-7xl mx-auto px-6 py-12">

      <h1 className="text-5xl font-bold mb-3">
        My Requests ✨
      </h1>

      <p className="text-slate-400 mb-10">
        Track your custom outfit requests.
      </p>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400">
            My Requests
          </h3>

          <p className="text-5xl font-extrabold mt-2 text-rose-300">
            {requests.length}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400">
            Responses Received
          </h3>

          <p className="text-5xl font-extrabold mt-2 text-purple-300">
            {requests.reduce(
              (total, request) =>
                total + request.responses.length,
              0
            )}
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800">
          <h3 className="text-slate-400">
            Closed Requests
          </h3>

          <p className="text-5xl font-extrabold mt-2 text-green-300">
            {
              requests.filter(
                (request) =>
                  request.status === "CLOSED"
              ).length
            }
          </p>
        </div>
      </div>

      {/* Request Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {requests.map((request) => (
          <div
            key={request.id}
            className="bg-slate-900 rounded-3xl p-6 border border-slate-800"
          >
            <h2 className="text-2xl font-bold mb-3">
              {request.title}
            </h2>

            <p className="text-slate-300 mb-4">
              {request.description}
            </p>

            <p className="text-rose-300 mb-4">
              ₹{request.budgetMin} - ₹{request.budgetMax}
            </p>

            <p className="text-purple-300 mb-4">
              Responses Received: {request.responses.length}
            </p>

            <span
              className={`inline-block px-4 py-2 rounded-full text-sm mb-4 font-semibold
                ${
                  request.status === "PENDING"
                    ? "bg-yellow-500 text-black"
                    : request.status === "RESPONDED"
                    ? "bg-blue-500 text-white"
                    : "bg-green-500 text-white"
                }`}
            >
              {request.status}
            </span>

            <div>
              <Link
                to={`/requests/${request.id}`}
                className="bg-rose-300 text-slate-900 px-4 py-2 rounded-full font-semibold"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
);
}