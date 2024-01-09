import { useEffect, useState } from 'react';
// import { Formik } from 'formik';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTkwMTA4Njg0ZWQ4M2FmZmRiZTg2N2YxNWVmMTEyMSIsInN1YiI6IjY1NmYyYmFkMDg1OWI0MDEzOTUzNGQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.83Wj7B2UybrOdqocgkYqs_kY4bnkeI-P1gPLXe2kR1c',
  },
};

export const Movies = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
        options
      )
        .then(response => response.json())
        .then(response => console.log(response.results))
        .catch(err => console.error(err));
    };
    fetchData();
  }, [inputValue]);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log(inputValue);

    // reset();
  };

  const handleChange = evt => {
    setInputValue(evt.target.value);
    // this.props.onSubmit({ login });
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
          // value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>

      <div>
        <ul>
          {inputValue.map(film => (
            <li key={film.title}>{film.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
