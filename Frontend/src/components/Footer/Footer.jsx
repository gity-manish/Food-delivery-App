import React from "react";
import "./Footer.css";
import { assets } from '../../assets/assets/frontend_assets/assets'; // Ensure this path is correct

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" />
          <p>Delighting your taste buds with fresh, authentic meals from your favorite local restaurants. Fast delivery, easy ordering, and the flavors of home—served hot and fresh.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+977-9876543210</li>
            <li>contact@khanakhajana.com</li>
          </ul>
        </div>
      </div>
      <hr /> 
      <p className="footer-copyright">Copyright 2025 © KhanaKhajana.com - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;