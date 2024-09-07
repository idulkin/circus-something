import React, { useState } from "react";

import "./CultSignup.css";

const CultSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email address
    const validationRegex = /\S+@\S+\.\S+/;

    if (!validationRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Replace console log with actual email subscrition
      console.log("Subscribing email:", email);

      // Clear the form
      setEmail("");
      setMessage("Welcome. Your indoctrination begins now.");
    } catch (error) {
      console.error("Error subscribing: ", error);
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className="background-container">
      <h2 className="text">Join the cult</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">SUBMIT</button>
      </form>
      {message && <p className="text">{message}</p>}
    </div>
  );
};

export default CultSignup;
