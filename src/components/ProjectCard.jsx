import ProjectComparisonSlider from "./ProjectComparisonSlider";
import { MapPin, CheckCircle } from "lucide-react";

const ProjectCard = ({ project, id }) => {
  return (
    <div className="project-card">

      <ProjectComparisonSlider
        project={project}
        id={id}
      />

      <div className="project-info">

        <span className={`badge ${project.category}`}>
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.desc}</p>

        <div className="project-location">
          <MapPin size={16}/>
          {project.location}
        </div>

        <div className="project-services">

          {project.services.map((service,index)=>(
            <span
                key={index}
                className="service-badge"
            >
                <CheckCircle size={15}/>
                {service}
            </span>
          ))}

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;