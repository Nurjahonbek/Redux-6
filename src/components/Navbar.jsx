import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-base-200">
      <div className="navbar px-5">
        <div className="navbar-start">
          <Link to="/">Logo</Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-secondary">logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
