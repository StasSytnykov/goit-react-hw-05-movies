import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={style.nav}>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to={{
          pathname: '/',
        }}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : style.link)}
        to={{
          pathname: '/movies',
        }}
      >
        Movies
      </NavLink>
    </nav>
  );
};
