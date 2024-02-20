import axios from "../services/axios";

export const fetchQuestions = async ({ queryKey }) => {
  const response = await axios.get("/api.php", {
    params: { category: queryKey[1], amount: queryKey[2] },
  });
  return response.data;
};
