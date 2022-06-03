import PropTypes from 'prop-types';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import style from './MoviePage.module.css';

export const MoviesPage = ({ onGetFoundMovies }) => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();

  const onSubmitForm = event => {
    event.preventDefault();
    history.push({
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
  );
};

MoviesPage.propTypes = {
  onGetFoundMovies: PropTypes.func.isRequired,
};
