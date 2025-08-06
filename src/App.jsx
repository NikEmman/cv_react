import { useState } from "react";
import Section from "./Section";
import defaultData from "./data";
import "./App.css";
import Button from "./Button";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [myData, setMyData] = useState(defaultData);
  const [theme, setTheme] = useState("classic");

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
    console.log("Data saved:", myData);
  };

  const updateSection = (updatedSection) => {
    const updatedData = {
      ...myData,
      sections: myData.sections.map((section) =>
        section === updatedSection ? updatedSection : section
      ),
    };
    setMyData(updatedData);
  };

  const sections = myData.sections.map((section) => (
    <Section
      key={section.title}
      section={section}
      isEditableOn={isEditable}
      updateSection={updateSection}
      theme={theme}
    />
  ));

  return (
    <div className={`body-${theme}`}>
      <header>
        <select name="theme" onChange={(e) => setTheme(e.target.value)}>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
        </select>
        <Button
          onEditClick={handleEditClick}
          onSaveClick={handleSaveClick}
          isEditable={isEditable}
        ></Button>
        <button onClick={window.print}>Print</button>
      </header>

      {sections}
    </div>
  );
}

export default App;
