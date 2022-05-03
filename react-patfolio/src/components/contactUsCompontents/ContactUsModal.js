//Elements
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

//Forms
import Form from "react-bootstrap/Form";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";

//Images
import contactCaption from "../../assets/e_contact/contactCaption.png";

// service_f4kh66l

const ContactUsModal = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f4kh66l",
        "template_l2hrwkl",
        e.target,
        "3e9FiluClRKwtX4P9"
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert("Successfully sent!");
          // swal("Oops!", "Something went wrong!", "error");
          swal(
            "Message sent!",
            "Your email was successfully delivered",
            "success"
          );
        },
        (error) => {
          swal("Oops!", "Something went wrong! Please try again", "error");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <img
              src={contactCaption}
              alt="contactCaption"
              className="img-fluid contactCaption"
            ></img>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Subject:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                name="emailSubject"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Your Email address:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="from_name"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message here:</Form.Label>
              <Form.Control
                as="textarea"
                rows={8}
                minLength={15}
                name="message"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit" value="Send">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactUsModal;
