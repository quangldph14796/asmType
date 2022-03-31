import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <div className="d-flex flex-column h-100">
          <main className="flex-shrink-0">
            {/* Navigation*/}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container px-5">
                <a className="navbar-brand" href="index.html">
                  HQT FURNITURE
                </a>
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
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownBlog"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      ></a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownBlog"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Sign Up
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Sign In
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </main>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="bg-dark py-4 mt-auto">
          <div className="container px-5">
            <div className="row align-items-center justify-content-between flex-column flex-sm-row">
              <div className="col-auto">
                <div className="small m-0 text-white">
                  Copyright © HQT FURNITURE 2022
                </div>
              </div>
              <div className="col-auto">
                <a className="link-light small" href="#!">
                  Privacy
                </a>
                <span className="text-white mx-1">·</span>
                <a className="link-light small" href="#!">
                  Terms
                </a>
                <span className="text-white mx-1">·</span>
                <a className="link-light small" href="#!">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
