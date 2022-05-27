import { useState } from 'react';

export const Searchbar = ({ onGetMovies }) => {
  const [query, setQuery] = useState('');

  const onSubmitForm = event => {
    event.preventDefault();
    onGetMovies(query);
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
