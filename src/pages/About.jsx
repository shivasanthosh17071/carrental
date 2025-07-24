import { Shield, Award, Users, Clock, Car, CheckCircle } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Shield size={40} className="text-primary mb-3" />,
      title: "Fully Insured",
      description:
        "All our vehicles come with comprehensive insurance coverage for complete peace of mind.",
    },
    {
      icon: <Award size={40} className="text-primary mb-3" />,
      title: "Best Quality",
      description:
        "We maintain our fleet to the highest standards with regular servicing and quality checks.",
    },
    {
      icon: <Users size={40} className="text-primary mb-3" />,
      title: "24/7 Support",
      description:
        "Our customer support team is available round the clock to assist you whenever needed.",
    },
    {
      icon: <Clock size={40} className="text-primary mb-3" />,
      title: "Flexible Timing",
      description:
        "Pick up and drop off your car at your convenience with our flexible timing options.",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Cars Available" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">About DriveEasy</h1>
              <p className="text-dark mb-4">
                We are passionate about providing the best self-drive car rental
                experience. Our mission is to make car rentals simple,
                affordable, and accessible to everyone.
              </p>
              <div className="d-flex align-items-center">
                
                <p className="text-dark">Your trusted partner for self-drive adventures</p>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/placeholder.svg?height=400&width=500&text=About+Us+Image"
                alt="About Us"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="h2 text-primary fw-bold">{stat.number}</div>
                <div className="text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h2 className="mb-4">Our Story</h2>
              <p className="mb-3">
                Founded in 2019, DriveEasy started with a simple vision: to
                revolutionize the car rental industry by providing hassle-free,
                self-drive experiences to our customers.
              </p>
              <p className="mb-3">
                What began as a small fleet of 5 cars has now grown to over 50
                vehicles, serving hundreds of satisfied customers across the
                city. We believe in transparency, quality, and customer
                satisfaction above all else.
              </p>
              <p>
                Our team is dedicated to maintaining the highest standards of
                service and ensuring that every journey with DriveEasy is
                memorable and safe.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                src="/placeholder.svg?height=400&width=500&text=Our+Story+Image"
                alt="Our Story"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Why Choose Us?</h2>
            <p className="lead text-muted">
              We provide exceptional service with these key benefits
            </p>
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="text-center h-100 p-4">
                  {feature.icon}
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                src="/placeholder.svg?height=400&width=500&text=Our+Values+Image"
                alt="Our Values"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-lg-6">
              <h2 className="mb-4">Our Values</h2>
              <div className="mb-3">
                <div className="d-flex align-items-start">
                  <CheckCircle size={20} className="text-success me-3 mt-1" />
                  <div>
                    <h6>Transparency</h6>
                    <p className="text-muted">
                      No hidden charges, clear pricing, and honest
                      communication.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-start">
                  <CheckCircle size={20} className="text-success me-3 mt-1" />
                  <div>
                    <h6>Quality</h6>
                    <p className="text-muted">
                      Well-maintained vehicles and exceptional service
                      standards.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-start">
                  <CheckCircle size={20} className="text-success me-3 mt-1" />
                  <div>
                    <h6>Customer First</h6>
                    <p className="text-muted">
                      Your satisfaction and safety are our top priorities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex align-items-start">
                  <CheckCircle size={20} className="text-success me-3 mt-1" />
                  <div>
                    <h6>Innovation</h6>
                    <p className="text-muted">
                      Continuously improving our services with latest
                      technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Meet Our Team</h2>
            <p className="lead text-muted">
              The people behind DriveEasy's success
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <div
                    className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      fontSize: "32px",
                      fontWeight: "bold",
                    }}
                  >
                    RK
                  </div>
                  <h5>Rajesh Kumar</h5>
                  <p className="text-muted">Founder & CEO</p>
                  <p className="small">
                    Passionate about revolutionizing the car rental industry
                    with customer-centric solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <div
                    className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      fontSize: "32px",
                      fontWeight: "bold",
                    }}
                  >
                    PS
                  </div>
                  <h5>Priya Sharma</h5>
                  <p className="text-muted">Operations Manager</p>
                  <p className="small">
                    Ensures smooth operations and maintains our high service
                    quality standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card text-center">
                <div className="card-body">
                  <div
                    className="bg-info text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "80px",
                      height: "80px",
                      fontSize: "32px",
                      fontWeight: "bold",
                    }}
                  >
                    AP
                  </div>
                  <h5>Amit Patel</h5>
                  <p className="text-muted">Customer Support Lead</p>
                  <p className="small">
                    Dedicated to providing exceptional customer service and
                    support 24/7.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
