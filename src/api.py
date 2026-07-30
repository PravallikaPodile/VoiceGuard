from flask import Flask, request, jsonify
from flask_cors import CORS

from predict import predict_and_guide

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():

    return jsonify({
        "status": "running",
        "message": "VoiceGuard Backend API is running successfully."
    })


@app.route("/predict", methods=["POST"])
def predict():

    data = request.get_json()

    if not data:
        return jsonify({
            "success": False,
            "message": "No JSON data received."
        }), 400

    text = data.get("text", "").strip()

    if text == "":
        return jsonify({
            "success": False,
            "message": "Please provide a disaster description."
        }), 400

    try:

        category, confidence, guidance = predict_and_guide(text)

        # Risk Level
        if category in [
            "Fire",
            "Flood",
            "Earthquake",
            "Storm",
            "Gas Leak",
            "Building Collapse"
        ]:
            risk = "High"

        elif category == "Non-Disaster":
            risk = "Low"

        else:
            risk = "Medium"

        return jsonify({

            "success": True,

            "prediction": category,

            "confidence": confidence,

            "risk": risk,

            "guidance": guidance

        })

    except Exception as e:

        return jsonify({

            "success": False,

            "message": str(e)

        }), 500


if __name__ == "__main__":

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )