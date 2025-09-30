//Selects translate labels action button from index's form
const displayLanguageSelector = document.getElementById("translate");

traduction = {
    "🇬🇧" : {
        name : "Name<span id=\"required\">*</span> :",
        firstName : "First Name<span id=\"required\">*</span> :",
        birthDate : "Birth Date<span id=\"required\">*</span> :",
        nationality : "Nationality<span id=\"required\">*</span> :",
        phoneNumber :  "Phone Number<span id=\"required\">*</span> :",
        address : "Address<span id=\"required\">*</span> :",
        driverLicense : "Driver License<span id=\"required\">*</span> :",
        aboutJobTitle : "Job Title<span id=\"required\">*</span> :",
        yearsExperience : "Years of experience<span id=\"required\">*</span> :",
        bio : "Biography<span id=\"required\">*</span> :",
        addSkill : "Add Skill<span id=\"required\">*</span> :",
        addLanguage : "Add Language<span id=\"required\">*</span> :",
        addExperience : "Add Experience<span id=\"required\">*</span> :",
        addEducation : "Add Education<span id=\"required\">*</span> :",
        expJobTitle : "Job Title<span id=\"required\">*</span> :",
        employer : "Employer<span id=\"required\">*</span> :",
        expLocation : "Location<span id=\"required\">*</span> :",
        expFrom : "From<span id=\"required\">*</span> :",
        expTo : "To<span id=\"required\">*</span> :",
        addTask : "Add Task<span id=\"required\">*</span> :",
        institution : "Institution<span id=\"required\">*</span> :",
        eduLocation : "Location<span id=\"required\">*</span> :",
        eduFrom : "From<span id=\"required\">*</span> :",
        eduTo : "To<span id=\"required\">*</span> :",
        programTitle : "Program Title<span id=\"required\">*</span> :",
    },
    "🇫🇷" : {
        name : "Nom<span id=\"required\">*</span> :",
        firstName : "Prénom<span id=\"required\">*</span> :",
        birthDate : "Date de naissance<span id=\"required\">*</span> :",
        nationality : "Nationalité<span id=\"required\">*</span> :",
        phoneNumber : "Téléphone<span id=\"required\">*</span> :",
        address : "Adresse<span id=\"required\">*</span> :",
        driverLicense : "Permis de conduire<span id=\"required\">*</span> :",
        aboutJobTitle : "Profession<span id=\"required\">*</span> :",
        yearsExperience : "Années d'expérience<span id=\"required\">*</span> :",
        bio : "Biographie<span id=\"required\">*</span> :",
        addSkill : "Ajouter une compétence<span id=\"required\">*</span> :",
        addLanguage : "Ajouter une langue<span id=\"required\">*</span> :",
        addExperience : "Ajouter une expérience<span id=\"required\">*</span> :",
        addEducation : "Ajouter une formation<span id=\"required\">*</span> :",
        expJobTitle : "Titre du poste<span id=\"required\">*</span> :",
        employer : "Employeur<span id=\"required\">*</span> :",
        expLocation : "Lieu<span id=\"required\">*</span> :",
        expFrom : "De<span id=\"required\">*</span> :",
        expTo : "À<span id=\"required\">*</span> :",
        addTask : "Ajouter une tâche<span id=\"required\">*</span> :",
        institution : "Établissement<span id=\"required\">*</span> :",
        eduLocation : "Lieu<span id=\"required\">*</span> :",
        eduFrom : "De<span id=\"required\">*</span> :",
        eduTo : "À<span id=\"required\">*</span> :",
        programTitle : "Titre du programme<span id=\"required\">*</span> :"
    }
};

class FirstLevelLabels {
    constructor(){
        this.nameLabel = document.getElementById("name_label");
        this.firstNameLabel = document.getElementById("first_name_label");
        this.birthDateLabel = document.getElementById("birth_date_label");
        this.nationalityLabel = document.getElementById("nationality_label");
        this.phoneNumberLabel = document.getElementById("phone_number_label");
        this.addressLabel = document.getElementById("address_label");
        this.driverLicenseLabel = document.getElementById("driver_license_label");
        this.aboutJobTitleLabel = document.getElementById("about_job_title_label");
        this.yearsExperienceLabel = document.getElementById("years_experience_label");
        this.bioLabel = document.getElementById("bio_label");
        this.addSkillLabel = document.getElementById("add_skill_label");
        this.addLanguageLabel = document.getElementById("add_language_label");
        this.addExperienceLabel = document.getElementById("add_experience_label");
        this.addEducationLabel = document.getElementById("add_education_label");
    }

    translate(language) {
        this.nameLabel.innerHTML = traduction[language].name;
        this.firstNameLabel.innerHTML = traduction[language].firstName;
        this.birthDateLabel.innerHTML = traduction[language].birthDate;
        this.nationalityLabel.innerHTML = traduction[language].nationality;
        this.phoneNumberLabel.innerHTML = traduction[language].phoneNumber;
        this.addressLabel.innerHTML = traduction[language].address;
        this.driverLicenseLabel.innerHTML = traduction[language].driverLicense;
        this.aboutJobTitleLabel.innerHTML = traduction[language].aboutJobTitle;
        this.yearsExperienceLabel.innerHTML = traduction[language].yearsExperience;
        this.bioLabel.innerHTML = traduction[language].bio;
        this.addSkillLabel.innerHTML = traduction[language].addSkill;
        this.addLanguageLabel.innerHTML = traduction[language].addLanguage;
        this.addExperienceLabel.innerHTML = traduction[language].addExperience;
        this.addEducationLabel.innerHTML = traduction[language].addEducation;
    }
}

class AddExperienceLabels {
    constructor(){
        this.expJobTitleLabel = document.getElementById("exp_job_title_label");
        this.employerLabel = document.getElementById("employer_label");
        this.expLocationLabel = document.getElementById("exp_location_label");
        this.expFromLabel = document.getElementById("exp_from_label");
        this.expToLabel = document.getElementById("exp_to_label");
        this.addTaskLabel = document.getElementById("add_task_label");
    }

    translate(language) {
        this.expJobTitleLabel.innerHTML = traduction[language].expJobTitle;
        this.employerLabel.innerHTML = traduction[language].employer;
        this.expLocationLabel.innerHTML = traduction[language].expLocation;
        this.expFromLabel.innerHTML = traduction[language].expFrom;
        this.expToLabel.innerHTML = traduction[language].expTo;
        this.addTaskLabel = traduction[language].addTask;
    }
}

class AddEducationLabels {
    constructor(){
        this.institutionLabel = document.getElementById("institution_label");
        this.eduLocationLabel = document.getElementById("edu_location_label");
        this.eduFromLabel = document.getElementById("edu_from_label");
        this.eduToLabel = document.getElementById("edu_to_label");
        this.programTitleLabel = document.getElementById("program_title_label");
    }

    translate(language) {
        this.institutionLabel.innerHTML = traduction[language].institution;
        this.eduLocationLabel.innerHTML = traduction[language].eduLocation;
        this.eduFromLabel.innerHTML = traduction[language].eduFrom;
        this.eduToLabel.innerHTML = traduction[language].eduTo;
        this.programTitleLabel.innerHTML = traduction[language].programTitle;
    }
}

//Selects add action buttons from index's form.
const addSkillButton = document.getElementById("add_skill_button");
const addLanguageButton = document.getElementById("add_language_button");
const addExperienceButton = document.getElementById("add_experience_button");
const addEducationButton = document.getElementById("add_education_button");

//Selects action related divs.
const skillsDiv = document.getElementById("skills");
const languagesDiv = document.getElementById("languages");
const experiencesDiv = document.getElementById("experiences");
const educationsDiv = document.getElementById("educations");

//List that contains proficiency level.
const proficiencyLevel = {
    "🇬🇧" : [
        "Beginner",
        "Intermediate",
        "Professional",
        "Fluent",
        "Native"
    ],
    "🇫🇷" : [
        "Débutant",
        "Intermédiaire",
        "Professionnel",
        "Courant",
        "Langue maternelle"
    ]
};

const saveDisplayLanguage = function() {
    localStorage.setItem("display_language", displayLanguageSelector.value);
    const labels = new FirstLevelLabels();
    labels.translate(displayLanguageSelector.value);
};
displayLanguageSelector.addEventListener("change", saveDisplayLanguage);

const loadDisplayLanguage = function() {
    const savedDisplayLanguage = localStorage.getItem("display_language");
    if(savedDisplayLanguage) {
        displayLanguageSelector.value = savedDisplayLanguage;
        const labels = new FirstLevelLabels();
        labels.translate(displayLanguageSelector.value);
    } else {
        saveDisplayLanguage();
    }
};
window.addEventListener("DOMContentLoaded", loadDisplayLanguage);

function createHTMLDiv(className, parentElement) {
    const newDiv = document.createElement("div");
    newDiv.className = className;
    parentElement.appendChild(newDiv);
    return newDiv;
}

function createHTHMLLabel(id, parentElement) {
    const newLabel = document.createElement("label");
    newLabel.id = id;
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
    newAddButton.className = "add";
    newAddButton.type = "button";
    newAddButton.value = "+";
    parentElement.appendChild(newAddButton);
    return newAddButton;
}

//Creates and appends new text input to skills div.
const addSkill = function() {
    const skill = createHTHMLInput("text_box","text", "skill", skillsDiv);
};

//Creates text box input for specifying the language and creates proficiency level selector.
//Appends both to langage div.
const addLanguage = function() {
    const languageDiv = createHTMLDiv("language", languagesDiv);
    const language = createHTHMLInput("text_box", "text", "language", languageDiv);

    const proficiencySelector = document.createElement("select");
    proficiencySelector.className = "select";
    proficiencySelector.name = "proficiency";
    for(let level of proficiencyLevel[localStorage.getItem("display_language")]){
        const option = document.createElement("option");
        option.value = level.toLowerCase();
        option.innerHTML = level;
        proficiencySelector.appendChild(option);
    }
    languageDiv.appendChild(proficiencySelector);
};

//Activities divs count
let activitiesDivCount = 0;

const addExperience = function() {
    const experienceDiv = createHTMLDiv("experience", experiencesDiv);
    //Add job title input.
    
    createHTHMLLabel("exp_job_title_label", experienceDiv);
    const jobTitleInput = createHTHMLInput("text_box", "text", "exp_job_title", experienceDiv);

    //Add employer input.
    createHTHMLLabel("employer_label", experienceDiv);
    const employerInput = createHTHMLInput("text_box", "text", "employer", experienceDiv);

    //Add location input.
    createHTHMLLabel("exp_location_label", experienceDiv);
    const expLocationInput = createHTHMLInput("text_box", "text", "exp_location", experienceDiv);

    //Add duration "from" date input (with MM-AAAA format).
    createHTHMLLabel("exp_from_label", experienceDiv);
    const expFromInput = createHTHMLInput("date", "month", "exp_from", experienceDiv);
    if(localStorage.getItem("display_language", "🇫🇷")) {
        expFromInput.placeholder = "MM-AAAA";
    } else {
        expFromInput.placeholder = "MM-YYYY";
    }

    //Add duration "to" date input (with MM-AAAA format).
    createHTHMLLabel("exp_to_label", experienceDiv);
    const expSinceInput = createHTHMLInput("date", "month", "exp_to", experienceDiv);
    if(localStorage.getItem("display_language", "🇫🇷")) {
        expSinceInput.placeholder = "MM-AAAA";
    } else {
        expSinceInput.placeholder = "MM-YYYY";
    }

    //create div for containing activities inputs
    const activitiesDiv = createHTMLDiv("activities", experienceDiv);
    activitiesDivCount++;
    activitiesDiv.className = "activities";
     
    //Add button action "add task".
    createHTHMLLabel("add_task_label", activitiesDiv);
    const addActivityButton = createHTMLAddButton(activitiesDiv);
    experienceDiv.appendChild(activitiesDiv);
   
    const addActivity = function() {
        return createHTHMLInput("text_box", "text", "activity_" + activitiesDivCount, activitiesDiv);
    }
    addActivityButton.addEventListener("click", addActivity);

    const labels = new AddExperienceLabels();
    labels.translate(displayLanguageSelector.value);
};

const addEducation = function() {
    const educationDiv = createHTMLDiv("education", educationsDiv);
    //Add institution input.
    createHTHMLLabel("institution_label", educationDiv);
    const institutionInput = createHTHMLInput("text_box", "text", "institution", educationDiv);

    //Add location input.
    createHTHMLLabel("edu_location_label", educationDiv);
    const eduLocationInput = createHTHMLInput("text_box", "text", "edu_location", educationDiv);

    //Add duration "from" date input (with MM-AAAA format).
    createHTHMLLabel("edu_from_label", educationDiv);
    const eduFromInput = createHTHMLInput("date", "month", "edu_from", educationDiv);
    if(localStorage.getItem("display_language", "🇫🇷")) {
        eduFromInput.placeholder = "MM-AAAA";
    } else {
        eduFromInput.placeholder = "MM-YYYY";
    }
 
    //Add duration "to" date input (with MM-AAAA format).
    createHTHMLLabel("edu_to_label", educationDiv);
    const eduSinceInput = createHTHMLInput("date", "month", "edu_to", educationDiv);
    if(localStorage.getItem("display_language", "🇫🇷")) {
        eduSinceInput.placeholder = "MM-AAAA";
    } else {
        eduSinceInput.placeholder = "MM-YYYY";
    }

    //Add program title input.
    createHTHMLLabel("program_title_label", educationDiv);
    const programTitleInput = createHTHMLInput("text_box", "text", "program_title", educationDiv);

    const labels = new AddEducationLabels();
    labels.translate(displayLanguageSelector.value);
};

//Links adding functions to action buttons. :
addSkillButton.addEventListener("click", addSkill);
addLanguageButton.addEventListener("click", addLanguage);
addExperienceButton.addEventListener("click", addExperience);
addEducationButton.addEventListener("click", addEducation);
