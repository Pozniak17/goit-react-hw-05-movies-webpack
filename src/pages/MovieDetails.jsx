import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      <h1>The King (2019)</h1>
      <p>User Score: 74%</p>

      <p>This is text bla bla bla</p>
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
