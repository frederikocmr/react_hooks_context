import React from 'react';
import PropTypes from 'prop-types';


import Content from './components/content';
import Header from './components/header';

const AuthLayout = ({ children }) => {
  return (
    <div >
      <Header />
      {children}
    </div>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

AuthLayout.Content = Content;

export default AuthLayout;
