import random
import pandas as pd

templates = {
    "Fire": {
        "subjects": [
            "house", "building", "factory", "school", "office",
            "warehouse", "shop", "kitchen", "apartment", "hospital"
        ],
        "events": [
            "is on fire",
            "caught fire",
            "is burning",
            "has heavy smoke",
            "has flames everywhere",
            "is filled with smoke"
        ]
    },

    "Flood": {
        "subjects": [
            "road", "house", "village", "town", "bridge",
            "school", "hospital", "street", "market", "farm"
        ],
        "events": [
            "is flooded",
            "is underwater",
            "is filled with water",
            "has overflowing water",
            "is affected by heavy rain"
        ]
    },

    "Earthquake": {
        "subjects": [
            "ground", "building", "wall",
            "house", "school", "office"
        ],
        "events": [
            "is shaking",
            "has cracks",
            "is vibrating",
            "is collapsing",
            "is damaged"
        ]
    },

    "Storm": {
        "subjects": [
            "trees", "electric poles",
            "houses", "roads",
            "village", "city"
        ],
        "events": [
            "are damaged by storm",
            "are hit by strong winds",
            "are affected by cyclone",
            "are facing heavy rain",
            "are destroyed by winds"
        ]
    },

    "Medical": {
        "subjects": [
            "patient", "child",
            "father", "mother",
            "man", "woman"
        ],
        "events": [
            "is unconscious",
            "is bleeding",
            "needs an ambulance",
            "has chest pain",
            "cannot breathe",
            "collapsed suddenly"
        ]
    },

    "Non-Disaster": {
        "subjects": [
            "I", "we",
            "students", "family",
            "friends"
        ],
        "events": [
            "are going shopping",
            "are watching a movie",
            "are studying",
            "are cooking dinner",
            "are playing cricket",
            "are going to college"
        ]
    }
}

rows = []

for label, data in templates.items():
    for _ in range(2000):
        sentence = f"The {random.choice(data['subjects'])} {random.choice(data['events'])}."
        rows.append([sentence, label])

df = pd.DataFrame(rows, columns=["text", "label"])

df = df.sample(frac=1, random_state=42).reset_index(drop=True)

df.to_csv("dataset/disaster_dataset.csv", index=False)

print("=" * 50)
print("Dataset Generated Successfully")
print("=" * 50)
print(df.head())
print()
print(df["label"].value_counts())
print()
print("Total Samples:", len(df))