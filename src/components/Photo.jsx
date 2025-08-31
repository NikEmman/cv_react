import PropTypes from "prop-types";

export default function Photo({ photo, handleAddPhoto, isEditable, theme }) {
  return (
    <>
      {isEditable && (
        <input
          className={`img-${theme}`}
          onChange={handleAddPhoto}
          type="file"
        ></input>
      )}
      <img
        className={`img-${theme}`}
        src={photo.url}
        alt="Personal Photo"
      ></img>
    </>
  );
}

Photo.propTypes = {
  photo: PropTypes.object,
  handleAddPhoto: PropTypes.func,
  isEditable: PropTypes.bool,
  theme: PropTypes.string,
};
