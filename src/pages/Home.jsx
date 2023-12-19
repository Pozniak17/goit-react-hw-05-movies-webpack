import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        <li>
          <Link>Film 1</Link>
        </li>
        <li>
          <Link>Film 2</Link>
        </li>
        <li>
          <Link>Film 3</Link>
        </li>
        <li>
          <Link>Film 4</Link>
        </li>
        <li>
          <Link>Film 5</Link>
        </li>
        <li>
          <Link>Film 6</Link>
        </li>
      </ul>
    </div>
  );
};
