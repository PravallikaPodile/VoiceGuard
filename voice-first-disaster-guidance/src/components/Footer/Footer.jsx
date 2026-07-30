import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h2>🎙️ VoiceGuard</h2>

          <p>
            Voice-First Disaster Guidance System helps users report disasters,
            receive AI-powered guidance, access live weather information,
            and quickly contact emergency services.
          </p>
        </div>

        <div className="footer-center">
          <h3>Emergency Numbers</h3>

          <p>🚑 Ambulance : 108</p>
          <p>🚒 Fire : 101</p>
          <p>👮 Police : 100</p>
          <p>🆘 Disaster : 1070</p>
        </div>

        <div className="footer-right">
          <h3>Project</h3>

          <p>React.js</p>
          <p>Machine Learning</p>
          <p>OpenWeather API</p>
          <p>Speech Recognition API</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 VoiceGuard | Voice-First Disaster Guidance System
      </div>

    </footer>
  );
}

export default Footer;