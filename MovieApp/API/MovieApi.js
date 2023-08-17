const {default: axios} = require('axios');
const {BaseUrl, API_KEY} = require('../config/const');

export const ImagePath = path =>
  path ? `https://image.tmdb.org/t/p/original${path}` : null;

const TrendingApi = `${BaseUrl}/trending/movie/day?api_key=${API_KEY}`;
const WatchlistAPi = ``;
const FavoritelistApi = ``;

const apiCall = async (endPoints, params) => {
  const options = {
    method: 'get',
    url: endPoints,
    params: params,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
    return {};
  }
};

export const fetchTredingApi = () => {
  return apiCall(TrendingApi);
};
