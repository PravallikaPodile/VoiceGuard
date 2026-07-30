import "./About.css";
import {
  FaMicrophone,
  FaRobot,
  FaCloudSun,
  FaShieldAlt,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <div className="about-page">

      <div className="about-header">
        <h1>About the Project</h1>

        <p>
          Voice-Based Disaster Guidance System is an intelligent web application
          that helps users receive immediate disaster guidance using voice and
          text inputs. It combines Machine Learning, Weather APIs and
          Speech Technologies to provide quick emergency assistance.
        </p>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <FaMicrophone className="feature-icon"/>
          <h2>Voice Reporting</h2>
          <p>
            Users can describe incidents through voice. Speech Recognition
            converts voice into text for further analysis.
          </p>
        </div>

        <div className="feature-card">
          <FaRobot className="feature-icon"/>
          <h2>AI Prediction</h2>
          <p>
            Machine Learning models classify the disaster type and provide
            appropriate safety guidance.
          </p>
        </div>

        <div className="feature-card">
          <FaCloudSun className="feature-icon"/>
          <h2>Live Weather</h2>
          <p>
            Real-time weather information helps users understand current
            environmental conditions.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon"/>
          <h2>Safety Guidance</h2>
          <p>
            Displays disaster-specific precautions and reads them aloud using
            Text-to-Speech technology.
          </p>
        </div>

      </div>

      <div className="technology">

        <h2>Technologies Used</h2>

        <div className="tech-grid">

          <div className="tech-card">
            <FaCode />
            <h3>Frontend</h3>
            <p>React.js, HTML5, CSS3, JavaScript</p>
          </div>

          <div className="tech-card">
            <FaDatabase />
            <h3>Backend</h3>
            <p>Python Flask / FastAPI (ML Integration)</p>
          </div>

          <div className="tech-card">
            <FaRobot />
            <h3>Machine Learning</h3>
            <p>
              TF-IDF, Naive Bayes, Logistic Regression, Support Vector Machine
            </p>
          </div>

          <div className="tech-card">
            <FaCloudSun />
            <h3>APIs</h3>
            <p>
              OpenWeather API, Web Speech API, Text-to-Speech API
            </p>
          </div>

        </div>

      </div>

      <div className="workflow">

        <h2>Project Workflow</h2>

        <div className="workflow-box">

          Voice / Text Input

          ↓

          Text Processing (NLP)

          ↓

          TF-IDF Feature Extraction

          ↓

          Machine Learning Prediction

          ↓

          Safety Instruction Mapping

          ↓

          Text-to-Speech Guidance

        </div>

      </div>

    </div>
  );
}

export default About;