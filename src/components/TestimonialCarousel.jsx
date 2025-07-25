"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import "./TestimonialCarousel.css"; // Custom CSS

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
    }, 10000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-5 bg-light font-manrope">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">What Our Customers Say</h2>
          <p className="text-muted lead">Real stories from happy DriveEasy users</p>
        </div>

        <div className="position-relative">
          <div className="row justify-content-center">
            {getVisibleTestimonials().map((testimonial) => (
              <div key={testimonial.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card border-0 shadow-lg h-100 hover-scale rounded-4">
                  <div className="card-body p-4">
                    <div className="mb-3 text-primary">
                      <Quote size={28} className="opacity-25" />
                    </div>

                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-warning me-1" fill="currentColor" />
                      ))}
                    </div>

                    <p className="text-muted fst-italic">"{testimonial.comment}"</p>

                    <div className="d-flex align-items-center mt-4">
                      <div
                        className="avatar text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted d-block">{testimonial.location}</small>
                        <small className="text-muted">{testimonial.date}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="carousel-nav-btn position-absolute top-50 start-0 translate-middle-y d-none d-lg-flex align-items-center justify-content-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="arrow-icon" size={24} />
          </button>

          <button
            onClick={nextTestimonial}
            className="carousel-nav-btn position-absolute top-50 end-0 translate-middle-y d-none d-lg-flex align-items-center justify-content-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="arrow-icon" size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="text-center mt-4">
          <div className="d-flex justify-content-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`btn btn-sm p-0 rounded-circle ${
                  index === currentIndex ? "bg-primary" : "bg-secondary opacity-25"
                }`}
                style={{
                  width: "10px",
                  height: "10px",
                  transition: "background-color 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
