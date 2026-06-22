import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getRequestById,
  acceptProposal,
} from "../services/requestService";

export default function RequestDetails() {
  const { id } = useParams();

  const [request, setRequest] = useState(null);

  const handleAccept = async (responseId) => {
  try {
    await acceptProposal(id, responseId);

    const updatedRequest =
      await getRequestById(id);

    setRequest(updatedRequest);

    alert("Proposal Accepted 🎉");
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const data = await getRequestById(id);
        setRequest(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRequest();
  }, [id]);

  if (!request) {
    return (
      <div className="min-h-screen bg-[#020726] text-white p-10">
        Loading...
      </div>
    );
  }
  const selectedResponse = request.responses.find(
  (response) =>
    response.id === request.selectedResponseId
);

  return (
    <div className="min-h-screen bg-[#020726] text-white p-10">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-4">
          {request.title}
        </h1>

        <p className="text-slate-300 mb-6">
          {request.description}
        </p>

        <p className="text-rose-300 mb-8">
          ₹{request.budgetMin} - ₹{request.budgetMax}
        </p>

        <h2 className="text-3xl font-bold mb-4">
          Reference Images
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {request.images.map((image) => (
            <div
              key={image.id}
              className="bg-slate-900 rounded-2xl overflow-hidden"
            >
              <div>
              <img
                src={image.imageUrl}
                alt="Reference Design"
                className="w-full h-64 object-cover"
              />

              
            </div>
            </div>
          ))}
        </div>
      {selectedResponse && (
        <div className="bg-green-900/30 border border-green-500 rounded-3xl p-6 mb-10">
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            ⭐ Selected Boutique
          </h2>

          <h3 className="text-2xl font-bold">
            {selectedResponse.boutique.name}
          </h3>

          <p className="mt-2">
            Estimated Price: ₹{selectedResponse.estimatedPrice}
          </p>

          <p>
            Delivery: {selectedResponse.deliveryDays} days
          </p>

          <p className="mt-3 text-slate-300">
            {selectedResponse.comment}
          </p>
        </div>
      )}
        <h2 className="text-3xl font-bold mb-4">
          Boutique Responses
        </h2>

        <div className="space-y-6">
          {request.responses.map((response) => (
            <div
              key={response.id}
              className="bg-slate-900 rounded-3xl p-6"
            >
              <h3 className="text-2xl font-bold mb-2">
                {response.boutique.name}
              </h3>

              <p>
                Feasibility:
                {" "}
                {response.feasibility}
              </p>

              <p>
                Estimated Price:
                {" "}
                ₹{response.estimatedPrice}
              </p>

              <p>
                Delivery:
                {" "}
                {response.deliveryDays} days
              </p>

              <p className="mt-3 text-slate-300">
                {response.comment}
              </p>

              {request.selectedResponseId ===
                response.id ? (
                <div className="flex gap-3 justify-center mt-4">
                  <button
                    className="bg-green-500 text-white px-5 py-2 rounded-full font-semibold"
                  >
                    ✓ Selected Boutique
                  </button>

                  <Link
                    to={`/boutiques/${response.boutique.id}`}
                    className="bg-rose-300 text-slate-900 px-5 py-2 rounded-full font-semibold"
                  >
                    View Boutique →
                  </Link>
                </div>
                ) : request.status !== "CLOSED" ? (
                  <button
                    onClick={() =>
                      handleAccept(response.id)
                    }
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-xl"
                  >
                    Accept Proposal
                  </button>
                ) : null}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}