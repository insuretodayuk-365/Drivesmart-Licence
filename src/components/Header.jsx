import { Link } from "react-router-dom";
import "../styles/Header.css";
import ukgovLogo from "../assets/logo/UKGOV.png";

function Header() {
  return (
    <>
      <header className="custom-gov-header" role="banner">
        <div className="govuk-width-container header-container">
          <Link to="/" className="govuk-logo-wrapper">
            <img className="govuk-logo" src={ukgovLogo} alt="GOV.UK" />
            <span className="govuk-logo-text">
              GOV<span className="govuk-logo-dot" aria-hidden="true"></span>UK
            </span>
          </Link>
        </div>
        <div className="header-subtitle-bar">
          <div className="govuk-width-container subtitle-content">
            <p className="page-title">View your driving licence information</p>
          </div>
        </div>
      </header>
      <div className="govuk-welcome-panel">
        <div className="govuk-width-container">
          <p className="page-note">
            We welcome your{" "}
            <a href="/" className="govuk-link">
              feedback
            </a>{" "}
            to help us improve this service.
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
