"use client";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Car, Save } from "lucide-react";

import axios from "../../api/axiosConfig";
import { useAuth } from "../../AuthContext";
const AddCar = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    type: "",
    fuel: "",
    seats: "",
    transmission: "",
    price: "",
    description: "",
    features: "",
    images: ["", "", ""],
    featured: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { token } = useAuth();

  console.log(token);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (index, value) => {
    const newImages = [...formData.images];
    newImages[index] = value;
    setFormData((prev) => ({ ...prev, images: newImages }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Car name is required";
    if (!formData.brand.trim()) newErrors.brand = "Brand is required";
    if (!formData.type.trim()) newErrors.type = "Car type is required";
    if (!formData.fuel.trim()) newErrors.fuel = "Fuel type is required";
    if (!formData.seats) newErrors.seats = "Number of seats is required";
    if (!formData.transmission.trim())
      newErrors.transmission = "Transmission type is required";
    if (!formData.price) newErrors.price = "Price is required";
    if (!formData.description.trim())
      newErrors.description = "Description is required";

    // Validate price
    if (
      formData.price &&
      (isNaN(formData.price) || Number.parseFloat(formData.price) <= 0)
    ) {
      newErrors.price = "Please enter a valid price";
    }

    // Validate seats
    if (
      formData.seats &&
      (isNaN(formData.seats) || Number.parseInt(formData.seats) <= 0)
    ) {
      newErrors.seats = "Please enter a valid number of seats";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const carData = {
        ...formData,
        price: Number.parseFloat(formData.price),
        seats: Number.parseInt(formData.seats),
        features: formData.features
          .split(",")
          .map((f) => f.trim())
          .filter((f) => f),
        images: formData.images.filter((img) => img.trim()),
      };

      const res = await axios.post("/cars/add", carData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.status === 201 || res.status === 200) {
        navigate("/admin/dashboard");
      } else {
        alert("Unexpected response from server.");
      }
    } catch (error) {
      console.error("Failed to add car:", error);
      alert(
        error?.response?.data?.message ||
          "Failed to add car. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-4 fade-in">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <Link
            to="/admin/dashboard"
            className="btn btn-outline-secondary mb-2"
          >
            <ArrowLeft size={16} className="me-2" />
            Back to Dashboard
          </Link>
          <h2>Add New Car</h2>
          <p className="text-muted mb-0">Add a new vehicle to your fleet</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Car Information</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Basic Information */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Car Name *</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Toyota Camry"
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Brand *</label>
                    <select
                      className={`form-select ${
                        errors.brand ? "is-invalid" : ""
                      }`}
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Brand</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>
                      <option value="Maruti">Maruti</option>
                      <option value="Hyundai">Hyundai</option>
                      <option value="Tata">Tata</option>
                      <option value="Mahindra">Mahindra</option>
                      <option value="Ford">Ford</option>
                      <option value="Volkswagen">Volkswagen</option>
                    </select>
                    {errors.brand && (
                      <div className="invalid-feedback">{errors.brand}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label">Car Type *</label>
                    <select
                      className={`form-select ${
                        errors.type ? "is-invalid" : ""
                      }`}
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Type</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="MUV">MUV</option>
                      <option value="Luxury">Luxury</option>
                    </select>
                    {errors.type && (
                      <div className="invalid-feedback">{errors.type}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Fuel Type *</label>
                    <select
                      className={`form-select ${
                        errors.fuel ? "is-invalid" : ""
                      }`}
                      name="fuel"
                      value={formData.fuel}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Fuel</option>
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="CNG">CNG</option>
                    </select>
                    {errors.fuel && (
                      <div className="invalid-feedback">{errors.fuel}</div>
                    )}
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">Transmission *</label>
                    <select
                      className={`form-select ${
                        errors.transmission ? "is-invalid" : ""
                      }`}
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Transmission</option>
                      <option value="Manual">Manual</option>
                      <option value="Automatic">Automatic</option>
                    </select>
                    {errors.transmission && (
                      <div className="invalid-feedback">
                        {errors.transmission}
                      </div>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label">Number of Seats *</label>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.seats ? "is-invalid" : ""
                      }`}
                      name="seats"
                      value={formData.seats}
                      onChange={handleInputChange}
                      min="2"
                      max="10"
                    />
                    {errors.seats && (
                      <div className="invalid-feedback">{errors.seats}</div>
                    )}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Price per Day (₹) *</label>
                    <input
                      type="number"
                      className={`form-control ${
                        errors.price ? "is-invalid" : ""
                      }`}
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      min="0"
                      step="100"
                    />
                    {errors.price && (
                      <div className="invalid-feedback">{errors.price}</div>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-3">
                  <label className="form-label">Description *</label>
                  <textarea
                    className={`form-control ${
                      errors.description ? "is-invalid" : ""
                    }`}
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Describe the car's features and benefits..."
                  ></textarea>
                  {errors.description && (
                    <div className="invalid-feedback">{errors.description}</div>
                  )}
                </div>

                {/* Features */}
                <div className="mb-3">
                  <label className="form-label">
                    Features (comma-separated)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="features"
                    value={formData.features}
                    onChange={handleInputChange}
                    placeholder="e.g., Air Conditioning, Power Steering, ABS, Airbags"
                  />
                  <small className="text-muted">
                    Separate features with commas
                  </small>
                </div>

                {/* Images */}
                <div className="mb-3">
                  <label className="form-label">Car Images (URLs)</label>
                  {formData.images.map((image, index) => (
                    <div key={index} className="mb-2">
                      <input
                        type="url"
                        className="form-control"
                        placeholder={`Image ${index + 1} URL`}
                        value={image}
                        onChange={(e) =>
                          handleImageChange(index, e.target.value)
                        }
                      />
                    </div>
                  ))}
                  <small className="text-muted">
                    Add up to 3 image URLs for the car
                  </small>
                </div>

                {/* Featured */}
                <div className="mb-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="featured"
                      id="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="featured">
                      Mark as Featured Car
                    </label>
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2"></span>
                        Adding Car...
                      </>
                    ) : (
                      <>
                        <Save size={16} className="me-2" />
                        Add Car
                      </>
                    )}
                  </button>
                  <Link
                    to="/admin/dashboard"
                    className="btn btn-outline-secondary"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h6 className="mb-0">Preview</h6>
            </div>
            <div className="card-body">
              <div className="text-center mb-3">
                <Car size={48} className="text-muted" />
              </div>
              <h6>{formData.name || "Car Name"}</h6>
              <p className="text-muted small">
                {formData.brand} • {formData.type}
              </p>
              <div className="d-flex justify-content-between mb-2">
                <span>Price:</span>
                <span className="text-primary">
                  ₹{formData.price || "0"}/day
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Seats:</span>
                <span>{formData.seats || "0"}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Fuel:</span>
                <span>{formData.fuel || "N/A"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Transmission:</span>
                <span>{formData.transmission || "N/A"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
