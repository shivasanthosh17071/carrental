"use client";

import { useState, useEffect } from "react";
import { User, LogOut, Info, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import axios from "../api/axiosConfig";

const Account = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("details");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [userData, setUserData] = useState({
    _id: "",
    fullName: "",
    phone: "",
    joinDate: "",
  });

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
  });

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const customerData = localStorage.getItem("userData");
    if (customerData) {
      try {
        const user = JSON.parse(customerData);
        setIsLoggedIn(true);
        setUserData({
          _id: user._id,
          fullName: user.name || "",
          phone: user.mobile || "",
          joinDate: user.createdAt?.split("T")[0] || "",
        });
        setFormData({
          fullName: user.name || "",
          phone: user.mobile || "",
        });
      } catch (err) {
        console.error("Invalid token:", err);
      }
    }
  }, []);

  useEffect(() => {
    if (userData._id) fetchBookings();
  }, [userData._id]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(`/bookings/customer/${userData._id}`);
      setBookings(res.data || []);
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const handleTabChange = (tab) => setActiveTab(tab);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSaveChanges = async () => {
    try {
      const token = localStorage.getItem("userToken");

      const res = await axios.put(
        `/users/${userData._id}`,
        {
          fullName: formData.fullName,
          phone: formData.phone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const updated = {
        ...userData,
        fullName: res.data.name,
        phone: res.data.mobile,
      };

      setUserData(updated);

      localStorage.setItem(
        "userData",
        JSON.stringify({
          _id: res.data._id,
          name: res.data.name,
          mobile: res.data.mobile,
        })
      );

      alert("Profile updated successfully.");
    } catch (err) {
      console.error("Update error:", err);
      alert(err.response?.data?.message || "Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("customer-logged-in");
    localStorage.removeItem("userToken");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    navigate("/");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "warning";
      case "Confirmed":
        return "primary";
      case "Completed":
        return "success";
      case "Cancelled":
        return "danger";
      default:
        return "secondary";
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning text-center">
          Please login to access your account.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">
        Welcome, <span className="text-primary">{userData.fullName}</span>
      </h3>

      <ul className="nav nav-tabs justify-content-center mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "details" ? "active" : ""}`}
            onClick={() => handleTabChange("details")}
          >
            <Info size={16} className="me-1" />
            Account Details
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "update" ? "active" : ""}`}
            onClick={() => handleTabChange("update")}
          >
            <User size={16} className="me-1" />
            Update Profile
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "bookings" ? "active" : ""}`}
            onClick={() => handleTabChange("bookings")}
          >
            <ClipboardList size={16} className="me-1" />
            My Bookings
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "logout" ? "active" : ""}`}
            onClick={() => setShowLogoutModal(true)}
          >
            <LogOut size={16} className="me-1" />
            Sign Out
          </button>
        </li>
      </ul>

      <div className="card p-4 border rounded">
        {activeTab === "details" && (
          <div>
            <h5>Account Details</h5>
            <p><strong>ID:</strong> {userData._id}</p>
            <p><strong>Name:</strong> {userData.fullName}</p>
            <p><strong>Mobile:</strong> {userData.phone}</p>
            {/* <p><strong>Joined:</strong> {userData.joinDate}</p> */}
          </div>
        )}

        {activeTab === "update" && (
          <div>
            <h5>Update Profile</h5>
            <div className="mb-3">
              <label>Name</label>
              <input
                name="fullName"
                type="text"
                className="form-control"
                value={formData.fullName}
                onChange={handleFormChange}
              />
            </div>
            <div className="mb-3">
              <label>Phone</label>
              <input
                name="phone"
                type="text"
                className="form-control"
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </div>
        )}

        {activeTab === "bookings" && (
          <div>
            <h5>My Bookings</h5>
            {bookings.length === 0 ? (
              <p>No bookings found.</p>
            ) : (
              <ul className="list-group">
                {bookings.map((b) => (
                  <li key={b._id} className="list-group-item">
                    <strong>Car:</strong> {b.carName} <br />
                    <strong>From:</strong> {b.pickupDateTime} <br />
                    <strong>To:</strong> {b.returnDateTime} <br />
                    <strong>Status:</strong>{" "}
                    <span className={`badge bg-${getStatusColor(b.status)}`}>
                      {b.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Account;
