import { useState } from "react";
import "./styles.css"; 

const Signin = () => {
  // State to manage form data and errors
  const [signInData, setSignInData] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    password: ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value
    });
  };

  // Validation function for SignIn
  const validateSignIn = () => {
    const newErrors = {};
    if (!signInData.username) newErrors.username = "Username is required";
    if (!signInData.password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate before submission
    if (!validateSignIn()) return; // Stop if validation fails

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signInData)
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);  // Display success message
        // Redirect to another page if needed
        // Example: window.location.href = '/dashboard'; 
      } else {
        setErrors({
          username: "",
          password: data.message || "Invalid credentials, please try again!"
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrors({
        username: "",
        password: "An error occurred. Please try again later."
      });
    }
  };

  return (
    <div className="w-full h-full p-0 m-0 overflow-hidden">
      <div className="body-login flex">
        <div className="login-box h-full border border-white justify-center align-middle text-left">
          <h2 className="Login text-white">
            <ion-icon name="pin-outline"></ion-icon> Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="forms">
              <div>
                <label className="user text-white" htmlFor="username">Username</label><br />
                <input
                  className="user-input"
                  type="text"
                  id="username"
                  name="username"
                  value={signInData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <div className="error-message">{errors.username}</div>}
              </div>
              <div>
                <label className="password text-white" htmlFor="password">Password</label><br />
                <input
                  className="password-input"
                  type="password"
                  id="password"
                  name="password"
                  value={signInData.password}
                  onChange={handleChange}
                  required
                />
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>

              <button className="button-submit" type="submit">Log in</button>
            </div>
          </form>
        </div>

        <div className="arcnoir">
          <div className="icon-b">
            <p>You are all set</p>
            <ion-icon name="battery-dead-outline"></ion-icon>
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            <ion-icon name="battery-half-outline"></ion-icon>
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
            <ion-icon name="battery-full-outline"></ion-icon>
          </div>

          <div className="footer-options">
            <a href="../"><div><p><ion-icon name="return-down-back-outline"></ion-icon> Home</p></div></a>
            <a href="../signup"><div><p>Sign up</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
