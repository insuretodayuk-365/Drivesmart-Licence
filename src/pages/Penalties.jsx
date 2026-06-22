import { useState} from "react";

const defaultPenaltiesData = [
  {
    id: "in10",
    title: "Using a vehicle uninsured against third party risks (IN10)",
    points: "6",
    details: [
      { label: "Offence date", value: "8 October 2024" },
      { label: "Conviction date", value: "6 October 2025" },
      { label: "Penalty point expiry date", value: "8 October 2027" },
      { label: "Endorsement removal date", value: "8 October 2028" },
      { label: "Fine", value: "£300.00" },
      { label: "Court or fixed penalty office", value: "3063 North East Wales Magistrates' Court" },
    ]
  },
  {
    id: "sp50",
    title: "Exceeding speed limit on a motorway (SP50)",
    points: "",
    details: [
      { label: "Offence date", value: "8 October 2024" },
      { label: "Conviction date", value: "6 October 2025" },
      { label: "Endorsement removal date", value: "8 October 2028" },
      { label: "Fine", value: "£200.00" },
      { label: "Court or fixed penalty office", value: "3063 North East Wales Magistrates' Court" },
    ]
  },
  {
    id: "sp30_1",
    title: "Exceeding statutory speed limit on a public road (SP30)",
    points: "4",
    details: [
      { label: "Offence date", value: "4 March 2024" },
      { label: "Conviction date", value: "1 October 2024" },
      { label: "Penalty point expiry date", value: "4 March 2027" },
      { label: "Endorsement removal date", value: "4 March 2028" },
      { label: "Fine", value: "£440.00" },
      { label: "Court or fixed penalty office", value: "1720 Greater Manchester Magistrates' Court" },
    ]
  },
  {
    id: "sp30_2",
    title: "Exceeding statutory speed limit on a public road (SP30)",
    points: "3",
    details: [
      { label: "Offence date", value: "28 December 2023" },
      { label: "Conviction date", value: "26 July 2024" },
      { label: "Penalty point expiry date", value: "28 December 2026" },
      { label: "Endorsement removal date", value: "28 December 2027" },
      { label: "Fine", value: "£220.00" },
      { label: "Court or fixed penalty office", value: "3063 North East Wales Magistrates' Court" },
    ]
  }
];

export default function Penalties() {
  const [penalties, setPenalties] = useState(() => {
    const savedData = localStorage.getItem("penaltiesData");
    return savedData ? JSON.parse(savedData) : defaultPenaltiesData;
  });

  const [showAll, setShowAll] = useState(true);
  const [sections, setSections] = useState({
    in10: true,
    sp50: true,
    sp30_1: true,
    sp30_2: true,
  });

  const toggleAll = () => {
    const nextState = !showAll;
    setShowAll(nextState);
    setSections({
      in10: nextState,
      sp50: nextState,
      sp30_1: nextState,
      sp30_2: nextState,
    });
  };

  const toggleSection = (id) => {
    setSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePointsChange = (penaltyId, newValue) => {
    const updated = penalties.map((p) => 
      p.id === penaltyId ? { ...p, points: newValue } : p
    );
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated));
  };

  const handleDetailChange = (penaltyId, detailIndex, newValue) => {
    const updated = penalties.map((p) => {
      if (p.id === penaltyId) {
        const newDetails = [...p.details];
        newDetails[detailIndex] = { ...newDetails[detailIndex], value: newValue };
        return { ...p, details: newDetails };
      }
      return p;
    });
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated));
  };

  return (
    <div className="penalties-content">
      <style>{`
        .penalties-content {
          padding: 20px 20px;
          font-family: "GDS Transport", arial, sans-serif;
          color: #0b0c0c;
        }
        .penalties-heading {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .penalties-text {
          font-size: 1.1875rem;
          margin-bottom: 20px;
          line-height: 1.31578;
        }
        .gov-link {
          color: #1d70b8;
          text-decoration: underline;
          text-decoration-thickness: max(1px, .0625rem);
          text-underline-offset: .1em;
        }
        .gov-link:hover {
          color: #003078;
          text-decoration-thickness: max(3px, .1875rem);
        }
        .hide-all-btn, .penalty-toggle {
          background: transparent;
          border: none;
          color: #1d70b8;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          font-size: 1.1875rem;
          padding: 0;
          margin-bottom: 20px;
          text-decoration: underline;
          text-decoration-thickness: max(1px, .0625rem);
          text-underline-offset: .1em;
        }
        .hide-all-btn:hover, .penalty-toggle:hover {
          color: #003078;
          text-decoration-thickness: max(3px, .1875rem);
        }
        .accordion-icon {
          margin-right: 8px;
          flex-shrink: 0;
        }
        .penalty-divider {
          border: none;
          border-top: 1px solid #b1b4b6;
          margin: 0 0 30px 0;
        }
        .penalty-group {
          margin-bottom: 40px;
        }
        .penalty-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0 0 10px 0;
        }
        .penalty-points-text {
          font-size: 1.1875rem;
          margin: 0 0 15px 0;
          display: flex;
          align-items: center;
        }
        .penalty-points-text strong {
          font-weight: 700;
        }
        .penalty-table-wrapper {
          border-top: 1px solid #b1b4b6;
        }
        .penalty-row {
          display: flex;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #b1b4b6;
        }
        .penalty-label {
          width: 50%;
          font-weight: 700;
          font-size: 1.1875rem;
        }
        .penalty-value {
          width: 50%;
          font-size: 1.1875rem;
        }
        
        /* Input Styling for Edits */
        .penalty-edit-input {
          font-family: inherit;
          font-size: 1.1875rem;
          padding: 5px;
          border: 2px solid transparent; /* Invisible border until focus/hover */
          width: 100%;
          background: transparent;
        }
        .penalty-edit-input:hover {
          border: 2px solid #b1b4b6;
        }
        .penalty-edit-input:focus {
          outline: 3px solid #fd0; /* GOV.UK Focus Yellow */
          box-shadow: inset 0 0 0 2px #0b0c0c;
          border: 2px solid #0b0c0c;
          background: #fff;
        }
        .points-input {
          width: 60px;
          margin-left: 8px;
          font-weight: 700;
        }
      `}</style>

      <h2 className="penalties-heading">Penalties and disqualifications</h2>

      <p className="penalties-text">
        For more information go to the{" "}
        <a href="/" className="gov-link">penalty points</a>{" "}
        and{" "}
        <a href="/" className="gov-link">disqualification</a>{" "}
        sections on GOV.UK.
      </p>

      <button className="hide-all-btn" onClick={toggleAll}>
        <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d={showAll ? "M5 9l3-3 3 3" : "M5 7l3 3 3-3"} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{showAll ? "Hide all sections" : "Show all sections"}</span>
      </button>

      <hr className="penalty-divider" />

      {penalties.map((penalty) => (
        <div className="penalty-group" key={penalty.id}>
          <h3 className="penalty-title">{penalty.title}</h3>
          
          {penalty.points !== null && (
            <div className="penalty-points-text">
              Penalty points: 
              <input 
                className="penalty-edit-input points-input"
                type="text"
                value={penalty.points}
                onChange={(e) => handlePointsChange(penalty.id, e.target.value)}
              />
            </div>
          )}

          <button className="penalty-toggle" onClick={() => toggleSection(penalty.id)}>
            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d={sections[penalty.id] ? "M5 9l3-3 3 3" : "M5 7l3 3 3-3"} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>{sections[penalty.id] ? "Hide" : "Show"}</span>
          </button>

          {sections[penalty.id] && (
            <div className="penalty-table-wrapper">
              {penalty.details.map((detail, index) => (
                <div className="penalty-row" key={index}>
                  <div className="penalty-label">{detail.label}</div>
                  <div className="penalty-value">
                    <input 
                      className="penalty-edit-input"
                      type="text"
                      value={detail.value}
                      onChange={(e) => handleDetailChange(penalty.id, index, e.target.value)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}