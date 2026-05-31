import React from 'react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer>
      <div className="foot_pan1" onClick={scrollToTop}>
        <p>Back to top</p>
      </div>

      <div className="foot_pan2">
        <ul>
          <p>Get to Know Us</p>
          <a href="#">About Amazon</a>
          <a href="#">Careers</a>
          <a href="#">Press Releases</a>
          <a href="#">Amazon Science</a>
        </ul>
        <ul>
          <p>Connect with Us</p>
          <a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a>
          <a href="#"><i className="fa-brands fa-twitter"></i> Twitter</a>
          <a href="#"><i className="fa-brands fa-instagram"></i> Instagram</a>
        </ul>
        <ul>
          <p>Make Money with Us</p>
          <a href="#">Sell on Amazon</a>
          <a href="#">Sell under Amazon Accelerator</a>
          <a href="#">Protect and Build Your Brand</a>
          <a href="#">Amazon Global Selling</a>
          <a href="#">Become an Affiliate</a>
          <a href="#">Fulfilment by Amazon</a>
          <a href="#">Advertise Your Products</a>
        </ul>
        <ul>
          <p>Let Us Help You</p>
          <a href="#">Your Account</a>
          <a href="#">Returns Centre</a>
          <a href="#">100% Purchase Protection</a>
          <a href="#">Amazon App Download</a>
          <a href="#">Help</a>
        </ul>
      </div>

      <div className="foot_pan3">
        <div className="logo2"></div>
      </div>

      <div className="foot_pan4">
        <div className="links">
          <a href="#">Conditions of Use & Sale</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Interest-Based Ads</a>
        </div>
        <div className="copyright">
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
