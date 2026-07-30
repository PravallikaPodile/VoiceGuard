import os
import sys
import random
import pandas as pd

# ==========================================================
# Make project root importable
# ==========================================================

PROJECT_ROOT = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "..")
)

if PROJECT_ROOT not in sys.path:
    sys.path.insert(0, PROJECT_ROOT)

# ==========================================================
# Imports
# ==========================================================

from resources.templates import *
from resources.noise import add_noise

# ==========================================================
# Settings
# ==========================================================

random.seed(42)

SAMPLES_PER_CATEGORY = 1000

dataset = []

CATEGORY_MAP = {

    "Fire": FIRE_TEMPLATES,

    "Flood": FLOOD_TEMPLATES,

    "Earthquake": EARTHQUAKE_TEMPLATES,

    "Medical": MEDICAL_TEMPLATES,

    "Storm": STORM_TEMPLATES,

    "Gas Leak": GAS_LEAK_TEMPLATES,

    "Building Collapse": BUILDING_COLLAPSE_TEMPLATES,

    "Road Accident": ROAD_ACCIDENT_TEMPLATES,

    "Landslide": LANDSLIDE_TEMPLATES,

    "Electrical Hazard": ELECTRICAL_HAZARD_TEMPLATES

}

# ==========================================================
# Dataset Generation
# ==========================================================

for label, templates in CATEGORY_MAP.items():

    for _ in range(SAMPLES_PER_CATEGORY):

        sentence = random.choice(templates)

        if "{location}" in sentence:
            sentence = sentence.replace(
                "{location}",
                random.choice(LOCATIONS)
            )

        if "{panic}" in sentence:
            sentence = sentence.replace(
                "{panic}",
                random.choice(PANIC)
            )

        sentence = add_noise(sentence)

        dataset.append({

            "text": sentence,

            "label": label

        })

# ==========================================================
# Convert to DataFrame
# ==========================================================

df = pd.DataFrame(dataset)

df.drop_duplicates(inplace=True)

df = df.sample(
    frac=1,
    random_state=42
).reset_index(drop=True)

# ==========================================================
# Save Dataset
# ==========================================================

os.makedirs("dataset", exist_ok=True)

output_path = os.path.join(
    "dataset",
    "disaster_dataset.csv"
)

df.to_csv(
    output_path,
    index=False
)

# ==========================================================
# Statistics
# ==========================================================

print("\n==============================")
print("DATASET GENERATED SUCCESSFULLY")
print("==============================\n")

print(df["label"].value_counts())

print("\nTotal Samples :", len(df))

print("\nSaved to :", output_path)