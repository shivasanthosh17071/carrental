"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      comment:
        "Excellent service! The car was clean and well-maintained. The booking process was very smooth and the staff was very helpful. I will definitely use DriveEasy again for my future trips.",
      avatar: "RK",
      date: "2 weeks ago",
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Delhi",
      rating: 5,
      comment:
        "Great experience with DriveEasy. Affordable prices and friendly staff. The car was delivered on time and in perfect condition. Highly recommended for anyone looking for reliable car rentals!",
      avatar: "PS",
      date: "1 month ago",
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Bangalore",
      rating: 4,
      comment:
        "Good variety of cars available. The pickup and drop process was hassle-free. Customer support was responsive and helpful throughout the rental period.",
      avatar: "AP",
      date: "3 weeks ago",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Hyderabad",
      rating: 5,
      comment:
        "Amazing service! The car was spotless and fuel-efficient. The online booking system is user-friendly and the pricing is very competitive. Will definitely recommend to friends and family.",
      avatar: "SR",
      date: "1 week ago",
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Pune",
      rating: 5,
      comment:
        "Professional service from start to finish. The car was exactly as described and the rental process was transparent with no hidden charges. Great value for money!",
      avatar: "VS",
      date: "2 months ago",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">What Our Customers Say</h2>
          <p className="lead text-muted">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="position-relative">
          <div className="row">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={testimonial.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card testimonial-card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="position-absolute top-0 start-0 m-3">
                      <Quote size={24} className="text-primary opacity-25" />
                    </div>

                    <div className="d-flex mb-3 mt-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-warning me-1"
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <p className="mb-4 text-muted">"{testimonial.comment}"</p>

                    <div className="d-flex align-items-center">
                      <div
                        className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          fontSize: "18px",
                          fontWeight: "bold",
                        }}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">
                          {testimonial.location}
                        </small>
                        <div>
                          <small className="text-muted">
                            {testimonial.date}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows */}
          <button
            className="btn btn-primary position-absolute top-50 start-0 translate-middle-y ms-n3 rounded-circle d-none d-lg-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px", zIndex: 10 }}
            onClick={prevTestimonial}
          ></button>{" "}
          <ChevronLeft size={20} style={{ color: "#fff" }} />
          <button
            className="btn btn-primary position-absolute top-50 end-0 translate-middle-y me-n3 rounded-circle d-none d-lg-flex align-items-center justify-content-center"
            style={{ width: "50px", height: "50px", zIndex: 10 }}
            onClick={nextTestimonial}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="text-center mt-4">
          <div className="d-flex justify-content-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`btn btn-sm rounded-circle ${
                  index === currentIndex
                    ? "btn-primary"
                    : "btn-outline-secondary"
                }`}
                style={{ width: "12px", height: "12px" }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
