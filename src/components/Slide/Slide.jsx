import styled from 'styled-components';
import React from 'react';

const Slide = (props) => {
  return (
    <BadNameChangeLater>
      <img src={props.img} alt="" />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </BadNameChangeLater>
  );
};

const BadNameChangeLater = styled.div`
  height: 35vh;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10rem;
  padding-inline: 10rem;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

export default Slide;
