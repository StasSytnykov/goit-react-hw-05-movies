import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { onFetchMovie } from '../../services/api';

export const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  //   const { title } = movie;
  console.log(id);
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
      <img src="" alt="" />
      <h2>Title</h2>
      <p>Desc</p>
      <h3>Overview</h3>
      <p>Genre</p>
      <hr />
      <p>Aditional info</p>
      <hr />
      <Link to={''}></Link>
      <Link to={''}></Link>
    </div>
  );
};
