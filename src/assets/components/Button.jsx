import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, loading, className, children }) => (
  <button type={type} className={`btn ${className}`} onClick={onClick}>
    {loading && (
      <span
        className="spinner-border spinner-border-sm mr-2"
        role="status"
        aria-hidden="true"
      />
    )}
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  type: 'submit',
  loading: false,
  className: ''
};

export default Button;
