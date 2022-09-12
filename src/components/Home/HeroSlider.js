import React from "react";
import Slider from "react-slick";
import { useEffect, useState, useRef } from "react";
import { Image, Button, Container, Row, Col, NavItem } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bitmap2 from "./img/bitmap2.png";
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";
import image4 from "./img/image4.png";
import image5 from "./img/image5.jpg";
import image6 from "./img/image6.png";
import HeroStyle from "./HeroStyle.css";
import ReactDOM from "react-dom/client";
const Hero = () => {
  const [inputData, setinputData] = useState();
  const [submitedData, setSubmitData] = useState();
  const [emptyName, setEmptyName] = useState(false);
  const [emptyNumber, setEmptyNumber] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptyPassword, setEmptyPassword] = useState(false);

  const handleChange = (e) => {
    setinputData({
      ...inputData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData?.Name) {
      setEmptyName(true);
      return;
    } else if (!inputData?.Number) {
      setEmptyNumber(true);
      return;
    } else if (!inputData?.Email) {
      setEmptyEmail(true);
      return;
    } else if (!inputData?.Password) {
      setEmptyPassword(true);
      return;
    }

    setSubmitData(inputData);
  };

  const handleSubmit1 = (e) => {
    setinputData({});
  };
  const settings = {
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <>
      <Container className="heroSec">
        <Row>
          <Col md={12}>
            <Slider {...settings}>
              <div>
                <p>
                  <img src={image1} alt="" className="heroSec1" />
                </p>
              </div>
              <div>
                <p>
                  <img src={image2} alt="" className="heroSec1" />
                </p>
              </div>
              <div>
                <p>
                  {" "}
                  <img src={image3} alt="" className="heroSec1" />
                </p>
              </div>
              <div>
                <p>
                  <img src={image4} alt="" className="heroSec1" />
                </p>
              </div>
              <div>
                <p>
                  <img src={image5} alt="" className="heroSec1" />
                </p>
              </div>
              <div>
                <p>
                  <img src={image6} alt="" className="heroSec1" />
                </p>
              </div>
            </Slider>
          </Col>
        </Row>

        <Row>
          <Col md={6} className="formCol1">
            <h2> Sign up</h2>
            <form className="formCol">
              <lable className="lableClass">Username:</lable>
              <br />
              <input
                className="inputBox"
                type="text"
                name="Name"
                onChange={(e) => {
                  handleChange(e);
                  setEmptyName(false);
                }}
              />
              {emptyName && (
                <span className="error">**Please enter your name</span>
              )}

              <br />
              <br />

              <lable className="lableClass">Number:</lable>
              <br />
              <input
                className="inputBox"
                type="text"
                name="Number"
                onChange={(e) => {
                  handleChange(e);
                  setEmptyNumber(false);
                }}
              />

              {emptyNumber && (
                <span className="error">**Please enter your number</span>
              )}
              <br />
              <br />

              <lable className="lableClass">Email:</lable>
              <br />
              <input
                className="inputBox"
                type="email"
                name="Email"
                onChange={(e) => {
                  handleChange(e);
                  setEmptyEmail(false);
                }}
              />
              {emptyEmail && (
                <span className="error">**Please enter your email</span>
              )}
              <br />
              <br />

              <lable className="lableClass">Password:</lable>
              <br />
              <input
                className="inputBox"
                type="password"
                name="Password"
                onChange={(e) => {
                  handleChange(e);
                  setEmptyPassword(false);
                }}
              />
              {emptyPassword && (
                <span className="error">**Please enter your password</span>
              )}
              <br />
              <br />

              <input
                type="submit"
                value="Submit"
                className="formBtn"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              />

              <input
                type="submit"
                value="Clear"
                className="formBtn"
                onClick={handleSubmit1}
              />
            </form>
          </Col>

          <Col md={6} className="formCol1">
            <h2> here is the Submmit data</h2>
            {submitedData && (
              <div className="resultDiv">
                <div>{submitedData?.Name}</div>
                <div>{submitedData?.Number}</div>
                <div>{submitedData?.Password}</div>
                <div>{submitedData?.Email}</div>
                <div></div>
              </div>
            )}
            <p></p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
