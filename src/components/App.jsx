import { useEffect, useState, lazy, Suspense } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import { Navigation } from './Navigation';
import { onFetchMovies, onFetchFoundMovies } from './services/api';
const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "Home__Page" */)
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "Movies__Page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "MovieDetails__Page" */
  )
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "NotFound__Page" */)
);
const Cast = lazy(() =>
  import('./pages/Cast' /* webpackChunkName: "Cast__Page" */)
);
const Reviews = lazy(() =>
  import('./pages/Reviews' /* webpackChunkName: "Reviews__Page" */)
);

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [foundMovies, setMovie] = useState([]);
  const location = useLocation();
  console.log(location.pathname);

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
      {location.pathname === '/goit-react-hw-05-movies' && <Navigate to="/" />}
      <header>
        <Navigation />
      </header>

      <main>
        {location.pathname === '/' && (
          <h2 style={{ textAlign: 'center' }}>Tranding today</h2>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage movies={movies} />} />

            <Route path="/movies/:id/*" element={<MovieDetailsPage />}>
              <Route path={`cast`} element={<Cast />} />

              <Route path={`reviews`} element={<Reviews />} />
            </Route>

            <Route
              path="/movies"
              element={
                <MoviesPage
                  onGetFoundMovies={onGetFoundMovies}
                  foundMovies={foundMovies}
                />
              }
            >
              <Route
                index
                element={
                  foundMovies.length > 0 && <HomePage movies={foundMovies} />
                }
              />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
