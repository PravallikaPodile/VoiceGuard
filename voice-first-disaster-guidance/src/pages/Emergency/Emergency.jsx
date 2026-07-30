import "./Emergency.css";
import { useEffect, useState } from "react";
import {
  FaAmbulance,
  FaFireExtinguisher,
  FaShieldAlt,
  FaPhoneAlt,
  FaHospital,
  FaFirstAid,
} from "react-icons/fa";

function Emergency() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const contacts = [
    {
      title: "Ambulance",
      number: "108",
      icon: <FaAmbulance />,
      color: "#2E7D32",
    },
    {
      title: "Police",
      number: "100",
      icon: <FaShieldAlt />,
      color: "#1565C0",
    },
    {
      title: "Fire Service",
      number: "101",
      icon: <FaFireExtinguisher />,
      color: "#D32F2F",
    },
    {
      title: "Disaster Management",
      number: "1070",
      icon: <FaPhoneAlt />,
      color: "#F57C00",
    },
  ];

  return (
    <div className="emergency-page">

      <div className="emergency-header">
        <h1>Emergency Services</h1>
        <p>
          Contact emergency services immediately and locate the nearest
          hospitals using your current location.
        </p>
      </div>

      <div className="contact-grid">
        {contacts.map((item, index) => (
          <div className="contact-card" key={index}>
            <div
              className="contact-icon"
              style={{ background: item.color }}
            >
              {item.icon}
            </div>

            <h2>{item.title}</h2>

            <h1>{item.number}</h1>

            <a href={`tel:${item.number}`} className="call-btn">
              Call Now
            </a>
          </div>
        ))}
      </div>

      <div className="checklist">

        <h2>
          <FaFirstAid />
          Emergency Kit Checklist
        </h2>

        <ul>
          <li>✔ Drinking Water</li>
          <li>✔ Dry Food</li>
          <li>✔ Torch & Batteries</li>
          <li>✔ First Aid Kit</li>
          <li>✔ Mobile Charger / Power Bank</li>
          <li>✔ Important Documents</li>
          <li>✔ Essential Medicines</li>
          <li>✔ Emergency Contact List</li>
        </ul>

      </div>

      <div className="hospital-card">

        <div className="hospital-header">

          <FaHospital className="hospital-icon" />

          <div>

            <h2>Nearby Hospitals</h2>

            <p>
              Hospitals near your current location.
            </p>

          </div>

        </div>

        {location ? (
          <iframe
            title="Nearby Hospitals"
            src={`https://www.google.com/maps?q=hospitals&ll=${location.lat},${location.lng}&z=15&output=embed`}
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "15px",
              marginTop: "20px",
            }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "40px" }}>
            Allow Location Permission to View Nearby Hospitals...
          </h3>
        )}

      </div>

    </div>
  );
}

export default Emergency;