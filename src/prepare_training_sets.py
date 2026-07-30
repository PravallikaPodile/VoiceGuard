import pandas as pd

print("=" * 60)
print("Preparing Binary and Multi-Class Datasets")
print("=" * 60)

# -------------------------------------------------
# Load datasets
# -------------------------------------------------

synthetic = pd.read_csv("dataset/disaster_dataset.csv")
kaggle = pd.read_csv("raw_data/kaggle/train_data_cleaning.csv")

# -------------------------------------------------
# Binary Dataset
# -------------------------------------------------

binary = kaggle[["text", "target"]].copy()

binary["label"] = binary["target"].map({
    0: "Non-Disaster",
    1: "Disaster"
})

binary = binary[["text", "label"]]

binary.drop_duplicates(subset=["text"], inplace=True)
binary.dropna(inplace=True)

# -------------------------------------------------
# Multi-Class Dataset
# -------------------------------------------------

multi = synthetic.copy()

multi.drop_duplicates(subset=["text"], inplace=True)
multi.dropna(inplace=True)

# Remove generic Disaster label
multi = multi[multi["label"] != "Disaster"]

# -------------------------------------------------
# Save
# -------------------------------------------------

binary.to_csv(
    "dataset/binary/binary_dataset.csv",
    index=False
)

multi.to_csv(
    "dataset/multiclass/multiclass_dataset.csv",
    index=False
)

print("\nBinary Dataset")
print(binary.shape)
print(binary["label"].value_counts())

print("\nMulti-Class Dataset")
print(multi.shape)
print(multi["label"].value_counts())

print("\nDatasets created successfully.")