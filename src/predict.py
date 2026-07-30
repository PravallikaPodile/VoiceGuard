import os
import joblib

from preprocess import preprocess_text
from guidance import get_guidance

# ==========================================================
# Load Model, Vectorizer and Keyword Database
# ==========================================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODELS_DIR = os.path.join(BASE_DIR, "..", "models")

MODEL_PATH = os.path.join(MODELS_DIR, "disaster_model.pkl")
VECTORIZER_PATH = os.path.join(MODELS_DIR, "vectorizer.pkl")
KEYWORD_PATH = os.path.join(MODELS_DIR, "keyword_set.pkl")

model = joblib.load(MODEL_PATH)
vectorizer = joblib.load(VECTORIZER_PATH)
keyword_set = joblib.load(KEYWORD_PATH)


# ==========================================================
# Keyword Detection
# ==========================================================

def contains_disaster_keywords(text):

    words = preprocess_text(text).split()

    for word in words:
        if word in keyword_set:
            return True

    return False


# ==========================================================
# Predict Disaster + Confidence
# ==========================================================

def predict_disaster(text):

    if text is None:
        return "Non-Disaster", 100

    text = text.strip()

    if text == "":
        return "Non-Disaster", 100

    cleaned = preprocess_text(text)

    # ---------------------------------------------
    # Reject obvious non-disaster sentences
    # ---------------------------------------------

    if not contains_disaster_keywords(cleaned):
        return "Non-Disaster", 100

    # ---------------------------------------------
    # Vectorize
    # ---------------------------------------------

    vector = vectorizer.transform([cleaned])

    # ---------------------------------------------
    # Prediction
    # ---------------------------------------------

    prediction = model.predict(vector)[0]

    # ---------------------------------------------
    # Confidence (LinearSVC)
    # ---------------------------------------------

    scores = model.decision_function(vector)

    confidence = abs(scores).max()

    # Convert score into a readable percentage
    confidence = round(min(99, confidence * 20))

    return prediction, confidence


# ==========================================================
# Prediction + Guidance
# ==========================================================

def predict_and_guide(text):

    category, confidence = predict_disaster(text)

    guidance = get_guidance(category)

    return category, confidence, guidance


# ==========================================================
# Console Testing
# ==========================================================

if __name__ == "__main__":

    print("=" * 60)
    print("VOICE-FIRST DISASTER GUIDANCE SYSTEM")
    print("=" * 60)

    while True:

        message = input("\nEnter emergency message (type 'exit'): ").strip()

        if message.lower() == "exit":
            print("\nThank you for using the system.")
            break

        category, confidence, guidance = predict_and_guide(message)

        print("\nPredicted Disaster :", category)
        print("Confidence :", str(confidence) + "%")

        print("\nSafety Guidance")
        print("-" * 45)
        print(guidance)