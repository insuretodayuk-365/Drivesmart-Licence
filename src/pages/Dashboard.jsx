import { useState } from "react";
import Layout from "../components/Layout";
import "../styles/Dashboard.css";
import mopedsIcon from "../assets/Modped.png";
import motorcycleIcon from "../assets/Motorcycle.png";
import lightIcon from "../assets/light.png";
import carsIcon from "../assets/cars.png";
import carBIcon from "../assets/car_cat_b.png";
import carBEIcon from "../assets/car_cat_be.png";

function Dashboard() {
  const savedData = JSON.parse(localStorage.getItem("licenceData")) || {};

  const [data, setData] = useState({
    fullName: savedData.fullName || "MR NAEEM BUTT AHMED",
    gender: savedData.gender || "Male",
    dob: savedData.dob || "29 October 1969",
    address:
      savedData.address ||
      "Apartment 6\n107 Hazelbottom Road\nManchester\nM8 0GQ",
    licenceStatus: savedData.licenceStatus || "You have a full driving licence",
    validFrom: savedData.validFrom || "22 June 2021",
    validTo: savedData.validTo || "21 June 2031",
    licenceNumber: savedData.licenceNumber || "AHMED610299NB9NM",
    issueNumber: savedData.issueNumber || "14",
  });

  const [activeTab, setActiveTab] = useState("details");

  const [showAllVehicles, setShowAllVehicles] = useState(true);

  const [vehicleSections, setVehicleSections] = useState({
    mopeds: true,
    motorcycles: true,
    lightVehicles: true,
    cars: true,
    other: true,
    "prov-motorcycles": true,
    "prov-cars": true,
    "prov-other": true,
  });

  const toggleSection = (key) => {
    setVehicleSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleAllSections = () => {
    const next = !showAllVehicles;

    setShowAllVehicles(next);

    setVehicleSections({
      mopeds: next,
      motorcycles: next,
      lightVehicles: next,
      cars: next,
      other: next,
      "prov-motorcycles": next,
      "prov-cars": next,
      "prov-other": next,
    });
  };

  const handleChange = (field, value) => {
    const updated = {
      ...data,
      [field]: value,
    };

    setData(updated);

    localStorage.setItem("licenceData", JSON.stringify(updated));
  };

  const detailsFields = [
    {
      label: "Driver's full name",
      key: "fullName",
      editable: true,
    },
    {
      label: "Sex",
      key: "gender",
    },
    {
      label: "Date of birth",
      key: "dob",
    },
    {
      label: "Address",
      key: "address",
      multiline: true,
      editable: true,
    },
  ];

  const licenceFields = [
    {
      label: "Licence status",
      key: "licenceStatus",
    },
    {
      label: "Licence valid from",
      key: "validFrom",
    },
    {
      label: "Licence valid to",
      key: "validTo",
    },
    {
      label: "Driving licence number",
      key: "licenceNumber",
    },
    {
      label: "Licence issue number",
      key: "issueNumber",
    },
  ];

  const vehicleData = [
    {
      id: "mopeds",
      title: "Mopeds",
      category: "Category P, Q and AM",
      icon: mopedsIcon,
      items: [
        {
          code: "Q",
          icon: mopedsIcon,
          valid: "Valid from 22 June 2021\nValid to 28 October 2039",
          restrictions:
            "122 Valid on successful completion of Basic Moped Training Course (CBT)",
          drive:
            "Motor tricycles with fewer than 4 wheels which, if propelled by an internal combustion engine, has a cylinder capacity not exceeding 50 cc and, if not equipped with pedals by means of which the vehicle is capable of being propelled, has a maximum design speed not exceeding 25 km/h",
        },
        {
          code: "P",
          icon: mopedsIcon,
          valid: "Valid from 22 March 2011\nValid to 28 October 2039",
          restrictions:
            "122 Valid on successful completion of Basic Moped Training Course (CBT)",
          drive:
            "Motor tricycles with fewer than 4 wheels with a maximum design speed exceeding 45 kilometres per hour (km/h) but not exceeding 50 km/h and which if propelled by an internal combustion engine, has a cylinder capacity not exceeding 50 cc",
        },
        {
          code: "AM",
          icon: mopedsIcon,
          valid: "Valid from 22 June 2021\nValid to 28 October 2039",
          restrictions:
            "122 Valid on successful completion of Basic Moped Training Course (CBT)",
          drive:
            "2-wheel vehicles or 3-wheel vehicles with a maximum design speed of over 25 km/h and not more than 45 km/h. Light quadricycle with 4 wheels whose unladen mass is not more than 350 kg, not including the mass of the batteries in the case of electric vehicles, whose maximum speed is over 25 km/h and not more than 45 km/h",
        },
      ],
    },

    {
      id: "motorcycles",
      title: "Motorcycles",
      category: "Category A",
      icon: motorcycleIcon,
      items: [
        {
          code: "A",
          icon: motorcycleIcon,
          valid: "Valid from 19 January 2013\nValid to 28 October 2039",
          restrictions: "79(3) Restricted to tricycles",
          drive:
            "A motorcycle of a power exceeding 35 kW or with a power to weight ratio exceeding 0.2 kW per kg, or A motorcycle of a power not exceeding 35 kW with a power to weight ratio not exceeding 0.2 kW per kg and derived from a vehicle of more than double its power. A motor tricycle with a power exceeding 15 kW",
        },
      ],
    },

    {
      id: "light",
      title: "Light vehicles and quad bikes",
      category: "Category B1",
      icon: lightIcon,
      items: [
        {
          code: "B1",
          icon: lightIcon,
          valid: "Valid from 22 March 2011\nValid to 28 October 2039",
          restrictions: "78 Restricted to Vehicles with Automatic Transmission",
          drive:
            "Motor vehicles with 4 wheels up to 400 kg unladen or 550 kg if they're designed for carrying goods",
        },
      ],
    },

    {
      id: "cars",
      title: "Cars",
      category: "Category B and BE",
      icon: carsIcon,
      items: [
        {
          code: "B",
          icon: carBIcon,
          valid: "Valid from 22 March 2011\nValid to 28 October 2039",
          restrictions:
            "78 Restricted to Vehicles with Automatic Transmission\n70 Exchange of licence",
          drive:
            "Vehicles up to 3,500 kg Maximum Authorised Mass (MAM) with up to 8 passenger seats and driver (with a trailer up to 750 kg). Can also tow heavier trailers if the total weight of vehicle and trailer isn't more than 3,500 kg. Provisional category B licences have no entitlement to tow a trailer. Provisional category B entitlement only allows the holder to learn to drive manual transmission vehicles in provisional category B licence",
        },
        {
          code: "BE",
          icon: carBEIcon,
          valid: "Valid from 16 December 2021\nValid to 28 October 2039",
          restrictions: "78 Restricted to Vehicles with Automatic Transmission",
          drive:
            "Vehicles up to 3,500 kg Maximum Authorised Mass (MAM). You can drive a vehicle with a MAM of 3,500 kg with a trailer. The size of the trailer depends on the BE 'valid from' date shown on the licence. If the date is before 19 January 2013 can tow any size trailer within the towing limits of the vehicle. If on or after 19 January 2013 can tow a trailer with a MAM of up to 3,500 kg within the towing limits of the vehicle",
        },
      ],
    },

    {
      id: "other",
      title: "Other categories",
      category: "Category F and K",
      icon: null,
      items: [
        {
          code: "F",
          icon: null,
          valid: "Valid from 22 March 2011\nValid to 28 October 2039",
          drive: "Agricultural",
        },
        {
          code: "K",
          icon: null,
          valid: "Valid from 22 March 2011\nValid to 28 October 2039",
          drive: "Mowing machine or vehicles controlled by someone on foot",
        },
      ],
    },
  ];
  const provisionalVehicleData = [
    {
      id: "prov-motorcycles",
      title: "Motorcycles",
      category: "Category A",
      icon: motorcycleIcon,
      items: [
        {
          code: "A",
          icon: motorcycleIcon,
          valid: "Valid from 22 March 2011\nValid to 28 October 2039",
          drive:
            "A motorcycle of a power exceeding 35 kW or with a power to weight ratio exceeding 0.2 kW per kg, or A motorcycle of a power not exceeding 35 kW with a power to weight ratio not exceeding 0.2 kW per kg and derived from a vehicle of more than double its power. A motor tricycle with a power exceeding 15 kW",
        },
      ],
    },

    {
      id: "prov-cars",
      title: "Cars",
      category: "Category B and BE",
      icon: carsIcon,
      items: [
        {
          code: "B",
          icon: carBIcon,
          valid: "Valid from 22 March 2011\nValid to 28 October 2039",
          drive:
            "Vehicles up to 3,500 kg Maximum Authorised Mass (MAM) with up to 8 passenger seats and driver (with a trailer up to 750 kg). Can also tow heavier trailers if the total weight of vehicle and trailer isn't more than 3,500 kg.",
        },
        {
          code: "BE",
          icon: carBEIcon,
          valid: "Valid from 16 July 2011\nValid to 28 October 2039",
          drive:
            "Vehicles up to 3,500 kg Maximum Authorised Mass (MAM). You can drive a vehicle with a MAM of 3,500 kg with a trailer.",
        },
      ],
    },

    {
      id: "prov-other",
      title: "Other categories",
      category: "Category G and H",
      icon: null,
      items: [
        {
          code: "G",
          icon: null,
          valid: "Valid from 16 July 2011\nValid to 28 October 2039",
          drive: "Road roller",
        },
        {
          code: "H",
          icon: null,
          valid: "Valid from 16 July 2011\nValid to 28 October 2039",
          drive: "Tracked vehicles",
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="dashboard-wrapper">
        {/* <p className="feedback-text">
          We welcome your feedback to help us improve
          this service.
        </p> */}

        <h1 className="dashboard-title">Driving licence details</h1>

        <div className="tabs">
          <button
            className={`tab ${activeTab === "details" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("details")}
          >
            Your details
          </button>

          <button
            className={`tab ${activeTab === "vehicles" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("vehicles")}
          >
            Vehicles you can drive
          </button>

          <button
            className={`tab ${activeTab === "penalties" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("penalties")}
          >
            Penalties and disqualifications
          </button>

          <button
            className={`tab ${activeTab === "code" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("code")}
          >
            Get your check code
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "details" && (
            <div className="details-panel">
              <div className="details-content">
                <h2 className="section-heading">Your details</h2>

                <div className="summary-list">
                  {detailsFields.map((field) => (
                    <div
                      className={`summary-row ${
                        field.key === "address" ? "address-row" : ""
                      }`}
                      key={field.key}
                    >
                      <div className="summary-key">{field.label}</div>

                      <div className="summary-value">
                        {field.multiline ? (
                          <textarea
                            className="edit-textarea"
                            value={data[field.key]}
                            onChange={(e) =>
                              handleChange(field.key, e.target.value)
                            }
                          />
                        ) : (
                          <input
                            className="edit-input"
                            type="text"
                            value={data[field.key]}
                            onChange={(e) =>
                              handleChange(field.key, e.target.value)
                            }
                          />
                        )}
                      </div>

                      <div className="summary-actions">
                        {field.editable && (
                          <button className="change-link">Change</button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* <hr className="divider" /> */}

                <h2 className="section-heading">Driving licence details</h2>

                <div className="summary-list">
                  {licenceFields.map((field) => (
                    <div className="summary-row" key={field.key}>
                      <div className="summary-key">{field.label}</div>

                      <div className="summary-value">
                        <input
                          className="edit-input"
                          type="text"
                          value={data[field.key]}
                          onChange={(e) =>
                            handleChange(field.key, e.target.value)
                          }
                        />
                      </div>

                      <div className="summary-actions"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "vehicles" && (
            <div className="vehicles-panel">
              <div className="vehicles-content">
                <h2 className="vehicles-heading">Vehicles you can drive</h2>

                <p className="vehicles-text">
                  Your entitlements may have additional restrictions. Check the{" "}
                  <a href="/" className="gov-link">
                    restriction codes for your driving licence
                  </a>
                  .
                </p>

                <button className="hide-all-btn" onClick={toggleAllSections}>
                  <svg
                    className="accordion-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d={showAllVehicles ? "M5 9l3-3 3 3" : "M5 7l3 3 3-3"}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    {showAllVehicles
                      ? "Hide all sections"
                      : "Show all sections"}
                  </span>
                </button>

                {vehicleData.map((section) => (
                  <div className="vehicle-group" key={section.id}>
                    {/* ── Group header ── */}
                    <div className="vehicle-group-header">
                      {section.icon && (
                        <img
                          src={section.icon}
                          alt=""
                          className="vehicle-group-icon"
                        />
                      )}
                      <div className="vehicle-header-content">
                        <h3 className="vehicle-group-title">{section.title}</h3>
                        <p className="vehicle-category">{section.category}</p>
                        <button
                          className="vehicle-toggle"
                          onClick={() => toggleSection(section.id)}
                        >
                          <svg
                            className="accordion-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d={
                                vehicleSections[section.id]
                                  ? "M5 9l3-3 3 3"
                                  : "M5 7l3 3 3-3"
                              }
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>
                            {vehicleSections[section.id] ? "Hide" : "Show"}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* ── Expanded rows ── */}
                    {vehicleSections[section.id] && (
                      <div className="vehicle-details">
                        {section.items.map((item, index) => (
                          <div className="vehicle-row" key={index}>
                            {/* Left: item icon */}
                            <div className="vehicle-row-icon-wrap">
                              {item.icon && (
                                <img
                                  src={item.icon}
                                  alt=""
                                  className="vehicle-row-icon"
                                />
                              )}
                            </div>

                            {/* Right: all info */}
                            <div className="vehicle-row-body">
                              {/* Category + valid dates */}
                              <div className="vehicle-info-row">
                                <div className="vehicle-label">
                                  Category {item.code}:
                                </div>
                                <div
                                  className="vehicle-textarea vehicle-richtext"
                                  contentEditable
                                  suppressContentEditableWarning
                                  onInput={(e) =>
                                    handleChange(
                                      `${section.id}_${item.code}_valid`,
                                      e.currentTarget.innerText,
                                    )
                                  }
                                >
                                  {(
                                    data[`${section.id}_${item.code}_valid`] ||
                                    item.valid
                                  )
                                    .split("\n")
                                    .map((line, idx) => {
                                      const parts = line.split(" ");

                                      return (
                                        <div key={idx}>
                                          {parts.slice(0, 2).join(" ")}{" "}
                                          <strong>
                                            {parts.slice(2).join(" ")}
                                          </strong>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>

                              {/* Restrictions */}
                              {item.restrictions && (
                                <div className="vehicle-info-row">
                                  <div className="vehicle-label">
                                    Restrictions:
                                  </div>

                                  <div
  className="vehicle-textarea vehicle-richtext"
  contentEditable
  suppressContentEditableWarning
  onInput={(e) =>
    handleChange(
      `${section.id}_${item.code}_restrictions`,
      e.currentTarget.innerText
    )
  }
>
  {(
    data[
      `${section.id}_${item.code}_restrictions`
    ] || item.restrictions
  )
    .split("\n")
    .map((line, idx) => {
      const parts = line.match(
        /^(\d+[A-Z()0-9]*)\s(.*)$/
      );

      return (
        <div key={idx}>
          {parts ? (
            <>
              <strong>{parts[1]}</strong>{" "}
              {parts[2]}
            </>
          ) : (
            line
          )}
        </div>
      );
    })}
</div>
                                </div>
                              )}

                              {/* You can drive */}
                              <div className="vehicle-info-row vehicle-info-row--drive">
                                <div className="vehicle-label">
                                  You can drive:
                                </div>
                                <textarea
                                  className="vehicle-textarea"
                                  value={
                                    data[`${section.id}_${item.code}_drive`] ||
                                    item.drive
                                  }
                                  rows={1}
                                  onInput={(e) => {
                                    e.target.style.height = "auto";
                                    e.target.style.height = `${e.target.scrollHeight}px`;
                                  }}
                                  ref={(el) => {
                                    if (el) {
                                      el.style.height = "auto";
                                      el.style.height = `${el.scrollHeight}px`;
                                    }
                                  }}
                                  onChange={(e) =>
                                    handleChange(
                                      `${section.id}_${item.code}_drive`,
                                      e.target.value,
                                    )
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="vehicles-provisional">
                  <h2 className="vehicles-heading">
                    Vehicles you can provisionally drive
                  </h2>

                  <p className="vehicles-text">
                    Your entitlements may have additional restrictions. Check
                    the{" "}
                    <a href="/" className="gov-link">
                      restriction codes for your driving licence
                    </a>
                    .
                  </p>

                  <button className="hide-all-btn" onClick={toggleAllSections}>
                    <svg
                      className="accordion-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d={showAllVehicles ? "M5 9l3-3 3 3" : "M5 7l3 3 3-3"}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>
                      {showAllVehicles
                        ? "Hide all sections"
                        : "Show all sections"}
                    </span>
                  </button>
                </div>

                {provisionalVehicleData.map((section) => (
                  <div className="vehicle-group" key={section.id}>
                    <div className="vehicle-group-header">
                      {section.icon && (
                        <img
                          src={section.icon}
                          alt=""
                          className="vehicle-group-icon"
                        />
                      )}

                      <div className="vehicle-header-content">
                        <h3 className="vehicle-group-title">{section.title}</h3>

                        <p className="vehicle-category">{section.category}</p>

                        <button
                          className="vehicle-toggle"
                          onClick={() => toggleSection(section.id)}
                        >
                          <svg
                            className="accordion-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                          >
                            <circle
                              cx="8"
                              cy="8"
                              r="7"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />

                            <path
                              d={
                                vehicleSections[section.id]
                                  ? "M5 9l3-3 3 3"
                                  : "M5 7l3 3 3-3"
                              }
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          <span>
                            {vehicleSections[section.id] ? "Hide" : "Show"}
                          </span>
                        </button>
                      </div>
                    </div>

                    {vehicleSections[section.id] && (
                      <div className="vehicle-details">
                        {section.items.map((item, index) => (
                          <div className="vehicle-row" key={index}>
                            <div className="vehicle-row-icon-wrap">
                              {item.icon && (
                                <img
                                  src={item.icon}
                                  alt=""
                                  className="vehicle-row-icon"
                                />
                              )}
                            </div>

                            <div className="vehicle-row-body">
                              <div className="vehicle-info-row">
                                <div className="vehicle-label">
                                  Category {item.code}:
                                </div>

                                <div className="vehicle-valid">
                                  {(item.valid || "")
                                    .split("\n")
                                    .map((line, idx) => {
                                      const parts = line.split(" ");

                                      return (
                                        <div key={idx}>
                                          {parts.slice(0, 2).join(" ")}{" "}
                                          <strong>
                                            {parts.slice(2).join(" ")}
                                          </strong>
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>

                              {item.restrictions && (
                                <div className="vehicle-info-row">
                                  <div className="vehicle-label">
                                    Restrictions:
                                  </div>

                                  <div className="vehicle-restrictions">
                                    {item.restrictions
                                      .split("\n")
                                      .map((line, idx) => {
                                        const parts = line.match(
                                          /^(\d+[A-Z()0-9]*)\s(.*)$/,
                                        );

                                        return (
                                          <div key={idx}>
                                            {parts ? (
                                              <>
                                                <strong>{parts[1]}</strong>{" "}
                                                {parts[2]}
                                              </>
                                            ) : (
                                              line
                                            )}
                                          </div>
                                        );
                                      })}
                                  </div>
                                </div>
                              )}

                              <div className="vehicle-info-row vehicle-info-row--drive">
                                <div className="vehicle-label">
                                  You can drive:
                                </div>

                                <textarea
                                  className="vehicle-textarea"
                                  value={item.drive}
                                  readOnly
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === "penalties" && (
            <div className="penalties-panel">
              <div className="penalties-content">
                <h2 className="penalties-heading">
                  Penalties and disqualifications
                </h2>

                <p className="penalties-text">
                  For more information go to the{" "}
                  <a href="/" className="gov-link">
                    penalty points
                  </a>{" "}
                  and{" "}
                  <a href="/" className="gov-link">
                    disqualification
                  </a>{" "}
                  sections on GOV.UK.
                </p>

                <p className="penalties-empty">
                  You do not have any penalties and disqualifications.
                </p>
              </div>
            </div>
          )}

          {activeTab === "code" && (
            <div className="code-panel">
              <div className="code-content">
                <h2 className="code-heading">Get a licence check code</h2>

                <p className="code-paragraph">
                  You can get a check code to share your driving licence
                  information with someone else, like your employer or a car
                  hire company. You may need to do this if you want to hire a
                  car.
                </p>

                <p className="code-paragraph">
                  You must also give them the last 8 characters of your driving
                  licence number.
                </p>

                <p className="code-paragraph">
                  Your code will be valid for 21 days.
                </p>

                <button className="code-btn">Get a code</button>

                <h3 className="code-subheading">Active codes</h3>

                <p className="code-empty">You have no active code(s) to view</p>

                <h3 className="code-subheading">Inactive codes</h3>

                <p className="code-empty">
                  You have no inactive code(s) to view
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
