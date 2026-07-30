import os
import joblib
import pandas as pd

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import (
    accuracy_score,
    classification_report,
    confusion_matrix
)
from sklearn.model_selection import train_test_split

from sklearn.naive_bayes import MultinomialNB
from sklearn.linear_model import LogisticRegression
from sklearn.svm import LinearSVC

from preprocess import preprocess_text


print("=" * 70)
print("VOICE-FIRST DISASTER GUIDANCE SYSTEM")
print("MODEL TRAINING")
print("=" * 70)


# ==========================================================
# Load Dataset
# ==========================================================

print("\nLoading dataset...")

df = pd.read_csv("dataset/disaster_dataset.csv")

print("Dataset Loaded Successfully")
print("Shape :", df.shape)

print("\nClass Distribution\n")
print(df["label"].value_counts())


# ==========================================================
# Preprocess
# ==========================================================

print("\nCleaning text...")

df["clean_text"] = df["text"].apply(preprocess_text)

print("Completed")


# ==========================================================
# Features & Labels
# ==========================================================

X = df["clean_text"]
y = df["label"]


# ==========================================================
# Train Test Split
# ==========================================================

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)

print("\nTraining Samples :", len(X_train))
print("Testing Samples  :", len(X_test))


# ==========================================================
# TF-IDF
# ==========================================================

print("\nCreating TF-IDF Features...")

vectorizer = TfidfVectorizer(
    lowercase=True,
    stop_words="english",
    ngram_range=(1,2),
    max_features=5000
)

X_train = vectorizer.fit_transform(X_train)
X_test = vectorizer.transform(X_test)

print("Vectorization Completed")


# ==========================================================
# Models
# ==========================================================

models = {

    "Naive Bayes": MultinomialNB(),

    "Logistic Regression":
        LogisticRegression(
            max_iter=1000,
            random_state=42
        ),

    "Support Vector Machine":
        LinearSVC(random_state=42)

}


best_accuracy = 0
best_model = None
best_name = ""


# ==========================================================
# Train & Evaluate
# ==========================================================

for name, model in models.items():

    print("\n" + "=" * 70)
    print(name)
    print("=" * 70)

    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    accuracy = accuracy_score(y_test, predictions)

    print("Accuracy :", round(accuracy * 100, 2), "%")

    print("\nClassification Report\n")

    print(classification_report(y_test, predictions))

    print("Confusion Matrix\n")

    print(confusion_matrix(y_test, predictions))

    if accuracy > best_accuracy:

        best_accuracy = accuracy
        best_model = model
        best_name = name


# ==========================================================
# Save Best Model
# ==========================================================

os.makedirs("models", exist_ok=True)

joblib.dump(best_model, "models/disaster_model.pkl")
joblib.dump(vectorizer, "models/vectorizer.pkl")


print("\n" + "=" * 70)
print("BEST MODEL")
print("=" * 70)

print("Model    :", best_name)
print("Accuracy :", round(best_accuracy * 100, 2), "%")

print("\nSaved Successfully")

print("models/disaster_model.pkl")
print("models/vectorizer.pkl")