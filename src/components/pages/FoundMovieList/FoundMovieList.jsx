import PropTypes from 'prop-types';
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

FoundMovieList.propTypes = {
  foundMovies: PropTypes.arrayOf(PropTypes.object),
};
