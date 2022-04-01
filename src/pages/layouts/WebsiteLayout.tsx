import React from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div>
      <header>
        <div className="d-flex flex-column h-100">
          <main className="flex-shrink-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container px-5">
                <a className="navbar-brand" href="/">
                  HQT SHOP
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
                      <a className="nav-link" href="/">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/product">
                        Products
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signup">
                        Sign Up
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/signin">
                        Sign In
                      </a>
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
                  Copyright © HQT SHOP 2022
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
