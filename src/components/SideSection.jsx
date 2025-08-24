import PropTypes from "prop-types";
import SideItem from "./SideItem";
import AddRemoveButtons from "./AddRemoveButtons";
export default function SideSection({
  section,
  isEditable,
  handleItemChange,
  noListStyle,
  handleAddItem,
  handleRemoveItem,
  canAddItem = true,
}) {
  const items = section.items.map((item) => (
    <SideItem
      key={item.id || item.value}
      item={item}
      isEditable={isEditable}
      onChange={handleItemChange}
    />
  ));

  return (
    <div>
      <div className="borderBottom flex alignItemsCenter justifyContentSpaceBetween">
        <h3>{section.title}</h3>
        {isEditable && canAddItem && (
          <AddRemoveButtons
            onClickAdd={handleAddItem}
            onClickRemove={handleRemoveItem}
            sectionId={section.id}
            buttonTitle={section.title}
          />
        )}
      </div>
      <ul className={`${noListStyle}`}>{items}</ul>
    </div>
  );
}
SideSection.propTypes = {
  isEditable: PropTypes.bool,
  handleNameChange: PropTypes.func,
  section: PropTypes.object,
  handleItemChange: PropTypes.func,
  noListStyle: PropTypes.string,
  handleAddItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
  canAddItem: PropTypes.bool,
};
