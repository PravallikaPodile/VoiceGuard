import os
import re
import joblib
import pandas as pd

from preprocess import preprocess_text

print("=" * 60)
print("BUILDING DISASTER KEYWORD DATABASE")
print("=" * 60)

df = pd.read_csv("dataset/disaster_dataset.csv")

keywords = set()

for text in df["text"]:

    text = preprocess_text(text)

    words = re.findall(r"[a-z]+", text)

    for word in words:

        if len(word) >= 3:
            keywords.add(word)

os.makedirs("models", exist_ok=True)

joblib.dump(keywords, "models/keyword_set.pkl")

print("\nTotal Keywords:", len(keywords))

print("\nFirst 50 Keywords:\n")

print(sorted(list(keywords))[:50])

print("\nSaved Successfully")

print("models/keyword_set.pkl")