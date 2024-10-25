/* eslint-disable react/prop-types */
import Item from "./Item";

function Section({ section, isEditableOn, updateSection }) {
    const handleItemChange = (updatedItem) => {
      const updatedItems = section.items.map(item =>
        item.id === updatedItem.id ? updatedItem : item
      );
      updateSection({ ...section, items: updatedItems });
    };
  
    const items = section.items.map(item => (
      <Item
        key={item.id}
        item={item}
        isEditable={isEditableOn}
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
  