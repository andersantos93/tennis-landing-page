import "../styles/contact.css";

import location from "../assets/location.png";
import mail from "../assets/mail.png";
import phone from "../assets/phone.png";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";

const icons = [
  { name: instagram, alt: "Instagram image" },
  { name: facebook, alt: "Facebook image" },
  { name: twitter, alt: "Twitter image" },
  { name: whatsapp, alt: "Whatsapp image" },
];

export default function Contact() {
  return (
    <section className="contact">
      <div className="d-flex justify-content-center gap-2 custom-flex">
        <div className="d-flex flex-column gap-4">
          <div className="d-flex">
            <img
              className="me-2"
              src={location}
              alt="Location image"
              height="35"
              width="35"
            />
            <span>
              54421 Tennesse hwy
              <br />
              Alexandria, VA, USA, 22303
            </span>
          </div>
          <div className="d-flex">
            <img
              className="me-2"
              src={mail}
              alt="Mail image"
              width="30"
              height="22"
            />
            <span>info@palmatennis.com</span>
          </div>
          <div className="d-flex">
            <img className="me-2" src={phone} alt="Phone image" />
            <span>+34 971 282 000</span>
          </div>
        </div>
        <hr className="custom-hr" />
        <div className="d-flex flex-column gap-2">
          <div>
            <span>Palma de Mallorca</span>
          </div>
          <div className="d-flex flex-row gap-5">
            <div>
              <span className="text-uppercase">Scattered Clouds</span>
              <br />
              <span className="text-uppercase">Humidity 73%</span>
              <br />
              <span className="text-uppercase">Wind: 6M/S SW</span>
              <br />
              <span className="text-uppercase">H 21 L 15</span>
            </div>
            <div>
              <span className="fs-1 fw-bolder default-green-600">21º</span>
            </div>
          </div>
        </div>
        <hr className="custom-hr" />
        <div className="d-flex flex-row gap-3 gap-md-5">
          {icons.map((icon, index) => {
            return (
              <div key={index}>
                <img src={icon.name} alt={icon.alt} className="img-fluid" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
