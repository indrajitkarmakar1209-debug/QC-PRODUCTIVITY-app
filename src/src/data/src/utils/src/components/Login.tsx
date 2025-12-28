import { useState } from "react";
import { loginWithPin } from "../utils/auth";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!userId || pin.length !== 4) {
      setMessage("Please enter User ID and 4-digit PIN");
      return;
    }

    const result = loginWithPin(userId, pin);

    if (!result.success) {
      setMessage(result.message);
    } else {
      setMessage(
        `Welcome ${result.user?.name} (${result.user?.role})`
      );
    }
  };

  return (
    <div style={styles.container}>
      <h2>QC Productivity Login</h2>

      <input
        type="text"
        placeholder="User ID / Mobile"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        style={styles.input}
      />

      <input
        type="password"
        placeholder="4-digit PIN"
        value={pin}
        maxLength={4}
        onChange={(e) => setPin(e.target.value)}
        style={styles.input}
      />

      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "320px",
    margin: "100px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center" as const,
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    color: "#dc2626",
  },
};
