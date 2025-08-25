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
  hasField = false,
  theme,
  visible = true,
  special = [""],
}) {
  const items = section.items.map((item) => (
    <SideItem
      key={item.id || item.value}
      item={item}
      isEditable={isEditable}
      onChange={handleItemChange}
      hasField={hasField}
      theme={theme}
    />
  ));

  return (
    <div className={`${special[1]} ${special[2]}`}>
      <div
        className={`borderBottom-${theme} flex alignItemsCenter justifyContentSpaceBetween`}
      >
        {visible && (
          <h3 className={`sectionTitle-${theme}`}>{section.title}</h3>
        )}
        {isEditable && canAddItem && (
          <AddRemoveButtons
            onClickAdd={handleAddItem}
            onClickRemove={handleRemoveItem}
            sectionId={section.id}
            buttonTitle={section.title}
          />
        )}
        {visible && <hr />}
      </div>
      <ul className={`${noListStyle} ${special[0]}`}>{items}</ul>
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
  hasField: PropTypes.bool,
  theme: PropTypes.string,
  visible: PropTypes.bool,
  special: PropTypes.arrayOf(PropTypes.string),
};
