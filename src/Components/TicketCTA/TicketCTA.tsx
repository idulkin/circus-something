import React from "react";
import "./TicketCTA.css";

type TicketCTAProps = {
  href: string;
  label: string;
};

const TicketCTA: React.FC<TicketCTAProps> = ({ href, label }) => (
  <div className="ticket-container">
    <a
      className="ticket-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  </div>
);

export default TicketCTA;
