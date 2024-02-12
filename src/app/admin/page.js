"use client";
// pages/admin.js
import { useState } from "react";
import PasswordForm from "../../components/PasswordForm";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);

  const handlePasswordSubmit = (enteredPassword) => {
    // Perform a request to validate the entered password
    // (e.g., send it to the server for verification)
    // For simplicity, let's assume a synchronous verification here
    const adminPassword = "2020";
    if (enteredPassword === adminPassword) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div>
      {authenticated ? (
        <div>Your admin page content</div>
      ) : (
        <PasswordForm onSubmit={handlePasswordSubmit} />
      )}
    </div>
  );
}
