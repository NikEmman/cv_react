import PropTypes from "prop-types";

export default function Photo({ photo, handleAddPhoto, isEditable, theme }) {
  return (
    <>
      <img
        className={`img-${theme}` + " " + (isEditable && " small-img")}
        src={photo.url}
        alt="Personal Photo"
      ></img>
      {isEditable && <input onChange={handleAddPhoto} type="file"></input>}
    </>
  );
}

Photo.propTypes = {
  photo: PropTypes.object,
  handleAddPhoto: PropTypes.func,
  isEditable: PropTypes.bool,
  theme: PropTypes.string,
};
