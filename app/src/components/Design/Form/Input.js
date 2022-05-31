import PropTypes from 'prop-types';

function Input({
  type = 'text',
  label,
  name,
  onChange,
  value,
  error,
  children,
  disabled,
  ...rest
}) {
  return (
    <>
      <input
        className={`form-control ${error ? 'is-invalid' : ''}`}
        type={type}
        name={name}
        disabled={disabled}
        value={value}
        onChange={onChange}
        {...rest}
      />
      {children}
      {error && <div className="invalid-feedback">{error}</div>}
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: 'text',
  label: '',
  value: '',
  disabled: 'false'

};

export default Input;
