import React from "react";

const array = () => {
  const arr = [
    { id: 35, name: "Rabbiya", addr: "rwp" },
    { id: 44, name: "laiba", addr: "rwp" },
    { id: 39, name: "Sana", addr: "rwp" },
  ];

  return (
    <ul>
      {arr?.map((item, index) => {
        return <li key={index}>{item?.name}</li>;
      })}
    </ul>
  );
};
export default array;
