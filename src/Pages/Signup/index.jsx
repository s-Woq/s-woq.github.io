import "./index.css";
import { useState } from "react";

function Signup() {
  // Declare all the necessary state variables
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform some basic validation (optional)
    if (!name || !lastname || !email || !username || !password) {
      setErrorMessage("All fields are required");
      return;
    }

    // You can handle the signup logic here
    console.log("Form submitted", { name, lastname, email, username, password });

    // Reset form or provide feedback after successful submission
    setErrorMessage(""); // Reset error message
    // Optionally reset form fields:
    // setName(""); setLastname(""); setEmail(""); setUsername(""); setPassword("");
  };

  return (
    <div className="s-up">
      <div className="process">
        <div className="icons-pg">
        <p>Getting Started</p>
        <ion-icon name="person-outline"></ion-icon>
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        <ion-icon name="mail-open-outline"></ion-icon>
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        <ion-icon name="balloon-outline"></ion-icon>
        </div>
        <div className="footer-gs"> 
          <a href="../"><div><p><ion-icon name="return-down-back-outline"></ion-icon>Home</p></div></a>
          <a href="../login"><div><p>Log In</p></div></a>
        </div>

      </div>
      <div className="sign-up-box text-white"><p className="a-n"> <ion-icon name="pin-outline"></ion-icon>Sign Up</p>
      
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label htmlFor="name">Name</label><br />
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Last Name Input */}
          <div>
            <label htmlFor="lastname">Last Name</label><br />
            <input
              type="text"
              id="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email">Email</label><br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Username Input */}
          <div>
            <label htmlFor="username">Username</label><br />
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password">Password</label><br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Display error message if any */}
          {errorMessage && <div className="error-message">{errorMessage}</div>}

          {/* Submit Button */}
          <button className="submit-button" type="submit">Sign Up</button>
        </form>
      </div>
      </div>
    
  );
}

export default Signup;
