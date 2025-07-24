"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleWhatsAppClick = () => {
    const message = "Hi! I'd like to know more about your car rental services.";
    const phoneNumber = "919182868227";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fade-in mt-4">
      {/* Hero Section */}
      <section className="gradient-bg text-white ">
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4">Contact Us</h1>
            <p className="text-dark">
              Get in touch with us for any queries, bookings, or support. We're
              here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5">
              <div className="card">
                <div className="card-header">
                  <h4 className="mb-0">Send us a Message</h4>
                </div>
                <div className="card-body">
                  {submitted && (
                    <div className="alert alert-success" role="alert">
                      <strong>Thank you!</strong> Your message has been sent
                      successfully. We'll get back to you soon.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Full Name *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Email Address *</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Subject *</label>
                        <select
                          className="form-select"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="booking">Booking Inquiry</option>
                          <option value="support">Customer Support</option>
                          <option value="feedback">Feedback</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        placeholder="Tell us how we can help you..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} className="me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Contact Information</h5>

                  <div className="d-flex align-items-center mb-3">
                    <Phone size={20} className="text-primary me-3" />
                    <div>
                      <div className="fw-bold">Phone</div>
                      <a
                        href="tel:+919182868227"
                        className="text-decoration-none"
                      >
                        +91 9182868227
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <Mail size={20} className="text-primary me-3" />
                    <div>
                      <div className="fw-bold">Email</div>
                      <a
                        href="mailto:info@driveeasy.com"
                        className="text-decoration-none"
                      >
                        info@driveeasy.com
                      </a>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-3">
                    <MapPin size={20} className="text-primary me-3 mt-1" />
                    <div>
                      <div className="fw-bold">Address</div>
                      <div className="text-muted">
                        123 Main Street
                        <br />
                        City Center
                        <br />
                        Mumbai - 400001
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <Clock size={20} className="text-primary me-3" />
                    <div>
                      <div className="fw-bold">Business Hours</div>
                      <div className="text-muted">
                        Mon - Sun: 24/7
                        <br />
                        Customer Support Available
                      </div>
                    </div>
                  </div>

                  <button
                    className="btn btn-success w-100"
                    onClick={handleWhatsAppClick}
                  >
                    <MessageCircle size={16} className="me-2" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">Quick Response</h6>
                  <p className="card-text small text-muted">
                    For immediate assistance, call us or send a WhatsApp
                    message. We typically respond within 15 minutes during
                    business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-4">
            <h3>Find Us Here</h3>
            <p className="text-muted">
              Visit our office for car pickup and drop-off
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card">
                <div className="card-body p-0">
                  <div
                    className="bg-light d-flex align-items-center justify-content-center"
                    style={{ height: "400px" }}
                  >
                    <div className="text-center">
                      <MapPin size={48} className="text-muted mb-3" />
                      <h5>Interactive Map</h5>
                      <p className="text-muted">
                        123 Main Street, City Center
                        <br />
                        Mumbai - 400001
                      </p>
                      <button className="btn btn-outline-primary">
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h3>Frequently Asked Questions</h3>
            <p className="text-muted">Quick answers to common questions</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq1"
                    >
                      What documents do I need to rent a car?
                    </button>
                  </h2>
                  <div
                    id="faq1"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      You need a valid driving license, government-issued ID
                      proof (Aadhar/PAN/Passport), and a security deposit. All
                      documents should be original.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq2"
                    >
                      What is the minimum rental period?
                    </button>
                  </h2>
                  <div
                    id="faq2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      The minimum rental period is 24 hours. We offer flexible
                      pricing for longer durations with attractive discounts for
                      weekly and monthly rentals.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq3"
                    >
                      Is fuel included in the rental price?
                    </button>
                  </h2>
                  <div
                    id="faq3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      No, fuel is not included. You'll receive the car with a
                      certain fuel level and need to return it with the same
                      level. Any difference will be charged separately.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq4"
                    >
                      Do you provide 24/7 roadside assistance?
                    </button>
                  </h2>
                  <div
                    id="faq4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes, we provide 24/7 roadside assistance for all our
                      rental cars. In case of any breakdown or emergency, just
                      call our helpline number.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
