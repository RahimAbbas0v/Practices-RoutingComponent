import React from "react";
import "./Nav.css";
import {Link, Outlet} from 'react-router-dom'
function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark" id="nav">
        <div className="headname">
        <Link to={"/"} id='link'>Start Bootstrap</Link></div>
        <div>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active" id='link'>
              <Link to={"/"} style={{textDecoration:"none"}} >Home</Link>
            </li>
            <li class="nav-item active" id='link'>
              <Link to={"About"}  style={{textDecoration:"none"}}  >About</Link>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                FAQ
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                must
                change
                to
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
              <div class="dropdown-menu" id="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Blog Home
                </a>
                <a class="dropdown-item" href="#">
                  Blog Post
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                must
                change
                to
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">

                  Portfolio Overview
                </a>
                <a class="dropdown-item" href="#">
                  Portfolio Item
                </a>
              </div>
            </li>
          </ul>
        </div></div>
      </nav>
      <Outlet/>
    </>
  );
}

export default Nav;
