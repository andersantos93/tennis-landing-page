import "../styles/domore.css";

import domoremd from "../assets/domore-md.png";
import domoresm from "../assets/domore-sm.png";

export default function DoMore() {
  return (
    <section className="domore">
      <div className="d-flex flex-row justify-content-center mt-4 gap-5 px-5">
        <div className="d-flex flex-column">
          <h2 className="fs-2 fw-semibold text-uppercase mb-3">Do More Than</h2>
          <h2 className="fs-2 fw-bold text-uppercase d-block">
            Just Playing Tennis
          </h2>

          <div className="container justify-content-between d-flex mt-5">
            <span className="fs-6 fw-normal text-uppercase details">
              Banquets & Events
            </span>
            <span className="fs-6 fw-normal text-uppercase d-none d-md-block">
              Classes for Adults
            </span>
            <span className="fs-6 fw-normal text-uppercase d-none d-md-block">
              Classes for Kids
            </span>
          </div>
          <div className="container mt-4">
            <p className="fs-6 fw-normal">
              Ever struggle with thinking of fun activities for your kids to do?
              Things they can participate in that might even foster a shared
              interest? We have a perfect solution for you: sign them up to play
              tennis. Tennis has so many more benefits than just getting your
              kids outside and running around. Obviously, we're pretty big fans
              ourselves, so we've come up with six reasons why you should
              introduce your little ones to this sport.
            </p>
          </div>
          <div className="d-block d-md-none mb-2">
            <img src={domoresm} alt="Do More image" className="img-fluid" />
          </div>
          <div className="d-block d-md-none mt-3 mb-2">
            <span className="d-block fs-6 fw-normal text-uppercase mb-4">
              Classes for Adults
            </span>
            <span className="fs-6 fw-normal text-uppercase">
              Classes for Kids
            </span>
          </div>
        </div>
        <div className="d-none d-md-block">
          <img src={domoremd} alt="Do More image" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
