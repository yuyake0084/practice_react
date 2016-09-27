import React, { Component } from 'react';

const Footer = ({ name }) => {
  return (
    <footer className="footer__container">
      <p className="footer__txt">Copyright © 2013-2016 {name} All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;