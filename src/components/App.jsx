import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation';
import { onFetchMovies, onFetchMovie } from './services/api';
import { TrandingMovies } from './pages/TrandingMovies';
import { Searchbar } from './pages/Searchbar';
import { FoundMovieList } from './pages/FoundMovieList';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setMovie] = useState([]);

  useEffect(() => {
    onGetMovies();
    onGetFoundMovies();
  }, []);

  const onGetMovies = async () => {
    try {
      const movies = await onFetchMovies();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    }
  };

  const onGetFoundMovies = async query => {
    try {
      const foundMovies = await onFetchMovie(query);
      setMovie(foundMovies);
      console.log(foundMovies);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <TrandingMovies movies={movies} />
          </Route>
          <Route path="/movies">
            <Searchbar onGetMovies={onGetFoundMovies} />
            <FoundMovieList foundMovies={foundMovies} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
