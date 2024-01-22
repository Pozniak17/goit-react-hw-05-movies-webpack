import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
// import { Formik } from 'formik';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [inputValue, setInputValue] = useState('');
  // const [searchClicked, setSearchClicked] = useState(false);

  // якщо немає null, то вертай пустий рядок ""
  const queryName = searchParams.get('query') ?? '';
  console.log(queryName);

  useEffect(() => {
    if (queryName === '') {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `/search/movie?query=${queryName}&include_adult=false&language=en-US&page=1&api_key=${key}`
        );

        setMovies(response.data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [queryName]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setSearchParams({ query: form.elements.query.value });
  };

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  // const reset = () => {
  //   setInputValue('');
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter film"
          value={queryName}
          onChange={e => setSearchParams({ query: e.target.value })}
        />

        <button type="submit">search</button>
      </form>

      {error && <p>Whoops, something went wrong: {error.message}</p>}

      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <ul>
            {movies.map(({ title, id }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>
                  <p>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
