import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTkwMTA4Njg0ZWQ4M2FmZmRiZTg2N2YxNWVmMTEyMSIsInN1YiI6IjY1NmYyYmFkMDg1OWI0MDEzOTUzNGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.83Wj7B2UybrOdqocgkYqs_kY4bnkeI-P1gPLXe2kR1c',
//   },
// };

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [filmData, setFilmData] = useState({});
  //api.themoviedb.org/3/movie/{movie_id}

  useEffect(() => {
    const fetchMoviesById = async () => {
      const response = await axios.get(`/movie/${movieId}?api_key=${key}`);
      setFilmData(response.data);
      // return response.data;
    };

    fetchMoviesById();
  }, [movieId]);

  const { title, overview, popularity } = filmData;

  const filmGenres = filmData.genres || [];
  const names = filmGenres.map(genre => genre.name);

  // console.log(filmGanres);

  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w500${filmData.poster_path}`}
        alt=""
        width="320px"
      />
      {/* <img src={filmData} alt="" width="320px" /> */}
      <h1>{title}</h1>
      <p>User Score: {Math.round(popularity / 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>genres</h2>

      <ul>
        {names.map((item, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

{
  /* {`/movies/${movieId}/cast`} */
}
{
  /* {`/movies/${movieId}/reviews`} */
}
