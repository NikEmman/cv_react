import PropTypes from "prop-types";
import "./iceGray.css";
import SideSection from "../components/SideSection";
import MainSection from "../components/MainSection";
import Photo from "../components/Photo";

export default function IceGray({
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
  handleAddPhoto,
}) {
  const personalSection = myData.sections.find((sec) => sec.title == "Person");
  const contactSection = myData.sections.find((sec) => sec.title == "Contact");
  const skillSection = myData.sections.find((sec) => sec.title == "Skills");
  const languageSection = myData.sections.find(
    (sec) => sec.title == "Languages"
  );
  const photoSection = myData.sections.find((sec) => sec.title == "Photo");

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
          <Photo
            photo={photoSection}
            theme={theme}
            isEditable={isEditable}
            handleAddPhoto={handleAddPhoto}
          ></Photo>

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
                <input
                  placeholder="Job Title"
                  value={personalSection.jobTitle}
                  onChange={(e) => handleNameChange("jobTitle", e.target.value)}
                />
              </div>
            </>
          ) : (
            <div>
              <h3>
                {personalSection.firstName + " " + personalSection.lastName}
              </h3>
              <h4>{personalSection.jobTitle}</h4>
            </div>
          )}
        </div>
        <div className={`mainContainer-${theme}`}>
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
              theme={theme}
            ></SideSection>
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
            <SideSection
              key={contactSection.id}
              section={contactSection}
              isEditable={isEditable}
              noListStyle={"noListStyle"}
              handleItemChange={handleItemChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              hasField={true}
              visible={false}
              theme={theme}
            ></SideSection>
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
              noListStyle={"noListStyle"}
              handleItemChange={handleItemChange}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              theme={theme}
            ></SideSection>
          </aside>
        </div>
      </div>
    </div>
  );
}

IceGray.propTypes = {
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
  handleAddPhoto: PropTypes.func,
};
