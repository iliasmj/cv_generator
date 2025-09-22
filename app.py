import flask

app = flask.Flask("app.py")

class Language:
    def __init__(self, language, level):
        self.language = language
        self.proficiency = level

class Experience:
    def __init__(self, exp_job_title, exp_employer, exp_location, exp_from, exp_to):
        self.job_title = exp_job_title
        self.employer = exp_employer
        self.location = exp_location
        self.duration_from = exp_from
        self.duration_to = exp_to
        self.keyActivities = []

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
        self.personale_data[key] = value
    
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

    #get personal data from index' form
    myCv.add_personal_data("name", flask.request.args.get("name"))
    myCv.add_personal_data("first_name", flask.request.args.get("first_name"))
    myCv.add_personal_data("birth_date", flask.request.args.get("birth_date"))
    myCv.add_personal_data("nationality", flask.request.args.get("nationality"))
    myCv.add_personal_data("phone_number", flask.request.args.get("phone_number"))
    myCv.add_personal_data("email", flask.request.args.get("email"))
    myCv.add_personal_data("address", flask.request.args.get("address"))
    myCv.add_personal_data("driver_license", flask.request.args.get("driver_license"))

    myCv.add_about_me("job_title", flask.request.args.get("job_title"))

 #   years_experience
 #   bio
 #   skills
 #   languages
 #   proficiency_levls

    experiences = Experience()