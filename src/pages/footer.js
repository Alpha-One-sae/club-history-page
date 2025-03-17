import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';
import logo from '../images/saew.png';

const openForm = () => {
  console.log("Opening contact form");
};

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-left'>
            <div className='footer-logo'>
              <img src={logo} alt="SAE UIET PU Logo" className="blue-logo" />
              <div className='footer-title'>
                <h2>SAE UIET PU</h2>
                <p className='sanskrit-text'>सर्वस्य लोचन शास्त्रं</p>
              </div>
            </div>
            
            <div className='footer-social'>
              <p>Connect with Us</p>
              <div className='social-icons'>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>
          
          
          <div className='footer-right'>
            <h3>Quick Links</h3>
            <ul className='quick-links'>
              <li><Link to='/'>Home</Link></li>
              {/* <li><Link to='/gallery'>Gallery</Link></li> */}
              <li><Link to='/events'>Events</Link></li>
              {/* <li><Link to='/sponsor'>Sponsor</Link></li> */}
              <li><Link to='/projects'>Projects</Link></li>
              <li><Link to='#' onClick={openForm}>Contact</Link></li>
            </ul>
          </div>
        </div>
        
        
        <div className='footer-copyright'>
          <p className="copyright-text">&copy; 2025 SAE UIET PU. All rights reserved.</p>
        </div>
        
      </div>
    </>
  );
};

export default Footer;