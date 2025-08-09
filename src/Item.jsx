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
            <input type="text" value={item.field} onChange={handleChange} />
          )}
          <input type="text" value={item.value} onChange={handleChange} />
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
