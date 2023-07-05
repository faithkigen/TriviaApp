import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
   <div style={footerOrientation}>
     <footer style={footerStyle}>
      <div style={socialMediaStyle}>
        <a href="https://www.facebook.com"><FaFacebook size={20} /></a>
        <a href="https://www.twitter.com"><FaTwitter size={20} /></a>
        <a href="https://www.instagram.com"><FaInstagram size={20} /></a>
      </div>
      <div style={copyright}>
        © 2023 Trivia. All rights reserved.
      </div>
    </footer>
   </div>
  );
};

const footerOrientation ={
  position: 'left',
  bottom: '0rem',

}

const footerStyle = {
  display: 'flex',
  position: 'relative',
  alignSelf: 'left',
  alignItems: 'left',
  backgroundColor: 'black',
  color: 'orange',
  padding: '2rem',
  marginTop: '2rem',
  paddingBottom: '2rem',
};

const socialMediaStyle = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'left',
};

const copyright = {
  fontSize: '0.8rem',
  padding: '5px'
};

export default Footer;