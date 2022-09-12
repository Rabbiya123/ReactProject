import React from "react";
import "./home.css";
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import f from "./img/f.png";
import group3 from "./img/group3.png";
import group5 from "./img/group5.png";
import hand1 from "./img/hand1.png";
import hand2 from "./img/hand2.png";
import hand3 from "./img/hand3.png";
import hand4 from "./img/hand4.png";
import paws from "./img/paws.png";

const Footer = () => {
  return (
    <>
      {" "}
      {/* <Container fluid className="footerSections">
        <Row>
          <Col md={{}}>
            <img src={hand1} alt="" className="rowHand" />
          </Col>
          <Col md={{ span: 4, offset: 1 }} className="text">
            <h1>If you think we are a fit for you, contact us</h1>
          </Col>
          <Col md={{ span: 2, offset: 2 }} className="rowHand">
            <img src={hand3} alt="" className="rowHand" />
          </Col>
        </Row>
        <Row>
          <Col className="rowHand">
            <img src={hand2} alt="" className="rowHand" />
          </Col>
          <Col md={{ span: 4, offset: 1 }} className="text">
            <p>
              <strong>
                {" "}
                If you have a ad blocker enabled,and
                <br /> can’t see any buttons - email us at hello@banbanmedia.com
              </strong>
            </p>
            <div>
              <img src={f} alt="" />
              <img src={group3} alt="" />
              <img src={group5} alt="" />
            </div>
            <Row className="paws">
              <Col>
                <img src={paws} alt="" />
              </Col>
            </Row>
          </Col>
          <Col md={{ span: 2, offset: 2 }} className="rowHand">
            <img src={hand4} alt="" className="rowHand" />
          </Col>
        </Row>
      </Container> */}
      ;
    </>
  );
};

export default Footer;
