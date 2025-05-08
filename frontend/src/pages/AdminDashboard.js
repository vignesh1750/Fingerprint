import React from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Admin Dashboard</h2>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => navigate("/insert-voter")}>
          Insert Voter
        </button>
        <button style={styles.button} onClick={() => navigate("/delete-voter")}>
          Delete Voter
        </button>
        <button style={styles.button} onClick={() => navigate("/viewvotes")}>
          View Votes
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "'Arial', sans-serif",
  },
  heading: {
    fontSize: "2em",
    color: "#333",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "grid",
    gap: "20px",
    width: "250px",
    margin: "auto",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1em",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default AdminDashboard;
