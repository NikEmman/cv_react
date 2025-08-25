import { useState } from "react";
import defaultData from "./data";
import "./App.css";
import SimpleTheme from "./themes/SimpleTheme";
import MonoPinkTheme from "./themes/MonoPink";

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [myData, setMyData] = useState(defaultData);
  const [theme, setTheme] = useState("monoPink");

  const handleEditClick = () => setIsEditable(true);
  const handleSaveClick = () => {
    setIsEditable(false);
    console.log("Data saved:", myData);
  };
  const handleAddItem = (sectionId) => {
    setMyData((prevData) => {
      const updatedSections = prevData.sections.map((section) => {
        if (section.id !== sectionId || !section.items) return section;

        const newItem = {
          id: section.items.length + 1,
          field: "",
          value: "",
        };

        return {
          ...section,
          items: [...section.items, newItem],
        };
      });

      return { ...prevData, sections: updatedSections };
    });
  };
  const handleAddDescriptionItem = (itemId) => {
    setMyData((prevData) => {
      const updatedSections = prevData.sections.map((section) => {
        if (section.title !== "Work experience" || !section.items)
          return section;

        const updatedItems = section.items.map((item) => {
          if (item.id !== itemId || !item.desc) return item;

          return {
            ...item,
            desc: [...item.desc, ""],
          };
        });

        return {
          ...section,
          items: updatedItems,
        };
      });

      return { ...prevData, sections: updatedSections };
    });
  };
  const handleDeleteDescriptionItem = (itemId) => {
    setMyData((prevData) => {
      const updatedSections = prevData.sections.map((section) => {
        if (section.title !== "Work experience" || !section.items)
          return section;

        const updatedItems = section.items.map((item) => {
          if (item.id !== itemId || !item.desc || item.desc.length === 0)
            return item;

          return {
            ...item,
            desc: item.desc.slice(0, -1), // Remove last item
          };
        });

        return {
          ...section,
          items: updatedItems,
        };
      });

      return { ...prevData, sections: updatedSections };
    });
  };

  const handleAddMainItem = (sectionId) => {
    setMyData((prevData) => {
      const updatedSections = prevData.sections.map((section) => {
        if (section.id !== sectionId || !section.items) return section;

        const newItem = {
          id: section.items.length + 1,
          title: "",
          institution: "",
          from: "",
          until: "",
        };

        return {
          ...section,
          items: [...section.items, newItem],
        };
      });

      return { ...prevData, sections: updatedSections };
    });
  };

  const handleRemoveItem = (sectionId) => {
    setMyData((prevData) => {
      const updatedSections = prevData.sections.map((section) => {
        if (
          section.id !== sectionId ||
          !section.items ||
          section.items.length === 0
        )
          return section;

        return {
          ...section,
          items: section.items.slice(0, -1),
        };
      });

      return { ...prevData, sections: updatedSections };
    });
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
    case "monoPink":
      ThemeComponent = MonoPinkTheme;
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
        <select
          defaultValue={"monoPink"}
          name="theme"
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="simple">Simple</option>
          <option value="monoPink">MonoPink</option>
        </select>
        <button onClick={window.print}>Print</button>
      </header>

      <ThemeComponent
        myData={myData}
        isEditable={isEditable}
        theme={theme}
        handleItemChange={handleItemChange}
        handleNameChange={handleNameChange}
        handleAddItem={handleAddItem}
        handleRemoveItem={handleRemoveItem}
        handleAddMainItem={handleAddMainItem}
        handleAddDescriptionItem={handleAddDescriptionItem}
        handleDeleteDescriptionItem={handleDeleteDescriptionItem}
      />
    </>
  );
}

export default App;
