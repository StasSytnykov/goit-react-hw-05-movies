import PropTypes from 'prop-types';
import { HomePageItem } from './HomePageItem/HomePageItem';

export const HomePage = ({ movies }) => {
  return (
    <div>
      <h2>Tranding today</h2>
      {
        <ul>
          {movies.map(({ title, id }) => (
            <HomePageItem key={id} title={title} id={id} />
          ))}
        </ul>
      }
    </div>
  );
};

HomePage.propTypes = {
  foundMovies: PropTypes.arrayOf(PropTypes.object),
};
