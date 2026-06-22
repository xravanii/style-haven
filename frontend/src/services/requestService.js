import axios from "axios";

const API = "http://localhost:5000/api";

export const getCustomerRequests = async (customerId) => {
  const response = await axios.get(
    `${API}/requests/customer/${customerId}`
  );

  return response.data;
};

export const getRequestById = async (id) => {
  const response = await axios.get(
    `${API}/requests/${id}`
  );

  return response.data;
};

export const getAllRequests = async () => {
  const response = await axios.get(
    `${API}/requests`
  );

  return response.data;
};

export const submitResponse = async (responseData) => {
  const response = await axios.post(
    `${API}/responses`,
    responseData
  );

  return response.data;
};

export const acceptProposal = async (
  requestId,
  responseId
) => {
  const response = await axios.patch(
    `${API}/requests/${requestId}/accept`,
    {
      responseId,
    }
  );

  return response.data;
};