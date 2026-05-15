import { useState } from "react"
import Layout from "../components/Layout"
import "../styles/CheckCode.css"

function CheckCode() {
  const [generatedCode, setGeneratedCode] =
    useState("")

  const [history, setHistory] = useState(() => {
    try {
      const savedCodes = localStorage.getItem("checkCodes")
      return savedCodes ? JSON.parse(savedCodes) : []
    } catch (error) {
      console.error("Failed to parse localStorage item:", error)
      return []
    }
  })
  const generateCode = () => {
    const chars =
      "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"

    let code = ""

    for (let i = 0; i < 8; i++) {
      code += chars.charAt(
        Math.floor(Math.random() * chars.length)
      )
    }

    const newCode = {
      code,
      createdAt: new Date().toLocaleString(),
      expires: "21 days",
    }

    const updatedHistory = [newCode, ...history]

    setGeneratedCode(code)
    setHistory(updatedHistory)

    localStorage.setItem(
      "checkCodes",
      JSON.stringify(updatedHistory)
    )
  }

  return (
    <Layout>
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <a href="/dashboard" className="govuk-back-link">
              Back
            </a>

            <h1 className="govuk-heading-xl checkcode-heading">
              Get your check code
            </h1>

            <p className="govuk-body-l">
              Create a temporary code to share your driving licence information.
            </p>

            <div className="intro-panel">
              <h2 className="govuk-heading-m">
                What the code allows
              </h2>

              <ul className="govuk-list govuk-list--bullet">
                <li>View your driving record</li>
                <li>Check vehicle entitlements</li>
                <li>Verify endorsements and points</li>
              </ul>
            </div>

            <div className="generate-card">
              <button
                className="govuk-button generate-btn"
                onClick={generateCode}
              >
                Generate check code
              </button>

              {generatedCode && (
                <div className="code-display">
                  <p className="govuk-body">
                    Your new check code
                  </p>

                  <div className="generated-code">
                    {generatedCode}
                  </div>

                  <p className="govuk-body-s expiry-text">
                    This code expires after 21 days.
                  </p>
                </div>
              )}
            </div>

            <div className="history-card">
              <h2 className="govuk-heading-m">
                Previous check codes
              </h2>

              {history.length === 0 ? (
                <div className="empty-history">
                  <p className="govuk-body">
                    No check codes generated yet.
                  </p>
                </div>
              ) : (
                <div className="history-list">
                  {history.map((item, index) => (
                    <div
                      className="history-item"
                      key={index}
                    >
                      <div className="history-left">
                        <span className="history-code">
                          {item.code}
                        </span>

                        <span className="history-date">
                          Generated on{" "}
                          {item.createdAt}
                        </span>
                      </div>

                      <div className="history-right">
                        <span className="expiry-pill">
                          {item.expires}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="security-panel">
              <h3 className="govuk-heading-s">
                Security information
              </h3>

              <p className="govuk-body">
                Only share your check code with organisations you trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CheckCode