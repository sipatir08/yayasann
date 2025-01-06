import React from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import "../assets/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="category-section">
        <h3>Detail Donation</h3>
        <ul>
          <li>
            <Link to="/donate/education">Education</Link> {/* Navigasi ke Education */}
          </li>
          <li>
            <Link to="/donate/health">Health</Link> {/* Navigasi ke Health */}
          </li>
          <li>
            <Link to="/donate/foodAssistance">Food Assistance</Link> {/* Navigasi ke Food Assistance */}
          </li>
        </ul>
      </div>

      <div className="popular-posts-section">
        <h3>Pengurus</h3>
        <div className="popular-post">
          <img src="https://via.placeholder.com/150x90" alt="Popular Post" />
          <p>Lorem ipsum dolor sit amet</p>
          <span>By John Doe</span>
        </div>

        <div className="popular-post">
          <img src="https://via.placeholder.com/150x90" alt="Popular Post" />
          <p>Lorem ipsum dolor sit amet</p>
          <span>By John Doe</span>
        </div>

        <div className="popular-post">
          <img src="https://via.placeholder.com/150x90" alt="Popular Post" />
          <p>Lorem ipsum dolor sit amet</p>
          <span>By John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
