import "../styles/latestnews.css";

import calendar from "../assets/calendar.png";

const news = [
  {
    title:
      "Djokovic watches Fonseca's thrilling Davis Cup win against Tsitsipas",
    date: "Sept. 15, 2025",
    description:
      "Novak Djokovic was in attendance with his son, Stefan, for the Davis Cup tie between home side Greece and Brazil. The 100-time tour-level titlist watched Joao Fonseca seal Brazil's victory against Stefanos Tsitsipas.",
  },
  {
    title: "Sinner secured, Musetti on the march toward Turin debut",
    date: "Sept. 15, 2025",
    description:
      "Jannik Sinner has already booked his spot to the season finale, while countryman Lorenzo Musetti sits eighth in the PIF ATP Live Race To Turin. The next two months will be decisive for the 23-year-old Italian, pushing for his debut at the year-end event on home soil.",
  },
];

const events = [
  {
    round: "16",
    icon: calendar,
    date: "November 13 @ 9:00 AM - 3:00 PM",
  },
  {
    round: "8",
    icon: calendar,
    date: "November 14 @ 9:00 AM - 3:00 PM",
  },
  {
    round: "4",
    icon: calendar,
    date: "November 15 @ 9:00 AM - 3:00 PM",
  },
];

export default function LatestNews() {
  return (
    <section className="latestnews mt-5 px-5 p-5">
      <h2 className="fs-2 fw-bold text-uppercase mb-3">Latest News</h2>
      <div className="d-flex flex-column flex-md-row gap-4 mt-5">
        {news.map((news_item, index) => {
          return (
            <div key={index} className="d-flex flex-column">
              <h4 className="fs-5 fw-semibold">{news_item.title}</h4>
              <span className="fw-normal text-uppercase">{news_item.date}</span>
              <p className="mt-3 mt-md-5">{news_item.description}</p>
            </div>
          );
        })}
        <div className="d-flex flex-column p-5 gap-4 events">
          {events.map((event, index) => {
            return (
              <div key={index}>
                <h6>Round of {event.round}</h6>
                <img
                  src={event.icon}
                  alt="Calendar icon"
                  width="12"
                  height="12"
                  className="me-2"
                />
                <span>{event.date}</span>
                <hr />
              </div>
            );
          })}
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
