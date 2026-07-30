from predict import predict_and_guide
from voice_input import listen
from tts import speak


def text_mode():

    message = input("\nEnter emergency message: ").strip()

    if message == "":
        print("\nPlease enter a message.")
        return

    category, guidance = predict_and_guide(message)

    print("\nPredicted Disaster :", category)

    print("\nSafety Guidance")
    print("-" * 45)
    print(guidance)

    # Speak the guidance
    speak(guidance)


def voice_mode():

    message = listen()

    if message is None:
        return

    category, guidance = predict_and_guide(message)

    print("\nPredicted Disaster :", category)

    print("\nSafety Guidance")
    print("-" * 45)
    print(guidance)

    # Speak the guidance
    speak(guidance)


def main():

    while True:

        print("\n" + "=" * 60)
        print("VOICE-FIRST DISASTER GUIDANCE SYSTEM")
        print("=" * 60)

        print("1. Text Input")
        print("2. Voice Input")
        print("3. Exit")

        choice = input("\nEnter your choice: ").strip()

        if choice == "1":

            text_mode()

        elif choice == "2":

            voice_mode()

        elif choice == "3":

            print("\nThank you for using the Voice-First Disaster Guidance System.")
            break

        else:

            print("\nInvalid choice. Please try again.")


if __name__ == "__main__":
    main()