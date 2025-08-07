/* eslint-disable react/prop-types */
function Item({ item, isEditable, onChange, theme }) {
  const handleChange = (e) => {
    onChange({ ...item, value: e.target.value });
  };

  return (
    <li className={`li-${theme}`}>
      {isEditable ? (
        <div className="listItem">
          {item.field && (
            <input
              type="text"
              value={item.field}
              onChange={handleChange}
              contentEditable={isEditable}
            />
          )}
          <input
            type="text"
            value={item.value}
            onChange={handleChange}
            contentEditable={isEditable}
          />
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

export default Item;
