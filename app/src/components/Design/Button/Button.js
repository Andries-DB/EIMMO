import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Button.css';

function Button(
  {
    children,
    onClick,
    color = 'primary',
    disabled = false,
    type
  }
) {
  const navigate = useNavigate();

  return (
    <button
      className={`btn btn-${color}`}
      onClick={navigate(`${onClick}`)}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

Button.propTypes = {

  children: PropTypes.string,
  onClick: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  type: PropTypes.string
};

Button.defaultProps = {

  onClick: '',
  children: '',
  disabled: false,
  color: 'primary',
  type: 'button'
};

export default Button;
