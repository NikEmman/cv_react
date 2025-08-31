import { useState } from "react";
import defaultData from "./data";
import "./App.css";
import Simple from "./themes/Simple";
import MonoPink from "./themes/MonoPink";
import Tech from "./themes/Tech";
import Woodland from "./themes/Woodland";
import IceGray from "./themes/IceGray";
function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [myData, setMyData] = useState(defaultData);
  const [theme, setTheme] = useState("iceGray");

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
            desc: item.desc.slice(0, -1),
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
          desc: [""],
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
  const handleAddPhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;

      setMyData((prevData) => {
        const updatedSections = prevData.sections.map((section) =>
          section.title === "Photo" ? { ...section, url: imageUrl } : section
        );

        return { ...prevData, sections: updatedSections };
      });
    };

    reader.readAsDataURL(file);
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
      ThemeComponent = Simple;
      break;
    case "monoPink":
      ThemeComponent = MonoPink;
      break;
    case "tech":
      ThemeComponent = Tech;
      break;
    case "iceGray":
      ThemeComponent = IceGray;
      break;
    case "woodland":
      ThemeComponent = Woodland;
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
          defaultValue={"iceGray"}
          name="theme"
          onChange={(e) => setTheme(e.target.value)}
        >
          <option value="simple">Simple</option>
          <option value="monoPink">MonoPink</option>
          <option value="tech">Tech</option>
          <option value="iceGray">IceGray</option>
          <option value="woodland">Woodland</option>
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
        handleAddPhoto={handleAddPhoto}
      />
    </>
  );
}

export default App;
