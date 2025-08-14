import PropTypes from "prop-types";
import "./mainItem.css";

export default function MainItem({ item, isEditable, handleItemChange }) {
  const handleFieldChange = (field) => (e) => {
    handleItemChange({ ...item, [field]: e.target.value });
  };

  const handleDescChange = (index) => (e) => {
    const newDesc = [...item.desc];
    newDesc[index] = e.target.value;
    handleItemChange({ ...item, desc: newDesc });
  };

  const itemDescriptions =
    item.desc && item.desc.map((desc, index) => <li key={index}>{desc}</li>);
  const itemDescriptionsEditable =
    item.desc &&
    item.desc.map((desc, index) => (
      <li key={index}>
        <input value={desc} onChange={handleDescChange(index)} />
      </li>
    ));

  return (
    <>
      {isEditable ? (
        <>
          <div className="itemHeader">
            <h4>
              <input
                type="text"
                value={item.institution}
                onChange={handleFieldChange("institution")}
              />
            </h4>
            <div className="itemDates">
              <input
                type="text"
                value={item.from}
                onChange={handleFieldChange("from")}
              />{" "}
              -{" "}
              <input
                type="text"
                value={item.until}
                onChange={handleFieldChange("until")}
              />
            </div>
          </div>
          <p>
            <input
              type="text"
              value={item.title}
              onChange={handleFieldChange("title")}
            />
          </p>
          <ul>{itemDescriptionsEditable}</ul>
        </>
      ) : (
        <>
          <div className="itemHeader">
            <h4>{item.institution} </h4>
            <div className="itemDates">
              {item.from} - {item.until}
            </div>
          </div>
          <p>{item.title}</p>
          <ul>{itemDescriptions}</ul>
        </>
      )}
    </>
  );
}
MainItem.propTypes = {
  item: PropTypes.object,
  isEditable: PropTypes.bool,
  handleItemChange: PropTypes.func,
};
