import React from "react";
import { useEffect, useState, useRef } from "react";
import { Image, Button, Container, Row, Col, NavItem } from "react-bootstrap";
const FormJava = () => {
  const [submitedData, setSubmitData] = useState();
  const submitdata = (e) => {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if ((name = " ")) {
      document.getElementById("input").innerHTML = "Please enter your name";
    }

    let myData = {
      name: name,
      number: number,
      email: email,
      password: password,
    };

    setSubmitData(myData);
  };

  return (
    <>
      <Container>
        <Row className="formRow">
          <Col md={6} className="formCol1">
            <h2> Sign up</h2>
            <form>
              <lable className="lableClass">Name:</lable>
              <input type="text" name="Name" id="name" />

              <br />
              <span id="input"></span>
              <br />

              <lable className="lableClass">Number:</lable>
              <input type="text" name="number" required id="number" />
              <br />
              <br />

              <lable className="lableClass">Email:</lable>
              <input type="email" name="email" required id="email" />
              <br />
              <br />

              <lable className="lableClass">Password:</lable>
              <input type="password" name="password" required id="password" />
              <br />
              <br />

              <input
                type="submit"
                value="Submit"
                className="formBtn"
                onClick={submitdata}
              />
            </form>
          </Col>

          <Col md={6} className="formCol1">
            <h2> here is the Submmit data</h2>
            {submitedData && (
              <div className="resultDiv">
                <div>{submitedData?.name}</div>
                <div>{submitedData?.number}</div>
                <div>{submitedData?.password}</div>

                <div>{submitedData?.email}</div>
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

export default FormJava;
