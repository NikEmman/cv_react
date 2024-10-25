import { useState } from 'react'
import Section from './Section'
import { data } from './data'
import './App.css'
import Button from './Button'

function App() {
  const [isEditable, setIsEditable] = useState(false);
  const [myData, setMyData] = useState(data);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    // Here you could do something like export the updatedData to data.js
    setIsEditable(false)
    console.log('Data saved:', myData);
  };

  const updateSection = (updatedSection) => {
    const updatedData = {
      ...myData,
      sections: myData.sections.map(section =>
        section.id === updatedSection.id ? updatedSection : section
      )
    };
    setMyData(updatedData);
  };

  const sections = myData.sections.map(section => (
    <Section
      key={section.id}
      section={section}
      isEditableOn={isEditable}
      updateSection={updateSection}
    />
  ));

  return (
    <>
      <h1>Curriculum Vitae</h1>
      
      <Button onEditClick={handleEditClick} onSaveClick={handleSaveClick}isEditable={isEditable}></Button>
      {sections}
      <button onClick={window.print}>Print</button>
    </>
  );
}

export default App;
