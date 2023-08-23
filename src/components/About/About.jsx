import styled from "styled-components";
import React from "react";

const About = (props) => {
  return (
  <>
    <p>{props.text}</p>
    <img src={props.img} alt="" />
  </>
  );
};



export default About;
