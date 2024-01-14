import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

export const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchReviewsById = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}/reviews?api_key=${key}`
        );
        setReviews(response.data.results);
      } catch (error) {
        setError(true);
        console.error('Error fetching cast:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviewsById();
  }, [movieId]);

  console.log(reviews);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map(item => (
          <li key={item.id}>
            <h1>{item.author}</h1>
            <p>{item.content}</p>
          </li>
        ))
      ) : (
        <b>We don't have any rewiews for this movie.</b>
      )}
    </div>
  );
};
