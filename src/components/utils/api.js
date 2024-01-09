import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

export const fetchMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${key}`);
  console.log(response);
  return response;
};

// `${BASE_URL}/movie/11?api_key=${key}`;

// api.themoviedb.org/3/movie/11?api_key=7e90108684ed83affdbe867f15ef1121
// api.themoviedb.org/3/trending/all/day?language=en-US

// api.themoviedb.org/3/trending/movie/{time_window}

// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

//api.themoviedb.org/3/movie/{movie_id}
