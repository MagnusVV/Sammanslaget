import styled from "styled-components";
import React from "react";

const Slide = (props) => {
  return (
    <div className="Slide">
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Slide;
