import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './index.css'; // Create this CSS file

const Footer = () => {
  return (
    <footer className="bashkohor-footer">
      <Container>
        <Row className="align-items-center">
          {/* Bashkohor Furniture Logo/Brand */}
          <Col md={4} className="text-center text-md-start mb-4 mb-md-0">
            <h3 className="bashkohor-logo">
              🏠 
            </h3>
            <p className="bashkohor-tagline">
              Mobilje me Shije të Veçantë
            </p>
          </Col>

          {/* Social Links */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="social-links">
              <a 
                href="https://instagram.com/bashkohormobilje" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a 
                href="https://facebook.com/bashkohormobilje" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link facebook"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
                <span>Facebook</span>
              </a>
            </div>
          </Col>

          {/* Contact Info */}
          <Col md={4} className="text-center text-md-end">
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> Tiranë, Shqipëri</p>
              <p><i className="fas fa-phone"></i> +355 69 123 4567</p>
              <p><i className="fas fa-envelope"></i> info@bashkohor.al</p>
            </div>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <hr className="footer-divider" />
        <Row>
          <Col className="text-center">
            <p className="copyright">
              © 2026 Bashkohor Mobilje. Të gjitha të drejtat e rezervuara.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
