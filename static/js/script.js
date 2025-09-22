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

function createHTHMLInput(htmlClass, type, name, parentElement) {
    const newInput = document.createElement("input");
    newInput.className = htmlClass;
    newInput.type = type;
    newInput.name = name;
    parentElement.appendChild(newInput);
    return newInput;
}

function createHTMLAddButton(parentElement) {
    const newAddButton = document.createElement("input");
    newAddButton.class = "add";
    newAddButton.type = "button";
    newAddButton.value = "+";
    parentElement.appendChild(newAddButton);
    return newAddButton;
}

//creates and appends new text input to skills div.
const addSkill = function() {
    const skill = createHTHMLInput("text_box","text", "skill", skillsDiv);
}

//Creates text box input for specifying the language and creates proficiency level selector.
//Appends both to langage div.
const addLanguage = function() {
    const language = createHTHMLInput("text_box", "text", "language", languageDiv);

    const proficiencySelector = document.createElement("select");
    proficiencySelector.className = "select"
    proficiencySelector.name = "proficiency"
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
    const jobTitleInput = createHTHMLInput("text_box", "text", "job_title", experiencesDiv);

    //Add employer input.
    createHTHMLLabel("Employer", experiencesDiv, required=true);
    const employerInput = createHTHMLInput("text_box", "text", "employer", experiencesDiv);

    //Add location input.
    createHTHMLLabel("Location", experiencesDiv, required=true);
    const expLocationInput = createHTHMLInput("text_box", "text", "exp_location", experiencesDiv);

    //Add duration "from" date input (with MM-AAAA format).
    createHTHMLLabel("From", experiencesDiv, required=true);
    const expFromInput = createHTHMLInput("date", "month", "exp_from", experiencesDiv)
    expFromInput.placeholder = "MM-AAAA";

    //Add duration "to" date input (with MM-AAAA format).
    createHTHMLLabel("To", experiencesDiv, required=true);
    const expSinceInput = createHTHMLInput("date", "month", "exp_to", experiencesDiv);
    expSinceInput.placeholder = "MM-AAAA";

    //create div for containing activities inputs
    const activitiesDiv = document.createElement("div");
    activitiesDiv.id = "activities";
     
    //Add button action "add task".
    createHTHMLLabel("Add task", activitiesDiv, required=true);
    const addActivityButton = createHTMLAddButton(activitiesDiv);
    experiencesDiv.appendChild(activitiesDiv);
   
    const addActivity = function() {
        return createHTHMLInput("text_box", "text", "activity", activitiesDiv);
    }
    addActivityButton.addEventListener("click", addActivity);
}

const addEducation = function() {
    //Add institution input.
    createHTHMLLabel("Institution", educationsDiv, required=true);
    const institutionInput = createHTHMLInput("text_box", "text", "institution", educationsDiv);

    //Add location input.
    createHTHMLLabel("Location", educationsDiv, required=true);
    const eduLocationInput = createHTHMLInput("text_box", "text", "edu_location", educationsDiv);

     //Add duration "from" date input (with MM-AAAA format).
     createHTHMLLabel("From", educationsDiv, required=true);
     const eduFromInput = createHTHMLInput("date", "month", "edu_from", educationsDiv)
     eduFromInput.placeholder = "MM-AAAA";
 
     //Add duration "to" date input (with MM-AAAA format).
     createHTHMLLabel("To", educationsDiv, required=true);
     const eduSinceInput = createHTHMLInput("date", "month", "edu_to", educationsDiv);
     eduSinceInput.placeholder = "MM-AAAA";

     //Add program title input.
    createHTHMLLabel("Program title", educationsDiv, required=true);
    const programTitleInput = createHTHMLInput("text_box", "text", "program_title", educationsDiv);
}

//Links adding functions to action buttons. :
addSkillButton.addEventListener("click", addSkill);
addLanguageButton.addEventListener("click", addLanguage);
addExperienceButton.addEventListener("click", addExperience);
addEducationButton.addEventListener("click", addEducation);
