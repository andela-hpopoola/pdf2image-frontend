import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';

const defaultOptions = {
  valid: 'is-valid',
  invalid: 'is-invalid'
};

export const getValidityClass = (formik, name, options = defaultOptions) => {
  const error = getIn(formik.errors, name);
  const touch = getIn(formik.touched, name);
  if (!!touch && !!error) {
    // mark as invalid
    return options.invalid;
  } else if (!!touch && !error) {
    // mark as valid
    return options.valid;
  }
  return; //not touched
};

export const FeedbackMessage = ({ formik, name, validMessage }) => {
  const options = { valid: 'valid-feedback', invalid: 'invalid-feedback' };
  const className = getValidityClass(formik, name, options);
  const message = getIn(formik.errors, name) || validMessage;

  return className && message ? (
    <div className={className}>{message}</div>
  ) : null;
};

FeedbackMessage.propTypes = {
  formik: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  validMessage: PropTypes.string
};

FeedbackMessage.defaultProps = {
  validMessage: ''
};
