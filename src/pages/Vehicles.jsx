
import "../styles/Vehicles.css"

function VehicleCategory({
  icon,
  code,
  validFrom,
  validTo,
  restrictionsCode,
  restrictions,
  description,
}) {
  return (
    <div className="vehicle-row">
      <div className="vehicle-icon-wrap">
        <img
          src={icon}
          alt=""
          className="vehicle-row-icon"
        />
      </div>

      <div className="vehicle-left-column">
        <div className="vehicle-key">
          <strong>
            Category {code}:
          </strong>
        </div>

        <div className="vehicle-label-spacer" />

        {restrictions && (
          <div className="vehicle-subheading">
            Restrictions:
          </div>
        )}

        <div className="vehicle-subheading">
          You can drive:
        </div>
      </div>

      <div className="vehicle-right-column">
        <div className="vehicle-valid">
          <div>
            Valid from{" "}
            <strong>{validFrom}</strong>
          </div>

          <div>
            Valid to{" "}
            <strong>{validTo}</strong>
          </div>
        </div>

        {restrictions && (
          <div className="vehicle-text">
            <strong>
              {restrictionsCode}
            </strong>{" "}
            {restrictions}
          </div>
        )}

        <div className="vehicle-text">
          {description}
        </div>
      </div>
    </div>
  );
}

export default VehicleCategory;
