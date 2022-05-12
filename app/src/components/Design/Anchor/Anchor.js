import React from 'react';
import PropTypes from 'prop-types';
import './Anchor.css';

function Anchor(
  {
    children,
    href,
    color = 'primary',
  }
) {
  return (
    <a
      href={href}
      className={`a a-${color}`}
    >
      {children}
    </a>
  );
}

Anchor.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
};

Anchor.defaultProps = {

  href: '/',
  children: '',
  color: 'primary',
};
export default Anchor;
