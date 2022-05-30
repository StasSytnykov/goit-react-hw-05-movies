const axios = require('axios').default;

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=685eefeb1760a468bfb8926719c0a393';

const onFetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}trending/movie/day${API_KEY}`);
  return response.data.results;
};

const onFetchFoundMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie${API_KEY}&language=en-US&query=${query}`
  );
  return response.data.results;
};

const onFetchMovie = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}${API_KEY}&language=en-US`
  );
  return response.data;
};

const onFetchCast = async id => {
  const response = await axios.get(
    `${BASE_URL}movie/${id}/credits${API_KEY}&language=en-US`
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export { onFetchFoundMovies, onFetchMovies, onFetchMovie, onFetchCast };
