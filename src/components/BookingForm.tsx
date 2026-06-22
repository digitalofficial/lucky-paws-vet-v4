"use client";

import { useState, FormEvent } from "react";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
          maxWidth: 500,
          margin: "0 auto",
        }}
      >
        <div className="glass-icon" style={{ margin: "0 auto 20px", width: 72, height: 72, fontSize: 32 }}>
          &#10003;
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.6rem",
            marginBottom: 12,
            color: "var(--primary)",
          }}
        >
          Request Received!
        </h3>
        <p style={{ color: "var(--muted)" }}>
          We will be in touch within 24 hours to confirm your appointment.
          Thank you for choosing Lucky Paws Veterinary.
        </p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <input
        className="glass-input"
        type="text"
        placeholder="Pet Parent Name"
        required
        aria-label="Pet Parent Name"
      />
      <input
        className="glass-input"
        type="email"
        placeholder="Email Address"
        required
        aria-label="Email Address"
      />
      <input
        className="glass-input"
        type="tel"
        placeholder="Phone Number"
        required
        aria-label="Phone Number"
      />
      <input
        className="glass-input"
        type="text"
        placeholder="Pet Name"
        required
        aria-label="Pet Name"
      />
      <select className="glass-input" required aria-label="Pet Type" defaultValue="">
        <option value="" disabled>
          Pet Type
        </option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="bird">Bird</option>
        <option value="reptile">Reptile</option>
        <option value="small-animal">Small Animal</option>
        <option value="other">Other</option>
      </select>
      <input
        className="glass-input"
        type="text"
        placeholder="Service Needed"
        required
        aria-label="Service Needed"
      />
      <textarea
        className="glass-input full-width"
        placeholder="Additional Details (optional)"
        aria-label="Additional Details"
      />
      <div className="full-width" style={{ textAlign: "center", marginTop: 8 }}>
        <button type="submit" className="cta-btn">
          Book Appointment
        </button>
      </div>
    </form>
  );
}
