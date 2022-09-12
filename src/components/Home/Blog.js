import React from "react";
import { Image, Button, Container, Row, Col, NavItem } from "react-bootstrap";
import logo from "./img/logo.png";
import bitmapcopy88 from "./img/bitmapcopy88.png";
import bitmapcopy from "./img/bitmapcopy.png";
import bitmap2 from "./img/bitmap2.png";
import bitma from "./img/bitma.png";
import desibachi from "./img/desibachi.png";
import bitmapbbbb from "./img/bitmapbbbb.png";
import bitmapcopy8 from "./img/bitmapcopy8.png";
import bitmapcopyaaaa from "./img/bitmapcopyaaaa.png";
import bitmapcopycccc from "./img/bitmapcopycccc.png";
import bitmapcopyffff from "./img/bitmapcopyffff.png";
import bitmapcopydddd from "./img/bitmapcopydddd.png";
import bitmapeeee from "./img/bitmapeeee.png";
import "./blog.css";

const Blog = () => {
  const cartData = [
    {
      thingsKnows:
        "5 things to knows before you become a UX designer: the experts weigh in",
      name: "Marie Herrera",
      date: "jan 23-4 minread",
    },
  ];
  // -----------------------------------Static Row -----------------------------------------------
  return (
    <>
      <Container className="blogContainer">
        <Row className="blogFirst1">
          <Col className="blogCol1" md={6}>
            <img src={bitmapcopy} alt="" className="blogImg" />
          </Col>
          <Col className="blogCol2" md={6}>
            <Row>
              <Col md={4}>
                <button className="blogBtn1">React</button>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                <strong>
                  {" "}
                  <p>
                    5 Things To Know Before You Become A UX Designer: The
                    Experts Weigh In
                  </p>
                </strong>
              </Col>
            </Row>

            <Row>
              <Col md={4}>Marie Herrera</Col>
            </Row>
            <Row>
              <Col md={{ span: 4 }}>
                <img src={bitmap2} alt="" />
                <p>jan 23-4 min read</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container />
        {/* -------------------------------Map function------------------------------------------------- */}
        {cartData.map((items) => {
          return (
            <Row className="blogRow2">
              <Col>
                <img src={bitma} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">Design Thinking</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>
              <Col md={4}>
                <img src={desibachi} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">React</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <img src={bitmapcopy8} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">React</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
        {/* --------------------------------------Input form--------------------------------------------------- */}
        <div className="signUp">
          <Row className="signUp1">
            <Col md={{ span: 5, offset: 5 }}>
              <h2>Sign up for our newsletter</h2>
            </Col>
          </Row>

          <Row className="signUp2">
            <Col md={{ span: 5, offset: 5 }}>
              <p>
                Stay updated with announcements on product releases, development
                updates..
              </p>
            </Col>
          </Row>
          <Row className="signUp3">
            <Col md={{ span: 5, offset: 5 }}>
              <input type="text" placeholder="email" className="input" />
              <button className="inputButton">subscribe</button>
            </Col>
          </Row>
        </div>{" "}
        {/* ------------------------------------------------------------------------------------ */}
        {cartData.map((items) => {
          return (
            <Row className="blogRow2">
              <Col>
                <img src={bitmapcopyaaaa} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">Design Thinking</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <img src={bitmapcopycccc} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">React</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <img src={bitmapbbbb} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">React</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
        {/* ----------------------------------------------------------------------------------------- */}
        {cartData.map((items) => {
          return (
            <Row className="blogRow2">
              <Col>
                <img src={bitmapeeee} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">Design Thinking</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>

              <Col md={4}>
                <img src={bitmapcopydddd} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">React</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>

              <Col>
                <img src={bitmapcopyffff} alt="" />
                <Row>
                  <Col>
                    <button className="blogBtn1">React</button>
                  </Col>
                </Row>

                <Row>
                  <Col md={10} className="thingsKnow">
                    <strong>
                      <p>{items.thingsKnows}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <strong>
                      <p>{items.name}</p>
                    </strong>
                  </Col>
                </Row>
                <Row>
                  <Col md={1}>
                    <img src={bitmap2} alt="" />
                  </Col>
                  <Col md={{ span: 7, offset: 1 }}>
                    <p>{items.date}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
        {/* -------------------------------------------------------------------------------------- */}
      </Container>
    </>
  );
};

export default Blog;
