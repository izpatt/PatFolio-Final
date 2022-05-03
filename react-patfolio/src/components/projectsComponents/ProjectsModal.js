//Import
import { Button, Container } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

//Styles
import "../../styles/h_modal.css";

const ProjectModal = ({
  show,
  setShow,
  caption,
  technologies,
  header,
  projectGIFPreview,
}) => {
  const handleClose = () => setShow(false);

  return (
    <Container fluid>
      <Modal
        aria-labelledby="example-custom-modal-styling-title"
        show={show}
        onHide={handleClose}
        size="lg"
        animation="fade"
      >
        <Modal.Header className="modal-header">
          <Modal.Title id="example-custom-modal-styling-title">
            <img
              className="d-block w-100 img-fluid"
              src={header}
              alt="Project content"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          {technologies ? (
            <div className="row d-flex justify-content-center align-content-center">
              <h4>Skills: </h4>
              {technologies.map((tech) => (
                <p className="technologies ml-2">{tech}</p>
              ))}
            </div>
          ) : (
            <div></div>
          )}

          <img
            className="d-block img-GIFPreview img-fluid"
            //   src="https://drive.google.com/uc?export=view&id=1M2-PmXK8AzM9L_eIWeQybZiSDD3fjlY6"
            src={projectGIFPreview}
            alt="Project GIF Preview"
          />
          <div>
            <p className="projectModalContentCaption">{caption}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ProjectModal;
