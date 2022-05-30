import { Link } from 'react-router-dom';

export const FoundMovieItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};
