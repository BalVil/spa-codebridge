import axios from "axios";

const BASE_URL = "https://api.spaceflightnewsapi.net/v3";

const getArticles = async (query: string = "") => {
  const { data } = await axios.get(
    `${BASE_URL}/articles?_limit=10&title_contains=${query}&summary_contains=${query}`
  );
  return data;
};

const getArticleById = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`);

  return data;
};

const apiServices = {
  getArticles,
  getArticleById,
};
export default apiServices;
