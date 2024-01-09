import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTkwMTA4Njg0ZWQ4M2FmZmRiZTg2N2YxNWVmMTEyMSIsInN1YiI6IjY1NmYyYmFkMDg1OWI0MDEzOTUzNGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.83Wj7B2UybrOdqocgkYqs_kY4bnkeI-P1gPLXe2kR1c',
  },
};

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [filmData, setFilmData] = useState([]);
  //api.themoviedb.org/3/movie/{movie_id}

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.themoviedb.org/3/movie/${movieId}`, options)
        .then(response => response.json())
        .then(response => setFilmData(response))
        .catch(err => console.error(err));
    };

    fetchData();
  }, [movieId]);

  const { title, name, overview, popularity } = filmData;

  console.log(filmData);

  // const { name } = filmData.genres;
  return (
    <div>
      <img src={filmData} alt="" width="320px" />
      <h1>{title ? title : name}</h1>
      <p>User Score: {Math.round(popularity / 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      {/* <p>{Object.keys(filmData.genres.name)}</p> */}
      <ul>
        <li>
          <Link to="/movies/:movieId/cast">Cast</Link>
        </li>
        <li>
          <Link to="/movies/:movieId/reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
