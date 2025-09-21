//Selects add action buttons from index's form. :
const addSkillButton = document.getElementById("add_skill");
const addLanguageButton = document.getElementById("add_language");
const addExperienceButton = document.getElementById("add_experience");
const addEducationButton = document.getElementById("add_education");

//Selects action related divs. :
const skillsDiv = document.getElementById("skills");
const languageDiv = document.getElementById("languages");
const experiencesDiv = document.getElementById("experiences");
const educationsDiv = document.getElementById("educations");

//list that contains proficiency level
const proficiencyLevel = [
    "Beginner",
    "Intermediate",
    "Professional",
    "Fluent",
    "Native"
];

//creates and appends new text input to skills div. :
const addSkill = function() {
    const skillInput = document.createElement("input");
    skillInput.id = "skill_input";
    skillInput.type = "text";
    skillInput.name = "skill";
    skillsDiv.appendChild(skillInput);
}

//Creates new label plus text box input for specifying the language and creates proficiency selector.
//Appends both to langage div. :
const addLanguage = function() {
    const languageLabel = document.createElement("label");
    languageLabel.innerHTML = "Language<span id=\"required\">*</span> :"
    languageDiv.appendChild(languageLabel);

    const languageInput = document.createElement("input");
    languageInput.id = "language_input";
    languageInput.type = "text";
    languageInput.name = "language"
    languageDiv.appendChild(languageInput);

    const proficiencySelector = document.createElement("select");
    for(let level of proficiencyLevel){
        const option = document.createElement("option");
        option.value = level.toLowerCase();
        option.innerHTML = level;
        proficiencySelector.appendChild(option)
    }
    languageDiv.appendChild(proficiencySelector);
}

const addExperience = function() {

}

const addEducation = function() {

}

//Links adding functions to action buttons. :
addSkillButton.addEventListener("click", addSkill);
addLanguageButton.addEventListener("click", addLanguage);
