import PropTypes from "prop-types";
import "./mainItem.css";
import AddRemoveButtons from "../AddRemoveButtons";

export default function MainItem({
  item,
  isEditable,
  handleItemChange,
  handleAddDescriptionItem,
  handleDeleteDescriptionItem,
  buttonTitle,
}) {
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
        <input
          placeholder="Thing you accomplished"
          value={desc}
          onChange={handleDescChange(index)}
        />
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
                placeholder="Institution name"
                onChange={handleFieldChange("institution")}
              />
            </h4>
            <div className="itemDates">
              <input
                type="text"
                value={item.from}
                placeholder="Start date"
                onChange={handleFieldChange("from")}
              />
              -
              <input
                type="text"
                value={item.until}
                placeholder="End date"
                onChange={handleFieldChange("until")}
              />
            </div>
          </div>
          <p>
            <input
              type="text"
              value={item.title}
              placeholder="Job/Degree title"
              onChange={handleFieldChange("title")}
            />
          </p>
          {item.desc && (
            <AddRemoveButtons
              onClickAdd={() => handleAddDescriptionItem(item.id)}
              onClickRemove={() => handleDeleteDescriptionItem(item.id)}
              buttonTitle={buttonTitle + " description item"}
            />
          )}
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
  handleAddDescriptionItem: PropTypes.func,
  handleDeleteDescriptionItem: PropTypes.func,
  buttonTitle: PropTypes.string,
};
