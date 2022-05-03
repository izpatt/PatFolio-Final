//Import
import { Button, Row, Container, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import ModalImage from "react-modal-image";
import Accordion from "react-bootstrap/Accordion";
import Carousel from "react-bootstrap/Carousel";

//React Player
import ReactPlayer from "react-player";

//Styles
import "../../styles/h_modal.css";

const ExperienceAchievementsModal = ({
  show,
  setShow,
  showColumn,
  headerImage,
  list_organizations,
}) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Container fluid>
        <Modal
          aria-labelledby="example-custom-modal-styling-title"
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          animation="fade"
          className="modal-whole"
        >
          <Modal.Header className="modal-header">
            <Modal.Title id="example-custom-modal-styling-title">
              <img
                src={headerImage}
                alt="headerImage"
                className="img-fluid headerImage"
              ></img>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            {/* COLUMN1: My Experiences and Achivements */}
            {showColumn == "column1" ? (
              <Container>
                <Row>
                  <Accordion defaultActiveKey="0" flush>
                    {list_organizations.map(
                      (
                        {
                          organization,
                          position,
                          positionLink,
                          duration,
                          captions,
                          images,
                        },
                        index
                      ) => (
                        <Accordion.Item
                          eventKey={index}
                          // className="accordion-header"
                        >
                          <Accordion.Header>
                            <h3 className="organization">{organization}</h3>
                          </Accordion.Header>
                          {/* 1: Experience and Achievement */}
                          <Accordion.Body>
                            <Row>
                              <Col>
                                <ModalImage
                                  small={images}
                                  large={images}
                                  alt="Image preview"
                                  className="img-fluid images"
                                />
                              </Col>
                              <Col>
                                <a
                                  className="position-link"
                                  href={positionLink}
                                  target="_blank"
                                >
                                  <p className="position">{position}</p>
                                </a>
                                <p className="duration">{duration}</p>
                                {captions.map((caption) => (
                                  <p className="caption">{caption}</p>
                                ))}
                              </Col>
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      )
                    )}
                  </Accordion>
                </Row>
              </Container>
            ) : (
              /* COLUMN2: Co-Curriculars and Creativity */
              <Container>
                <Row className="d-flex justify-content-center">
                  <Carousel
                    fade
                    controls={false}
                    indicators={true}
                    prevLabel=""
                    nextLabel=""
                    pause={"hover"}
                  >
                    {list_organizations.map(
                      ({
                        organization,

                        captions,
                        images,
                        videos,
                      }) => (
                        <Carousel.Item>
                          {images ? (
                            <img
                              className="d-block w-100"
                              src={images}
                              alt="Second slide"
                            />
                          ) : (
                            <div>
                              <ReactPlayer
                                url={videos}
                                width={"100%"}
                                height={360}
                                controls={true}
                              />
                            </div>
                            // <video
                            //   style={{ height: 360, width: "100%" }}
                            //   controls
                            // >
                            //   <source
                            //     src={videos}
                            //     type="video/mp4"
                            //     alt="videoPlaying"
                            //   ></source>
                            // </video>
                          )}

                          <h3 className="organization mt-3">{organization}</h3>
                          <p className="captions mt-2 mb-5">{captions}</p>
                        </Carousel.Item>
                      )
                    )}
                  </Carousel>
                </Row>
              </Container>
            )}
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default ExperienceAchievementsModal;
