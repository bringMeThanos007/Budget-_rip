import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../component/navbar.css';

const Navbar = () => {

  let loc = useLocation();
  // {`nav-link ${location.pathname === "/" ? "active " : ""}`}

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" to="/"><i className="fa-brands fa-padlet"></i> Budget Trip</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>

            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className={`nav-link ${loc.pathname === "/" ? "active" : ""}`} aria-current="page" to="/"><i class="fa-solid fa-house"></i> Home</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${loc.pathname === "/hotel" ? "active" : ""}`} to="/hotel"><i className="fa-solid fa-hotel"></i> Hotels</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${loc.pathname === "/activity" ? "active" : ""}`} to="/activity"><i className="fa-solid fa-person-hiking"></i> Activity</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${loc.pathname === "/tour" ? "active" : ""}`} to="/tour"><i className="fa-solid fa-mountain-sun"></i> Tour</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${loc.pathname === "/seller" ? "active" : ""}`} to="/seller"><i class="fa-solid fa-circle-check"></i> Become Vendor</Link>
                </li>
              </ul>
              <Link className="nav-link" to="/reg"><button className={`btn btn${loc.pathname === "/reg" ? "" : "-outline"}-dark`} type="submit"><i className="fa-solid fa-user"></i> Login/Signup</button></Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
