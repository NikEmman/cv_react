import PropTypes from "prop-types";
import Item from "../Item";
export default function SideSection({
  section,
  isEditable,
  handleItemChange,
  noListStyle,
}) {
  const items = section.items.map((item) => (
    <Item
      key={item.id || item.value}
      item={item}
      isEditable={isEditable}
      onChange={handleItemChange}
    />
  ));

  return (
    <div>
      <h3 className="borderBottom">{section.title}</h3>
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
};
