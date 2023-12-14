import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../Style/Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          {/* Add more social media icons as needed */}
        </div>
        <div className="footer-details">
          <div>
            <h4>Company Address</h4>
            <p>RAMAMURTHY NAGAR,</p>
            <p>BANGALORE,</p>
            <p>KARNATAKA-560016</p>
            <p>INDIA</p>
          </div>
          <div>
            <h4>Contact Information</h4>
            <p>Email: info@company.com</p>
            <p>Phone: +91 7899414941</p>
          </div>
          {/* Add more details as needed */}
        </div>
        <p>© {new Date().getFullYear()} Our Company Pvt. Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
