import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Στην πράξη εδώ θα γίνει έλεγχος διαπιστευτηρίων
    navigate("/home");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Σύνδεση στο Intelligent Maintenance System</h2>
      <input type="text" placeholder="Όνομα χρήστη" />
      <br /><br />
      <input type="password" placeholder="Κωδικός" />
      <br /><br />
      <button onClick={handleLogin}>Σύνδεση</button>
    </div>
  );
};

export default Login;

