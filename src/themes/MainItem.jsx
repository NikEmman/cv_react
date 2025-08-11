import PropTypes from "prop-types";
import "./mainItem.css";

export default function MainItem({ item, isEditable }) {
  const itemDescriptions =
    item.desc && item.desc.map((desc, index) => <li key={index}>{desc}</li>);

  return (
    <>
      <div className="itemHeader">
        <h4>{item.institution} </h4>
        <div className="itemDates">
          {item.from} - {item.until}
        </div>
      </div>
      <p>{item.title}</p>

      <ul>{itemDescriptions}</ul>
    </>
  );
}
MainItem.propTypes = {
  item: PropTypes.object,
  isEditable: PropTypes.bool,
};
