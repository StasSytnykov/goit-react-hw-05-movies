import { TrandingMoviesItem } from './TrandingMoviesItem/TrandingMoviesItem';

export const TrandingMovies = ({ movies }) => {
  return (
    <div>
      <h2>Tranding today</h2>
      {
        <ul>
          {movies.map(({ title, id }) => (
            <TrandingMoviesItem key={id} title={title} />
          ))}
        </ul>
      }
    </div>
  );
};
