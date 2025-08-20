import PropTypes from "prop-types";
import "./addRemoveButtons.css";
export default function AddRemoveButtons({
  onClickAdd,
  onClickRemove,
  sectionId,
}) {
  return (
    <div className="buttonContainer">
      <button className="add" onClick={() => onClickAdd(sectionId)}>
        +
      </button>
      <button className="remove" onClick={() => onClickRemove(sectionId)}>
        -
      </button>
    </div>
  );
}
AddRemoveButtons.propTypes = {
  onClickAdd: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  sectionId: PropTypes.string.isRequired,
};
