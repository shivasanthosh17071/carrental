import { Link } from "react-router-dom";
import {
  Car,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Heart,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-4">
              <div className="position-relative me-3">
                <Car size={32} className="text-primary" />
                <Star
                  size={16}
                  className="position-absolute top-0 end-0 text-warning"
                  fill="currentColor"
                />
              </div>
              <h4 className="mb-0 text-gradient">DriveEasy</h4>
            </div>
            <p
              className="text-light opacity-75 mb-4"
              style={{ lineHeight: "1.7" }}
            >
              Your trusted partner for premium self-drive car rentals.
              Experience the freedom of driving with our exceptional fleet of
              well-maintained vehicles and world-class service.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-glass rounded-circle p-2">
                <Facebook size={20} />
              </a>
              <a href="#" className="btn btn-glass rounded-circle p-2">
                <Twitter size={20} />
              </a>
              <a href="#" className="btn btn-glass rounded-circle p-2">
                <Instagram size={20} />
              </a>
              <a href="#" className="btn btn-glass rounded-circle p-2">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="text-light mb-4 fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <Link
                  to="/"
                  className="text-light opacity-75 text-decoration-none d-flex align-items-center"
                >
                  <span className="me-2">→</span>
                  Home
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/cars"
                  className="text-light opacity-75 text-decoration-none d-flex align-items-center"
                >
                  <span className="me-2">→</span>
                  Cars
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/about"
                  className="text-light opacity-75 text-decoration-none d-flex align-items-center"
                >
                  <span className="me-2">→</span>
                  About Us
                </Link>
              </li>
              <li className="mb-3">
                <Link
                  to="/offers"
                  className="text-light opacity-75 text-decoration-none d-flex align-items-center"
                >
                  <span className="me-2">→</span>
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-light mb-4 fw-bold">Premium Services</h6>
            <ul className="list-unstyled">
              <li className="mb-3">
                <div className="d-flex align-items-center text-light opacity-75">
                  <Star
                    size={16}
                    className="text-warning me-2"
                    fill="currentColor"
                  />
                  Premium Self Drive Cars
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-center text-light opacity-75">
                  <Star
                    size={16}
                    className="text-warning me-2"
                    fill="currentColor"
                  />
                  24/7 Premium Support
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-center text-light opacity-75">
                  <Star
                    size={16}
                    className="text-warning me-2"
                    fill="currentColor"
                  />
                  Comprehensive Insurance
                </div>
              </li>
              <li className="mb-3">
                <div className="d-flex align-items-center text-light opacity-75">
                  <Star
                    size={16}
                    className="text-warning me-2"
                    fill="currentColor"
                  />
                  Doorstep Delivery
                </div>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="text-light mb-4 fw-bold">Contact Information</h6>
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle p-2 me-3">
                <Phone size={16} />
              </div>
              <div>
                <div className="text-light fw-medium">Call Us</div>
                <a
                  href="tel:+919182868227"
                  className="text-light opacity-75 text-decoration-none"
                >
                  +91 9182868227
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <div className="rounded-circle  p-2 me-3">
                <Mail size={16} />
              </div>
              <div>
                <div className="text-light fw-medium">Email Us</div>
                <a
                  href="mailto:info@driveeasy.com"
                  className="text-light opacity-75 text-decoration-none"
                >
                  info@driveeasy.com
                </a>
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="rounded-circle bg-accent p-2 me-3 mt-1">
                <MapPin size={16} />
              </div>
              <div>
                <div className="text-light fw-medium">Visit Us</div>
                <div className="text-light opacity-75">
                  123 Main Street
                  <br />
                  City Center
                  <br />
                  Mumbai - 400001
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-light opacity-75 mb-0 d-flex align-items-center">
              © 2024 DriveEasy. Made with
              <Heart
                size={16}
                className="text-danger mx-2"
                fill="currentColor"
              />
              for premium driving experiences.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex flex-wrap justify-content-md-end gap-3">
              <Link
                to="/terms"
                className="text-light opacity-75 text-decoration-none"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy"
                className="text-light opacity-75 text-decoration-none"
              >
                Privacy Policy
              </Link>
              <Link
                to="/support"
                className="text-light opacity-75 text-decoration-none"
              >
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
