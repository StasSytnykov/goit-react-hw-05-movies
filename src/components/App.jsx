import { useEffect, useState } from 'react';
import { Route, Switchm, Router } from 'react-router-dom';
import { Navigation } from './Navigation';
import { TrandingMovies } from './TrandingMovies';
import { onFetchMovies } from './services/api';
import { Searchbar } from './Searchbar';

export const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onGetMovies();
  }, []);

  const onGetMovies = async () => {
    try {
      const movies = await onFetchMovies();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/">
          <TrandingMovies movies={movies} />
        </Route>
        <Searchbar />
      </div>
    </Router>
  );
};
