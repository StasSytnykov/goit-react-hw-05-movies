import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navigation } from './Navigation';
import { onFetchMovies, onFetchFoundMovies } from './services/api';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { FoundMovieList } from './pages/FoundMovieList';
import { MovieDetailsPage } from './pages/MovieDetailsPage';

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
      alert('Something went wrong :(');
    }
  };

  const onGetFoundMovies = async query => {
    try {
      const foundMovies = await onFetchFoundMovies(query);
      setMovie(query ? foundMovies : []);
    } catch (error) {
      console.log(error);
      alert('Something went wrong :(');
    }
  };

  return (
    <div>
      <header>
        <Navigation />
      </header>

      <main>
        <Switch>
          {/* <Route exact path="/" render={() => <Redirect to={'/'} />} /> */}

          <Route exact path="/">
            <HomePage movies={movies} />
          </Route>

          <Route path="/movies/:id">
            <MovieDetailsPage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage onGetFoundMovies={onGetFoundMovies} />

            {foundMovies.length > 0 && (
              <FoundMovieList foundMovies={foundMovies} />
            )}
          </Route>
        </Switch>
      </main>
    </div>
  );
};
