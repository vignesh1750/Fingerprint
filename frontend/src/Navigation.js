// src/components/Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="title">
        FINGER PRINT VOTING SYSTEM
      </a>
      <ul>
        <li className="active">
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/vote">Vote</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
