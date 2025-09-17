import PropTypes from "prop-types";

export default function Photo({ photo, handleAddPhoto, isEditable, theme }) {
  return (
    <>
      <img
        className={`img-${theme}` + " " + (isEditable && " small-img")}
        src={photo.url}
        alt="Personal Photo"
      ></img>
      {isEditable && (
        <label className={`photo-input-label-${theme}`}>
          <input
            onChange={handleAddPhoto}
            type="file"
            className="photo-input"
          />
          📷 Change Photo
        </label>
      )}
    </>
  );
}

Photo.propTypes = {
  photo: PropTypes.object,
  handleAddPhoto: PropTypes.func,
  isEditable: PropTypes.bool,
  theme: PropTypes.string,
};
