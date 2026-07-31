import "./Report.css";
import { useState } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import {
  FaMicrophone,
  FaKeyboard,
  FaShieldAlt,
  FaVolumeUp,
  FaExclamationTriangle,
} from "react-icons/fa";

function Report() {

  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState("");
  const [risk, setRisk] = useState("");
  const [instructions, setInstructions] = useState([]);

  // New States
  const [isListening, setIsListening] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // ==========================================
  // Analyze Report (Text)
  // ==========================================

  const analyzeReport = async () => {

    if (text.trim() === "") {

      alert("Please enter or speak the incident description.");

      return;

    }

    try {

      setIsAnalyzing(true);

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          text: text,
        }
      );

      const data = response.data;

      if (!data.success) {

        setIsAnalyzing(false);

        alert("Prediction failed.");

        return;

      }

      setPrediction(data.prediction);

      setRisk(data.risk);

      const guide = data.guidance
        .split("\n")
        .filter((line) => line.trim() !== "");

      setInstructions(guide);

      setIsAnalyzing(false);

    } catch (error) {

      console.error(error);

      setIsAnalyzing(false);

      alert("Unable to connect to backend.");

    }

  };

  // ==========================================
  // Speak Guidance
  // ==========================================

  const speakInstructions = () => {

    if (instructions.length === 0) return;

    const speech = new SpeechSynthesisUtterance(
      instructions.join(". ")
    );

    speech.lang = "en-IN";

    speech.rate = 1;

    window.speechSynthesis.speak(speech);

  };

  // ==========================================
  // Voice Recognition
  // ==========================================

  const startVoice = () => {

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {

      alert("Speech Recognition is not supported.");

      return;

    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.start();

    setIsListening(true);

    recognition.onresult = async (event) => {

      setIsListening(false);

      setIsAnalyzing(true);

      const transcript = event.results[0][0].transcript;

      setText(transcript);

      try {

        const response = await axios.post(
          `${API_URL}/predict`,
          {
            text: transcript,
          }
        );

        const data = response.data;

        if (!data.success) {

          setIsAnalyzing(false);

          return;

        }

        setPrediction(data.prediction);

        setRisk(data.risk);

        const guide = data.guidance
          .split("\n")
          .filter((line) => line.trim() !== "");

        setInstructions(guide);

        setIsAnalyzing(false);

        const speech = new SpeechSynthesisUtterance(
          guide.join(". ")
        );

        speech.lang = "en-IN";

        speech.rate = 1;

        window.speechSynthesis.speak(speech);

      } catch (err) {

        console.log(err);

        setIsListening(false);

        setIsAnalyzing(false);

        alert("Cannot connect to backend.");

      }

    };

    recognition.onerror = (event) => {

      setIsListening(false);

      setIsAnalyzing(false);

      alert("Voice recognition error : " + event.error);

    };

  };
    return (
    <div className="report-page">

      <div className="report-header">

        <h1>Report Disaster</h1>

        <p>
          Describe the disaster using text or voice.
          The AI model will identify the disaster type
          and provide immediate safety guidance.
        </p>

      </div>

      <div className="input-section">

        <div className="input-card">

          <h2>
            <FaKeyboard />
            Incident Description
          </h2>

          <textarea
            placeholder="Example: Heavy rain has flooded the roads and water is entering houses..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="analyze-btn"
            onClick={analyzeReport}
            disabled={isAnalyzing}
          >
            {isAnalyzing ? "Analyzing..." : "Analyze Report"}
          </button>

        </div>

        <div className="voice-card">

          <h2>
            <FaMicrophone />
            Voice Report
          </h2>

          <button
            className={`voice-btn ${isListening ? "listening" : ""}`}
            onClick={startVoice}
            disabled={isListening || isAnalyzing}
          >
            {isListening ? "🎙️" : "🎤"}
          </button>

          <p>

            {isListening
              ? "🎙 Listening..."
              : isAnalyzing
              ? "🤖 Analyzing..."
              : "Click to record your voice."}

          </p>

          {text && (

            <div className="recognized-text">

              <strong>Recognized Speech:</strong>

              <p>"{text}"</p>

            </div>

          )}

        </div>

      </div>

      <div className="prediction">

        <h2>Prediction Result</h2>

        <div className="prediction-card">

          <p>Predicted Disaster</p>

          <h1>{prediction || "--"}</h1>

          <div className="risk">

            <FaExclamationTriangle />

            Risk Level : {risk || "--"}

          </div>

        </div>

      </div>

      <div className="instructions">

        <h2>

          <FaShieldAlt />

          Safety Instructions

        </h2>

        <ul>

          {instructions.length === 0 ? (

            <li>No instructions available.</li>

          ) : (

            instructions.map((item, index) => (

              <li key={index}>{item}</li>

            ))

          )}

        </ul>

        <button
          className="speak-btn"
          onClick={speakInstructions}
          disabled={instructions.length === 0}
        >

          <FaVolumeUp />

          Listen to Instructions

        </button>

      </div>

    </div>
  );

}

export default Report;
