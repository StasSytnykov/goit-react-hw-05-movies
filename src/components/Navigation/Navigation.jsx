import { NavLink, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav>
      <NavLink
        exact
        to={{
          pathname: '/',
          state: {
            from: location,
          },
        }}
      >
        Home
      </NavLink>
      <NavLink
        to={{
          pathname: '/movies',
          state: {
            from: location,
          },
        }}
      >
        Movies
      </NavLink>
      <hr />
    </nav>
  );
};
