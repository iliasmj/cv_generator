import flask

app = flask.Flask("app.py")

@app.route("/")
def index():
    return flask.render_template("index.html")