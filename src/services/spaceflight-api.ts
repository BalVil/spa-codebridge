import axios from 'axios';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3';

const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles?_limit=10`);
  return data;
};

const getArticleById = async (id: string) => {
  const { data } = await axios.get(`${BASE_URL}/articles/${id}`);

  return data;
};

const getSearchArticles = async (query: string) => {
  const data = await Promise.all([
    axios.get(`${BASE_URL}/articles?_limit=20&title_contains=${query}`),
    axios.get(`${BASE_URL}/articles?_limit=20&summary_contains=${query}`),
  ]);
  return data;
};

const apiServices = {
  getArticles,
  getSearchArticles,
  getArticleById,
};
export default apiServices;
