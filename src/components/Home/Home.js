import React, { useState, useEffect } from "react";
import "./home.css";
const Home = () => {
  const [count, setCount] = useState(0);
  const [data, setdata] = useState([]);

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

      {data?.map((item, index) => (
        <div className="mainDiv">
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
