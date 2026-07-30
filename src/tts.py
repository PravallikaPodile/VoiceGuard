import pyttsx3

# Initialize TTS engine only once
engine = pyttsx3.init()

# Voice settings
engine.setProperty("rate", 165)      # Speaking speed
engine.setProperty("volume", 1.0)    # Maximum volume


def speak(text):
    """
    Convert text into speech.
    """
    engine.say(text)
    engine.runAndWait()


if __name__ == "__main__":
    speak("Voice First Disaster Guidance System is ready.")