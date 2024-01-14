import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Formik } from 'formik';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [fetchData, setFetchData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const searchQuery = async () => {
      if (searchClicked) {
        try {
          const response = await axios.get(
            `/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1&api_key=${key}`
          );
          setFetchData(response.data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setSearchClicked(false); // Позначте, що запит виконано
        }
      }
    };

    searchQuery();
  }, [inputValue, searchClicked]);

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchClicked(true); //кнопка пошуку була натиснута
    console.log(inputValue);

    // reset();
  };

  // const reset = () => {
  //   setInputValue('');
  // };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchInput"
          placeholder="Enter film"
          value={inputValue}
          onChange={handleChange}
        />

        <button type="submit">search</button>
      </form>

      <div>
        <ul>
          {fetchData.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
