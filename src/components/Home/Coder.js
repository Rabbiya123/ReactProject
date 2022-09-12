import React from "react";
import { Image, Button, Container, Row, Col, NavItem } from "react-bootstrap";
import "./Coder.css";
import bitmap2 from "./img/bitmap2.png";
import bitmapcopyaaaa from "./img/bitmapcopyaaaa.png";
import bitmapcopycccc from "./img/bitmapcopycccc.png";
import bitmapbbbb from "./img/bitmapbbbb.png";
import f from "./img/f.png";
import group3 from "./img/group3.png";
import group5 from "./img/group5.png";

import { Link } from "react-router-dom";
const Coder = () => {
  const cartData = [
    {
      thingsKnows:
        "5 things to knows before you become a UX designer: the experts weigh in",
      name: "Marie Herrera",
      date: "jan 23-4 minread",
    },
  ];
  return (
    <>
      <Container className="coderBlog">
        <Row className="row1">
          <Col md={{ span: 8, offset: 1 }}>
            <button className="coderBtn">React</button>
          </Col>
        </Row>

        <Row className="row2">
          <Col md={{ span: 8, offset: 1 }}>
            <strong>
              <h2>Coders — How to add source code to your Medium articles</h2>
            </strong>
          </Col>
        </Row>
        <Row className="row3">
          <Col md={{ span: 5, offset: 1 }}>
            <strong>
              {" "}
              <p>Marie Herrera</p>
            </strong>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 1, offset: 1 }}>
            <img src={bitmap2} alt="" />
          </Col>
          <Col md={5}>
            <p>jan 23-4 min read</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Share:</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              <img src={f} alt="" className="imgIcon" />
              <br />
              <img src={group3} alt="" className="imgIcon" />
              <br />
              <img src={group5} alt="" className="imgIcon" />
            </p>
          </Col>
        </Row>

        {/* <Row>
          <Col>
            <p>
              {" "}
              <img src={group3} alt="" />
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>
              {" "}
              <img src={group5} alt="" />
            </p>
          </Col>
        </Row>  */}

        <Row>
          <Col md={{ span: 6, offset: 4 }} className="illRow">
            <p>Illustration by Udhaya Chandran</p>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 9, offset: 1 }} className="rowP">
            <p>
              So as I was writing an article pertaining to coding work, I knew
              that I could add Code blocks & Inline code as a feature provided
              by Medium
            </p>
          </Col>
        </Row>

        <Row className="codeRow">
          <strong>
            {" "}
            <Col md={{ span: 2, offset: 1 }}>
              <h2>Code Black</h2>
            </Col>
          </strong>
        </Row>

        <Row>
          <Col md={{ span: 5, offset: 1 }} className="beginRow">
            To begin a code block, on a new line type in ``` (triple backtick).
            Keyboard shortcut: ⌘ + Opt + 6 / Ctrl + Alt + 6.
          </Col>
        </Row>

        <Row className="exampleRow">
          <Col md={{ span: 1, offset: 1 }}>
            <strong>
              {" "}
              <p>This is an example of code black</p>
            </strong>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 12, offset: 1 }} className="addCol">
            <strong>
              <h3>Adding Source Code</h3>
            </strong>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }} className="atCol">
            <p>
              At times, I would prefer to display the source code especially
              when the code is lengthy. This provides for better readability and
              added color. We can use Github Gists, Codepen.io, or JSfiddle.
              Paste your snippet URL from one of those sources to a new line in
              the editor and press Enter. The Source code will be embedded
              automatically. A walkthrough for using Github Gists:
            </p>
          </Col>
        </Row>

        <Row className="step6Row">
          <Col md={{ span: 9, offset: 1 }}>
            <p>
              Step 6: Paste the GitHub gist link in your article. Hit enter. The
              gist will turn into source code automatically:
            </p>
          </Col>
        </Row>

        <Row className="illRow">
          <Col md={{ span: 8, offset: 4 }}>Illustration by Udhaya Chandran</Col>
        </Row>

        <Row className="step6Row">
          <Col md={{ span: 9, offset: 1 }}>
            Step 6: Paste the GitHub gist link in your article. Hit enter. The
            gist will turn into source code automatically:Ta-da! Hope this helps
            someone
          </Col>
        </Row>
        <Row className="borderRow"></Row>

        <Row>
          <Col md={{ span: 5, offset: 1 }}>
            <button className="coderBtn">Design Thinking</button>
            <button className="coderBtn">React</button>
            <button className="coderBtn">SEO</button>
            <button className="coderBtn">Mobile</button>
          </Col>
        </Row>
        <Row className="readRow">
          <Col md={{ span: 9 }}>
            {" "}
            <p>Read Similar Articles</p>
          </Col>
        </Row>
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
        <Row className="borderRow"></Row>
      </Container>
    </>
  );
};

export default Coder;
