import React, { useState } from "react";
import "./index.scss";
import Button from "elements/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <ul className={open ? "slide" : ""} onClick={() => setOpen(!open)}>
        <li>
          <Button className="nav-link" type="link" href="/">
            Home
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
  );
}
