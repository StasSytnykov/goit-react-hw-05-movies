import { NavLink, useLocation } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className={style.nav}>
      <NavLink
        className={style.link}
        activeClassName={style.activeLink}
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
        className={style.link}
        activeClassName={style.activeLink}
        to={{
          pathname: '/movies',
          state: {
            from: location,
          },
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
};
