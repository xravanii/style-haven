import axios from "axios";

const API = "http://localhost:5000/api";

export const getBoutiques = async () => {
  const response = await axios.get(`${API}/boutiques`);
  return response.data;
};

export const getBoutiqueById = async (id) => {
  const response = await axios.get(
    `${API}/boutiques/${id}`
  );

  return response.data;
};