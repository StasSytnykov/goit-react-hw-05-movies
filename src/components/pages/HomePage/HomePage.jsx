import PropTypes from 'prop-types';
import { HomePageItem } from './HomePageItem/HomePageItem';
import style from './HomePage.module.css';

export const HomePage = ({ movies }) => {
  console.log(movies);
  return (
    <div>
      <h2 className={style.title}>Tranding today</h2>
      {
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
      }
    </div>
  );
};

HomePage.propTypes = {
  foundMovies: PropTypes.arrayOf(PropTypes.object),
};
