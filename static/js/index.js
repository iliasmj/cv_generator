//Select translate labels action button from index's form.
const displayLanguageSelector = document.getElementById("translate");

//Define form's elelments traduction dictionnary.
traduction = {
    "🇬🇧" : {
        personalDataTitle : "Personal Data",
        name : "Name<span id=\"required\">*</span> :",
        firstName : "First Name<span id=\"required\">*</span> :",
        birthDate : "Birth Date<span id=\"required\">*</span> :",
        birthDatePlaceholder : "DD/MM/YYYY",
        nationality : "Nationality<span id=\"required\">*</span> :",
        phoneNumber :  "Phone Number<span id=\"required\">*</span> :",
        address : "Address<span id=\"required\">*</span> :",
        driverLicense : "Driver License<span id=\"required\">*</span> :",
        aboutMeTitle : "About Me",
        photoLabel : "CV Photo<span id=\"required\">*</span> :",
        aboutJobTitle : "Job Title<span id=\"required\">*</span> :",
        yearsExperience : "Years of experience<span id=\"required\">*</span> :",
        bio : "Biography<span id=\"required\">*</span> :",
        addSkill : "Add Skill<span id=\"required\">*</span>",
        addLanguage : "Add Language<span id=\"required\">*</span>",
        experiencesTitle : "Experiences",
        addExperience : "Add Experience<span id=\"required\">*</span>",
        expJobTitle : "Job Title<span id=\"required\">*</span> :",
        employer : "Employer<span id=\"required\">*</span> :",
        expLocation : "Location<span id=\"required\">*</span> :",
        expFrom : "From<span id=\"required\">*</span> :",
        expTo : "To<span id=\"required\">*</span> :",
        addTask : "Add Task<span id=\"required\">*</span>",
        educationsTitle : "Education & Training",
        addEducation : "Add Education<span id=\"required\">*</span>",
        institution : "Institution<span id=\"required\">*</span> :",
        eduLocation : "Location<span id=\"required\">*</span> :",
        eduFrom : "From<span id=\"required\">*</span> :",
        eduTo : "To<span id=\"required\">*</span> :",
        programTitle : "Program Title<span id=\"required\">*</span> :",
    },
    "🇫🇷" : {
        personalDataTitle : "Données personnelles",
        name : "Nom<span id=\"required\">*</span> :",
        firstName : "Prénom<span id=\"required\">*</span> :",
        birthDatePlaceholder : "JJ/MM/AAAA",
        birthDate : "Date de naissance<span id=\"required\">*</span> :",
        nationality : "Nationalité<span id=\"required\">*</span> :",
        phoneNumber : "Téléphone<span id=\"required\">*</span> :",
        address : "Adresse<span id=\"required\">*</span> :",
        driverLicense : "Permis de conduire<span id=\"required\">*</span> :",
        aboutMeTitle : "A propos de moi",
        photoLabel : "Photo CV<span id=\"required\">*</span> :",
        aboutJobTitle : "Profession<span id=\"required\">*</span> :",
        yearsExperience : "Années d'expérience<span id=\"required\">*</span> :",
        bio : "Biographie<span id=\"required\">*</span> :",
        addSkill : "Ajouter une compétence<span id=\"required\">*</span>",
        addLanguage : "Ajouter une langue<span id=\"required\">*</span>",
        experiencesTitle : "Expériences",
        addExperience : "Ajouter une expérience<span id=\"required\">*</span>",
        expJobTitle : "Titre du poste<span id=\"required\">*</span> :",
        employer : "Employeur<span id=\"required\">*</span> :",
        expLocation : "Lieu<span id=\"required\">*</span> :",
        expFrom : "De<span id=\"required\">*</span> :",
        expTo : "À<span id=\"required\">*</span> :",
        addTask : "Ajouter une tâche<span id=\"required\">*</span> :",
        educationsTitle : "Formations",
        addEducation : "Ajouter une formation<span id=\"required\">*</span>",
        institution : "Établissement<span id=\"required\">*</span> :",
        eduLocation : "Lieu<span id=\"required\">*</span> :",
        eduFrom : "De<span id=\"required\">*</span> :",
        eduTo : "À<span id=\"required\">*</span> :",
        programTitle : "Titre du programme<span id=\"required\">*</span> :"
    }
};

//Class that selects fisrt level form's elements and translate all selected elements' inner HTML.
class FirstLevelLabels {
    constructor(){
        this.personalDataTitle = document.getElementById("personal_data_title");
        this.nameLabel = document.getElementById("name_label");
        this.firstNameLabel = document.getElementById("first_name_label");
        this.birthDateLabel = document.getElementById("birth_date_label");
        this.birthDatePlaceholder = document.getElementById("birth_date_placeholder");
        this.nationalityLabel = document.getElementById("nationality_label");
        this.phoneNumberLabel = document.getElementById("phone_number_label");
        this.addressLabel = document.getElementById("address_label");
        this.driverLicenseLabel = document.getElementById("driver_license_label");
        this.aboutMeTitle = document.getElementById("about_me_title");
        this.photoLabel = document.getElementById("photo_label");
        this.aboutJobTitleLabel = document.getElementById("about_job_title_label");
        this.yearsExperienceLabel = document.getElementById("years_experience_label");
        this.bioLabel = document.getElementById("bio_label");
        this.addSkillLabel = document.getElementById("add_skill_label");
        this.addLanguageLabel = document.getElementById("add_language_label");
        this.experiencesTitle = document.getElementById("experiences_title");
        this.addExperienceLabel = document.getElementById("add_experience_label");
        this.educationsTitle = document.getElementById("educations_title");
        this.addEducationLabel = document.getElementById("add_education_label");
    }

    translate(language) {
        this.personalDataTitle.innerHTML = traduction[language].personalDataTitle;
        this.nameLabel.innerHTML = traduction[language].name;
        this.firstNameLabel.innerHTML = traduction[language].firstName;
        this.birthDatePlaceholder.innerHTML = traduction[language].birthDatePlaceholder;
        this.birthDateLabel.innerHTML = traduction[language].birthDate;
        this.nationalityLabel.innerHTML = traduction[language].nationality;
        this.phoneNumberLabel.innerHTML = traduction[language].phoneNumber;
        this.addressLabel.innerHTML = traduction[language].address;
        this.driverLicenseLabel.innerHTML = traduction[language].driverLicense;
        this.aboutMeTitle.innerHTML = traduction[language].aboutMeTitle;
        this.photoLabel.innerHTML = traduction[language].photoLabel;
        this.aboutJobTitleLabel.innerHTML = traduction[language].aboutJobTitle;
        this.yearsExperienceLabel.innerHTML = traduction[language].yearsExperience;
        this.bioLabel.innerHTML = traduction[language].bio;
        this.addSkillLabel.innerHTML = traduction[language].addSkill;
        this.addLanguageLabel.innerHTML = traduction[language].addLanguage;
        this.experiencesTitle.innerHTML = traduction[language].experiencesTitle;
        this.addExperienceLabel.innerHTML = traduction[language].addExperience;
        this.educationsTitle.innerHTML = traduction[language].educationsTitle;
        this.addEducationLabel.innerHTML = traduction[language].addEducation;
    }
}

//Class that selects experience section form's elements and translate all selected elements' inner HTML.
class AddExperienceLabels {
    constructor(){
        this.expJobTitleLabels = document.getElementsByClassName("exp_job_title_label");
        this.employerLabels = document.getElementsByClassName("employer_label");
        this.expLocationLabels = document.getElementsByClassName("exp_location_label");
        this.expFromLabels = document.getElementsByClassName("exp_from_label");
        this.expToLabels = document.getElementsByClassName("exp_to_label");
        this.addTaskLabels = document.getElementsByClassName("add_task_label");
    }

    translate(language) {
        for (const label of this.expJobTitleLabels) {
            label.innerHTML = traduction[language].expJobTitle;
        }
        for (const label of this.employerLabels) {
            label.innerHTML = traduction[language].employer;
        }
        for (const label of this.expLocationLabels) {
            label.innerHTML = traduction[language].expLocation;
        }
        for (const label of this.expFromLabels) {
            label.innerHTML = traduction[language].expFrom;
        }
        for (const label of this.expToLabels) {
            label.innerHTML = traduction[language].expTo;
        }
        for (const label of this.addTaskLabels) {
            label.innerHTML = traduction[language].addTask;
        }
    }
}

//Class that selects education section form's elements and translate all selected elements' inner HTML.
class AddEducationLabels {
    constructor() {
        this.institutionLabels = document.getElementsByClassName("institution_label");
        this.eduLocationLabels = document.getElementsByClassName("edu_location_label");
        this.eduFromLabels = document.getElementsByClassName("edu_from_label");
        this.eduToLabels = document.getElementsByClassName("edu_to_label");
        this.programTitleLabels = document.getElementsByClassName("program_title_label");
    }

    translate(language) {
        for(const label of this.institutionLabels) {
            label.innerHTML = traduction[language].institution;
        }
        for(const label of this.eduLocationLabels) {
            label.innerHTML = traduction[language].eduLocation;
        }
        for(const label of this.eduFromLabels) {
            label.innerHTML = traduction[language].eduFrom;
        }
        for(const label of this.eduToLabels) {
            label.innerHTML = traduction[language].eduTo;
        }
        for(const label of this.programTitleLabels) {
            label.innerHTML = traduction[language].programTitle;
        }
    }
}

//Select add action buttons from index' form.
const addSkillButton = document.getElementById("add_skill_button");
const addLanguageButton = document.getElementById("add_language_button");
const addExperienceButton = document.getElementById("add_experience_button");
const addEducationButton = document.getElementById("add_education_button");

//Select form's action buttons from index' form.
const loadButton = document.getElementById("load");
const eraseButton = document.getElementById("erase");
const saveButton = document.getElementById("save");
const generateButton = document.getElementById("generate");

//Select action related divs.
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

//Define innerHTML form's action button translation dictionnary.
const buttonInner = {
    "🇬🇧" : {
        "load" : "Load",
        "erase" : "Erase",
        "save" : "Save",
        "generate" : "Generate"
    },
    "🇫🇷" : {
        "load" : "Charger",
        "erase" : "Effacer",
        "save" : "Sauvegarder",
        "generate" : "Générer"
    }
}

//Sets add action button click state tracker.
let addLanguageClicked = false;
let addExperienceClicked = false;
let addEducationClicked = false;

//Updates all input type=month placeholders.
function updatePlaceholders() {
    const monthTypeInput = document.getElementsByClassName("date_month");
    for (const input of monthTypeInput) {
        if (localStorage.getItem("display_language")  == "🇫🇷") {
            input.placeholder = "MM-AAAA";
        } else {
            input.placeholder = "MM-YYYY";
        }
    }
}

//Updates inner html from all form' elements.
function updateUI() {
    //Getting previous selected language and respective dictionnary.
    const cachedLanguage = localStorage.getItem("cached_display_language");
    const currentLevels = proficiencyLevel[cachedLanguage];
    //Getting current selected language and respective dictionnary. 
    const selectedLanguage = localStorage.getItem("display_language");
    const updatedLevels = proficiencyLevel[selectedLanguage];

    //Translates form's header buttons inner html.
    loadButton.innerHTML = buttonInner[selectedLanguage]["load"];
    eraseButton.innerHTML = buttonInner[selectedLanguage]["erase"];

    //Transtale first level form's elements' inner html.
    const firstLevelLabels = new FirstLevelLabels();
    firstLevelLabels.translate(displayLanguageSelector.value);

    //Translate all languages' proficiency level selectors by selecting options in proficiency dictionnary order.
    if (addLanguageClicked) {
        for (level of currentLevels) {
            const languageOptions = [...document.getElementsByClassName(level)];
            if (languageOptions.length > 0) {
                for (const option of languageOptions) {
                    const updateValue = updatedLevels[currentLevels.indexOf(level)];
                    option.className = updateValue;
                    option.value = updateValue;
                    option.innerHTML = updateValue;
                }
            }
        }
    }

    //Translate all experience div elements' inner html. 
    if (addExperienceClicked) {
        const addExperiencelabels = new AddExperienceLabels()
        addExperiencelabels.translate(displayLanguageSelector.value);
        updatePlaceholders();
    }
    
    //Translate all education div elements' inner html. 
    if (addEducationClicked) {
        const addEducationLabels = new AddEducationLabels();
        addEducationLabels.translate(displayLanguageSelector.value);
        updatePlaceholders();
    }

    //Translates form's footer buttons inner html.
    saveButton.value = buttonInner[selectedLanguage]["save"];
    generateButton.innerHTML = buttonInner[selectedLanguage]["generate"];
}

//Writes lang value in correct format into xml file
function updateXmlLang(selectedLanguage) {
    if (selectedLanguage == "🇬🇧") {
        document.documentElement.lang = "en"
    }
    if (selectedLanguage == "🇫🇷") {
        document.documentElement.lang = "fr"
    }
}

//Save previous and current selected language in localStorage and updateUI accordingly.
const saveDisplayLanguage = function() {
    const cachedDisplayLanguage = localStorage.getItem("display_language");
    localStorage.setItem("cached_display_language", cachedDisplayLanguage);
    localStorage.setItem("display_language", displayLanguageSelector.value);
    updateXmlLang(localStorage.getItem("display_language"))
    updateUI()
};

//Apply current localStorage display language value on window load and save previous selected display language as cached.
const loadDisplayLanguage = function() {
    localStorage.setItem("cached_display_language", displayLanguageSelector.value);
    const savedDisplayLanguage = localStorage.getItem("display_language");
    if (savedDisplayLanguage) {
        displayLanguageSelector.value = savedDisplayLanguage;
        updateXmlLang(savedDisplayLanguage)
        updateUI()
    } else {
        saveDisplayLanguage();
    }
};

//Removes className selected div from its parent div.
function eraseDivContent(className, parentDiv) {
    const children = [...document.getElementsByClassName(className)];
    for (child of children) {
        parentDiv.removeChild(child);
    }
}

//Resets fixed inputs inner html and erase dynamic elements div.
const eraseForm = function() {
    const fixedInputs = document.getElementsByClassName("fixed");
    for (input of fixedInputs) {
        input.value = "";
    }
    eraseDivContent("skill_div", skillsDiv);
    eraseDivContent("language_div", languagesDiv);
    eraseDivContent("experience_div", experiencesDiv);
    eraseDivContent("education_div", educationsDiv);
}

function createHTMLDiv(className, parentElement) {
    const newDiv = document.createElement("div");
    newDiv.className = className;
    parentElement.appendChild(newDiv);
    return newDiv;
}

function createHTHMLLabel(className, parentElement) {
    const newLabel = document.createElement("label");
    newLabel.className = className;
    parentElement.appendChild(newLabel);
}

function createHTHMLInput(className, type, name, parentElement) {
    const newInput = document.createElement("input");
    newInput.className = className;
    newInput.type = type;
    newInput.name = name;
    parentElement.appendChild(newInput);
    return newInput;
}

function createHTMLAddButton(parentElement) {
    const newAddButton = document.createElement("button");
    newAddButton.className = "add";
    newAddButton.type = "button";
    newAddButton.innerHTML = '<img src="/static/img/add.png">';
    parentElement.appendChild(newAddButton);
    return newAddButton;
}

function createHTMLRemoveButton(parentElement) {
    const newRemoveButton = document.createElement("button");
    newRemoveButton.className = "remove";
    newRemoveButton.type = "button";
    newRemoveButton.innerHTML = '<img src="/static/img/remove.png">';
    parentElement.appendChild(newRemoveButton);
    return newRemoveButton;
}

//Creates and appends new text input and its remove button to skills div.
const addSkill = function() {
    const skillDiv = createHTMLDiv("skill_div", skillsDiv);
    const skillInput = createHTHMLInput("skill","text", "skill", skillDiv);
    
    const skillRemoveButtonDiv = createHTMLDiv("skill_remove_button_div", skillDiv);
    const removeSkillButton = createHTMLRemoveButton(skillRemoveButtonDiv)
    const removeSkill = function() {
        skillsDiv.removeChild(skillDiv);
    }
    removeSkillButton.addEventListener("click", removeSkill);
};

//Creates text box input for specifying the language and creates proficiency level selector plus their remove button to languages div.
//Appends all to langage div.
const addLanguage = function() {
    addLanguageClicked = true;

    //Creates div for CSS styling.
    const languageDiv = createHTMLDiv("language_div", languagesDiv);
    const langageLeftSubDiv = createHTMLDiv("language_left_sub_div", languageDiv);
    const languageRightSubDiv = createHTMLDiv("language_right_sub_div", languageDiv);

    //Creates language input.
    const languageInput = createHTHMLInput("language", "text", "language", langageLeftSubDiv);

    //Creates proficiency level selector.
    const proficiencySelector = document.createElement("select");
    proficiencySelector.className = "proficiency";
    proficiencySelector.name = "proficiency";
    //Adding options to cew selector from proficiency level respective current selected language dictionnary.
    for(let level of proficiencyLevel[localStorage.getItem("display_language")]){
        const option = document.createElement("option");
        option.className = level;
        option.value = level;
        option.innerHTML = level;
        proficiencySelector.appendChild(option);
    }
    langageLeftSubDiv.appendChild(proficiencySelector);

    //Creates remove language button.
    const removeLanguageButton = createHTMLRemoveButton(languageRightSubDiv)
    const removeLanguage = function() {
        languagesDiv.removeChild(languageDiv);
    }
    removeLanguageButton.addEventListener("click", removeLanguage);
};

//Activities divs count.
let activitiesDivCount = 0;

//Creates text box for specifying the activity and its remove button to experiences div.
const addActivity = function(parentDiv, i) {
    const activityDiv = createHTMLDiv("activity_div", parentDiv);
    const activityInput = createHTHMLInput("activity_" + i, "text", "activity_" + i, activityDiv);
    
    const activityRemoveButtonDiv = createHTMLDiv("activity_remove_button_div", activityDiv);
    const removeActivityButton = createHTMLRemoveButton(activityRemoveButtonDiv);
    const removeActivity = function() {
        parentDiv.removeChild(activityDiv)
    }
    removeActivityButton.addEventListener("click", removeActivity);
}

//Creates new experience div filled with all experience related inputs and their action buttons.
const addExperience = function() {
    addExperienceClicked = true;

    const experienceDiv = createHTMLDiv("experience_div", experiencesDiv);

    //add remove experience button to parent div
    const removeExperienceButton = createHTMLRemoveButton(experienceDiv)
    const removeExperience = function() {
        experiencesDiv.removeChild(experienceDiv);
    }
    removeExperienceButton.addEventListener("click", removeExperience);
    experienceDiv.appendChild(document.createElement("br"));

    //Add job title input.
    createHTHMLLabel("exp_job_title_label", experienceDiv);
    const jobTitleInput = createHTHMLInput("exp_job_title", "text", "exp_job_title", experienceDiv);

    //Add employer input.
    createHTHMLLabel("employer_label", experienceDiv);
    const employerInput = createHTHMLInput("employer", "text", "employer", experienceDiv);

    //Add location input.
    createHTHMLLabel("exp_location_label", experienceDiv);
    const expLocationInput = createHTHMLInput("exp_location", "text", "exp_location", experienceDiv);

    //Add duration "from" date input (with MM-AAAA format).
    createHTHMLLabel("exp_from_label", experienceDiv);
    const expFromInput = createHTHMLInput("exp_from", "month", "exp_from", experienceDiv);
    if (localStorage.getItem("display_language")  == "🇫🇷") {
        expFromInput.placeholder = "MM-AAAA";
    } else {
        expFromInput.placeholder = "MM-YYYY";
    }

    //Add duration "to" date input (with MM-AAAA format).
    createHTHMLLabel("exp_to_label", experienceDiv);
    const expSinceInput = createHTHMLInput("exp_to", "month", "exp_to", experienceDiv);
    if (localStorage.getItem("display_language")  == "🇫🇷") {
        expSinceInput.placeholder = "MM-AAAA";
    } else {
        expSinceInput.placeholder = "MM-YYYY";
    }

    //create div for containing activities inputs
    const activitiesDiv = createHTMLDiv("activities_div", experienceDiv);
    activitiesDivCount++;
     
    //Add button action "add task".
    const activitiesHeader = createHTMLDiv("dynamic_div_header", activitiesDiv)
    const addActivityLabel = createHTHMLLabel("add_task_label", activitiesHeader);
    const addActivityButton = createHTMLAddButton(activitiesHeader);
    experienceDiv.appendChild(activitiesDiv);
    addActivityButton.addEventListener("click", () => addActivity(activitiesDiv, activitiesDivCount));

    //Translate all experience labels to current selected display language
    const labels = new AddExperienceLabels();
    labels.translate(displayLanguageSelector.value);
};

//Creates new education div filled with all experience related inputs and its remove button.
const addEducation = function() {
    addEducationClicked = true;

    const educationDiv = createHTMLDiv("education_div", educationsDiv);

    //add removeEducationButton to parent div
    const removeEducationButton = createHTMLRemoveButton(educationDiv)
    const removeEducation = function() {
        educationsDiv.removeChild(educationDiv);
    }
    removeEducationButton.addEventListener("click", removeEducation);

    //Add institution input.
    createHTHMLLabel("institution_label", educationDiv);
    const institutionInput = createHTHMLInput("institution", "text", "institution", educationDiv);

    //Add location input.
    createHTHMLLabel("edu_location_label", educationDiv);
    const eduLocationInput = createHTHMLInput("edu_location", "text", "edu_location", educationDiv);

    //Add duration "from" date input (with MM-AAAA format).
    createHTHMLLabel("edu_from_label", educationDiv);
    const eduFromInput = createHTHMLInput("edu_from", "month", "edu_from", educationDiv);
    if (localStorage.getItem("display_language") == "🇫🇷") {
        eduFromInput.placeholder = "MM-AAAA";
    } else {
        eduFromInput.placeholder = "MM-YYYY";
    }
 
    //Add duration "to" date input (with MM-AAAA format).
    createHTHMLLabel("edu_to_label", educationDiv);
    const eduSinceInput = createHTHMLInput("edu_to", "month", "edu_to", educationDiv);
    if (localStorage.getItem("display_language")  == "🇫🇷") {
        eduSinceInput.placeholder = "MM-AAAA";
    } else {
        eduSinceInput.placeholder = "MM-YYYY";
    }

    //Add program title input.
    createHTHMLLabel("program_title_label", educationDiv);
    const programTitleInput = createHTHMLInput("program_title", "text", "program_title", educationDiv);

    //Translate all education labels to current selected display language
    const labels = new AddEducationLabels();
    labels.translate(displayLanguageSelector.value);
};

//Fills all form's input with saved data (creates dynamic inputs accordingly).
const load = async function() {
    try {
        //calling /api/cv route by passing current selected display language.
        const response = await fetch(`/api/cv?display_language=${encodeURIComponent(displayLanguageSelector.value)}`);

        //Display load feedback message.
        if (!response.ok) {
            const message = await response.text();
            const loadFeedBackMessage = document.createElement("p");
            loadDisplayLanguage.id = "feedback_message";
            loadFeedBackMessage.innerHTML = message;
            const inputLoadSubMenu = document.getElementById("input_load_sub_menu");
            inputLoadSubMenu.appendChild(loadFeedBackMessage);
        }
        
        //getting CV json data.
        const data = await response.json();

        //Filling all form's input with CV data.
            //Fixed input.
        document.getElementById("name").value = data.personal_data.name;
        document.getElementById("first_name").value = data.personal_data.first_name;
        document.getElementById("birth_date").value = data.personal_data.birth_date;
        document.getElementById("nationality").value = data.personal_data.nationality;
        document.getElementById("phone_number").value = data.personal_data.phone_number;
        document.getElementById("email").value = data.personal_data.email;
        document.getElementById("address").value = data.personal_data.address;
        document.getElementById("driver_license").value = data.personal_data.driver_license;
        document.getElementById("about_job_title").value = data.about_me.job_title;
        document.getElementById("years_experience").value = data.about_me.years_experience;
        document.getElementById("bio").value = data.about_me.bio;

            //Skills inputs:
                //Creates skills inputs based on CV data.
        const skillValues = data.about_me.skills;
        for (let i = 0; i < skillValues.length; i++) {
            addSkill();
        }
                //Fills all new added inputs with respective CV data.
        const skillInputs = document.getElementsByClassName("skill");
        for (let i = 0; i < skillInputs.length; i++) {
            skillInputs[i].value = skillValues[i];
        }

            //Languages inputs:
                //Creates languages inputs based on CV data.
        const languageObjects = data.about_me.languages;
        for (let i = 0; i < languageObjects.length; i++) {
            addLanguage();
        }
                //Fills all new added inputs with respective CV data:
        const languageInputs = document.getElementsByClassName("language");
                    //Matching proficiency level selection with saved proficiency level in loaded CV data.
        const proficiencySelects = document.getElementsByClassName("proficiency");
        for (let i = 0; i < languageObjects.length; i++) {
            languageInputs[i].value = languageObjects[i].language;
            const actualDisplayLanguage = localStorage.getItem("display_language");
            const actualDisplayProficiencyList = proficiencyLevel[actualDisplayLanguage];
            const savedProficiency = languageObjects[i].proficiency;
            const traductionEnIndex = proficiencyLevel["🇬🇧"].indexOf(savedProficiency);
            const traductionFrIndex = proficiencyLevel["🇫🇷"].indexOf(savedProficiency);
            if (traductionEnIndex != -1) {
                proficiencySelects[i].value = actualDisplayProficiencyList[traductionEnIndex];
            } else if (traductionFrIndex != -1) {
                proficiencySelects[i].value = actualDisplayProficiencyList[traductionFrIndex];
            }
        }

            //Experiences inputs:
                //Creates experiences and activities inputs based on CV data.
        const experienceObjects = data.experiences;
        for (let i = 0; i < experienceObjects.length; i++) {
            addExperience();
        }
        const activitiesDiv = document.getElementsByClassName("activities_div");
        for (let i = 0; i < experienceObjects.length; i++) {
            for (let j = 0; j < experienceObjects[i].key_activities.length; j++) {
                addActivity(activitiesDiv[i], i);
            }
        }
                //Fills all new added inputs with respective CV data.
        const jobTitleInputs = document.getElementsByClassName("exp_job_title");
        const employerInputs = document.getElementsByClassName("employer");
        const expLocationInputs = document.getElementsByClassName("exp_location");
        const expFromInputs = document.getElementsByClassName("exp_from");
        const expToInputs = document.getElementsByClassName("exp_to");
        for (let i = 0; i < experienceObjects.length; i++) {
            jobTitleInputs[i].value = experienceObjects[i].job_title;
            employerInputs[i].value = experienceObjects[i].employer;
            expLocationInputs[i].value = experienceObjects[i].location;
            expFromInputs[i].value = experienceObjects[i].duration_from;
            expToInputs[i].value = experienceObjects[i].duration_to;
            for (let j = 0; j < experienceObjects[i].key_activities.length; j++) {
                const taskInputs = document.getElementsByClassName("activity_" + i);
                taskInputs[j].value = experienceObjects[i].key_activities[j];
            }
        }

        //Educations inputs:
                //Creates educations inputs based on CV data.
        const educationObjects = data.educations;
        for (let i = 0; i < educationObjects.length; i++) {
            addEducation();
        }
                //Fills all new added inputs with respective CV data.
        const institutionInputs = document.getElementsByClassName("institution");
        const eduLocationInputs = document.getElementsByClassName("edu_location");
        const eduFromInputs = document.getElementsByClassName("edu_from");
        const eduToInputs = document.getElementsByClassName("edu_to");
        const programTitleInputs = document.getElementsByClassName("program_title");
        for (let i = 0; i < educationObjects.length; i++) {
            institutionInputs[i].value = educationObjects[i].institution;
            eduLocationInputs[i].value = educationObjects[i].location;
            eduFromInputs[i].value = educationObjects[i].duration_from;
            eduToInputs[i].value = educationObjects[i].duration_to;
            programTitleInputs[i].value = educationObjects[i].program_title;
        }
    } catch (error) {
        console.error("Erreur lors du chargement du CV : ", error)
    }
}

//Open new tab with html generated CV
const generate = function() {
        window.open(`/cv?display_language=${encodeURIComponent(displayLanguageSelector.value)}`, "_blank");
}

//Add loadDisplayLanguage function to window load envent.
window.addEventListener("DOMContentLoaded", loadDisplayLanguage);

//Links action fuction to UI action buttons:

    //Load button.
loadButton.addEventListener("click", load);

    //Erase form button.
eraseButton.addEventListener("click", eraseForm);

    //Display language selector.
displayLanguageSelector.addEventListener("change", saveDisplayLanguage);

    //Add button for dynamic form's elements.
addSkillButton.addEventListener("click", addSkill);
addLanguageButton.addEventListener("click", addLanguage);
addExperienceButton.addEventListener("click", addExperience);
addEducationButton.addEventListener("click", addEducation);

    //Generate HTML CV button
generateButton.addEventListener("click", generate);