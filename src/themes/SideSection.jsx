import Item from "../Item";
export default function SideSection({
  section,
  isEditable,
  handleItemChange,
  noListStyle,
}) {
  const items = section.items.map((item) => (
    <Item
      key={item.id}
      item={item}
      isEditable={isEditable}
      onChange={handleItemChange}
    />
  ));

  return (
    <>
      <h3 className="borderBottom">{section.title}</h3>
      <ul className={`${noListStyle}`}>{items}</ul>
    </>
  );
}
