import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Khizar</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.facebook.com/programmingwithKhiZi/?_rdc=2&_rdr"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://github.com/Khizar-Alii"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UC2WSbNU-tkJgPQsV7sQZnIg"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-youtube"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/khizarali123/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Khizar Ali. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
