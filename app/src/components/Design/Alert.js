import PropTypes from 'prop-types';

function Alert({ children, color = 'primary' }) {
  return (
    <div className={`alert alert-${color}`} role="alert">
      {children}
    </div>
  );
}

Alert.propTypes = { color: PropTypes.oneOf(['primary', 'secondary', 'danger']), };
Alert.defaultProps = { color: 'primary' };

export default Alert;
