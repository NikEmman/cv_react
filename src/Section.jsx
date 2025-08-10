/* eslint-disable react/prop-types */
import Item from "./Item";

function Section({ section, isEditable, handleSectionChange, theme }) {
  const handleItemChange = (updatedItem) => {
    const updatedItems = section.items.map((item) =>
      item.field === updatedItem.field ? updatedItem : item
    );
    handleSectionChange({ ...section, items: updatedItems });
  };

  const items = section.items.map((item) => (
    <Item
      key={section.title + item.field}
      item={item}
      isEditable={isEditable}
      onChange={handleItemChange}
    />
  ));

  return (
    <div>
      <h2>{section.title}</h2>
      <ul>{items}</ul>
    </div>
  );
}

export default Section;
