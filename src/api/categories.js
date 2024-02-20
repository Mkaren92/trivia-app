import axios from "../services/axios";

export const fetchCategories = async () => {
  const response = await axios.get("/api_category.php");
  return response.data;
};
