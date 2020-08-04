import React, { useState } from "react";
import "./index.scss";
import Button from "elements/Button";

export default function Navbar(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  const [open, setOpen] = useState(false);

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav>
          <ul className={open ? "slide" : ""} onClick={() => setOpen(!open)}>
            <li className={`nav-item${getNavLinkClass("/")}`}>
              <Button className="nav-link" type="link" href="/">
                HOME
              </Button>
            </li>

            <li className={`nav-item${getNavLinkClass("/catalogue")}`}>
              <Button className="nav-link" type="link" href="/catalogue">
                CATALOGUE
              </Button>
            </li>
            <li className={`nav-item${getNavLinkClass("/about")}`}>
              <Button className="nav-link" type="link" href="/about">
                ABOUT US
              </Button>
            </li>
          </ul>
          <div
            className={open ? "menu-toggle toggle" : "menu-toggle"}
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  );
}
