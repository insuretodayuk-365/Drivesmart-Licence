import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/EnterDetails.css";

function EnterDetails() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    licenceNumber: "",
    niNumber: "",
    postcode: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.licenceNumber.trim()) {
      tempErrors.licenceNumber = "Enter your driving licence number";
    }

    if (!formData.niNumber.trim()) {
      tempErrors.niNumber = "Enter your National Insurance number";
    }

    if (!formData.postcode.trim()) {
      tempErrors.postcode = "Enter the postcode on your driving licence";
    }

    if (!formData.consent) {
      tempErrors.consent = "You must confirm the information is correct";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem(
      "licenceData",
      JSON.stringify({
        fullName: "MR NAEEM BUTT AHMED",
        gender: "Male",
        dob: "29 October 1969",
        address: "Apartment 6 107 Hazelbottom Road Manchester M8 0GQ",
        licenceStatus: "You have a full driving licence",
        validFrom: "22 June 2021",
        validTo: "21 June 2031",
        licenceNumber: formData.licenceNumber,
        issueNumber: "14",
      }),
    );

    navigate("/dashboard");
  };

  return (
    <Layout>
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="left-content">
            {/* <a href="/" className="govuk-back-link">
              Back
            </a> */}

            <h1 className="govuk-heading-l details-heading">Enter details</h1>

            <p className="govuk-body">
              You should only use this service to view or share your own driving
              licence.
            </p>
            <p className="govuk-body">
              Use a different service if you want to
              <a href="/" className="govuk-link">
                check someone else’s driving licence information
              </a>
              .
            </p>

            <form onSubmit={handleSubmit}>
              <div
                className={`govuk-form-group ${
                  errors.licenceNumber ? "govuk-form-group--error" : ""
                }`}
              >
                <label
                  className="govuk-label govuk-label--s"
                  htmlFor="licenceNumber"
                >
                  Your driving licence number
                </label>
                <span className="govuk-hint">Example: MORGA657054SM9IJ</span>

                {errors.licenceNumber && (
                  <p className="govuk-error-message">
                    <span className="govuk-visually-hidden">Error:</span>
                    {errors.licenceNumber}
                  </p>
                )}

                <input
                  id="licenceNumber"
                  className="govuk-input govuk-input--width-20"
                  name="licenceNumber"
                  value={formData.licenceNumber}
                  onChange={handleChange}
                />
                <p className="help-link">
                  <svg
                    className="help-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                  >
                    <path fill="#1d70b8" d="M0 0l8 6-8 6z" />
                  </svg>
                  <a href="/" className="govuk-link">
                    Where to find your driving licence number
                  </a>
                </p>
              </div>

              <div
                className={`govuk-form-group ${
                  errors.niNumber ? "govuk-form-group--error" : ""
                }`}
              >
                <label
                  className="govuk-label govuk-label--s"
                  htmlFor="niNumber"
                >
                  Your National Insurance number
                </label>
                <span className="govuk-hint">Example: QQ123456C</span>

                {errors.niNumber && (
                  <p className="govuk-error-message">
                    <span className="govuk-visually-hidden">Error:</span>
                    {errors.niNumber}
                  </p>
                )}

                <input
                  id="niNumber"
                  className="govuk-input govuk-input--width-20"
                  name="niNumber"
                  value={formData.niNumber}
                  onChange={handleChange}
                />
                <p className="help-link">
                  <svg
                    className="help-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                  >
                    <path fill="#1d70b8" d="M0 0l8 6-8 6z" />
                  </svg>
                  <a href="/" className="govuk-link">
                    Where to find your National Insurance Number
                  </a>
                </p>
              </div>

              <div
                className={`govuk-form-group ${
                  errors.postcode ? "govuk-form-group--error" : ""
                }`}
              >
                <label
                  className="govuk-label govuk-label--s"
                  htmlFor="postcode"
                >
                  Postcode
                </label>
                <span className="govuk-hint">Example: EH1 9SP</span>

                {errors.postcode && (
                  <p className="govuk-error-message">
                    <span className="govuk-visually-hidden">Error:</span>
                    {errors.postcode}
                  </p>
                )}

                <input
                  id="postcode"
                  className="govuk-input govuk-input--width-10"
                  name="postcode"
                  value={formData.postcode}
                  onChange={handleChange}
                />
              </div>

              <div className="important-box">
                <h3 className="important-heading">Important</h3>
                <p className="important-text">
                  To access this service online, details from your DVLA record
                  and your National Insurance number will be shared with other
                  government departments (HMRC and DWP) to check your identity,
                  as described in our{" "}
                  <a href="/" className="govuk-link">
                    privacy policy
                  </a>
                  .
                </p>

                <div className="govuk-checkboxes">
                  <div className="govuk-checkboxes__item">
                    <input
                      className="govuk-checkboxes__input"
                      id="consent"
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                    />
                    <label
                      className="govuk-label govuk-checkboxes__label"
                      htmlFor="consent"
                    >
                      I confirm, I would like to use this service and understand
                      that my data will be shared as explained above.
                    </label>
                  </div>
                </div>

                {errors.consent && (
                  <p className="govuk-error-message consent-error">
                    <span className="govuk-visually-hidden">Error:</span>
                    {errors.consent}
                  </p>
                )}
              </div>

              <button type="submit" className="govuk-button continue-btn">
                View now
              </button>
            </form>

            <p className="govuk-body">
              Don't know your driving licence number?{" "}
              <a href="/" className="govuk-link">
                Search for your licence using your personal details
              </a>
            </p>
            <p className="govuk-body">
              Alternatively, you can return to the{" "}
              <a href="/" className="govuk-link">
                Start Now
              </a>{" "}
              page
            </p>
          </div>

          <aside className="support-panel">
            <h2 className="govuk-heading-s support-heading">
              Do you share your driving licence regularly?
            </h2>
            <p className="govuk-body support-copy">
              Sign in to your
              <a href="/" className="govuk-link">
                driver and vehicles account
              </a>
              to get a check code quickly and easily without needing to verify
              your identity.
            </p>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default EnterDetails;
