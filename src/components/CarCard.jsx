import { Link } from "react-router-dom";
import {
  Fuel,
  Users,
  Settings,
  Star,
  Eye,
  Calendar,
  MessageCircle,
  Heart,
  Zap,
} from "lucide-react";

const CarCard = ({
  car,
  viewMode = "grid",
  showActions = false,
  onToggleAvailability,
  onEdit,
  onDelete,
}) => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const message = `Hi! I'm interested in the ${car.name}. Can you provide more details?`;
    const phoneNumber = "919182868227";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={
        viewMode === "grid"
          ? "col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-3"
          : "col-12 mb-3 w-50"
      }
    >
      <div
        className={`car-card h-100 shadow-sm border rounded-3 overflow-hidden ${
          viewMode === "list" ? "d-flex flex-row" : ""
        }`}
      >
        {/* Image Section */}
        <div
          className={
            viewMode === "list" ? "w-50" : "position-relative"
          }
          style={{
            position: viewMode === "grid" ? "relative" : "static",
            maxHeight: viewMode === "list" ? "100%" : undefined,
            overflow: "hidden",
          }}
        >
          <img
            src={car.images?.[0] || "/placeholder.svg"}
            className="card-img-top"
            alt={car.name}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              borderRadius: viewMode === "list" ? "0" : "inherit",
            }}
          />
          {viewMode === "grid" && (
            <>
              <div
                className="position-absolute bottom-0 start-0 end-0"
                style={{
                  height: "50%",
                  background: "linear-gradient(transparent, rgba(0,0,0,0.6))",
                }}
              />
              <div className="position-absolute top-0 start-0 m-2">
                {car.featured && (
                  <span className="badge bg-warning text-dark px-2 py-1 rounded-pill fw-semibold d-block mb-1 small">
                    <Star size={12} className="me-1" fill="currentColor" />
                    Featured
                  </span>
                )}
                <span
                  className={`badge px-2 py-1 rounded-pill fw-semibold small ${
                    car.available ? "bg-success" : "bg-danger"
                  }`}
                >
                  {car.available ? "Available" : "Booked"}
                </span>
              </div>
              <button className="btn btn-sm btn-glass position-absolute top-0 end-0 m-2 p-1 rounded-circle">
                <Heart size={14} />
              </button>
              <div className="position-absolute bottom-0 start-0 end-0 px-2 pb-2 text-white">
                <h6 className="mb-0 fw-bold text-truncate">{car.name}</h6>
                <small className="opacity-75">
                  {car.brand} • {car.type}
                </small>
              </div>
            </>
          )}
        </div>

        {/* Details Section */}
        <div
          className={`card-body p-3 ${
            viewMode === "list" ? "w-50" : ""
          } d-flex flex-column justify-content-between`}
        >
          {/* Header for list view */}
          {viewMode === "list" && (
            <>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 className="mb-1 fw-bold">{car.name}</h5>
                  <small className="text-muted">
                    {car.brand} • {car.type}
                  </small>
                </div>
                <span
                  className={`badge px-2 py-1 rounded-pill fw-semibold small ${
                    car.available ? "bg-success" : "bg-danger"
                  }`}
                >
                  {car.available ? "Available" : "Booked"}
                </span>
              </div>
            </>
          )}

          {/* Icons */}
          <div className="row text-center mb-2">
            <div className="col-4 px-1">
              <div className="p-1 border rounded-2">
                <Fuel size={16} className="text-primary mb-1" />
                <div className="small fw-bold">{car.fuel}</div>
                <small className="text-muted">Fuel</small>
              </div>
            </div>
            <div className="col-4 px-1">
              <div className="p-1 border rounded-2">
                <Users size={16} className="text-secondary mb-1" />
                <div className="small fw-bold">{car.seats}</div>
                <small className="text-muted">Seats</small>
              </div>
            </div>
            <div className="col-4 px-1">
              <div className="p-1 border rounded-2">
                <Settings size={16} className="text-info mb-1" />
                <div className="small fw-bold">{car.transmission}</div>
                <small className="text-muted">Trans</small>
              </div>
            </div>
          </div>

          {/* Rating */}
          {car.rating > 0 && (
            <div className="d-flex align-items-center justify-content-center mb-2">
              <div className="d-flex me-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={`me-1 ${
                      i < Math.floor(car.rating)
                        ? "text-warning"
                        : "text-muted"
                    }`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <small className="text-muted">({car.rating})</small>
            </div>
          )}

          {/* Price */}
          <div className="text-center mb-2">
            <span className="fw-bold text-dark small">
              ₹{car.price.toLocaleString()}
            </span>
            <small className="text-muted ms-1">/day</small>
          </div>

          {/* Actions */}
          {showActions ? (
            <div className="d-grid gap-1 mt-2">
              <button
                className={`btn btn-sm py-2 px-2 w-100 ${
                  car.available ? "btn-warning" : "btn-success"
                }`}
                style={{ fontSize: "0.85rem" }}
                onClick={() => onToggleAvailability(car._id)}
              >
                <Zap size={12} className="me-1" />
                {car.available ? "Mark Unavailable" : "Mark Available"}
              </button>
              <div className="d-flex gap-1">
                <button
                  className="btn btn-sm btn-outline-primary w-50 py-2 px-2"
                  onClick={() => onEdit(car._id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger w-50 py-2 px-2"
                  onClick={() => onDelete(car._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : (
            <div className="d-grid gap-1 mt-2">
              <div className="d-flex gap-1">
                <Link
                  to={`/cars/${car._id}`}
                  className="btn btn-outline-primary btn-sm w-50 py-2 px-2"
                >
                  <Eye size={12} className="me-1" />
                  Details
                </Link>
                {car.available && (
                  <Link
                    to={`/book/${car._id}`}
                    className="btn btn-primary btn-sm w-50 py-2 px-2"
                  >
                    <Calendar size={12} className="me-1" />
                    Book
                  </Link>
                )}
              </div>
              <button
                className="btn btn-accent btn-sm w-100 py-2 px-2 mt-1"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle size={12} className="me-1" />
                WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
