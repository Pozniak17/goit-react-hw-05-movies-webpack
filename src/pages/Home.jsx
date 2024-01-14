import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

export const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // тут я роблю запит на список трендових фільмів на сьогодні
  useEffect(() => {
    setIsLoading(true);

    const fetchMovies = async () => {
      try {
        const response = await axios.get(`/trending/movie/day?api_key=${key}`);
        setData(response.data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  // console.log(object);
  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {data.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
