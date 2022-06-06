import PropTypes from 'prop-types';
import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
// import HomePage from '../HomePage';
import style from './MoviePage.module.css';

export const MoviesPage = ({ onGetFoundMovies }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmitForm = event => {
    event.preventDefault();
    navigate({
      pathname: location.pathname,
      search: `?query=${query}`,
    });
    onGetFoundMovies(query);
    onReset(event);
  };

  const onChangeInput = event => {
    setQuery(event.target.value);
  };

  const onReset = event => {
    setQuery('');
    event.target.reset();
  };

  return (
    <div>
      <form className={style.searchbar} onSubmit={onSubmitForm}>
        <input
          className={style.searchInput}
          type="text"
          value={query}
          onChange={onChangeInput}
        />
        <button className={style.searchButton} type="submit">
          Search
        </button>
      </form>
      <Outlet />
      {/* {foundMovies.length > 0 && <HomePage movies={foundMovies} />} */}
    </div>
  );
};

MoviesPage.propTypes = {
  onGetFoundMovies: PropTypes.func.isRequired,
};
