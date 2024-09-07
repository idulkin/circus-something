import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CultSignup from "./CultSignup";

describe("Cult Signup", () => {
  it("renders the form elements", () => {
    render(<CultSignup />);

    expect(
      screen.getByPlaceholderText(/Enter your email/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("updates the email value on form change", () => {
    render(<CultSignup />);

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);

    userEvent.type(emailInput, "test@test.com");

    expect(emailInput).toHaveValue("test@example.com");
  });

  it("shows validation error for invalid email", () => {
    render(<CultSignup />);

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    userEvent.type(emailInput, "invalid-email");
    fireEvent.click(submitButton);

    expect(
      screen.getByText(/please enter a valid email address/i)
    ).toBeInTheDocument();
  });

  it("submits the form and shows success message for valid email", () => {
    render(<CultSignup />);

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    userEvent.type(emailInput, "test@example.com");
    fireEvent.click(submitButton);

    expect(screen.getByText(/thank you for subscribing/i)).toBeInTheDocument();
    expect(emailInput).toHaveValue("");
  });

  it("displays error message if subscription fails", () => {
    render(<CultSignup />);

    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    // Simulate subscription failure by throwing an error (you would mock this if it's an async function)
    jest.spyOn(console, "error").mockImplementation(() => {});
    userEvent.type(emailInput, "test@example.com");
    fireEvent.click(submitButton);

    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });
});
