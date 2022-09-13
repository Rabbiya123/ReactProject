import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./home.css";
const Home = () => {
  const [show, setShow] = useState(false);
  const [modalData, setmodalData] = useState();
  const [count, setCount] = useState(0);
  const [data, setdata] = useState([]);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (item) => {
    setmodalData(item);
    setShow(true);
  };

  let handlingIncrement = () => {
    setCount(count + 1);
  };

  let handlingDecrement = () => {
    if (count < 1) {
      return;
    } else {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let getData = async () => {
    const obj = {
      method: "GET",
    };
    const response = await fetch("https://reqres.in/api/users?page=2", obj);
    var res = await response.json();
    console.log("hy", res.data);
    setdata(res.data);
  };

  return (
    <div>
      <button onClick={() => handlingIncrement()}>Increment</button>

      <button onClick={() => handlingDecrement()}>Decrement</button>
      <p>{count}</p>

      {/* <ul>
        {data?.map((item, index) => {
          <li>{item.data} </li>;
        })}
      </ul> */}

      <Modal
        show={show}
        onHide={() => {
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <img src={modalData?.avatar} alt="he" />
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {modalData?.email}
          <br />
          {modalData?.first_name}
          <br />
          {modalData?.last_name}
          <br />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {data?.map((item, index) => (
        <div
          className="mainDiv"
          onClick={() => {
            handleShow(item);
          }}
        >
          <div key={index} className="myDiv">
            <img src={item.avatar} alt="he" className="myImg" />
            <div className="myText">{item.email}</div>
            <div className="myText">{item.last_name}</div>
            <div className="myText">{item.first_name}</div>

            <div></div>
            <br />
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
