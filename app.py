import flask, json, weasyprint, os, locale
from datetime import datetime
project_root = os.path.dirname(__file__)
en_json_path = os.path.join(project_root, "data/json/en/cv_data.json")
fr_json_path = os.path.join(project_root, "data/json/fr/cv_data.json")

app = flask.Flask(__name__)
app.secret_key = os.urandom(24)

translation_table = {
    "🇬🇧" : {
        "years_experience" : "years of experience",
        "skills_subsection_title" : "skills",
        "languages_subsection_title" : "languages",
        "experiences_section_title" : "professional experience",
        "educations_section_title" : "education & training"
    },
    "🇫🇷" : {
        "years_experience" : "années d'expérience",
        "skills_subsection_title" : "compétences",
        "languages_subsection_title" : "langues",
        "experiences_section_title" : "experiences professionnelles",
        "educations_section_title" : "formations"
    }
}

class Language:
    def __init__(self, language, level):
        self.language = language
        self.proficiency = level

    def serialize(self):
        return {
            "language" : self.language,
            "proficiency" : self.proficiency
        }

class Experience:
    def __init__(self, exp_job_title, employer, exp_location, exp_from, exp_to, activities):
        self.job_title = exp_job_title
        self.employer = employer
        self.location = exp_location
        self.duration_from = exp_from
        self.duration_to = exp_to
        self.key_activities = activities

    def serialize(self):
        return {
            "job_title" : self.job_title,
            "employer" : self.employer,
            "location" : self.location,
            "duration_from" : self.duration_from,
            "duration_to" : self.duration_to,
            "key_activities" : self.key_activities
        }

class Education:
    def __init__(self, edu_institution, edu_location, edu_from, edu_to, edu_program):
        self.institution = edu_institution
        self.location = edu_location
        self.duration_from = edu_from
        self.duration_to = edu_to
        self.program_title = edu_program

    def serialize(self):
        return {
            "institution" : self.institution,
            "location" : self.location,
            "duration_from" : self.duration_from,
            "duration_to" : self.duration_to,
            "program_title" : self.program_title
        }

class Cv:
    def __init__(self):
        self.display_language = flask.request.form.get("display_language")
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

    #gets personal data from index' form
    def get_personal_data(self):
        self.personal_data["name"] = flask.request.form.get("name")
        self.personal_data["first_name"] = flask.request.form.get("first_name")
        self.personal_data["birth_date"] = flask.request.form.get("birth_date")
        self.personal_data["nationality"] = flask.request.form.get("nationality")
        self.personal_data["phone_number"] = flask.request.form.get("phone_number")
        self.personal_data["email"] = flask.request.form.get("email")
        self.personal_data["address"] = flask.request.form.get("address")
        self.personal_data["driver_license"] = flask.request.form.get("driver_license")

    #gets about me data from index' form
    def get_about_me(self):
        self.about_me["job_title"] =flask.request.form.get("about_job_title")
        self.about_me["years_experience"] = flask.request.form.get("years_experience")
        self.about_me["bio"] = flask.request.form.get("bio")
        self.about_me["skills"] = flask.request.form.getlist("skill")

        #constructs Language object by geting languages and proficiency levels lists
        # + gather them in a list as Language object and pass into myself add_about_me function
        languagesList = flask.request.form.getlist("language")
        proficiencyLevelsList = flask.request.form.getlist("proficiency")
        languagesObjectsList = []
        for i in range (len(languagesList)):
            language = languagesList[i]
            level = proficiencyLevelsList[i]
            newlanguage = Language(language, level)
#            print("New Language : ") #---------------------------------------CHECK
#            print(vars(newlanguage))  #---------------------------------------CHECK
            languagesObjectsList.append(newlanguage)
        self.about_me["languages"] = languagesObjectsList

    #gets experiences data from index's form
    def get_experiences(self):
        exp_job_title = flask.request.form.getlist("exp_job_title")
        employer = flask.request.form.getlist("employer")
        exp_location = flask.request.form.getlist("exp_location")
        exp_from = flask.request.form.getlist("exp_from")
        exp_to = flask.request.form.getlist("exp_to")
        #constructs Experience objects by gathering in order each experiences data
        for i in range (len(exp_job_title)):
            activities = flask.request.form.getlist("activity_" + str(i))
            newExperience = Experience(exp_job_title[i], employer[i], exp_location[i], exp_from[i], exp_to[i], activities)
#            print("New Experience : ") #---------------------------------------CHECK
#            print(vars(newExperience)) #---------------------------------------CHECK
            self.experiences.append(newExperience)

    #gets educations data from index's form
    def get_educations(self) :
        institution = flask.request.form.getlist("institution")
        edu_location = flask.request.form.getlist("edu_location")
        edu_from = flask.request.form.getlist("edu_from")
        edu_to = flask.request.form.getlist("edu_to")
        program_title = flask.request.form.getlist("program_title")
        #constructs Education objects by gathering in order each educations data
        for i in range (len(institution)):
            newEducation = Education(institution[i], edu_location[i], edu_from[i], edu_to[i], program_title[i])
#            print("New Education : ") #---------------------------------------CHECK
#            print(vars(newEducation)) #---------------------------------------CHECK
            self.educations.append(newEducation)

    def serialize(self):
        return {
            "display_language": self.display_language,
            "personal_data": self.personal_data,
            "about_me": {
                "job_title": self.about_me["job_title"],
                "years_experience": self.about_me["years_experience"],
                "bio": self.about_me["bio"],
                "skills": self.about_me["skills"],
                "languages": [language.serialize() for language in self.about_me["languages"]],
            },
            "experiences": [experience.serialize() for experience in self.experiences],
            "educations": [education.serialize() for education in self.educations]
        }

    def save_json(self, display_language):
        if display_language == "🇬🇧":
            language_folder = "en/"
        if display_language == "🇫🇷":
            language_folder = "fr/"

        cv_json = open(os.path.join(project_root, "data/json/", language_folder, "cv_data.json"), "w")
        print(cv_json)
        json.dump(self.serialize(), cv_json, ensure_ascii=False, indent=4)
        cv_json.close()

def get_json_path(display_language):
    if display_language == "🇬🇧":
        return en_json_path
    else:
        return fr_json_path

def get_json_data():
    try:
        json_path = get_json_path(flask.request.args.get("display_language"))
        cv_data = open(json_path, encoding="utf-8")
        file_content = cv_data.read().strip()
        cv_data.close()
        if file_content:
            cv_data = open(json_path, encoding="utf-8")
            data_json = json.load(cv_data)
            cv_data.close()
            return data_json
        else:
            return "⚠️ Le fichier JSON est vide.", 404
    except FileNotFoundError:
        return "⚠️ Le fichier JSON n'existe pas.", 404
    except json.JSONDecodeError as e:
        return "⚠️ JSON invalide : " + e, 400

@app.route("/")
def homepage():
    return flask.render_template("index.html")

@app.route("/save", methods=["POST"])
def save_cv():
    myCv = Cv()
    myCv.export_display_language()
    myCv.get_personal_data()
    myCv.get_about_me()
    myCv.get_experiences()
    myCv.get_educations()
    myCv.save_json(myCv.display_language)
#    print("myCv : ") #---------------------------------------CHECK
#    print(vars(myCv)) #---------------------------------------CHECK
    return flask.render_template("index.html")

@app.template_filter("translate")
def translate(value, display_language):
    print(display_language)
    print(value)
    print(translation_table[display_language][value])
    return translation_table[display_language][value]

@app.template_filter("birth_date_format")
def birth_date_format(value, display_language):
    if display_language == "🇬🇧":
        return datetime.strptime(value, "%Y-%m-%d").strftime("%d/%m/%Y")
    else:
        return datetime.strptime(value, "%Y-%m-%d").strftime("%d.%m.%Y")

@app.template_filter("date_time_format")
def date_time_format(value, display_language):
    if display_language == "🇬🇧":
        locale.setlocale(locale.LC_TIME, "en_GB.UTF-8")
    else: 
        locale.setlocale(locale.LC_TIME, "fr_FR.UTF-8")
    
    return datetime.strptime(value, "%m-%Y").strftime("%b %Y").capitalize()

@app.route("/cv")
def view_cv():
    json_data = get_json_data()
    if isinstance(json_data, tuple):
        message, status = json_data
        return message, status
    return flask.render_template("cv.html", cv=json_data)

@app.route("/cv/pdf")
def pdf_cv():
    cv_rendered = flask.render_template("cv.html", cv=get_json_data())
    cv_rendered = cv_rendered.replace('href="/static/', 'href="static/').replace('src="/static/', 'src="static/')
    print("CV :\n", cv_rendered)
    print(project_root)

#    def my_fetcher(url, *args, **kwargs):
#        print("🔎 WeasyPrint essaie de charger :", url)
#        return weasyprint.default_url_fetcher(url, *args, **kwargs)

    pdf = weasyprint.HTML(string=cv_rendered, base_url=project_root).write_pdf()
#    print(pdf)

    response = flask.make_response(pdf)
    response.headers["Content-Type"] = "application/pdf"
    response.headers["Content-Disposition"] = "attachment; filename=cv.pdf"
    return response

@app.route("/api/cv")
def api_cv():
    json_data = get_json_data()
    if isinstance(json_data, tuple):
        message, status = json_data
        return message, status
    return flask.jsonify(json_data)

if __name__ == "__main__":
    # Cette ligne active le debugger et le rechargement automatique
    app.run(debug=True)