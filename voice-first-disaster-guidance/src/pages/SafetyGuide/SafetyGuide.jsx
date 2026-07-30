import "./SafetyGuide.css";
import {
  FaWater,
  FaFire,
  FaHouseDamage,
  FaWind,
  FaFirstAid,
  FaBolt,
} from "react-icons/fa";

function SafetyGuide() {
  const guides = [
    {
      icon: <FaWater />,
      title: "Flood",
      tips: [
        "Move to higher ground.",
        "Avoid flood water.",
        "Turn off electricity.",
      ],
    },
    {
      icon: <FaFire />,
      title: "Fire",
      tips: [
        "Leave the building immediately.",
        "Use stairs instead of elevators.",
        "Call 101.",
      ],
    },
    {
      icon: <FaHouseDamage />,
      title: "Earthquake",
      tips: [
        "Drop, Cover and Hold.",
        "Stay away from glass.",
        "Move outside after shaking stops.",
      ],
    },
    {
      icon: <FaWind />,
      title: "Cyclone",
      tips: [
        "Stay indoors.",
        "Secure windows and doors.",
        "Keep emergency supplies ready.",
      ],
    },
    {
      icon: <FaFirstAid />,
      title: "Medical Emergency",
      tips: [
        "Call 108.",
        "Provide first aid if trained.",
        "Stay with the injured person.",
      ],
    },
    {
      icon: <FaBolt />,
      title: "Lightning",
      tips: [
        "Stay indoors.",
        "Avoid trees and metal objects.",
        "Unplug electrical devices.",
      ],
    },
  ];

  return (
    <div className="guide-page">

      <div className="guide-header">
        <h1>Safety Guide</h1>
        <p>
          Follow these recommended safety measures during different types of
          disasters.
        </p>
      </div>

      <div className="guide-grid">
        {guides.map((guide, index) => (
          <div className="guide-card" key={index}>
            <div className="guide-icon">{guide.icon}</div>

            <h2>{guide.title}</h2>

            <ul>
              {guide.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
}

export default SafetyGuide;