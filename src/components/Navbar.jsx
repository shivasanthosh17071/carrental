"use client";

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Car, Menu, X, User, LogOut, Sparkles } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [token, setToken] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("userToken");
    setToken(storedToken);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    setIsOpen(false);
    setShowLogoutModal(false);
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="d-flex align-items-center">
              <div className="position-relative me-2">
                <Car size={32} className="text-primary" />
                <Sparkles
                  size={16}
                  className="position-absolute top-0 end-0 text-secondary"
                />
              </div>
              <span className="fw-bold">DriveEasy</span>
            </div>
          </Link>

          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: "none" }}
          >
            <div className="position-relative">
              {isOpen ? (
                <X size={24} className="text-primary" />
              ) : (
                <Menu size={24} className="text-primary" />
              )}
            </div>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/") ? "active" : ""}`}
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/cars") ? "active" : ""}`}
                  to="/cars"
                  onClick={() => setIsOpen(false)}
                >
                  Cars
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/about") ? "active" : ""}`}
                  to="/about"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/offers") ? "active" : ""}`}
                  to="/offers"
                  onClick={() => setIsOpen(false)}
                >
                  Offers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${isActive("/contact") ? "active" : ""}`}
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>

              {token ? (
                <>
                  <li className="nav-item ms-lg-3">
                    <Link
                      className={`nav-link d-flex align-items-center ${
                        isActive("/admin/dashboard") ? "active" : ""
                      }`}
                      to="/admin/dashboard"
                      onClick={() => setIsOpen(false)}
                    >
                      <User size={16} className="me-1" />
                      Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link btn btn-link text-decoration-none d-flex align-items-center"
                      onClick={() => setShowLogoutModal(true)}
                      style={{
                        border: "none",
                        background: "none",
                        color: "inherit",
                      }}
                    >
                      <LogOut size={16} className="me-1" />
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item ms-lg-3">
                  <Link
                    className="btn btn-primary btn-sm d-flex align-items-center"
                    to="/login"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={16} className="me-1" />
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Logout</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogoutModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to logout?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowLogoutModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
