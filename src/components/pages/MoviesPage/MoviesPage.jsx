import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

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
    <form onSubmit={onSubmitForm}>
      <input type="text" value={query} onChange={onChangeInput} />
      <button type="submit">Search</button>
    </form>
  );
};
