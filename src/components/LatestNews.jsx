import "../styles/latestnews.css";

import calendaricon from "../assets/calendar-icon.png";

export default function LatestNews() {
  return (
    <section className="latestnews mt-5 px-5 p-5">
      <h2 className="fs-2 fw-bold text-uppercase mb-3">Latest News</h2>
      <div className="d-flex flex-column flex-md-row gap-4 mt-5">
        <div className="d-flex flex-column">
          <h4 className="fs-5 fw-semibold">
            Top Female Tennis Player of Our Time
          </h4>
          <span className="fw-normal text-uppercase">Oct 19, 2019</span>
          <p className="mt-3 mt-md-5">
            Serena Williams: A true legend, Serena Williams has dominated the
            tennis world for decades. With 23 Grand Slam singles titles, she's
            one of the most successful players in history. Her powerful serve,
            athleticism, and mental toughness set her apart.
          </p>
        </div>
        <div className="d-flex flex-column">
          <h4 className="fs-5 fw-semibold">
            Wimbledon Men's Fourth Round Recap
          </h4>
          <span className="fw-normal text-uppercase">Oct 19, 2016</span>
          <p className="mt-3 mt-md-5">
            Serena Williams: A true legend, Serena Williams has dominated the
            tennis world for decades. With 23 Grand Slam singles titles, she's
            one of the most successful players in history. Her powerful serve,
            athleticism, and mental toughness set her apart.
          </p>
        </div>
        <div className="d-flex flex-column p-5 gap-4 events">
          <div>
            <h6>Round of 16</h6>
            <img
              src={calendaricon}
              alt="Calendar icon"
              width="12"
              height="12"
              className="me-2"
            />
            <span>November 13 @ 9:00 AM - 3:00 PM</span>
            <hr />
          </div>
          <div>
            <h6>Round of 16</h6>
            <img
              src={calendaricon}
              alt="Calendar icon"
              width="12"
              height="12"
              className="me-2"
            />
            <span>November 13 @ 9:00 AM - 3:00 PM</span>
            <hr />
          </div>
          <div>
            <h6>Round of 16</h6>
            <img
              src={calendaricon}
              alt="Calendar icon"
              width="12"
              height="12"
              className="me-2"
            />
            <span>November 13 @ 9:00 AM - 3:00 PM</span>
            <hr />
          </div>
          <div>
            <h6>Round of 16</h6>
            <img
              src={calendaricon}
              alt="Calendar icon"
              width="12"
              height="12"
              className="me-2"
            />
            <span>November 13 @ 9:00 AM - 3:00 PM</span>
          </div>
          <div>
            <a
              href="#"
              className="fw-semibold text-uppercase text-decoration-none"
            >
              View all Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
