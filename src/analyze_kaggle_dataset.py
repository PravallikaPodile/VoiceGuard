import pandas as pd

# Load dataset
df = pd.read_csv("raw_data/kaggle/train_data_cleaning.csv")

print("=" * 60)
print("DATASET INFORMATION")
print("=" * 60)

print("\nShape:")
print(df.shape)

print("\nColumns:")
print(df.columns.tolist())

print("\nMissing Values:")
print(df.isnull().sum())

print("\nDuplicate Rows:")
print(df.duplicated().sum())

print("\nFirst Five Rows:")
print(df.head())

print("\nClass Distribution:")

# Print whichever label column exists
if "target" in df.columns:
    print(df["target"].value_counts())

elif "label" in df.columns:
    print(df["label"].value_counts())

print("\nData Types:")
print(df.dtypes)