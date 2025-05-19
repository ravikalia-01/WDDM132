import React, { useState } from "react";
import "./Home.css";
import ser from "./assets/search.svg"; // Replace with your logo path
import Ser1 from "./assets/search2.svg"; // Replace with your logo path

function Home() {
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="nav-container">
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Categories</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="nav-icons">
          {/* Search */}
          <div className="search-wrapper">
            <button
              className="icon-button round"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Toggle search"
            >
                <img src={Ser1} alt="search logo" class="sr-1"/>
            </button>
            {showSearch && (
              <div className="search-popup">
                <input
                  type="text"
                  placeholder="Search..."
                  className="search-input"
                />
                <button className="search-button"><img src={ser} alt="search logo" class="sr-1"/></button>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="profile-wrapper">
            <button
              className="icon-button round profile-icon"
              onClick={() => setShowProfile(!showProfile)}
              aria-label="Toggle profile dropdown"
            >
              👤
            </button>
            {showProfile && (
              <div className="profile-dropdown">
                <div className="bubble">
                  <p>Hello there!</p>
                  <button className="login-button">Login</button>
                  <button className="signup-button">Sign Up</button>
                </div>
                <div className="bubble-tail"></div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
