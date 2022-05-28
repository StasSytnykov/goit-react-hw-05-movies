import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { onFetchMovie } from '../../services/api';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { title, overview, release_date, genres, poster_path } = movie;
  console.log(poster_path);
  console.log(movie);

  useEffect(() => {
    const onGetMovie = async () => {
      try {
        const movie = await onFetchMovie(id);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    onGetMovie();
  }, [id]);

  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
      <h2>
        {title} ({release_date})
      </h2>
      {/* <p>{Desc}</p> */}
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
