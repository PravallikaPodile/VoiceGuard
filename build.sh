#!/usr/bin/env bash

pip install -r ../requirements.txt

python -c "import nltk; nltk.download('stopwords'); nltk.download('wordnet'); nltk.download('omw-1.4')"