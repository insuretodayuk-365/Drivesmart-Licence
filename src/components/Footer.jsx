import { Link } from "react-router-dom"
import "../styles/Footer.css"
import ukgovLogo from "../assets/logo/UKGOV.png";

function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-top-border"></div>

      <div className="govuk-width-container footer-container">
        <div className="footer-links-section">
          <div className="footer-column">
            <h2 className="govuk-heading-s footer-heading">
              Services and information
            </h2>

            <ul className="footer-list">
              <li>
                <Link to="/dashboard">
                  Your driving licence
                </Link>
              </li>

              <li>
                <Link to="/vehicles">
                  Vehicles you can drive
                </Link>
              </li>

              <li>
                <Link to="/penalties">
                  Penalties and disqualifications
                </Link>
              </li>

              <li>
                <Link to="/check-code">
                  Get your check code
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h2 className="govuk-heading-s footer-heading">
              Support
            </h2>

            <ul className="footer-list">
              <li>
                <a href="#">
                  Accessibility statement
                </a>
              </li>

              <li>
                <a href="#">
                  Privacy policy
                </a>
              </li>

              <li>
                <a href="#">
                  Cookies
                </a>
              </li>

              <li>
                <a href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-meta">
            <img className="govuk-logo" src={ukgovLogo} alt="GOV.UK" />

            <span>
              © Crown copyright
            </span>
          </div>

          <p className="footer-license">
            All content is available under the Open Government Licence v3.0
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer