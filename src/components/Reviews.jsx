import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

export const Reviews = () => {
  const { movieId } = useRef();
  console.log(movieId);
  const [reviews, setReviews] = useState('');

  useEffect(() => {
    const fetchReviewsById = async () => {
      const response = await axios.get(`/credit/${movieId}?api_key=${key}`);
      setReviews(response.data);
      // return response.data;
    };

    fetchReviewsById();
  }, [movieId]);

  console.log(reviews);
  return (
    <div>
      <h1>Author: SWITCH</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam,
        assumenda saepe? Dolor, ipsam repudiandae fuga illo dolores eius quaerat
        corrupti!
      </p>
    </div>
  );
};

// https://api.themoviedb.org/3/credit/:credit_id
