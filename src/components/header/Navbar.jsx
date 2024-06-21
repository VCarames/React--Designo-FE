import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const navMenuRef = useRef();
  const navToggleRef = useRef();
  const location = useLocation();

  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === "Escape") {
        closeNav();
      }
    }

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  useEffect(() => {
    closeNav();
  }, [location]);

  const toggleNav = () => {
    setIsNavExpanded((prevExpanded) => !prevExpanded);
    if (!isNavExpanded) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  };

  const closeNav = () => {
    setIsNavExpanded(false);
    document.body.classList.remove("disable-scroll");
  };

  const handleFocusOut = (event) => {
    if (!navMenuRef.current.contains(event.relatedTarget)) {
      closeNav();
    }
  };

  return (
    <nav className="nav" aria-label="main">
      <button
        className="nav__toggle"
        aria-expanded={isNavExpanded}
        aria-controls="nav__menu"
        aria-label="menu"
        onClick={toggleNav}
        ref={navToggleRef}
      >
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
        <span className="nav__toggle-line" />
      </button>
      <ul
        className={`nav__menu ${isNavExpanded ? "expanded" : ""}`}
        id="nav__menu"
        role="list"
        ref={navMenuRef}
        onBlur={handleFocusOut}
      >
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/about">
            Our Company
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/locations">
            Locations
          </Link>
        </li>
        <li className="nav__menu-item" role="listitem">
          <Link className="nav__menu-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
