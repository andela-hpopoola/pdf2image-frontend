import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <div className="text-center">
      <h1 className="logo">
        PDF <span>CONVERTER</span>
      </h1>
      <p className="description">{text}</p>
    </div>
  );
};

const appDescription =
  'Instantly convert PDF documents to text or image format with this free PDF converter.';

Header.propTypes = {
  text: PropTypes.string
};

Header.defaultProps = {
  text: appDescription
};

export default Header;
