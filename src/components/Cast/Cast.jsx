import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List, Item } from './Cast.styled';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '7e90108684ed83affdbe867f15ef1121';

export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchCastById = async () => {
      try {
        const response = await axios.get(
          `/movie/${movieId}/credits?api_key=${key}`
        );

        setCast(response.data.cast);
      } catch (error) {
        setError(true);
        console.error('Error fetching cast:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCastById();
  }, [movieId]);

  return (
    <div>
      <List>
        {cast.length > 0 ? (
          cast.map(({ name, id, character, profile_path }) => (
            <Item key={id}>
              <div>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    width="160px"
                    alt=""
                  />
                ) : (
                  <img
                    src="https://img.freepik.com/free-vector/cute-panda-drinking-boba-milk-tea-cartoon-vector-illustration-animal-food-concept-isolated-vector-flat-cartoon-style_138676-1949.jpg?w=740&t=st=1705864050~exp=1705864650~hmac=3749821165d8066276a399b880c44247abd35d3a8102676fd6b4157576907242"
                    width="160px"
                    height="240px"
                    alt=""
                  />
                )}
                <p>{name}</p>
                <p>Character: {character}</p>
              </div>
            </Item>
          ))
        ) : (
          <b>We don't have any casts for this movie.</b>
        )}
      </List>
    </div>
  );
};
