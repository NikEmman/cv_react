/* eslint-disable react/prop-types */
function Item({ item, isEditable, onChange }) {
    const handleChange = (e) => {
      onChange({ ...item, value: e.target.value });
    };
  
    return (
      <li>
        <label>{item.field}: </label>
        {isEditable ? (
          <input
            type="text"
            value={item.value}
            onChange={handleChange}
            contentEditable={isEditable}
          />
        ) : (
          <span>{item.value}</span>
        )}
      </li>
    );
}
  
export default Item;
  