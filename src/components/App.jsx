import { useEffect, useState } from 'react';
import { Navigation } from './Navigation';
import { TrandingMovies } from './TrandingMovies';
import { onFetchMovies } from './api-service/api';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onGetMovies();
  }, []);

  const onGetMovies = async () => {
    try {
      const movies = await onFetchMovies();
      console.log(movies);
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navigation />
      <TrandingMovies movies={movies} />
    </div>
  );
};
