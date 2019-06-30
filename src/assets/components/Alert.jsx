import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`} role="alert">
      {message}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string.isRequired
};

Alert.defaultProps = {
  type: 'danger'
};

export default Alert;
