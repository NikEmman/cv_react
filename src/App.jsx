import { useState } from "react";
import defaultData from "./data";
import "./App.css";
import SimpleTheme from "./themes/SimpleTheme";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [myData, setMyData] = useState(defaultData);
  const [theme, setTheme] = useState("simple");

  const handleEditClick = () => setIsEditable(true);
  const handleSaveClick = () => {
    setIsEditable(false);
    console.log("Data saved:", myData);
  };

  const handleNameChange = (fieldName, newValue) => {
    setMyData((prevData) => {
      const updatedSections = [...prevData.sections];
      updatedSections[0] = {
        ...updatedSections[0],
        [fieldName]: newValue,
      };
      return { ...prevData, sections: updatedSections };
    });
  };

  // const handleSectionChange = (updatedSection) => {
  //   const updatedData = {
  //     ...myData,
  //     sections: myData.sections.map((section) =>
  //       section === updatedSection ? updatedSection : section
  //     ),
  //   };
  //   setMyData(updatedData);
  // };
  const handleItemChange = (updatedItem) => {
    setMyData((prevData) => {
      const updatedSections = prevData.sections.map((section) => {
        if (!section.items) return section;

        const updatedItems = section.items.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );

        return { ...section, items: updatedItems };
      });

      return { ...prevData, sections: updatedSections };
    });
  };
  let ThemeComponent;
  switch (theme) {
    case "simple":
      ThemeComponent = SimpleTheme;
      break;

    default:
      ThemeComponent = function Default() {
        <div>Theme not found</div>;
      };
  }

  return (
    <>
      <header>
        {isEditable ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <select name="theme" onChange={(e) => setTheme(e.target.value)}>
          <option value="simple">Simple</option>
          <option value="modern">Modern</option>
        </select>
        <button onClick={window.print}>Print</button>
      </header>

      <ThemeComponent
        myData={myData}
        isEditable={isEditable}
        theme={theme}
        // handleSectionChange={handleSectionChange}
        handleItemChange={handleItemChange}
        handleNameChange={handleNameChange}
      />
    </>
  );
}

export default App;
