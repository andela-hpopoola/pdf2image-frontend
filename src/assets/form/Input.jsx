import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import { connect } from 'formik';
import { getValidityClass, FeedbackMessage } from 'assets/form/helper';

const Input = ({
  formGroupLabel,
  inputClassName,
  name,
  placeholder,
  type,
  formik,
  isValidMessage
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{formGroupLabel} </label>
      <Field
        autoComplete={name}
        className={`${getValidityClass(formik, name)} ${inputClassName}`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
      <FeedbackMessage
        formik={formik}
        name={name}
        validMessage={isValidMessage}
      />
    </div>
  );
};

Input.defaultProps = {
  formGroupLabel: null,
  inputClassName: 'form-control',
  name: null,
  placeholder: null,
  type: null,
  isValidMessage: ''
};

Input.propTypes = {
  formGroupLabel: PropTypes.string,
  inputClassName: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  isValidMessage: PropTypes.string
};

export default connect(Input);
