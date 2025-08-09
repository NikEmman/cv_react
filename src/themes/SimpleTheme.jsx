import Section from "../Section";
import PropTypes from "prop-types";
import "./simpleTheme.css";

export default function SimpleTheme({
  myData,
  isEditable,
  theme,
  handleSectionChange,
  handleNameChange,
}) {
  const sections = myData.sections
    .filter((sec) => sec.title != "Person")
    .map((section) => (
      <Section
        key={section.title}
        section={section}
        isEditable={isEditable}
        handleSectionChange={handleSectionChange}
        theme={theme}
      />
    ));
  const personalSection = myData.sections[0];
  return (
    <div className={`body-${theme}`}>
      <div className={`hero-${theme}`}>
        {isEditable ? (
          <>
            <input
              placeholder="First Name"
              value={personalSection.firstName}
              onChange={(e) => handleNameChange("firstName", e.target.value)}
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
  );
}

SimpleTheme.propTypes = {
  isEditable: PropTypes.bool,
  handleNameChange: PropTypes.func,
  myData: PropTypes.object,
  theme: PropTypes.string,
  handleSectionChange: PropTypes.func,
};
