import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { Button } from 'components/Button';
import { onFetchMovie } from '../../services/api';
import style from './MovieDetailsPage.module.css';
const Cast = lazy(() => import('../Cast' /* webpackChunkName: "Cast__Page" */));
const Reviews = lazy(() =>
  import('../Reviews' /* webpackChunkName: "Reviews__Page" */)
);

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { title, overview, release_date, genres, poster_path, vote_average } =
    movie;
  const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const normalisedStirng =
    vote_average && vote_average.toString().replace(/\D/g, '');

  useEffect(() => {
    const onGetMovie = async () => {
      try {
        const movie = await onFetchMovie(id);
        setMovie(movie);
      } catch (error) {
        console.log(error);
        alert('Something went wrong :(');
      }
    };
    onGetMovie();
  }, [id]);

  const onClickGoBack = () => {
    history.push(location.state?.from ?? '/');
  };

  return (
    <div className={style.container}>
      <Button onClick={onClickGoBack} />
      <div className={style.containerFlex}>
        {poster_path ? (
          <img src={poster_path && posterImage} alt="" width={300} />
        ) : (
          <h2>Sorry photo not found.</h2>
        )}
        <div className={style.content}>
          <h2>
            {title} ({release_date})
          </h2>
          <p>User score: {normalisedStirng}%</p>

          <h3>Overview</h3>
          <p>{overview}</p>

          <h3>Genres</h3>
          <ul>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>

      <hr />

      <p className={style.text}>Aditional info</p>

      <ul className={style.list}>
        <li className={style.listItem}>
          <Link
            className={style.link}
            to={{
              pathname: `${match.url}/cast`,
              state: {
                from: location.state?.from,
              },
            }}
          >
            Cast
          </Link>
        </li>
        <li className={style.listItem}>
          <Link
            className={style.link}
            to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: location.state?.from,
              },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={`${match.path}/cast`}>
            <Cast id={id} />
          </Route>

          <Route path={`${match.path}/reviews`}>
            <Reviews id={id} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
};
