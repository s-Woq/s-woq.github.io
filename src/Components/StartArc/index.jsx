import React, { useState } from "react";
import "./styles.css";

function StartArc() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      user,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Login successful:", result);
        setError(""); // Clear any previous errors
        setIsModalOpen(false); // Close the modal after successful login
      } else {
        setError(result.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred during login. Please try again.");
    }
  };

  const handleStartClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="start-holder flex justify-around">
      {/* Render the button only when the modal is NOT open */}
      {!isModalOpen && (
        <button
          className="top-0 relative button rounded-xl w-36 h-12 bg-white px-5"
          onClick={handleStartClick}
        >
          <span className="start">Start</span>
        </button>
      )}

      {/* Modal for login/register */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="close-button">
              ×
            </button>

            <div className="fdet border-2 border-black p-5">
              <h2 className="txt login-txt text-white">
                <ion-icon name="pin-outline"></ion-icon> Login
              </h2>
              <form onSubmit={handleLogin}>
                <div>
                  <label htmlFor="username" className="txt">
                    Username
                  </label>
                  <input
                    className="h-10 rounded-l bg-transparent border border-white"
                    type="text"
                    id="username"
                    name="username"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="txt">
                    Password
                  </label>
                  <input
                    className="h-10 rounded-l bg-transparent border border-white"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="error-message text-red-500">{error}</p>}
                <button
                  type="submit"
                  className="submit-button border border-black rounded-xl p-2 gap-2 text-white"
                >
                  Submit
                </button>
                <div>
                  <p className="register-footer">
                    Don't have an account?{" "}
                    <b>
                      <a href="../Signup">Sign up</a>
                    </b>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StartArc;
