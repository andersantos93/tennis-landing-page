import "../styles/about.css";

import player from "../assets/player.png";

export default function About() {
  return (
    <section className="about py-5">
      <img
        src={player}
        alt="Player image"
        className="img-fluid"
        width="350"
        height="350"
      />
      <div className="container text-center d-flex flex-column explanation">
        <h2 className="fs-1 fw-medium">About the Club</h2>
        <p className="fs-5">
          At the award-winning ProShot. than just a cold calculated business -
          it is passion!
        </p>
        <p className="fs-6">
          Vilas Tennis Academy offers tennis camps and professional programs
          every week of the year in Punta Cana (Dominican Republic) for juniors
          and adults tennis player.
        </p>
        <div className="mt-4">
          <a href="#" className="btn btn-primary me-3">
            About
          </a>
          <a href="#" className="btn btn-outline-primary">
            Gallery
          </a>
        </div>
      </div>

      <div className="text-center mt-3 p-4 info">
        <div className="row mt-3 mb-3 info">
          <div className="col-6 col-md-6 mb-5">
            <div className="fs-1 text-light">12</div>
            <div className="text-light fw-light description">Tennis Courts</div>
          </div>
          <div className="col-6 col-md-6">
            <div className="fs-1 text-light">999+</div>
            <div className="text-light fw-light description">Club Members</div>
          </div>
          <div className="col-6 col-md-6">
            <div className="fs-1 text-light">45</div>
            <div className="text-light fw-light description">
              Tournaments/Year
            </div>
          </div>
          <div className="col-6 col-md-6">
            <div className="fs-1 text-light">3000+</div>
            <div className="text-light fw-light description">
              Visitor Yearly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
