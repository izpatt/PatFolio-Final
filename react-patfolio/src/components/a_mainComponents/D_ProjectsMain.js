import React, { useState } from "react";

//Style
import "../../styles/d_projects.css";

//Image
import projectsCaption from "../../assets/d_projects/projectsCaption.png";

//Data
import list_projects from "../projectsComponents/data/ProjectsContent";
import ProjectModal from "../projectsComponents/ProjectsModal";

const ProjectsMain = (props) => {
  const [show, setShow] = useState(false);
  const [text, setCaption] = useState("");
  const [technology, setTechnology] = useState("");

  const [headerImage, setHeader] = useState("");
  const [gifPreview, setProjectGIFPreview] = useState("");

  return (
    <>
      <div id="Projects" className="container-fluid projects">
        <div className="projectContainer">
          <div className="row d-flex justify-content-center align-content-center">
            {" "}
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={projectsCaption}
              alt="projectsCaption"
              className="img-fluid projectsCaptionImage"
            ></img>
          </div>
          <div
            className="row d-flex justify-content-center align-content-center"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <p className="projectsSubtitle">life of a developer</p>
          </div>

          <div
            className="scrollmenu"
            data-aos="fade-left"
            data-aos-duration="1100"
          >
            {list_projects.map(
              ({
                project,
                caption,
                images,
                header,
                projectGIFPreview,
                technologies,
              }) => (
                <div className="cards">
                  <img
                    src={images}
                    alt="projectImages"
                    className="img-fluid projectContentImages"
                    onClick={() => {
                      setShow(true);
                      setCaption(caption);
                      setHeader(header);
                      setTechnology(technologies);
                      setProjectGIFPreview(projectGIFPreview);
                    }}
                  ></img>
                  <p className="projectContentCaption">{project}</p>
                </div>
              )
            )}
            <ProjectModal
              show={show}
              setShow={setShow}
              caption={text}
              header={headerImage}
              technologies={technology}
              projectGIFPreview={gifPreview}
            />
          </div>
        </div>
      </div>
    </>
  );

  // <div className="row d-flex justify-content-center align-content-center">
  // {" "}
};

export default ProjectsMain;
