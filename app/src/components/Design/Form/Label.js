import PropTypes from 'prop-types';

function Label({ htmlFor, children }) {
  return (
    <label className="form-label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}

Label.propTypes = { htmlFor: PropTypes.string, };
Label.defaultProps = { htmlFor: '' };

export default Label;
