import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink exact to={'/'}>
        Home
      </NavLink>
      <NavLink to={'/movies'}>Movies</NavLink>
      <hr />
    </nav>
  );
};
