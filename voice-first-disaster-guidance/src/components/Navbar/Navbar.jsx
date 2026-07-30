import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">

        <span className="logo-icon">🎙️</span>

        <div className="logo-text">
          <h2>VoiceGuard</h2>
          <p>Voice-First Disaster Guidance System</p>
        </div>

      </div>

      <nav>

        <ul className="nav-links">

          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/weather"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Weather
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/report"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Report Disaster
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/guide"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Safety Guide
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/emergency"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Emergency
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About
            </NavLink>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;