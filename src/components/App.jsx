import { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Navigation } from './Navigation';
import { onFetchMovies, onFetchFoundMovies } from './services/api';
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home__Page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "Movies__Page" */)
);
const FoundMovieList = lazy(() =>
  import(
    './pages/FoundMovieList' /* webpackChunkName: "FoundMovieList__Page" */
  )
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "MovieDetails__Page" */
  )
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "NotFound__Page" */)
);

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setMovie] = useState([]);

  useEffect(() => {
    onGetMovies();
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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/goit-react-hw-05-movies"
              render={() => <Redirect to={'/'} />}
            />

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

            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};
