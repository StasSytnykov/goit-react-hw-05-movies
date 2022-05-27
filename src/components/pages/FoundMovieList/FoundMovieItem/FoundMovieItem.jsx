import { Link } from 'react-router-dom';

export const FoundMovieItem = ({ title }) => {
  return (
    <li>
      <Link to={'query'}>{title}</Link>
    </li>
  );
};
