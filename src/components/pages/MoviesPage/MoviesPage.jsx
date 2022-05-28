import { useState } from 'react';

export const MoviesPage = ({ onGetFoundMovies }) => {
  const [query, setQuery] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();
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
