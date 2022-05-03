//Style
import "../../styles/i_lounge.css";

//Image
import loungeCaption from "../../assets/f_lounge/loungeCaption.png";
import fortuneCookie from "../../assets/f_lounge/fortuneCookie.png";

//Modules
import React, { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import axios from "axios";
import swal from "sweetalert";
import { Button } from "react-bootstrap";

const styles = {
  border: "2px dashed brown",
  height: "350px",
  margin: "2% 13%",
};

const Lounge = () => {
  const [color, setcolor] = useState("#811111");
  const [strokeWidthNumber, setstrokeWidthNumber] = useState(3);

  const [quotes, setQuotes] = useState("");

  const quoteList = {
    method: "POST",
    url: "https://motivational-quotes1.p.rapidapi.com/motivation",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com",
      "X-RapidAPI-Key": "d6e39442d6msh6c1320ff4c6cd7dp1bbbc8jsn476920cee23e",
    },
    data: '{"key1":"value","key2":"value"}',
  };

  const handleClickQuotes = () => {
    axios
      .request(quoteList)
      .then(function (response) {
        setQuotes(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
        swal("Oops!", "Something went wrong! Please try again", "error");
      });
  };

  return (
    <>
      <div id="Lounge" className="container-fluid lounge">
        <div className="loungeContainer">
          <div className="row d-flex justify-content-center align-content-center">
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              src={loungeCaption}
              alt="loungeCaption"
              className="img-fluid loungeCaptionImage"
            ></img>
          </div>

          <div
            className="row d-flex justify-content-center align-content-center color-kit"
            data-aos="fade-up"
            data-aos-duration="1100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              fill="currentColor"
              class="bi bi-palette"
              viewBox="0 0 16 16"
            >
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z" />
            </svg>{" "}
            &nbsp;&nbsp;
            <input
              type="color"
              value={color}
              onChange={(e) => setcolor(e.target.value)}
            />
            &nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              class="bi bi-pen-fill"
              viewBox="0 0 16 16"
            >
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
            </svg>
            <input
              type="range"
              id="strokeWidthNumber"
              name="strokeWidthNumber"
              min="3"
              max="20"
              value={strokeWidthNumber}
              step="1"
              onChange={(e) => setstrokeWidthNumber(e.target.value)}
            />
          </div>
          <div
            className="row lounge-content d-flex justify-content-center align-content-center"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <ReactSketchCanvas
              style={styles}
              width="50rem"
              strokeWidth={strokeWidthNumber}
              strokeColor={color}
              canvasColor="#F4F4F4"
              allowOnlyPointerType="all"
              drawMode="true"
            />
          </div>
          <div className="row quote-content d-flex justify-content-center align-content-center">
            <div className="col-2 col-md-3 col-sm-5 col-lg-2 col-xs-5">
              <img
                src={fortuneCookie}
                alt="fortuneCookie"
                className="img-fluid fortuneCookieCaption"
                onClick={handleClickQuotes}
              ></img>
            </div>
            <div className="col-8 col-md-6 col-sm-7 col-lg-8 col-xs-6 col-quotes d-flex justify-content-center align-content-center">
              {quotes ? <p className="quotes-text">{quotes}</p> : <p></p>}
            </div>
            <div className="col-2 col-md-2 col-sm-1 col-lg-2 col-xs-1 offset"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lounge;
