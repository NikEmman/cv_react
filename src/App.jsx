import { useState } from "react";
import Section from "./Section";
import defaultData from "./data";
import "./App.css";

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
  const handlePersonalChange = (fieldName, newValue) => {
    setMyData((prevData) => {
      const updatedSections = [...prevData.sections];

      updatedSections[0] = {
        ...updatedSections[0],
        [fieldName]: newValue,
      };

      return { ...prevData, sections: updatedSections };
    });
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

  const sections = myData.sections
    .filter((sec) => sec.title != "Person")
    .map((section) => (
      <Section
        key={section.title}
        section={section}
        isEditableOn={isEditable}
        updateSection={updateSection}
        theme={theme}
      />
    ));
  const personalSection = myData.sections[0];

  return (
    <>
      <header>
        {isEditable ? (
          <button onClick={handleSaveClick}>Save</button>
        ) : (
          <button onClick={handleEditClick}>Edit</button>
        )}
        <select name="theme" onChange={(e) => setTheme(e.target.value)}>
          <option value="classic">Classic</option>
          <option value="modern">Modern</option>
        </select>

        <button onClick={window.print}>Print</button>
      </header>
      <div className={`body-${theme}`}>
        <div className={`hero-${theme}`}>
          {isEditable ? (
            <>
              <input
                contentEditable={isEditable}
                placeholder="First Name"
                value={personalSection.firstName}
                onChange={(e) =>
                  handlePersonalChange("firstName", e.target.value)
                }
              />
              <input
                contentEditable={isEditable}
                placeholder="Last Name"
                value={personalSection.lastName}
                onChange={(e) =>
                  handlePersonalChange("lastName", e.target.value)
                }
              />
              <input
                contentEditable={isEditable}
                placeholder="Job Title"
                value={personalSection.jobTitle}
                onChange={(e) =>
                  handlePersonalChange("jobTitle", e.target.value)
                }
              />
            </>
          ) : (
            <>
              <h3>
                {personalSection.firstName + " " + personalSection.lastName}
              </h3>
              <h4>{personalSection.jobTitle}</h4>
            </>
          )}
        </div>

        {sections}
      </div>
    </>
  );
}

export default App;
