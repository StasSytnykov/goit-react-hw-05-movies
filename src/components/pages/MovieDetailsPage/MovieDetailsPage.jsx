import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  // useHistory,
} from 'react-router-dom';
import { Button } from 'components/Button';
import { Cast } from '../Cast';
import { Reviews } from '../Reviews';
import { onFetchMovie } from '../../services/api';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const match = useRouteMatch();
  const location = useLocation();
  // const history = useHistory();
  const { title, overview, release_date, genres, poster_path, vote_average } =
    movie;
  const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const normalisedStirng =
    vote_average && vote_average.toString().replace(/\D/g, '');
  console.log(location);

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
    console.log(location);
    // history.push(location);
  };

  return (
    <div>
      <Button onClick={onClickGoBack} />
      <div>
        {poster_path ? (
          <img src={poster_path && posterImage} alt="" width={300} />
        ) : (
          <h2>Sorry photo not found.</h2>
        )}

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

      <hr />

      <p>Aditional info</p>

      <ul>
        <li>
          <Link
            to={{
              pathname: `${match.url}/cast`,
              state: {
                from: location,
              },
            }}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: location,
              },
            }}
          >
            Reviews
          </Link>
        </li>
      </ul>
      <hr />

      <Switch>
        <Route path={`${match.path}/cast`}>
          <Cast id={id} />
        </Route>

        <Route path={`${match.path}/reviews`}>
          <Reviews id={id} />
        </Route>
      </Switch>
    </div>
  );
};
