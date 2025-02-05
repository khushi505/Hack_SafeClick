import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../SideNavBar/SideNavbar.css";

const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(false);

  const menuItems = [
    { text: "Dashboard", icon: "icons/grid.svg", path: "/dashboard" },
    { text: "Analytics", icon: "icons/pie-chart.svg", path: "/analytics" },
    { text: "Settings", icon: "icons/search.png", path: "/settings" },
    { text: "Contact", icon: "icons/user.svg", path: "/contact" },
  ];

  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <h2>SafeClick</h2>
            </div>
          )}
          <button
            className={`hamburger ${
              isExpanded ? "hamburger-in" : "hamburger-out"
            }`}
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="nav-menu">
          {menuItems.map(({ text, icon, path }) => (
            <NavLink
              key={text}
              to={path}
              className={({ isActive }) =>
                isExpanded
                  ? `menu-item ${isActive ? "active-menu-item" : ""}`
                  : `menu-item menu-item-NX ${
                      isActive ? "active-menu-item-NX" : ""
                    }`
              }
            >
              <img className="menu-item-icon" src={icon} alt={text} />
              {isExpanded && <p>{text}</p>}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <div className="nav-footer-info">
              <p className="nav-footer-user-position"> Admin</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="Logout" />
      </div>
    </div>
  );
};

export default SideNavBar;
