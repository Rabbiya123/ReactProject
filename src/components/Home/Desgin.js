import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { Image, Button, Container, Row, Col } from "react-bootstrap";
import logo from "./img/logo.png";
import group from "./img/group.png";
import makeWebsite from "./img/makeWebsite.png";
import integrateyourstuff from "./img/integrateyourstuff.png";
import makepeoplebuy from "./img/makepeoplebuy.png";
import helpyou from "./img/helpyou.png";
import group17 from "./img/group17.png";
import group18 from "./img/group18.png";
import group19 from "./img/group19.png";
import bitmapcopy5 from "./img/bitmapcopy5.png";
import bitmapcopy9 from "./img/bitmapcopy9.png";
import bitmapni from "./img/bitmapni.PNG";
import comingsoon from "./img/comingsoon.png";
import group26 from "./img/group26.png";
import group25 from "./img/group25.png";
import group29 from "./img/group29.png";
import group23 from "./img/group23.png";
import group27 from "./img/group27.png";
import group28 from "./img/group28.png";
import people3 from "./img/people3.png";
import group30 from "./img/group30.png";
import group31 from "./img/group31.png";
import group32 from "./img/group32.png";
import group33 from "./img/group33.png";
import group34 from "./img/group34.png";
import group35 from "./img/group35.png";
import group36 from "./img/group36.png";
import group37 from "./img/group37.png";
import group38 from "./img/group38.png";
import group39 from "./img/group39.png";

import "./home.css";
const Desgin = () => {
  return (
    <>
      <section>
        <Container className="FirstSection">
          <Row>
            <Col md={6} className="textCol">
              <h1 className="SectionH1">We made this page</h1>
              <p>
                To show you how we can help you so that decide to ask us for
                help{" "}
              </p>
              <Button className="buttonsection">Work Together</Button>{" "}
            </Col>

            <Col md={6}>
              {" "}
              <img src={group} alt="grp40" />;
            </Col>
          </Row>
        </Container>
      </section>
      <section className="secondSection">
        <h1 className="secondSectionH1">Here we can do for you </h1>
        <Container className="secondSectionContainer">
          <Row className="colText">
            <Col md={6}>
              <img src={makeWebsite} alt="grp40" />;
            </Col>

            <Col md={6} className="secondsectioncolText">
              <h4>#1</h4>
              <h2>We make websites</h2>
              <p>
                You think most websites suck? We agree with you, which is why we
                work with the latest technologies to make cool website made for
                humans.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="thirdSection">
        <Container>
          <Row>
            <Col md={6} className="thirdcolText">
              <h4 className="SectionH1">#2</h4>
              <h2>We can integrate your stuff</h2>
              <p>
                You tired of having to jump between 23 different platforms? We
                will integrate the sh*t out of your CMS, 3PL, e-commerce
                platform and everything else you got
              </p>
            </Col>
            <Col md={6}>
              {" "}
              <img
                src={integrateyourstuff}
                alt="We can integrate your stuff"
              />{" "}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="fouthSection">
        <Container>
          <Row>
            <Col md={6}>
              {" "}
              <img src={makepeoplebuy} alt="We can integrate your stuff" />{" "}
            </Col>

            <Col md={6} className="fouthcolText">
              <h4 className="SectionH1">#3</h4>
              <h2>We make people buy your stuff</h2>
              <p>
                Your rocket not working? SEO, SEM, Influence marketing combined
                with strong analytics and the latest tools and partners will
                guarantee you the results you hoped for.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="fivthSection">
        <Container>
          <Row>
            <Col md={6} className="fouthcolText">
              <h4 className="SectionH1">#4</h4>
              <h2>We will be there to help you</h2>
              <p>
                You want someone committed 24/7? We are there for our partners
                24/7/365. Don’t believe us? Try dropping us a message below on a
                Sunday.
              </p>
            </Col>

            <Col md={6}>
              {" "}
              <img src={helpyou} alt="We can integrate your stuff" />{" "}
            </Col>
          </Row>
        </Container>
      </section>
      {/* Technology Section */}
      <Container className="tecSection" id="tecId">
        <Row className="tecRow1">
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="tech2">Some technologies we know</h2>
          </Col>
        </Row>

        <Row className="tecRow2">
          <Col md={{ span: 3, offset: 1 }}>
            <img src={group17} />
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            {" "}
            <img src={group18} />
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <img src={group19} />
          </Col>
        </Row>
        <Row className="tecRow3">
          <Col md={{ span: 3, offset: 5 }}>
            <button className="btn">Work togather</button>
          </Col>
        </Row>
      </Container>
      {/* Make website section */}
      <Container className="makeSection">
        <Row className="makeRow1">
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className="makeh2">Some of the cool stuff we made</h1>
          </Col>
        </Row>

        <Row className="makeRow2">
          <Col md={{ span: 3 }}>
            <img src={bitmapcopy5} alt="" />
            <Row>
              <Col md={{ span: 6, offset: 6 }}>
                <h2>Artiks</h2>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 12, offset: 3 }}>
                <p>E-commerce Website/Magento</p>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 6, offset: 3 }}>
            <img src={bitmapcopy9} alt="" />

            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h2>Depalma</h2>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <p>E-commerce Website/Magento</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={{ span: 3 }}>
            <img src={bitmapni} alt="" />
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <h2>Spillagency</h2>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 8, offset: 5 }}>
                <p> Website</p>
              </Col>
            </Row>
          </Col>

          <Col md={{ span: 3, offset: 3 }}>
            <img src={comingsoon} alt="" />
            <Row>
              <Col md={{ span: 12, offset: 6 }}>
                <h2>Coming Soon</h2>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 8, offset: 9 }}>
                <p> Website</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* Sell Section  */}
      {/* <Container className="sellSection">
        <Row className="sellRow1">
          <Col md={{ span: 12, offset: 2 }}>
            <h1 className="sellh1">What we use to sell your stuff</h1>
          </Col>
        </Row>

        <Row className="sellRow2">
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group26} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            {" "}
            <img src={group25} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group23} />
          </Col>
        </Row>
        <Row className="sellRow3">
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group29} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            {" "}
            <img src={group27} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group28} />
          </Col>
        </Row>

        <Row className="sellRow4">
          <Col md={{ span: 3, offset: 4 }}>
            <button className="btn">Work togather</button>
          </Col>
        </Row>
      </Container> */}
      {/* 3 Group peolpes */}
      <Container className="threeSection" id="threeId">
        <Row className="threeRow1">
          <Col md={{ span: 3, offset: 2 }}>
            <img src={people3} alt="" />
          </Col>
        </Row>{" "}
      </Container>{" "}
      {/*Work togther Section */}
      {/* <Container className="togetherSection">
        <Row className="togetherRow1">
          <Col md={{ span: 12, offset: 2 }}>
            <h1 className="togetherh1">
              Some of the things we make work together
            </h1>
          </Col>
        </Row>

        <Row className="togetherRow2">
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group30} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            {" "}
            <img src={group31} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group32} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group33} />
          </Col>
        </Row>
        <Row className="togetherRow3">
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group34} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            {" "}
            <img src={group35} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group36} />
          </Col>
          <Col md={{ span: 2, offset: 1 }}>
            <img src={group37} />
          </Col>
        </Row>

        <Row className="togetherRow4">
          <Col md={{ span: 1, offset: 4 }}>
            <img src={group38} />
          </Col>
          <Col md={{ span: 1, offset: 3 }}>
            <img src={group39} />
          </Col>
        </Row>

        <Row className="togetherRow5">
          <Col md={{ span: 3, offset: 6 }}>
            <button className="btn">Work togather</button>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};

export default Desgin;
