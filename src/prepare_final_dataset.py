import pandas as pd

print("=" * 60)
print("Preparing Final Training Dataset")
print("=" * 60)

# -------------------------------
# Load datasets
# -------------------------------

synthetic = pd.read_csv("dataset/disaster_dataset.csv")
kaggle = pd.read_csv("raw_data/kaggle/train_data_cleaning.csv")

print("\nSynthetic Dataset:", synthetic.shape)
print("Kaggle Dataset:", kaggle.shape)

# -------------------------------
# Keep only required columns
# -------------------------------

synthetic = synthetic[["text", "label"]]

kaggle = kaggle[["text", "target"]]

# -------------------------------
# Convert Kaggle labels
# -------------------------------

kaggle["label"] = kaggle["target"].map({
    1: "Disaster",
    0: "Non-Disaster"
})

kaggle = kaggle[["text", "label"]]

# -------------------------------
# Clean data
# -------------------------------

synthetic.dropna(inplace=True)
kaggle.dropna(inplace=True)

synthetic.drop_duplicates(subset=["text"], inplace=True)
kaggle.drop_duplicates(subset=["text"], inplace=True)

# -------------------------------
# Merge datasets
# -------------------------------

final_dataset = pd.concat(
    [synthetic, kaggle],
    ignore_index=True
)

final_dataset.drop_duplicates(subset=["text"], inplace=True)

final_dataset = final_dataset.sample(
    frac=1,
    random_state=42
).reset_index(drop=True)

# -------------------------------
# Save
# -------------------------------

final_dataset.to_csv(
    "dataset/final_disaster_dataset.csv",
    index=False
)

print("\nFinal Dataset Created Successfully!")

print("\nFinal Shape:")
print(final_dataset.shape)

print("\nLabel Distribution:")
print(final_dataset["label"].value_counts())

print("\nSaved As:")
print("dataset/final_disaster_dataset.csv")