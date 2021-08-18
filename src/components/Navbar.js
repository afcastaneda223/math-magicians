import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><h1>Math Magicians</h1></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto pe-5">
            <li className="nav-item m-2">
              <Link to="/"><button type="button" className="btn btn-dark"><h2>Home</h2></button></Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/calculator"><button type="button" className="btn btn-dark"><h2>Calculator</h2></button></Link>
            </li>
            <li className="nav-item m-2">
              <Link to="/quote"><button type="button" className="btn btn-dark"><h2>Quote</h2></button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
