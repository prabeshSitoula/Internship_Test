import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img
              src="/icons/logo.png"
              alt="Kaffe Codes Logo"
              className="logo-img"
            ></img>
          </div>
          <p>
            Kaffe Codes is the platform to run a successful online business in
            Nepal.
          </p>
          <p>Bishalnagar, Kathmandu</p>
          <p>+977 9812345678</p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>
              <a href="#">Bakery</a>
            </li>
            <li>
              <a href="#">Coffee</a>
            </li>
            <li>
              <a href="#">Tea</a>
            </li>
            <li>
              <a href="#">Utensils</a>
            </li>
            <li>
              <a href="#">Machineries</a>
            </li>
            <li>
              <a href="#">Cakes</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Working Hours</h4>
          <p>Monday - Friday</p>
          <p>9:00 AM - 6:00 PM</p>
          <div className="footer-newsletter">
            <p>Let’s Join To Our Newsletters</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 DigitalGuru. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span> · </span>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
