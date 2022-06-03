import PropTypes from 'prop-types';
import style from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick} type="button">
      Go back
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
