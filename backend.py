from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

IMAGE_FOLDER = "static/images"

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/images")
def get_images():
    # List all image files in the folder
    files = [f for f in os.listdir(IMAGE_FOLDER) if f.lower().endswith((".jpg",".jpeg",".png",".gif"))]
    return jsonify(files)

if __name__ == "__main__":
    app.run(debug=True)