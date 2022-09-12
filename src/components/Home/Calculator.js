import React from "react";
import { useEffect, useState, useRef } from "react";
import backgroundImg from "./img/backgroundImg.jpg";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };

  return (
    <>
      <header className="headerTag">
        <div className="main_div_1">
          <div className="heading_div_h2">
            <h2 className="h2_heading">Calculator</h2>
          </div>
          <div class="cal_grid">
            <form name="forms" className="formDiv">
              <div className="displayDiv"> {display}</div>
              <span className="expression">{expression}</span>
              <br />
              <br />

              <input
                type="button"
                value="1"
                onClick={() => {
                  handleClick(1);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="2"
                onClick={() => {
                  handleClick(2);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="3"
                onClick={() => {
                  handleClick(3);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="C"
                //   onClick={() => {
                //     handleClick(C);
                //   }}
                className="calculatorbtn"
              />

              <br />
              <br />

              <input
                type="button"
                value="4"
                onClick={() => {
                  handleClick(4);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="5"
                onClick={() => {
                  handleClick(5);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="6"
                onClick={() => {
                  handleClick(6);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="+"
                onClick={() => {
                  handleClick("+");
                }}
                className="calculatorbtn"
              />

              <br />
              <br />

              <input
                type="button"
                value="7"
                onClick={() => {
                  handleClick(7);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="8"
                onClick={() => {
                  handleClick(8);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="9"
                onClick={() => {
                  handleClick(9);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="-"
                onClick={() => {
                  handleClick("-");
                }}
                className="calculatorbtn"
              />

              <br />
              <br />

              <input
                type="button"
                value="0"
                onClick={() => {
                  handleClick(0);
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="/"
                onClick={() => {
                  handleClick("/");
                }}
                className="calculatorbtn"
              />
              <input
                type="button"
                value="*"
                onClick={() => {
                  handleClick("*");
                }}
                className="calculatorbtn"
              />
              <button onClick={() => handleResult()} className="calculatorbtn">
                =
              </button>
              <br />
              <br />

              <br />
              <br />
            </form>
          </div>
        </div>
      </header>
    </>
  );
};
export default Calculator;
