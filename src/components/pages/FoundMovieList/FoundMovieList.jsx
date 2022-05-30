import { FoundMovieItem } from './FoundMovieItem';

export const FoundMovieList = ({ foundMovies }) => {
  return (
    <ul>
      {foundMovies.map(({ title, id }) => (
        <FoundMovieItem key={id} title={title} id={id} />
      ))}
    </ul>
  );
};
