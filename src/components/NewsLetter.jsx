import "../styles/newsletter.css";

import newsletter from "../assets/newsletter.png";

export default function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="position-relative text-center">
        <img src={newsletter} alt="Newsletter image" className="img-fluid" />
        <div className="position-absolute w-100 p-5 top-50 start-50 translate-middle text-white">
          <h1 className="text-uppercase title">Love Playing Tennis?</h1>
          <p>
            Sign up for us newsletter and get all the latest tips and tricks to
            polish your game, on par with our membership discounts and a list of
            tournaments to come!
          </p>
          <form className="row g-0 justify-content-center">
            <div className="col-6">
              <input
                type="text"
                name="search"
                id="search"
                className="form-control bg-white"
                placeholder="Search"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="text-uppercase fw-normal mx-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
