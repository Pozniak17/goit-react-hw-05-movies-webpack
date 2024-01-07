import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTkwMTA4Njg0ZWQ4M2FmZmRiZTg2N2YxNWVmMTEyMSIsInN1YiI6IjY1NmYyYmFkMDg1OWI0MDEzOTUzNGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.83Wj7B2UybrOdqocgkYqs_kY4bnkeI-P1gPLXe2kR1c',
  },
};

export const Home = () => {
  const [data, setData] = useState([]);
  // тут я буду робити запит на список трендових фільмів на сьогодні
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        'https://api.themoviedb.org/3/trending/all/day?language=en-US',
        options
      )
        .then(response => response.json())
        .then(response => setData(response.results))
        .catch(err => console.error(err));
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>
              {item.title ? item.title : item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const Home = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.themoviedb.org/3/trending/all/day?language=en-US',
//           options
//         );
//         setData(response.data.results);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const options = {
//       // додайте будь-які параметри або конфігурації Axios, які вам потрібні
//     };

//     fetchData();
//   }, []);

//   return (
//     // ваш JSX код тут
//   );
// };
