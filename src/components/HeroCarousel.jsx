import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./main.css";

const slides = [
  {
    id: 1,
    title: "Drive Your Dreams",
    subtitle: "Premium Self-Drive Experience",
    description:
      "Freedom of the road starts here. Explore premium cars for your next journey.",
    image: "https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg",
    cta: "Explore Cars",
    ctaLink: "/cars",
    features: ["Premium Fleet", "24/7 Support", "Best Prices"],
  },
  {
    id: 2,
    title: "Weekend Adventures",
    subtitle: "Special Weekend Offers",
    description:
      "Book this weekend and enjoy up to 25% off across all locations.",
    image:
      "https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg",
    cta: "View Offers",
    ctaLink: "/offers",
    features: ["25% Off", "Weekend Special", "All Locations"],
  },
  {
    id: 3,
    title: "Business Travel",
    subtitle: "Corporate Excellence",
    description:
      "Reliable corporate rides with premium support and pricing plans.",
    image:
      "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg",
    cta: "Contact Us",
    ctaLink: "/contact",
    features: ["Corporate Rates", "Professional Service", "Flexible Booking"],
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 50000); // Reduced for better UX
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.title} className="bg" />

          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h5 className="text-secondary">{slide.subtitle}</h5>
              <h1 className="text-white">{slide.title}</h1>
              <p>{slide.description}</p>

              <ul className="hero-feature-list">
                {slide.features.map((feature, i) => (
                  <li key={i} className="hero-feature-item">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="hero-buttons">
                <Link to={slide.ctaLink} className="hero-btn-primary">
                  {slide.cta} <ArrowRight size={18} />
                </Link>
                <button className="hero-btn-secondary">
                  <Play size={18} /> Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button className="hero-nav-arrow left" onClick={prevSlide}>
        <ChevronLeft size={24} />
      </button>
      <button className="hero-nav-arrow right" onClick={nextSlide}>
        <ChevronRight size={24} />
      </button>

      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
