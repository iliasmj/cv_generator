import flask

app = flask.Flask("app.py")

class Language:
    def __init__(self, language, level):
        self.language = language
        self.proficiency = level

class Experience:
    def __init__(self, exp_job_title, employer, exp_location, exp_from, exp_to, activities):
        self.job_title = exp_job_title
        self.employer = employer
        self.location = exp_location
        self.duration_from = exp_from
        self.duration_to = exp_to
        self.keyActivities = activities

class Education:
    def __init__(self, edu_institution, edu_location, edu_from, edu_to, edu_program):
        self.institution = edu_institution
        self.location = edu_location
        self.duration_from = edu_from
        self.duration_to = edu_to
        self.program_title = edu_program

class Cv:
    def __init__(self):
        self.personal_data = {
            "name" : "",
            "first_name" : "",
            "birth_date" : "",
            "nationality" : "",
            "phone_number" : "",
            "email" : "",
            "address" : "",
            "driver_license" : ""
        }
        self.about_me = {
            "job_title" : "",
            "years_experience" : "",
            "bio" : "",
            "skills" : [],
            "languages" : []
        }
        self.experiences = []
        self.educations = []

    def add_personal_data(self, key, value):
        self.personal_data[key] = value
    
    def add_about_me(self, key, value):
        self.about_me[key] = value

    def add_experience(self, experience):
        self.experiences.append(experience)
    
    def add_education(self, education):
        self.educations.append(education)

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route("/view_cv")
def view_cv():
    myCv = Cv();

    #gets personal data from index' form
    myCv.add_personal_data("name", flask.request.args.get("name"))
    myCv.add_personal_data("first_name", flask.request.args.get("first_name"))
    myCv.add_personal_data("birth_date", flask.request.args.get("birth_date"))
    myCv.add_personal_data("nationality", flask.request.args.get("nationality"))
    myCv.add_personal_data("phone_number", flask.request.args.get("phone_number"))
    myCv.add_personal_data("email", flask.request.args.get("email"))
    myCv.add_personal_data("address", flask.request.args.get("address"))
    myCv.add_personal_data("driver_license", flask.request.args.get("driver_license"))

    #gets about_me data from index' form
    myCv.add_about_me("job_title", flask.request.args.get("about_job_title"))
    myCv.add_about_me("years_experience", flask.request.args.get("years_experience"))
    myCv.add_about_me("bio", flask.request.args.get("bio"))
    myCv.add_about_me("skills", flask.request.args.getlist("skill"))

    #constructs Language object by geting languages and proficiency levels lists + gather them in a list as Language object and pass into myCV add_about_me function
    languagesList = flask.request.args.getlist("language")
    proficiencyLevelsList = flask.request.args.getlist("proficiency")
    languagesObjectsList = []
    for i in range (len(languagesList)):
        language = languagesList[i]
        level = proficiencyLevelsList[i]
        newlanguage = Language(language, level)
        print("New Language : ") #---------------------------------------CHECK
        print(vars(newlanguage))  #---------------------------------------CHECK
        languagesObjectsList.append(newlanguage)
    myCv.add_about_me("languages", languagesObjectsList)

    #gets experiences data from index's form
    exp_job_title = flask.request.args.getlist("exp_job_title")
    employer = flask.request.args.getlist("employer")
    exp_location = flask.request.args.getlist("exp_location")
    exp_from = flask.request.args.getlist("exp_from")
    exp_to = flask.request.args.getlist("exp_to")
    #constructs Experience objects by gathering in order each experiences data
    for i in range (len(exp_job_title)):
        activities = flask.request.args.getlist("activity_" + str(i+1))
        newExperience = Experience(exp_job_title[i], employer[i], exp_location[i], exp_from[i], exp_to[i], activities)
        print("New Experience : ") #---------------------------------------CHECK
        print(vars(newExperience)) #---------------------------------------CHECK
        myCv.add_experience(newExperience)

    #gets educations data from index's form
    institution = flask.request.args.getlist("institution")
    edu_location = flask.request.args.getlist("edu_location")
    edu_from = flask.request.args.getlist("edu_from")
    edu_to = flask.request.args.getlist("edu_to")
    program_title = flask.request.args.getlist("program_title")
    #constructs Education objects by gathering in order each educations data
    for i in range (len(institution)):
        newEducation = Education(institution[i], edu_location[i], edu_from[i], edu_to[i], program_title[i])
        print("New Education : ") #---------------------------------------CHECK
        print(vars(newEducation)) #---------------------------------------CHECK
        myCv.add_education(newEducation)
    
    print("my Cv : ") #---------------------------------------CHECK
    print(vars(myCv)) #---------------------------------------CHECK

    return flask.render_template("view_cv.html")