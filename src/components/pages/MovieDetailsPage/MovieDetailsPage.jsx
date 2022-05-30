import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { onFetchMovie } from '../../services/api';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { title, overview, release_date, genres, poster_path, vote_average } =
    movie;
  const posterImage = `https://image.tmdb.org/t/p/w300/${poster_path}`;
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

  return (
    <div>
      <img src={poster_path && posterImage} alt="" />
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
      <hr />
      <p>Aditional info</p>
      <hr />
      <Link to={''}></Link>
      <Link to={''}></Link>
    </div>
  );
};
