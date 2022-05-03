import React from "react";
import { Outlet } from "react-router-dom";
import "../../styles/a_navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-magic"
              viewBox="0 0 15 16"
            >
              <path d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0v1.829Zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707L14 2.707ZM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707L7.293 4Zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1h1.829Zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1h1.829ZM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707L13.293 10ZM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0v1.829Zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0L8.354 9.06Z" />
            </svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="px-5 navbar-nav w-100 justify-content-between">
            <li>
              <a className="navbar-brand" href="#HomePage">
                patfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#AboutMe" className="nav-link">
                about&nbsp;
              </a>
            </li>
            <li className="nav-item">
              <a href="#Projects" className="nav-link">
                projects&nbsp;
              </a>
            </li>
            <li className="nav-item">
              <a href="#ContactUs" className="nav-link">
                contact&nbsp;
              </a>
            </li>
            <li className="nav-item">
              <a href="#Lounge" className="nav-link">
                lounge&nbsp;
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
