import React, { useState } from "react";

import "./CultSignup.css";

// Google Apps Script Web App URL (deployed from the Google Sheet that
// collects signups). See src/CultSignup/google-apps-script.gs for the
// script to deploy and its setup instructions.
const SIGNUP_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzHNf8WedSAxJbzyryO3Dz9nxajbPvv99sf1GlVpHlRx47ePea9pcs8MDNbaedzOgVt/exec";

const EMAIL_VALIDATION_REGEX = /^\S+@\S+\.\S+$/;

const CultSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double-clicks or repeat Enter presses from firing multiple requests
    if (isSubmitting) {
      return;
    }

    const trimmedEmail = email.trim();

    if (!EMAIL_VALIDATION_REGEX.test(trimmedEmail)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Apps Script web apps don't return CORS headers, so the response
      // body can't be read from the browser. Fire the request in
      // "no-cors" mode and treat a non-throwing request as success.
      await fetch(SIGNUP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      // Clear the form
      setEmail("");
      setMessage("Welcome. Your indoctrination begins now.");
    } catch (error) {
      console.error("Error subscribing: ", error);
      setMessage("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cult-signup-container">
      <h2 className="text">Join the cult</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />
        <button className="submit-button" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
      {message && <p className="text">{message}</p>}
    </div>
  );
};

export default CultSignup;
