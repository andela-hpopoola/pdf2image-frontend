import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => {
  return (
    <div className="text-center">
      <h1 className="logo">
        PDF <span>CONVERTER</span>
      </h1>
      <p className="description">{children}</p>
    </div>
  );
};

const appDescription =
  'Instantly convert PDF documents to text or image format with this free PDF converter.';

Header.propTypes = {
  children: PropTypes.node
};

Header.defaultProps = {
  children: appDescription
};

export default Header;
