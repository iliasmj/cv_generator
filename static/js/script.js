//Selects add action buttons from index's form.
const addSkillButton = document.getElementById("add_skill");
const addLanguageButton = document.getElementById("add_language");
const addExperienceButton = document.getElementById("add_experience");
const addEducationButton = document.getElementById("add_education");

//Selects action related divs.
const skillsDiv = document.getElementById("skills");
const languagesDiv = document.getElementById("languages");
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

function createHTMLDiv(className, parentElement) {
    const newDiv = document.createElement("div");
    newDiv.className = className;
    parentElement.appendChild(newDiv);
    return newDiv
}

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
    const languageDiv = createHTMLDiv("language", languagesDiv)
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
    const experienceDiv = createHTMLDiv("experience", experiencesDiv)
    //Add job title input.
    createHTHMLLabel("Job title", experienceDiv, required=true);
    const jobTitleInput = createHTHMLInput("text_box", "text", "exp_job_title", experienceDiv);

    //Add employer input.
    createHTHMLLabel("Employer", experienceDiv, required=true);
    const employerInput = createHTHMLInput("text_box", "text", "employer", experienceDiv);

    //Add location input.
    createHTHMLLabel("Location", experienceDiv, required=true);
    const expLocationInput = createHTHMLInput("text_box", "text", "exp_location", experienceDiv);

    //Add duration "from" date input (with MM-AAAA format).
    createHTHMLLabel("From", experienceDiv, required=true);
    const expFromInput = createHTHMLInput("date", "month", "exp_from", experienceDiv)
    expFromInput.placeholder = "MM-AAAA";

    //Add duration "to" date input (with MM-AAAA format).
    createHTHMLLabel("To", experienceDiv, required=true);
    const expSinceInput = createHTHMLInput("date", "month", "exp_to", experienceDiv);
    expSinceInput.placeholder = "MM-AAAA";

    //create div for containing activities inputs
    const activitiesDiv = document.createElement("div");
    activitiesDiv.id = "activities";
     
    //Add button action "add task".
    createHTHMLLabel("Add task", activitiesDiv, required=true);
    const addActivityButton = createHTMLAddButton(activitiesDiv);
    experienceDiv.appendChild(activitiesDiv);
   
    const addActivity = function() {
        return createHTHMLInput("text_box", "text", "activity", activitiesDiv);
    }
    addActivityButton.addEventListener("click", addActivity);
}

const addEducation = function() {
    const educationDiv = createHTMLDiv("language", educationsDiv)
    //Add institution input.
    createHTHMLLabel("Institution", educationDiv, required=true);
    const institutionInput = createHTHMLInput("text_box", "text", "institution", educationDiv);

    //Add location input.
    createHTHMLLabel("Location", educationDiv, required=true);
    const eduLocationInput = createHTHMLInput("text_box", "text", "edu_location", educationDiv);

     //Add duration "from" date input (with MM-AAAA format).
     createHTHMLLabel("From", educationDiv, required=true);
     const eduFromInput = createHTHMLInput("date", "month", "edu_from", educationDiv)
     eduFromInput.placeholder = "MM-AAAA";
 
     //Add duration "to" date input (with MM-AAAA format).
     createHTHMLLabel("To", educationDiv, required=true);
     const eduSinceInput = createHTHMLInput("date", "month", "edu_to", educationDiv);
     eduSinceInput.placeholder = "MM-AAAA";

     //Add program title input.
    createHTHMLLabel("Program title", educationDiv, required=true);
    const programTitleInput = createHTHMLInput("text_box", "text", "program_title", educationDiv);
}

//Links adding functions to action buttons. :
addSkillButton.addEventListener("click", addSkill);
addLanguageButton.addEventListener("click", addLanguage);
addExperienceButton.addEventListener("click", addExperience);
addEducationButton.addEventListener("click", addEducation);
