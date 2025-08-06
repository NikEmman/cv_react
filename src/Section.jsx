/* eslint-disable react/prop-types */
import Item from "./Item";

function Section({ section, isEditableOn, updateSection, theme }) {
  const handleItemChange = (updatedItem) => {
    const updatedItems = section.items.map((item) =>
      item === updatedItem ? updatedItem : item
    );
    updateSection({ ...section, items: updatedItems });
  };

  const items = section.items.map((item) => (
    <Item
      key={section.title + item.value}
      item={item}
      isEditable={isEditableOn}
      onChange={handleItemChange}
      theme={theme}
    />
  ));

  return (
    <div>
      <h2 className={`title-${theme}`}>{section.title}</h2>
      <ul className={`ul-${theme}`}>{items}</ul>
    </div>
  );
}

export default Section;
