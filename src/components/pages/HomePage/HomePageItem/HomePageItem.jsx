import { Link } from 'react-router-dom';

export const HomePageItem = ({ title, id }) => {
  return (
    <li>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  );
};
