"use client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axiosConfig";
import { useAuth } from "../AuthContext";

const BookCar = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userToken, user } = useAuth();

  const [car, setCar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    customerId: "",
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    notes: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    returnTime: "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
    country: "India",
    dateOfBirth: "",
    driverLicenseNumber: "",
    dlIssuedState: "",
    purpose: "",
    destination: "",
    originalDocumentsSubmitted: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) navigate("/login");
  }, [userToken]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user && user._id) {
      setFormData((prev) => ({
        ...prev,
        customerId: user._id,
        customerName: user.name || "",
        customerPhone: user.mobile || "",
        customerEmail: user.email || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    if (!userToken) return;
    const fetchCar = async () => {
      try {
        const res = await axios.get(`/cars/${id}`, {
          headers: { Authorization: `Bearer ${userToken}` },
        });
        setCar(res.data);
      } catch (err) {
        console.error("Failed to load car:", err);
        alert("Failed to load car details.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCar();
  }, [id, userToken]);

  const calculateDays = () => {
    const start = new Date(`${formData.pickupDate}T${formData.pickupTime}`);
    const end = new Date(`${formData.returnDate}T${formData.returnTime}`);
    const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 1;
  };

  const calculateTotal = () => {
    return car?.price * calculateDays();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    return (
      formData.customerName &&
      formData.customerPhone &&
      formData.customerEmail &&
      formData.pickupDate &&
      formData.returnDate &&
      formData.pickupTime &&
      formData.returnTime &&
      formData.address &&
      formData.city &&
      formData.state &&
      formData.driverLicenseNumber &&
      formData.dlIssuedState &&
      formData.dateOfBirth &&
      formData.purpose &&
      formData.destination &&
      formData.originalDocumentsSubmitted
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return alert("Please fill all required fields.");

    setIsSubmitting(true);
    try {
      const bookingData = {
        ...formData,
        carId: car._id,
        carName: car.name,
        carNumber: car.registrationNumber,
        pickupDateTime: `${formData.pickupDate} ${formData.pickupTime}`,
        returnDateTime: `${formData.returnDate} ${formData.returnTime}`,
        totalDays: calculateDays(),
        totalAmount: calculateTotal(),
      };

      const res = await axios.post("/bookings/book", bookingData, {
        headers: { Authorization: `Bearer ${userToken}` },
      });

      navigate("/thank-you", {
        state: {
          bookingId: res.data._id,
          carName: res.data.carName,
          totalAmount: res.data.totalAmount,
        },
      });
    } catch (err) {
      console.error("Booking failed:", err);
      alert("Booking failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading)
    return <div className="text-center mt-5">Loading car details...</div>;
  if (!car)
    return <div className="text-danger text-center mt-5">Car not found.</div>;

  return (
    <form className="container p-4 border rounded bg-light mt-3 mb-5" onSubmit={handleSubmit}>
      <h3 className="mb-3 text-center">Book - {car.name}</h3>

      {/* Customer details */}
      <input
        name="customerName"
        className="form-control mb-2"
        value={formData.customerName}
        readOnly
      />
      <input
        type="email"
        name="customerEmail"
        className="form-control mb-2"
        placeholder="Email Address"
        value={formData.customerEmail}
        onChange={handleChange}
      />
      <input
        name="customerPhone"
        className="form-control mb-2"
        value={formData.customerPhone}
        readOnly
      />

      {/* Address */}
      <textarea
        name="address"
        className="form-control mb-2"
        placeholder="Full Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <input
        name="city"
        className="form-control mb-2"
        placeholder="City"
        value={formData.city}
        onChange={handleChange}
        required
      />
      <input
        name="state"
        className="form-control mb-2"
        placeholder="State"
        value={formData.state}
        onChange={handleChange}
        required
      />
      <input
        name="pinCode"
        className="form-control mb-2"
        placeholder="PIN Code"
        value={formData.pinCode}
        onChange={handleChange}
      />
      <input
        name="country"
        className="form-control mb-2"
        placeholder="Country"
        value={formData.country}
        onChange={handleChange}
      />

      {/* License */}
      <input
        name="dateOfBirth"
        type="date"
        className="form-control mb-2"
        value={formData.dateOfBirth}
        onChange={handleChange}
        required
      />
      <input
        name="driverLicenseNumber"
        className="form-control mb-2"
        placeholder="Driver License Number"
        value={formData.driverLicenseNumber}
        onChange={handleChange}
        required
      />
      <input
        name="dlIssuedState"
        className="form-control mb-2"
        placeholder="DL Issued State"
        value={formData.dlIssuedState}
        onChange={handleChange}
        required
      />

      {/* Dates */}
      <div className="row">
        <div className="col-md-6 mb-2">
          <label>Pickup Date</label>
          <input
            type="date"
            name="pickupDate"
            className="form-control"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <label>Pickup Time</label>
          <input
            type="time"
            name="pickupTime"
            className="form-control"
            value={formData.pickupTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <label>Return Date</label>
          <input
            type="date"
            name="returnDate"
            className="form-control"
            value={formData.returnDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6 mb-2">
          <label>Return Time</label>
          <input
            type="time"
            name="returnTime"
            className="form-control"
            value={formData.returnTime}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      {/* Purpose */}
      <input
        name="purpose"
        className="form-control mb-2"
        placeholder="Purpose of Renting"
        value={formData.purpose}
        onChange={handleChange}
        required
      />
      <input
        name="destination"
        className="form-control mb-2"
        placeholder="Destination"
        value={formData.destination}
        onChange={handleChange}
        required
      />
      <input
        name="originalDocumentsSubmitted"
        className="form-control mb-2"
        placeholder="Documents Submitted (e.g., Aadhaar + DL + RC)"
        value={formData.originalDocumentsSubmitted}
        onChange={handleChange}
        required
      />

      <textarea
        name="notes"
        placeholder="Additional Notes"
        className="form-control mb-2"
        value={formData.notes}
        onChange={handleChange}
      ></textarea>

      {/* Price summary */}
      <div className="alert alert-info mt-3 small">
        <strong>Rental Summary:</strong><br />
        Per Day Rate: ₹{car?.price} <br />
        Total Days: {calculateDays()} <br />
        <strong>Total Amount: ₹{calculateTotal()}</strong>
      </div>

      <button
        className="btn btn-primary mt-3 w-100"
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Booking..." : "Book Now"}
      </button>
    </form>
  );
};

export default BookCar;
