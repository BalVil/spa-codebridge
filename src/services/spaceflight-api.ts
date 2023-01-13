import axios from 'axios';

const BASE_URL = 'https://api.spaceflightnewsapi.net/v3/articles';

export const fetchArticles = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data.results;
};
