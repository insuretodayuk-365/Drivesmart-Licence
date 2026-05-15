import Layout from "../components/Layout"
import "../styles/Penalties.css"

function Penalties() {
  const penalties = [
    {
      code: "SP30",
      offence: "Exceeding statutory speed limit",
      date: "12 February 2025",
      points: 3,
      status: "Active",
    },
    {
      code: "TS10",
      offence: "Failing to comply with traffic signal",
      date: "18 August 2024",
      points: 3,
      status: "Active",
    },
  ]

  const disqualification = {
    status: "Not disqualified",
    expiry: "No active bans",
  }

  const totalPoints = penalties.reduce(
    (sum, item) => sum + item.points,
    0
  )

  return (
    <Layout>
      <div className="govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <a href="/dashboard" className="govuk-back-link">
              Back
            </a>

            <h1 className="govuk-heading-xl penalties-heading">
              Penalties and disqualifications
            </h1>

            <div className="status-overview">
              <div className="overview-card">
                <span className="overview-number">
                  {totalPoints}
                </span>

                <span className="overview-label">
                  Current penalty points
                </span>
              </div>

              <div className="overview-card">
                <span className="overview-status success">
                  {disqualification.status}
                </span>

                <span className="overview-label">
                  Driving status
                </span>
              </div>
            </div>

            <div className="penalty-card">
              <h2 className="govuk-heading-m">
                Current endorsements
              </h2>

              {penalties.length > 0 ? (
                <div className="penalty-list">
                  {penalties.map((penalty, index) => (
                    <div
                      className="penalty-item"
                      key={index}
                    >
                      <div className="penalty-header">
                        <div>
                          <h3 className="govuk-heading-s">
                            {penalty.code}
                          </h3>

                          <p className="govuk-body offence-text">
                            {penalty.offence}
                          </p>
                        </div>

                        <div className="points-badge">
                          {penalty.points} points
                        </div>
                      </div>

                      <div className="penalty-details">
                        <div className="detail-row">
                          <span className="detail-label">
                            Offence date
                          </span>

                          <span className="detail-value">
                            {penalty.date}
                          </span>
                        </div>

                        <div className="detail-row">
                          <span className="detail-label">
                            Status
                          </span>

                          <span className="status-pill active">
                            {penalty.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <h3 className="govuk-heading-s">
                    No penalties recorded
                  </h3>

                  <p className="govuk-body">
                    You currently have no endorsements or penalty points.
                  </p>
                </div>
              )}
            </div>

            <div className="disqualification-card">
              <h2 className="govuk-heading-m">
                Disqualification status
              </h2>

              <div className="disqualification-content">
                <div className="green-banner">
                  <span className="green-dot"></span>
                  {disqualification.status}
                </div>

                <p className="govuk-body">
                  {disqualification.expiry}
                </p>
              </div>
            </div>

            <div className="warning-panel">
              <h3 className="govuk-heading-s">
                Important
              </h3>

              <p className="govuk-body">
                Penalty points remain on your driving record for 4 to 11 years depending on the offence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Penalties