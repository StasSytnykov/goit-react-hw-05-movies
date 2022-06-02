import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const FoundMovieItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      <Link
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
      >
        {title}
      </Link>
    </li>
  );
};

FoundMovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
