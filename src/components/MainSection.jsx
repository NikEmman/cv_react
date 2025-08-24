import PropTypes from "prop-types";
import MainItem from "./MainItem";
import AddRemoveButtons from "./AddRemoveButtons";

export default function MainSection({
  section,
  isEditable,
  handleItemChange,
  handleAddMainItem,
  handleRemoveItem,
  handleAddDescriptionItem,
  handleDeleteDescriptionItem,
}) {
  const sectionItems = section.items.map((item) => (
    <MainItem
      key={item.id}
      item={item}
      isEditable={isEditable}
      handleItemChange={handleItemChange}
      handleAddDescriptionItem={handleAddDescriptionItem}
      handleDeleteDescriptionItem={handleDeleteDescriptionItem}
      buttonTitle={section.title}
    ></MainItem>
  ));
  return (
    <div>
      <div className="borderBottom flex alignItemsCenter justifyContentSpaceBetween">
        <h3>{section.title}</h3>

        {isEditable && (
          <AddRemoveButtons
            onClickAdd={() => handleAddMainItem(section.id)}
            onClickRemove={() => handleRemoveItem(section.id)}
            buttonTitle={section.title}
          />
        )}
      </div>

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
  handleAddDescriptionItem: PropTypes.func,
  handleDeleteDescriptionItem: PropTypes.func,
};
