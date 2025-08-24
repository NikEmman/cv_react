import PropTypes from "prop-types";
function SideItem({ item, isEditable, onChange, theme, hasField = false }) {
  const handleChange = (e) => {
    onChange({ ...item, value: e.target.value });
  };
  const handleFieldChange = (e) => {
    onChange({ ...item, field: e.target.value });
  };
  const inputType =
    item.value.length > 30 ? (
      <textarea type="text" value={item.value} onChange={handleChange} />
    ) : (
      <input
        type="text"
        size={item.value.length}
        value={item.value}
        onChange={handleChange}
      />
    );
  return (
    <li className={`li-${theme}`}>
      {isEditable ? (
        <div className="listItem">
          {(item.field || hasField) && (
            <input
              type="text"
              value={item.field}
              onChange={handleFieldChange}
            />
          )}
          {inputType}
        </div>
      ) : (
        <>
          <span>{item.field} </span>
          <span>{item.value}</span>
        </>
      )}
    </li>
  );
}

export default SideItem;
SideItem.propTypes = {
  item: PropTypes.object,
  isEditable: PropTypes.bool,
  onChange: PropTypes.func,
  theme: PropTypes.string,
  hasField: PropTypes.bool,
};
