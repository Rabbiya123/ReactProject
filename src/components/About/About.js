import React from "react";
import Form from "../Form/Form";
import { Link } from "react-router-dom";
import "./about.css";
const About = () => {
  return (
    <>
      <div class="div_tag">
        <form brand="Ford" />
        <ul class="ul_items">
          <li class="li_list">
            {" "}
            <Link to="/form" class="link_file_1">
              Form
            </Link>
          </li>
          <li class="li_list">
            {" "}
            <Link to="/" class="link_file_2">
              Home
            </Link>
          </li>
          <li class="li_list">
            {" "}
            <Link to="/about" class="link_file_3">
              About
            </Link>
          </li>
        </ul>
      </div>

      <Form title="hey this is me" />
    </>
  );
};

export default About;
