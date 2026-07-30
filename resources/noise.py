"""
Generate realistic speech recognition errors and typing mistakes.
"""

import random

# Common misspellings / ASR mistakes
WORD_REPLACEMENTS = {
    "fire": [
        "frie",
        "fir",
        "fie",
        "firee"
    ],

    "smoke": [
        "smok",
        "smke",
        "smkoe"
    ],

    "flood": [
        "flod",
        "floo",
        "floods"
    ],

    "earthquake": [
        "earth quake",
        "earth moving",
        "earth shaking",
        "earthshake",
        "earth quack"
    ],

    "storm": [
        "strom",
        "heavy wind",
        "wind storm"
    ],

    "medical": [
        "patient sick",
        "medical emergency",
        "health emergency"
    ],

    "ambulance": [
        "ambulnce",
        "ambulence",
        "ambulans"
    ],

    "breathe": [
        "breath",
        "breth",
        "brethe"
    ],

    "collapse": [
        "collapsed",
        "fall down",
        "building fell"
    ],

    "gas": [
        "gass",
        "gaas"
    ]
}


PANIC_PREFIXES = [
    "help",
    "pls",
    "please",
    "bro",
    "sir",
    "madam",
    "urgent",
    "emergency",
    "quick",
    "fast"
]


PANIC_SUFFIXES = [
    "please",
    "fast",
    "quickly",
    "now",
    "immediately",
    "save us",
    "save me"
]


def add_noise(sentence):
    """
    Introduce realistic speech recognition variations.
    """

    sentence = sentence.lower()

    for word, variants in WORD_REPLACEMENTS.items():
        if word in sentence and random.random() < 0.35:
            sentence = sentence.replace(
                word,
                random.choice(variants),
                1
            )

    if random.random() < 0.20:
        sentence = random.choice(PANIC_PREFIXES) + " " + sentence

    if random.random() < 0.20:
        sentence = sentence + " " + random.choice(PANIC_SUFFIXES)

    return sentence