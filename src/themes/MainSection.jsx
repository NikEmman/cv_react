import PropTypes from "prop-types";
import MainItem from "./MainItem";
import AddRemoveButtons from "../AddRemoveButtons";

export default function MainSection({
  section,
  isEditable,
  handleItemChange,
  handleAddMainItem,
  handleRemoveItem,
}) {
  const sectionItems = section.items.map((item) => (
    <MainItem
      key={item.id}
      item={item}
      isEditable={isEditable}
      handleItemChange={handleItemChange}
    ></MainItem>
  ));
  return (
    <div>
      <h3 className="borderBottom">{section.title}</h3>
      {isEditable && (
        <AddRemoveButtons
          onClickAdd={handleAddMainItem}
          onClickRemove={handleRemoveItem}
          sectionId={section.id}
        />
      )}

      {sectionItems}
    </div>
  );
}
MainSection.propTypes = {
  isEditable: PropTypes.bool,
  section: PropTypes.object,
  handleItemChange: PropTypes.func,
  handleAddMainItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
};
