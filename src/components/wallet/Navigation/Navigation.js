import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Navigation.css";

const Navigation = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className="navigation">
      <div className="nav-left">
        <button className="back-button"><ArrowBackIosIcon className="back-icon"/></button>
      </div>
      <div className="nav-middle">
        <p className="nav-heading">Bitcoin Wallet</p>
      </div>
      <div className="nav-right">
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}><MoreVertIcon className="back-icon"/></button>
          <div className="open-content">
            <p className="nav-link">Home</p>
            <p className="nav-link">About</p>
            <p className="nav-link">Services</p>
            <p className="nav-link">Contact</p>
          </div>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
