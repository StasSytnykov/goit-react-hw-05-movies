import PropTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button">
      Go back
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
