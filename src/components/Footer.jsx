import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container d-flex flex-column flex-md-row gap-2 gap-md-5 justify-content-start p-4">
        <a
          href="#"
          className="text-uppercase text-decoration-none fw-light text-white"
        >
          2017 © Proshot. All Rights Reserved
        </a>
        <a
          href="#"
          className="text-uppercase fw-light default-green-600 text-decoration-none "
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="text-uppercase fw-light default-green-600 text-decoration-none"
        >
          Terms of Use
        </a>
      </div>
    </footer>
  );
}
