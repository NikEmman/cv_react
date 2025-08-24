import PropTypes from "prop-types";
import "./addRemoveButtons.css";
export default function AddRemoveButtons({
  onClickAdd,
  onClickRemove,
  sectionId,
  buttonTitle,
}) {
  return (
    <div className="buttonContainer">
      <button
        title={`Add ${buttonTitle}`}
        className="add"
        onClick={() => onClickAdd(sectionId)}
      >
        +
      </button>
      <button
        title={`Remove ${buttonTitle}`}
        className="remove"
        onClick={() => onClickRemove(sectionId)}
      >
        -
      </button>
    </div>
  );
}
AddRemoveButtons.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  sectionId: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string,
};
