import { Link } from 'react-router-dom';

export const TrandingMoviesItem = ({ title }) => {
  return (
    <li>
      <Link to={'/'}>{title}</Link>
    </li>
  );
};
