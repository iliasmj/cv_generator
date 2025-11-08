# Notice d'utilisation

Ce dépôt est rendu public uniquement pour consultation et référence.
Aucune copie, distribution, modification, adaptation ou réutilisation
des fichiers de ce dépôt n’est autorisée sans une autorisation écrite
préalable du titulaire des droits.

Tous droits réservés. Copyright © 2025 Mjoun Ilias.

Pour demander une autorisation, contacter : iliasmj@gmail.com

# MY FINAL PROJECT
My final project is a CV generator which allow the user to generate a CV by complating a form.

- What does it do?  
  It allows the user to :
  - save CV data in JSOn file, 
  - display CV in HTML view, 
  - download CV pdf version,
  - load data from pre-saved JSON data file,
  - french/english display language dynamic switch.
  
- What is the "new feature" which you have implemented that we haven't seen before?  
Build CV pdf version using weasyprint.

## Prerequisites
Did you add any additional modules that someone needs to install (for instance anything in Python that you `pip install-ed`)? 
List those here (if any).
- Python 3.13
- Flask 3.1.2 (web framework)
- Weasyprint 66.0

## Start app
1. get a copy of the project by cloning the remote repository : https://github.com/epfl-extension-school/project-tcc-c1-s18-9379-4829.git
```bash
git clone https://github.com/ton-compte/ton-projet.git
```
2. browse into project folder
3. create new virtual environment (venv)
```bash
python3 -m venv venv
```
4. activate venv
MacOS
```bash
source /venv/bin/activate
```
Windows
```bash
venv\Scripts\activate
```
5. install requierments
```bash
pip install -r requirements.txt
```
6. start app
```bash
FLASK_APP=app.py flask run
```
7. open http://127.0.0.1:5000/ in browser
8. start using !

## Project Checklist
- [x] It is available on GitHub.
- [x] It uses the Flask web framework.
- [x] It uses at least one module from the Python Standard Library other than the random module.
  Please provide the name of the module you are using in your app.
  - Module name: json, os, locale
- [x] It contains at least one class written by you that has both properties and methods. It uses `__init__()` to let the class initialize the object's attributes (note that  `__init__()` doesn't count as a method). This includes instantiating the class and using the methods in your app. Please provide below the file name and the line number(s) of at least one example of a class definition in your code as well as the names of two properties and two methods.
  - File name for the class definition: app.py
  - Line number(s) for the class definition: line 83
  - Name of two properties: self.personal_data, self.about_me
  - Name of two methods:  self.get_about_me(), sef.serialize()
  - File name and line numbers where the methods are used: app.py - lines 186, 225
- [x] It makes use of JavaScript in the front end and uses the localStorage of the web browser. Please provide the file name and line number(s) where the localStorage is used. 
    index.js - lines 286, 257, 260, 315, 317-320, 326-327, 428, 490, 499, 545, 554, 634
- [x] It uses modern JavaScript (for example, let and const rather than var).
- [x] It makes use of the reading and writing to the same file feature.
- [x] It contains conditional statements. Please provide below the file name and the line number(s) of at least
  one example of a conditional statement in your code.
  - File name: index.js
  - Line number(s): lines 328-334
- [x] It contains loops. Please provide below the file name and the line number(s) of at least
  one example of a loop in your code.
  - File name: index.js
  - Line number(s): lines 340-342
- [x] It lets the user enter a value in a text box at some point.
  This value is received and processed by your back end Python code.
- [x] It doesn't generate any error message even if the user enters a wrong input.
- [x] It is styled using your own CSS.
- [x] The code follows the code and style conventions as introduced in the course, is fully documented using comments and doesn't contain unused or experimental code. 
  In particular, the code should not use `print()` or `console.log()` for any information the app user should see. Instead, all user feedback needs to be visible in the browser.  
- [x] All exercises have been completed as per the requirements and pushed to the respective GitHub repository.

## **Academic Integrity and Learning Statement**

By submitting my work, I confirm that:

- The code, analysis, and documentation in this notebook are my own work and reflect my own understanding.
- I am prepared to explain all code and analysis included in this submission.


If I used assistance (e.g., AI tools, tutors, or other resources), I have:

- Clearly documented where and how external tools or resources were used in my solution.
- Included a copy of the interaction (e.g., AI conversation or tutoring notes) in an appendix.

I acknowledge that:

- I may be asked to explain any part of my code or analysis during evaluation.
- Misrepresenting assisted work as my own constitutes academic dishonesty and undermines my learning.