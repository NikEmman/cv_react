import "./monoPink.css";
import PropTypes from "prop-types";
import MainSection from "../components/MainSection";
import SideSection from "../components/SideSection";

export default function MonoPinkTheme({
  myData,
  isEditable,
  theme,
  handleItemChange,
  handleNameChange,
  handleAddItem,
  handleRemoveItem,
  handleAddMainItem,
  handleAddDescriptionItem,
  handleDeleteDescriptionItem,
}) {
  const personalSection = myData.sections.find((sec) => sec.title == "Person");
  const contactSection = myData.sections.find((sec) => sec.title == "Contact");
  const skillSection = myData.sections.find((sec) => sec.title == "Skills");
  const languageSection = myData.sections.find(
    (sec) => sec.title == "Languages"
  );
  const aboutSection = myData.sections.find((sec) => sec.title == "About Me");
  const mainItems = myData.sections
    .filter((sec) => sec.title == "Work experience" || sec.title == "Education")
    .map((sec) => (
      <MainSection
        key={sec.id}
        section={sec}
        isEditable={isEditable}
        handleItemChange={handleItemChange}
        handleAddMainItem={handleAddMainItem}
        handleRemoveItem={handleRemoveItem}
        handleAddDescriptionItem={handleAddDescriptionItem}
        handleDeleteDescriptionItem={handleDeleteDescriptionItem}
        theme={theme}
      ></MainSection>
    ));

  return (
    <div className={`body-${theme}`}>
      <div className="container">
        <div className={`hero-${theme}`}>
          {isEditable ? (
            <>
              <div>
                <input
                  placeholder="First Name"
                  value={personalSection.firstName}
                  onChange={(e) =>
                    handleNameChange("firstName", e.target.value)
                  }
                />
                <input
                  placeholder="Last Name"
                  value={personalSection.lastName}
                  onChange={(e) => handleNameChange("lastName", e.target.value)}
                />
              </div>
              <input
                placeholder="Job Title"
                value={personalSection.jobTitle}
                onChange={(e) => handleNameChange("jobTitle", e.target.value)}
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
        <div className="mainContainer">
          <SideSection
            key={contactSection.id}
            section={contactSection}
            isEditable={isEditable}
            noListStyle={"noListStyle"}
            handleItemChange={handleItemChange}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            hasField={false}
            theme={theme}
            visible={false}
            special={["ul-monoPink", "flex", "flexEnd"]}
          ></SideSection>
          <SideSection
            key={aboutSection.id}
            section={aboutSection}
            isEditable={isEditable}
            noListStyle={"noListStyle"}
            handleItemChange={handleItemChange}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            canAddItem={false}
            theme={theme}
          ></SideSection>
          {mainItems}

          <SideSection
            key={skillSection.id}
            section={skillSection}
            isEditable={isEditable}
            noListStyle={""}
            handleItemChange={handleItemChange}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            theme={theme}
            special={["grid-repeat"]}
          ></SideSection>
          <SideSection
            key={languageSection.id}
            section={languageSection}
            isEditable={isEditable}
            noListStyle={""}
            handleItemChange={handleItemChange}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            theme={theme}
            special={["grid-repeat"]}
          ></SideSection>
        </div>
      </div>
    </div>
  );
}

MonoPinkTheme.propTypes = {
  isEditable: PropTypes.bool,
  handleNameChange: PropTypes.func,
  myData: PropTypes.object,
  theme: PropTypes.string,
  handleItemChange: PropTypes.func,
  handleAddItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
  handleAddMainItem: PropTypes.func,
  handleAddDescriptionItem: PropTypes.func,
  handleDeleteDescriptionItem: PropTypes.func,
};
