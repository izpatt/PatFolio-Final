//Style
import "../../styles/g_contactus.css";

//Image
import contactCaption from "../../assets/e_contact/contactCaption.png";
import gitHubCaption from "../../assets/e_contact/github.png";
import emailCaption from "../../assets/e_contact/email.png";
import linkedInCaption from "../../assets/e_contact/linkedIn.png";
import facebookCaption from "../../assets/e_contact/facebook.png";

import igCaption from "../../assets/e_contact/ig.png";
import ytCaption from "../../assets/e_contact/yt.png";

import React, { useState } from "react";

import ContactUsModal from "../contactUsCompontents/ContactUsModal";
const ContactUs = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div id="ContactUs" className="container-fluid contactUs">
        <div className="contactUsContainer">
          <div className="row d-flex justify-content-center align-content-center">
            {" "}
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={contactCaption}
              alt="contactCaption"
              className="img-fluid contactCaptionImage"
            ></img>
          </div>

          <div
            className="row socMed-Container d-flex justify-content-center align-content-center"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <img
              src={gitHubCaption}
              alt="gitHubCaption"
              className="img-fluid socmed gitHubCaptionImage"
              onClick={() =>
                window.open(
                  "https://github.com/izpatt?tab=repositories",
                  "_blank"
                )
              }
            ></img>
            <img
              src={emailCaption}
              alt="emailCaption"
              className="img-fluid socmed emailCaptionImage"
              onClick={() => {
                setShow(true);
              }}
            ></img>
            <ContactUsModal show={show} setShow={setShow} />{" "}
            <img
              src={linkedInCaption}
              alt="linkedInCaption"
              className="img-fluid socmed linkedInCaptionImage"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/patvalenzuela/",
                  "_blank"
                )
              }
            ></img>
          </div>
          <div
            className="row socMed-Container d-flex justify-content-center align-content-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <img
              src={igCaption}
              alt="igCaption"
              className="img-fluid socmed igCaptionImage"
              onClick={() =>
                window.open("https://www.instagram.com/izpattt_/", "_blank")
              }
            ></img>
            <img
              src={ytCaption}
              alt="ytCaption"
              className="img-fluid socmed ytCaptionImage"
              onClick={() =>
                window.open("https://www.youtube.com/c/PATutorials", "_blank")
              }
            ></img>

            <img
              src={facebookCaption}
              alt="facebookCaption"
              className="img-fluid socmed facebookCaptionImage"
              onClick={() =>
                window.open("https://www.facebook.com/izpattt", "_blank")
              }
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
