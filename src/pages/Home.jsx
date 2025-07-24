"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Car,
  Shield,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Phone,
  MessageCircle,
  MapPin,
  Star,
  Zap,
  Users,
  Globe,
  Gift,
  Sparkles,
  CreditCard,
  Headphones,
  Navigation,
  Heart,
  ThumbsUp,
  Target,
  Compass,
} from "lucide-react";
import { useCarContext } from "../context/CarContext";
import HeroCarousel from "../components/HeroCarousel";
import FeaturedCarsCarousel from "../components/FeaturedCarsCarousel";
import TestimonialCarousel from "../components/TestimonialCarousel";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const { getFeaturedCars, loading } = useCarContext();
  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    setFeaturedCars(getFeaturedCars());
  }, []);

  const services = [
    {
      icon: <Shield size={32} className="text-primary" />,
      title: "Complete Insurance",
      description:
        "Full coverage protection with zero deductible for worry-free driving experience.",
      features: [
        "Zero Liability",
        "Comprehensive Coverage",
        "24/7 Claims Support",
      ],
      color: "primary",
    },
    {
      icon: <Clock size={32} className="text-secondary" />,
      title: "Instant Booking",
      description:
        "Book your perfect car in under 2 minutes with our smart booking system.",
      features: ["2-Minute Booking", "Instant Confirmation", "Flexible Timing"],
      color: "secondary",
    },
    {
      icon: <Headphones size={32} className="text-accent" />,
      title: "Premium Support",
      description:
        "Dedicated customer success team available round the clock for assistance.",
      features: ["24/7 Available", "Expert Assistance", "Multilingual Support"],
      color: "accent",
    },
    {
      icon: <Navigation size={32} className="text-info" />,
      title: "GPS Navigation",
      description:
        "Advanced GPS systems with real-time traffic updates and route optimization.",
      features: ["Real-time Traffic", "Voice Navigation", "Offline Maps"],
      color: "info",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Select Your Ride",
      description:
        "Choose from our premium collection of vehicles that suit your style and needs.",
      icon: <Car size={24} />,
      color: "primary",
      image: "/placeholder.svg?height=200&width=300&text=Select+Car",
    },
    {
      step: "2",
      title: "Book Instantly",
      description:
        "Complete your reservation with our secure, lightning-fast booking process.",
      icon: <CreditCard size={24} />,
      color: "secondary",
      image: "/placeholder.svg?height=200&width=300&text=Book+Now",
    },
    {
      step: "3",
      title: "Hit the Road",
      description:
        "Pick up your car and start your adventure with complete freedom and flexibility.",
      icon: <Navigation size={24} />,
      color: "accent",
      image: "/placeholder.svg?height=200&width=300&text=Drive+Away",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Target size={28} className="text-primary" />,
      title: "Precision Service",
      description:
        "Every detail matters. From vehicle maintenance to customer service, we deliver excellence.",
      stats: "99.8% Satisfaction",
    },
    {
      icon: <Heart size={28} className="text-danger" />,
      title: "Customer First",
      description:
        "Your experience is our priority. We go above and beyond to exceed expectations.",
      stats: "50K+ Happy Customers",
    },
    {
      icon: <ThumbsUp size={28} className="text-success" />,
      title: "Trusted Brand",
      description:
        "5 years of excellence in self-drive rentals with industry-leading safety standards.",
      stats: "5+ Years Experience",
    },
    {
      icon: <Compass size={28} className="text-warning" />,
      title: "Adventure Ready",
      description:
        "Whether it's business or leisure, our vehicles are equipped for every journey.",
      stats: "All Terrain Ready",
    },
  ];

  const specialOffers = [
    {
      title: "Weekend Warrior",
      subtitle: "Perfect for Short Getaways",
      discount: "30%",
      originalPrice: "₹2,000",
      discountedPrice: "₹1,400",
      description: "Ideal for weekend trips and city exploration",
      features: ["Free GPS", "Unlimited KM", "24/7 Support"],
      color: "primary",
      gradient: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      badge: "Most Popular",
    },
    {
      title: "Business Elite",
      subtitle: "Professional Travel Solution",
      discount: "25%",
      originalPrice: "₹3,500",
      discountedPrice: "₹2,625",
      description: "Premium vehicles for corporate needs",
      features: ["Chauffeur Option", "Airport Pickup", "Corporate Billing"],
      color: "secondary",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)",
      badge: "Premium",
    },
    {
      title: "Long Journey",
      subtitle: "Extended Travel Package",
      discount: "40%",
      originalPrice: "₹5,000",
      discountedPrice: "₹3,000",
      description: "Best value for extended trips and tours",
      features: ["Weekly Rates", "Maintenance Included", "Roadside Assistance"],
      color: "accent",
      gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
      badge: "Best Value",
    },
  ];

  if (loading) {
    return <LoadingSpinner text="Loading premium experience..." />;
  }

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroCarousel />

      {/* Quick Stats Banner */}
      <section
        className="py-4"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-6 col-md-3 mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <Car size={24} className="me-2" />
                <div>
                  <div className="h5 mb-0 fw-bold">50+</div>
                  <small className="opacity-75">Premium Cars</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <Users size={24} className="me-2" />
                <div>
                  <div className="h5 mb-0 fw-bold">10K+</div>
                  <small className="opacity-75">Happy Customers</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-3 mb-md-0">
              <div className="d-flex align-items-center justify-content-center">
                <MapPin size={24} className="me-2" />
                <div>
                  <div className="h5 mb-0 fw-bold">25+</div>
                  <small className="opacity-75">Cities Covered</small>
                </div>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="d-flex align-items-center justify-content-center">
                <Star size={24} className="me-2" fill="currentColor" />
                <div>
                  <div className="h5 mb-0 fw-bold">4.9</div>
                  <small className="opacity-75">Average Rating</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-5" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="d-flex align-items-center mb-3">
                <Sparkles size={24} className="text-primary me-2" />
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                  Featured Collection
                </span>
              </div>
              <h2 className="display-5 fw-bold text-gradient mb-3">
                Drive Premium, Pay Smart
              </h2>
              <p className="lead text-muted">
                Discover our handpicked selection of premium vehicles, each
                offering exceptional comfort, performance, and style for your
                perfect journey.
              </p>
            </div>
            <div className="col-lg-6 text-lg-end">
              <Link to="/cars" className="btn btn-primary btn-lg px-4 py-3">
                <Globe size={20} className="me-2" />
                View All Cars
                <ArrowRight className="ms-2" size={20} />
              </Link>
            </div>
          </div>

          <FeaturedCarsCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <Award size={24} className="text-secondary me-2" />
              <span className="badge bg-secondary text-white px-3 py-2 rounded-pill">
                Our Services
              </span>
            </div>
            <h2 className="display-5 fw-bold text-gradient-secondary mb-3">
              Everything You Need
            </h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              We provide comprehensive car rental solutions with premium
              features and unmatched service quality.
            </p>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6 col-xl-3 mb-4">
                <div className="premium-card h-100 p-4 text-center">
                  <div className="mb-4">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        background: `var(--${service.color}-color)`,
                        color: "white",
                      }}
                    >
                      {service.icon}
                    </div>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted mb-4">{service.description}</p>
                  </div>
                  <div className="mt-auto">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="d-flex align-items-center mb-2">
                        <CheckCircle
                          size={16}
                          className={`text-${service.color} me-2`}
                        />
                        <small className="text-muted">{feature}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-5" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-5">
          
            <h2 className="display-5 fw-bold text-gradient mb-3">
             Simple Process : Book in 3 Easy Steps
            </h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Get started with DriveEasy in just three simple steps and begin
              your premium driving experience.
            </p>
          </div>

          <div className="row">
            {processSteps.map((step, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="premium-card h-100 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="position-absolute top-0 start-0 m-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center fw-bold"
                        style={{
                          width: "40px",
                          height: "40px",
                          background: `var(--${step.color}-color)`,
                          color: "white",
                        }}
                      >
                        {step.step}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center me-3"
                        style={{
                          width: "50px",
                          height: "50px",
                          background: `var(--${step.color}-color)`,
                          color: "white",
                        }}
                      >
                        {step.icon}
                      </div>
                      <h5 className="fw-bold mb-0">{step.title}</h5>
                    </div>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <div className="d-flex align-items-center justify-content-center mb-3">
              <Gift size={24} className="text-warning me-2" />
              <span className="badge bg-warning text-dark px-3 py-2 rounded-pill">
                Limited Time
              </span>
            </div>
            <h2 className="display-5 fw-bold text-gradient mb-3">
              Exclusive Packages
            </h2>
            <p
              className="lead text-muted mx-auto"
              style={{ maxWidth: "600px" }}
            >
              Choose from our specially curated packages designed to give you
              the best value for your money.
            </p>
          </div>

          <div className="row">
            {specialOffers.map((offer, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <div className="premium-card h-100 position-relative overflow-hidden">
                  {offer.badge && (
                    <div className="position-absolute top-0 end-0 z-3">
                      <span
                        className="badge text-white px-3 py-2 rounded-start-pill"
                        style={{ background: offer.gradient }}
                      >
                        {offer.badge}
                      </span>
                    </div>
                  )}

                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 opacity-5"
                    style={{ background: offer.gradient }}
                  />

                  <div className="p-4 position-relative">
                    <div className="text-center mb-4">
                      <div
                        className="display-4 fw-bold mb-2"
                        style={{ color: `var(--${offer.color}-color)` }}
                      >
                        {offer.discount}
                        <small className="fs-6 text-muted">OFF</small>
                      </div>
                      <h5 className="fw-bold mb-1">{offer.title}</h5>
                      <p className="text-muted small mb-3">{offer.subtitle}</p>

                      <div className="d-flex align-items-center justify-content-center mb-3">
                        <span className="text-decoration-line-through text-muted me-2">
                          {offer.originalPrice}
                        </span>
                        <span className="h4 fw-bold text-success mb-0">
                          {offer.discountedPrice}
                        </span>
                        <small className="text-muted ms-1">/day</small>
                      </div>
                    </div>

                    <p className="text-muted text-center mb-4">
                      {offer.description}
                    </p>

                    <div className="mb-4">
                      {offer.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="d-flex align-items-center mb-2"
                        >
                          <CheckCircle
                            size={16}
                            className={`text-${offer.color} me-2`}
                          />
                          <small>{feature}</small>
                        </div>
                      ))}
                    </div>

                    <div className="d-grid">
                      <Link
                        to="/offers"
                        className={`btn btn-${offer.color} btn-lg`}
                      >
                        Choose Package
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="d-flex align-items-center mb-3">
                <Award size={24} className="text-primary me-2" />
                <span className="badge bg-primary text-white px-3 py-2 rounded-pill">
                  Why Choose Us
                </span>
              </div>
              <h2 className="display-5 fw-bold text-gradient mb-4">
                Built for Excellence
              </h2>
              <p className="lead text-muted mb-4">
                We don't just rent cars; we create experiences. Every aspect of
                our service is designed to exceed your expectations and make
                your journey memorable.
              </p>

              <div className="row">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="col-md-6 mb-4">
                    <div className="d-flex">
                      <div className="me-3">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "50px",
                            height: "50px",
                            background: "var(--bg-primary)",
                          }}
                        >
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-2">{item.title}</h6>
                        <p className="text-muted small mb-2">
                          {item.description}
                        </p>
                        <div className="badge bg-light text-dark">
                          {item.stats}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="position-relative">
                <div className="glass-card p-4">
                  <img
                    src="/placeholder.svg?height=400&width=600&text=Premium+Experience"
                    alt="Premium Experience"
                    className="img-fluid rounded-3"
                  />
                </div>

                {/* Floating Stats */}
                <div className="position-absolute top-0 end-0 translate-middle">
                  <div className="glass-card p-3 text-center">
                    <div className="h4 text-primary mb-0">4.9★</div>
                    <small className="text-muted">Rating</small>
                  </div>
                </div>

                <div className="position-absolute bottom-0 start-0 translate-middle">
                  <div className="glass-card p-3 text-center">
                    <div className="h4 text-success mb-0">24/7</div>
                    <small className="text-muted">Support</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Contact & CTA Section */}
      <section
        className="py-5 position-relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
          <div
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              width: "100%",
              height: "100%",
            }}
          />
        </div>

        <div className="container position-relative text-white">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center mb-3">
                <Sparkles size={28} className="text-warning me-3" />
                <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold">
                  Ready to Drive?
                </span>
              </div>
              <h2 className="display-4 fw-bold mb-3">
                Your Premium Journey Starts Here
              </h2>
              <p className="lead mb-4 opacity-90">
                Join thousands of satisfied customers who trust DriveEasy for
                their premium self-driving experience. Book now and discover the
                freedom of the road.
              </p>

              <div className="row mb-4">
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center">
                    <Phone size={20} className="me-2" />
                    <div>
                      <div className="fw-bold">Call Now</div>
                      <small className="opacity-75">+91 9182868227</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center">
                    <MessageCircle size={20} className="me-2" />
                    <div>
                      <div className="fw-bold">WhatsApp</div>
                      <small className="opacity-75">Instant Support</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="d-flex align-items-center">
                    <MapPin size={20} className="me-2" />
                    <div>
                      <div className="fw-bold">Visit Us</div>
                      <small className="opacity-75">Mumbai, India</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div className="glass-card p-4">
                <h5 className="fw-bold mb-3">Start Your Adventure</h5>
                <p className="mb-4 opacity-90">
                  Book your perfect car in just 2 minutes
                </p>

                <div className="d-grid gap-3">
                  <Link to="/cars" className="btn btn-light btn-lg">
                    <Car className="me-2" size={20} />
                    Book Your Car Now
                  </Link>
                  <Link to="/contact" className="btn btn-glass btn-lg">
                    <Users className="me-2" size={20} />
                    Talk to Expert
                  </Link>
                </div>

                <div className="row mt-4 text-center">
                  <div className="col-4">
                    <Shield size={20} className="text-warning mb-1" />
                    <div className="small fw-bold">Insured</div>
                  </div>
                  <div className="col-4">
                    <Clock size={20} className="text-warning mb-1" />
                    <div className="small fw-bold">24/7</div>
                  </div>
                  <div className="col-4">
                    <Star
                      size={20}
                      className="text-warning mb-1"
                      fill="currentColor"
                    />
                    <div className="small fw-bold">5-Star</div>
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

export default Home;
