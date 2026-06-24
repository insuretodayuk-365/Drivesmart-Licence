import { useState } from "react";

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
    const updatedSections = {};
    penalties.forEach(p => {
      updatedSections[p.id] = nextState;
    });
    setSections(updatedSections);
  };

  const toggleSection = (id) => {
    setSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleTitleChange = (penaltyId, newTitle) => {
    const updated = penalties.map((p) =>
      p.id === penaltyId ? { ...p, title: newTitle } : p
    );
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated));
  };

  const handlePointsChange = (penaltyId, newValue) => {
    const updated = penalties.map((p) => 
      p.id === penaltyId ? { ...p, points: newValue } : p
    );
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated));
  };

  const handleDetailLabelChange = (penaltyId, detailIndex, newLabel) => {
    const updated = penalties.map((p) => {
      if (p.id === penaltyId) {
        const newDetails = [...p.details];
        newDetails[detailIndex] = { ...newDetails[detailIndex], label: newLabel };
        return { ...p, details: newDetails };
      }
      return p;
    });
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

  const handleRemoveDetail = (penaltyId, detailIndex) => {
    const updated = penalties.map((p) => {
      if (p.id === penaltyId) {
        const newDetails = p.details.filter((_, idx) => idx !== detailIndex);
        return { ...p, details: newDetails };
      }
      return p;
    });
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated));
  };

  const handleAddDetail = (penaltyId) => {
    const updated = penalties.map((p) => {
      if (p.id === penaltyId) {
        return {
          ...p,
          details: [...p.details, { label: "", value: "" }]
        };
      }
      return p;
    });
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated));
  };

  const handleRemoveSection = (penaltyId) => {
    const updated = penalties.filter(p => p.id !== penaltyId);
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated));
  };

  const handleAddSection = () => {
    const newId = `new_${Date.now()}`;
    const newSection = {
      id: newId,
      title: "",
      points: "",
      details: [
        { label: "Offence date", value: "" },
        { label: "Conviction date", value: "" },
        { label: "Penalty point expiry date", value: "" },
        { label: "Endorsement removal date", value: "" },
        { label: "Fine", value: "" },
        { label: "Court or fixed penalty office", value: "" },
      ]
    };
    const updated = [...penalties, newSection];
    setPenalties(updated);
    localStorage.setItem("penaltiesData", JSON.stringify(updated)); 
    setSections(prev => ({ ...prev, [newId]: true })); 
  };

  // const handleReset = () => {
  //   setPenalties(defaultPenaltiesData);
  //   localStorage.removeItem("penaltiesData");
  //   setSections({ in10: true, sp50: true, sp30_1: true, sp30_2: true });
  // };

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
          margin-bottom: 15px; /* Tightened from 20px */
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
          position: relative;
          margin-bottom: 40px;
        }
        .remove-section-btn {
          position: absolute;
          top: 0;
          right: 0;
          background: transparent;
          border: none;
          color: #d4351c;
          text-decoration: underline;
          cursor: pointer;
          font-size: 1.1875rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .penalty-group:hover .remove-section-btn {
          opacity: 1;
          pointer-events: auto;
        }
        .remove-section-btn:hover {
          color: #942514;
          text-decoration-thickness: max(3px, .1875rem);
        }
        
        textarea.penalty-title {
          font-size: 1.5rem !important;
          font-weight: 700;
          line-height: 1.25;
          margin: 0 0 5px -7px; /* Tightened bottom margin, pulled left to align */
          width: 85%;
          display: block;
          height: 44px; /* Mathematically tight fit for 1 line */
          resize: vertical; /* Allows pulling down if more lines are needed */
          overflow: hidden;
        }

        .penalty-points-text {
          font-size: 1.1875rem;
          margin: 0 0 10px 0; /* Tightened from 15px */
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
          position: relative; 
        }
        
        .remove-detail-btn {
          position: absolute;
          right: 0;
          background: transparent;
          border: none;
          color: #d4351c;
          text-decoration: underline;
          cursor: pointer;
          font-size: 1rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .penalty-row:hover .remove-detail-btn {
          opacity: 1;
          pointer-events: auto;
        }
        .remove-detail-btn:hover {
          color: #942514;
          text-decoration-thickness: 2px;
        }

        .penalty-label {
          width: 50%;
        }
        
        .penalty-edit-label-input {
          font-family: inherit;
          font-weight: 700;
          font-size: 1.1875rem;
          padding: 5px;
          border: 2px solid transparent;
          width: 100%;
          background: transparent;
          margin-left: -7px; /* Pull left to match non-edit alignment */
        }
        .penalty-edit-label-input::placeholder {
          color: #505a5f;
          font-style: italic;
          font-weight: 400;
        }
        .penalty-edit-label-input:hover {
          border: 2px solid #b1b4b6;
        }
        .penalty-edit-label-input:focus {
          outline: 3px solid #fd0; 
          box-shadow: inset 0 0 0 2px #0b0c0c;
          border: 2px solid #0b0c0c;
          background: #fff;
        }

        .penalty-value {
          width: 50%;
          font-size: 1.1875rem;
          padding-right: 80px; 
        }
        .penalty-edit-input {
          font-family: inherit;
          font-size: 1.1875rem;
          padding: 5px;
          border: 2px solid transparent; 
          width: 100%;
          background: transparent;
          resize: none;
        }
        /* Only apply the left-pull to inputs that aren't the title or points box */
        .penalty-value .penalty-edit-input {
           margin-left: -7px;
        }
        .penalty-edit-input::placeholder {
          color: #505a5f;
          font-style: italic;
        }
        .penalty-edit-input:hover {
          border: 2px solid #b1b4b6;
        }
        .penalty-edit-input:focus {
          outline: 3px solid #fd0; 
          box-shadow: inset 0 0 0 2px #0b0c0c;
          border: 2px solid #0b0c0c;
          background: #fff;
        }
        .points-input {
          width: 60px;
          margin-left: 8px;
          font-weight: 700;
        }
        .penalties-empty-text {
          font-size: 1.1875rem;
          margin-top: 20px;
        }
        .reset-btn {
          margin-top: 15px;
          background: transparent;
          border: none;
          color: #1d70b8;
          text-decoration: underline;
          cursor: pointer;
          font-size: 1rem;
          padding: 0;
        }
        .reset-btn:hover {
          color: #003078;
        }
        
        .add-detail-btn {
          background: transparent;
          border: none;
          color: #1d70b8;
          text-decoration: underline;
          cursor: pointer;
          font-size: 1.1875rem;
          padding: 10px 5px;
          display: block;
          margin-top: 5px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .penalty-table-wrapper:hover .add-detail-btn {
          opacity: 1;
          pointer-events: auto;
        }
        .add-detail-btn:hover {
          color: #003078;
          text-decoration-thickness: 2px;
        }

        .add-btn-wrapper {
          padding: 3px 0;
          margin-top: 20px;
          // border-top: 1px solid #b1b4b6;
        }
        .add-btn-wrapper .gov-btn {
          background-color: #00703c;
          color: #fff;
          font-family: "GDS Transport", arial, sans-serif;
          font-size: 1rem;
          padding: 2px 2px;
          border: 2px solid transparent;
          box-shadow: 0 2px 0 #002d18;
          cursor: pointer;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s, background-color 0.2s;
        }
        .add-btn-wrapper:hover .gov-btn {
          opacity: 1;
          pointer-events: auto;
        }
        .add-btn-wrapper .gov-btn:hover {
          background-color: #005a30;
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

      {penalties.length === 0 ? (
        <div>
          <p className="penalties-empty-text">
            <strong>You do not have any penalties and disqualifications.</strong>
          </p>
          {/* <button className="reset-btn" onClick={handleReset}>
            Restore default penalties (for testing)
          </button> */}
        </div>
      ) : (
        <>
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
              
              <button 
                className="remove-section-btn" 
                onClick={() => handleRemoveSection(penalty.id)}
              >
                Remove section
              </button>

              <textarea 
                className="penalty-edit-input penalty-title"
                value={penalty.title}
                onChange={(e) => handleTitleChange(penalty.id, e.target.value)}
                placeholder="Click to enter title (e.g. SP30)"
              />
              
              {penalty.points !== null && (
                <div className="penalty-points-text">
                  Penalty points: 
                  <input 
                    className="penalty-edit-input points-input"
                    type="text"
                    value={penalty.points || ""}
                    onChange={(e) => handlePointsChange(penalty.id, e.target.value)}
                    placeholder="0"
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
                      <div className="penalty-label">
                        <input
                          className="penalty-edit-label-input"
                          type="text"
                          value={detail.label}
                          onChange={(e) => handleDetailLabelChange(penalty.id, index, e.target.value)}
                          placeholder="Row title (e.g. Fine)"
                        />
                      </div>
                      <div className="penalty-value">
                        <input 
                          className="penalty-edit-input"
                          type="text"
                          value={detail.value}
                          onChange={(e) => handleDetailChange(penalty.id, index, e.target.value)}
                          placeholder="Row details"
                        />
                      </div>
                      
                      <button 
                        className="remove-detail-btn"
                        onClick={() => handleRemoveDetail(penalty.id, index)}
                        title="Remove this row"
                      >
                        Remove row
                      </button>

                    </div>
                  ))}
                  
                  <button 
                    className="add-detail-btn"
                    onClick={() => handleAddDetail(penalty.id)}
                  >
                    + Add another row
                  </button>

                </div>
              )}
            </div>
          ))}
        </>
      )}

      <div className="add-btn-wrapper">
        <button className="gov-btn" onClick={handleAddSection}>
          Add a penalty section
        </button>
      </div>

    </div>
  );
}