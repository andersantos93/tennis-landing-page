import "../styles/header.css";

import headersm from "../assets/header-sm.png";
import headermd from "../assets/header-md.png";

export default function Header() {
  return (
    <header>
      <div className="position-relative text-start">
        <div className="d-block d-md-none mb-2">
          <img
            src={headersm}
            alt="Header image"
            className="header-sm-img"
            style={{ width: "100%" }}
          />
        </div>
        <div className="d-none d-md-block">
          <img src={headermd} alt="Header image" className="img-fluid" />
        </div>
        <nav className="navbar navbar-expand-lg position-absolute px-5 py-4 top-0 end-0">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link fw-bold" href="#">
                  Information
                </a>
                <a className="nav-link fw-bold" href="#">
                  Contact
                </a>
                <a className="nav-link fw-bold" href="#">
                  Gamers
                </a>
                <a className="nav-link fw-bold" href="#">
                  Post
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="position-absolute description px-5 ">
          <h1 className="fs-1 fw-semibold text-uppercase mb-4">
            <span className="fw-light">The lifestyle</span> that keeps you
            energized <span className="d-none d-lg-inline-block">—</span>
          </h1>
          <p className="fw-lighter mb-4">
            Tennis is the sport with many benefits beyond health and physical
            activity. Promotes teamwork and sportsmanship.
          </p>
          <button className="text-uppercase book-court-btn">
            Book a court
          </button>
        </div>
      </div>
    </header>
  );
}
