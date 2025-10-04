from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
# Path to your images (relative to this file)
IMAGE_FOLDER = os.path.join(os.path.dirname(__file__), "images")

@app.route("/api/images")
def get_images():
    """Return a list of image filenames in the images folder"""
    files = [
        f for f in os.listdir(IMAGE_FOLDER)
        if f.lower().endswith((".png", ".jpg", ".jpeg", ".svg"))
    ]
    return jsonify(files)

@app.route("/images/<filename>")
def serve_image(filename):
    """Serve an image file"""
    return send_from_directory(IMAGE_FOLDER, filename)

if __name__ == "__main__":
    app.run(debug=True, port=5000)