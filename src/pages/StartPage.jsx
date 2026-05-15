import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/StartPage.css";

function StartPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="govuk-width-container">
        
        {/* Added Breadcrumbs to match the image */}
        <div className="govuk-breadcrumbs">
          <ol className="govuk-breadcrumbs__list">
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="/">Home</a>
            </li>
            <li className="govuk-breadcrumbs__list-item">
              <span className="govuk-breadcrumbs__separator"> &gt; </span>
              <a className="govuk-breadcrumbs__link" href="/">Driving and transport</a>
            </li>
            <li className="govuk-breadcrumbs__list-item">
              <span className="govuk-breadcrumbs__separator"> &gt; </span>
              <a className="govuk-breadcrumbs__link" href="/">Driving licences</a>
            </li>
          </ol>
        </div>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl start-heading">
              View or share your driving licence information
            </h1>

            <p className="govuk-body-l">
              You can view or share your driving licence information if your
              licence was issued in England, Wales or Scotland.
            </p>

            {/* Corrected Warning Box structure */}
            <div className="warning-box">
              <span className="warning-icon" aria-hidden="true">!</span>
              <strong className="warning-text">
                It's a criminal offence to obtain someone else's personal
                information without their permission.
              </strong>
            </div>

            <p className="govuk-body">Use this service to:</p>

            <ul className="govuk-list govuk-list--bullet">
              <li>
                view your driving record, for example vehicles you can drive
              </li>
              <li>check your penalty points or disqualifications</li>
              <li>
                create a licence 'check code' to share your driving record with someone,
                for example a car hire company
              </li>
            </ul>

            <p className="govuk-body">
              The check code will be valid for 21 days.
            </p>

            <h2 className="govuk-heading-m section-heading">
              Before you start
            </h2>

            <p className="govuk-body">You'll need:</p>

            <ul className="govuk-list govuk-list--bullet">
              <li>your driving licence number</li>
              <li>
                your National Insurance number -{" "}
                <a href="/" className="govuk-link">
                  find your National Insurance number if you've lost it
                </a>
              </li>
              <li>the postcode on your driving licence</li>
            </ul>

            <div className="info-card">
              <p className="govuk-body">
                This service is also available{" "}
                <a href="/" className="govuk-link">
                  in Welsh (Cymraeg)
                </a>
                .
              </p>
            </div>

            <button
              className="govuk-button govuk-button--start start-button"
              onClick={() => navigate("/enter-details")}
            >
              Start now
              <svg
                className="govuk-button__start-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="17.5"
                height="19"
                viewBox="0 0 33 40"
                aria-hidden="true"
                focusable="false"
              >
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
              </svg>
            </button>

            <h2 className="govuk-heading-m">Other ways to apply</h2>

            <p className="govuk-body">
              You can also get a licence 'check code':
            </p>

            <ul className="govuk-list govuk-list--bullet">
              <li>
                through your{" "}
                <a href="/" className="govuk-link">
                  driver and vehicles account
                </a>
              </li>
              <li>over the phone</li>
            </ul>

            <div className="contact-info">
              <p className="govuk-body">
                <strong>DVLA contact centre</strong>
              </p>
              <p className="govuk-body">0300 083 0013</p>
              <p className="govuk-body">Monday to Friday, 8am to 7pm</p>
              <p className="govuk-body">Saturday, 8am to 2pm</p>
              <p>
                <a href="/" className="govuk-link">
                  Find out about call charges
                </a>
              </p>
            </div>

            <hr className="section-divider" />

            <h2 className="govuk-heading-m">Explore the topic</h2>

            <ul className="govuk-list">
              <li>
                <a href="/" className="govuk-link">
                  Driving in the UK and abroad
                </a>
              </li>
              <li>
                <a href="/" className="govuk-link">
                  Driving licences
                </a>
              </li>
              <li>
                <a href="/" className="govuk-link">
                  Driving tests and learning to drive or ride
                </a>
              </li>
            </ul>
          </div>

          <aside className="govuk-grid-column-one-third">
            <div className="related-content">
              <h2 className="related-heading">Related content</h2>
              <ul className="related-list">
                <li>
                  <a href="/" className="govuk-link">
                    Driving licence codes
                  </a>
                </li>
                <li>
                  <a href="/" className="govuk-link">
                    Driving licence categories
                  </a>
                </li>
                <li>
                  <a href="/" className="govuk-link">
                    Check someone's driving licence information
                  </a>
                </li>
                <li>
                  <a href="/" className="govuk-link">
                    Driver and vehicles account: sign in or set up
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default StartPage;