import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      {projectUrl !== "" ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <div className="proj-imgbx">
            <img src={imgUrl} alt="Project" />
            <div className="proj-txtx">
              <h4 style={{ color: "white", textDecoration: "none" }}>
                {title}
              </h4>
              <span style={{ color: "white" }}>{description}</span>
            </div>
          </div>
        </a>
      ) : (
        <div className="proj-imgbx">
          <img src={imgUrl} alt="Project" />
          <div className="proj-txtx">
            <h4 style={{ color: "white", textDecoration: "none" }}>{title}</h4>
            <span style={{ color: "white" }}>{description}</span>
          </div>
        </div>
      )}
    </Col>
  );
};
