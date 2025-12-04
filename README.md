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
  - save CV data in JSON file, 
  - display CV in HTML view, 
  - download CV pdf version,
  - load data from pre-saved JSON data file,
  - french/english display language dynamic switch.
  
## Start app
1. get a copy of the project by cloning the repository : 
```bash
git clone https://github.com/iliasmj/cv_generator.git
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

I acknowledge that:

- I may be asked to explain any part of my code or analysis during evaluation.
- Misrepresenting assisted work as my own constitutes academic dishonesty and undermines my learning.
