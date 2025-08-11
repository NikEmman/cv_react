import PropTypes from "prop-types";
import MainItem from "./MainItem";

export default function MainSection({ section, isEditable, handleItemChange }) {
  const sectionItems = section.items.map((item) => (
    <MainItem key={item.id} item={item} isEditable={isEditable}></MainItem>
  ));
  return (
    <div>
      <h3 className="borderBottom">{section.title}</h3>
      {sectionItems}
    </div>
  );
}
MainSection.propTypes = {
  isEditable: PropTypes.bool,
  section: PropTypes.object,
  handleItemChange: PropTypes.func,
};
