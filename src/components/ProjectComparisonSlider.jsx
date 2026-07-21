import { useState } from "react";
import { MapPin } from "lucide-react";

const ProjectComparisonSlider = ({ project, id }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  return (
    <div className="project-card">
      <div className="comparison-slider" id={`slider-${id}`}>
        <div className="comparison-label before">ANTES</div>
        <div className="comparison-label after">DESPUÉS</div>

        <div
          className="img background-img"
          style={{
            backgroundImage: `url(${project.before})`,
          }}
        ></div>

        <div
          className="img foreground-img"
          style={{
            backgroundImage: `url(${project.after})`,
            width: `${sliderValue}%`,
          }}
        ></div>

        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          className="slider-input"
        />

        <div
          className="slider-handle"
          style={{
            left: `${sliderValue}%`,
          }}
        >
          ↔
        </div>
      </div>

      <div className="project-info">
        <span className={`project-badge ${project.category}`}>
          {project.category === "zacate"
            ? "🌱 Instalación de Zacate"
            : "🌿 Paisajismo"}
        </span>

        <h3>{project.title}</h3>

        <div className="project-location">
          <MapPin size={16} />
          <span>{project.location}</span>
        </div>

        <p className="project-description">{project.desc}</p>

        <div className="project-services">
          {project.services.map((service, index) => (
            <span key={index} className="service-pill">
              ✔ {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectComparisonSlider;
