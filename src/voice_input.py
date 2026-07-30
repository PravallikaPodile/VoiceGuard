import speech_recognition as sr


def listen():

    recognizer = sr.Recognizer()

    try:
        with sr.Microphone() as source:

            print("\nListening... Please speak.")

            recognizer.adjust_for_ambient_noise(source, duration=1)

            audio = recognizer.listen(
                source,
                timeout=5,
                phrase_time_limit=8
            )

        text = recognizer.recognize_google(audio)

        print("\nYou said:", text)

        return text

    except sr.WaitTimeoutError:

        print("\nNo speech detected.")

        return None

    except sr.UnknownValueError:

        print("\nCould not understand the audio.")

        return None

    except sr.RequestError:

        print("\nSpeech Recognition service unavailable.")

        return None

    except Exception as e:

        print("\nError:", e)

        return None


if __name__ == "__main__":

    print("=" * 60)
    print("VOICE INPUT TEST")
    print("=" * 60)

    while True:

        text = listen()

        if text:
            print("\nRecognized Text:", text)

        choice = input("\nTry again? (y/n): ")

        if choice.lower() != "y":
            break