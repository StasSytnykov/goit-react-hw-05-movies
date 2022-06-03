import PropTypes from 'prop-types';
import { HomePageItem } from './HomePageItem/HomePageItem';
import style from './HomePage.module.css';

export const HomePage = ({ movies }) => {
  return (
    <ul className={style.list}>
      {movies.map(({ title, id, poster_path }) => (
        <HomePageItem
          key={id}
          title={title}
          id={id}
          poster_path={poster_path}
        />
      ))}
    </ul>
  );
};

HomePage.propTypes = {
  foundMovies: PropTypes.arrayOf(PropTypes.object),
};
