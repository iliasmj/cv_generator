import flask

app = flask.Flask("app.py")

class Language:
    def __init__(self, language, level):
        self.language = language
        self.proficiency = level

class Experience:
    def __init__(self, exp_job_title, exp_employer, exp_location, exp_from, exp_to, exp_activities):
        self.job_title = exp_job_title
        self.employer = exp_employer
        self.location = exp_location
        self.duration_from = exp_from
        self.duration_to = exp_to
        self.keyActivities = exp_activities

class Education:
    def __init__(self, edu_institution, edu_location, edu_from, edu_to, edu_program):
        self.institution = edu_institution
        self.location = edu_location
        self.duration_from = edu_from
        self.duration_to = edu_to
        self.program_title = edu_program

#class Cv:
#    def __init__(self):




@app.route("/")
def index():
    return flask.render_template("index.html")