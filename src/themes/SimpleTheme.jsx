// import Section from "../Section";
import PropTypes from "prop-types";
import "./simpleTheme.css";
import SideSection from "./SideSection";
import MainSection from "./MainSection";

export default function SimpleTheme({
  myData,
  isEditable,
  theme,
  handleItemChange,
  handleNameChange,
  handleAddItem,
  handleRemoveItem,
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
      ></MainSection>
    ));

  return (
    <div className={`body-${theme}`}>
      <div className={`container-${theme}`}>
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
          <main>
            <SideSection
              key={aboutSection.id}
              section={aboutSection}
              isEditable={isEditable}
              noListStyle={"noListStyle"}
              handleItemChange={handleItemChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              canAddItem={false}
            ></SideSection>
            {mainItems}
          </main>
          <aside>
            <SideSection
              key={contactSection.id}
              section={contactSection}
              isEditable={isEditable}
              noListStyle={"noListStyle"}
              handleItemChange={handleItemChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              hasField={true}
            ></SideSection>
            <SideSection
              key={skillSection.id}
              section={skillSection}
              isEditable={isEditable}
              noListStyle={""}
              handleItemChange={handleItemChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            ></SideSection>
            <SideSection
              key={languageSection.id}
              section={languageSection}
              isEditable={isEditable}
              noListStyle={""}
              handleItemChange={handleItemChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            ></SideSection>
          </aside>
        </div>
      </div>
    </div>
  );
}

SimpleTheme.propTypes = {
  isEditable: PropTypes.bool,
  handleNameChange: PropTypes.func,
  myData: PropTypes.object,
  theme: PropTypes.string,
  handleItemChange: PropTypes.func,
  handleAddItem: PropTypes.func,
  handleRemoveItem: PropTypes.func,
};
