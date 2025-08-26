import PropTypes from "prop-types";
import "./tech.css";
import SideSection from "../components/SideSection";
import MainSection from "../components/MainSection";

export default function Tech({
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
  const workSection = myData.sections.find(
    (sec) => sec.title == "Work experience"
  );
  const educationSection = myData.sections.find(
    (sec) => sec.title == "Education"
  );

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
            </>
          ) : (
            <>
              <div className="name">
                <h3>{personalSection.firstName}</h3>
                <h3> {personalSection.lastName}</h3>
              </div>
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
                special={["ul-tech"]}
              ></SideSection>
            </>
          )}
        </div>
        <div className={`mainContainer-${theme}`}>
          <SideSection
            key={aboutSection.id}
            section={aboutSection}
            isEditable={isEditable}
            noListStyle={"noListStyle"}
            handleItemChange={handleItemChange}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            canAddItem={false}
            visible={false}
            theme={theme}
          ></SideSection>

          <main>
            <MainSection
              key={workSection.id}
              section={workSection}
              isEditable={isEditable}
              handleItemChange={handleItemChange}
              handleAddMainItem={handleAddMainItem}
              handleRemoveItem={handleRemoveItem}
              handleAddDescriptionItem={handleAddDescriptionItem}
              handleDeleteDescriptionItem={handleDeleteDescriptionItem}
              theme={theme}
              noListStyle={"noListStyle"}
            ></MainSection>
          </main>
          <aside>
            <MainSection
              key={educationSection.id}
              section={educationSection}
              isEditable={isEditable}
              handleItemChange={handleItemChange}
              handleAddMainItem={handleAddMainItem}
              handleRemoveItem={handleRemoveItem}
              handleAddDescriptionItem={handleAddDescriptionItem}
              handleDeleteDescriptionItem={handleDeleteDescriptionItem}
              theme={theme}
              noListStyle={"noListStyle"}
            ></MainSection>

            <SideSection
              key={skillSection.id}
              section={skillSection}
              isEditable={isEditable}
              noListStyle={""}
              handleItemChange={handleItemChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              theme={theme}
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
            ></SideSection>
          </aside>
        </div>
        <footer>
          {isEditable ? (
            <input
              placeholder="Job Title"
              value={personalSection.jobTitle}
              onChange={(e) => handleNameChange("jobTitle", e.target.value)}
            />
          ) : (
            <h4>{personalSection.jobTitle}</h4>
          )}
        </footer>
      </div>
    </div>
  );
}

Tech.propTypes = {
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
