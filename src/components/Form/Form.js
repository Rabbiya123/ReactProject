import React from "react";

const Form = ({ title }) => {
  return (
    <div class="my_div">
      <h1>{title}</h1>
      <form class="my_form">
        <label class="my_lable">Name:</label>
        <input type="text" placeholder="name" class="my_input" />
        <br />
        <br />

        <input type="submit" class="btn" />
      </form>
    </div>
  );
};

export default Form;
