//Selects add action buttons from index's form.
const addSkillButton = document.getElementById("add_skill");
const addLanguageButton = document.getElementById("add_language");
const addExperienceButton = document.getElementById("add_experience");
const addEducationButton = document.getElementById("add_education");

//Selects action related divs.
const skillsDiv = document.getElementById("skills");
const languageDiv = document.getElementById("languages");
const experiencesDiv = document.getElementById("experiences");
const educationsDiv = document.getElementById("educations");

//list that contains proficiency level.
const proficiencyLevel = [
    "Beginner",
    "Intermediate",
    "Professional",
    "Fluent",
    "Native"
];

function createHTHMLLabel(title, parentElement, required) {
    const newLabel = document.createElement("label");
    if(required) {
        newLabel.innerHTML = title + "<span id=\"required\">*</span> :";
    } else {
        newLabel.innerHTML = title + " :";
    }
    parentElement.appendChild(newLabel);
}

function createHTHMLInput(name, type, parentElement) {
    const newInput = document.createElement("input");
    newInput.id = name + "_input";
    newInput.type = type;
    newInput.name = name;
    parentElement.appendChild(newInput);
}

function createHTMLAddButton(id, parentElement) {
    const newAddButton = document.createElement("input");
    newAddButton.id = id;
    newAddButton.class = "add";
    newAddButton.type = "button";
    newAddButton.value = "+";
    parentElement.appendChild(newAddButton);
}

//creates and appends new text input to skills div.
const addSkill = function() {
    createHTHMLInput("skill", "text", skillsDiv);
}

//Creates text box input for specifying the language and creates proficiency level selector.
//Appends both to langage div.
const addLanguage = function() {
    createHTHMLInput("language", "text", languageDiv);

    const proficiencySelector = document.createElement("select");
    for(let level of proficiencyLevel){
        const option = document.createElement("option");
        option.value = level.toLowerCase();
        option.innerHTML = level;
        proficiencySelector.appendChild(option);
    }
    languageDiv.appendChild(proficiencySelector);
}

const addExperience = function() {
    //Add job title input.
    createHTHMLLabel("Job title", experiencesDiv, required=true);
    createHTHMLInput("job_title", "text", experiencesDiv);

    //Add employer input.
    createHTHMLLabel("Employer", experiencesDiv, required=true);
    createHTHMLInput("employer", "text", experiencesDiv);

    //Add location input.
    createHTHMLLabel("Location", experiencesDiv, required=true);
    createHTHMLInput("location", "text", experiencesDiv);

    //Add duration "from" date input (with MM-AAAA format).
    createHTHMLLabel("From", experiencesDiv, required=true);
    createHTHMLInput("from", "month", experiencesDiv)
    document.getElementById("from_input").placeholder = "MM-AAAA";

    //Add duration "since" date input (with MM-AAAA format).
    createHTHMLLabel("Since", experiencesDiv, required=true);
    createHTHMLInput("since", "month", experiencesDiv);
    document.getElementById("since_input").placeholder = "MM-AAAA"; // ATTENTION PLACEHOLDER !!

    //create div for containing activities inputs
    const activitiesDiv = document.createElement("div");
    activitiesDiv.id = "activities";
     
    //Add button action "add task".
    createHTHMLLabel("Add task", activitiesDiv, required=true);
    createHTMLAddButton("add_activity", activitiesDiv);
    experiencesDiv.appendChild(activitiesDiv);
   
    const addActivity = function() {
        createHTHMLInput("activity", "text", activitiesDiv);  // ATTENTION ID vs CLASS !!
    }
    document.getElementById("add_activity").addEventListener("click", addActivity);
}

const addEducation = function() {

}

//Links adding functions to action buttons. :
addSkillButton.addEventListener("click", addSkill);
addLanguageButton.addEventListener("click", addLanguage);
addExperienceButton.addEventListener("click", addExperience);
