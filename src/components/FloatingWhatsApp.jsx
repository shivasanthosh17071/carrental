"use client";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in renting a car. Can you help me?";
    const phoneNumber = "919182868227"; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      className="floating-whatsapp btn"
      onClick={handleWhatsAppClick}
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default FloatingWhatsApp;
