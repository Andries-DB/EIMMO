/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import './Button.css';

function Button(
  {
    children,
    onClick,
    color = 'primary',
    disabled = false,
    type,
    href
  }
) {
  if (href) {
    return (
      <a href={href}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`btn btn-${color}`} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  type: PropTypes.oneOf([
    'button',
    'submit',
  ]),
};

Button.defaultProps = {
  href: '',
  onClick: '',
  children: '',
  disabled: false,
  color: 'primary',
  type: 'button'
};

export default Button;
