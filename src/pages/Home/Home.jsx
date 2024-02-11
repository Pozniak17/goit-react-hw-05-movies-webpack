import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Item, List, BookmarkIcon } from './Home.styled';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [bookmarkedMovies, setBookmarkedMovies] = useState([]);
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

  // 'https://api.themoviedb.org/3/find/609681?external_source=imdb_id'

  //Додавання в LocalStorage
  // const handleBookmarkClick = movieId => {
  //   // Перевірка, чи вже є фільм в закладках
  //   if (bookmarkedMovies.includes(movieId)) {
  //     // Якщо фільм вже є в закладках, видаліть його
  //     const updatedBookmarks = bookmarkedMovies.filter(id => id !== movieId);
  //     setBookmarkedMovies(updatedBookmarks);
  //   } else {
  //     // Якщо фільму немає в закладках, додайте його
  //     const updatedBookmarks = [...bookmarkedMovies, movieId];
  //     setBookmarkedMovies(updatedBookmarks);
  //   }
  //   // Записати оновлені закладки в localStorage
  //   localStorage.setItem('bookmarkedMovies', JSON.stringify(bookmarkedMovies));
  // };

  console.log(data);
  return (
    <div>
      <h1>Trending today</h1>
      {error && <p>Whoops, something went wrong: {error.message}</p>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <List>
          {data.map(({ title, id, poster_path }) => (
            <Item key={id}>
              <BookmarkIcon />
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt="film"
                  width="200px"
                  height="300px"
                />
                {title}
              </Link>
            </Item>
          ))}
        </List>
      )}
    </div>
  );
};

export default Home;
