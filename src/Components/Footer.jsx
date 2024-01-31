import React from 'react';
import './Css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkedAlt, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTelegramPlane, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div>
          <br /><br />
        </div>

        <div className="box">
          <a href="##"><FontAwesomeIcon icon={faChevronCircleRight} /> Shop</a>
          <a href="#"><FontAwesomeIcon icon={faChevronCircleRight} /> ABOUT US </a>
          <a href="#"><FontAwesomeIcon icon={faChevronCircleRight} /> CONTACT US</a>
          <a href="#"><FontAwesomeIcon icon={faChevronCircleRight} /> DELIVERY POLICY</a>
          <a href="#"><FontAwesomeIcon icon={faChevronCircleRight} /> TERMS AND CONDITIONS </a>
          <a href="#"><FontAwesomeIcon icon={faChevronCircleRight} /> FAQ </a>
        </div>

        <div className="box-container-2">
        <div className="box3">
        <h3 style={{ color: 'yellow' }}>Quick links</h3>

          <div className="share">
            <p className="social-links">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>

              <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>

              <a href="#"><FontAwesomeIcon icon={faEnvelope} /></a>

              <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegramPlane} /></a>

              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>

              <a href="https://www.facebook.com/profile.php?" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>

              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            </p>
          </div>
        </div>

      </div>


        <div className="box2">
          <h3>contact info</h3>
          <p><a href="tel:+917218968990"><FontAwesomeIcon icon={faPhone} />+917218968990</a></p>
          <p><a href="mailto:pratikshadhobe18@gmail.com"><FontAwesomeIcon icon={faEnvelope} />pratikshadhobe18@gmail.com</a></p>
          <p><FontAwesomeIcon icon={faMapMarkedAlt} /> Pune, Maharashtra - 411001</p>
        </div>
      </div>



      <h1 className="credit">Online Watch Shopping System</h1>
    </section>
  );
};

export default Footer;