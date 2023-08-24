import styled from 'styled-components';
import React from 'react';
import { devices } from '../../Breakpoints';

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
  min-height: 20vh;
  width: 100%;
  margin-bottom: 6rem;
  padding-inline: 1rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 26px;
    }
  }
  img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0px 2px 7px gray;
    object-fit: cover;
  }
  @media only screen and ${devices.md} {
    height: 25vh;
    display: flex;
    padding-inline: 2.5rem;
    gap: 3rem;
    div {
      text-align: left;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 2rem;
      p {
        font-size: 18px;
      }
      h2 {
        font-size: 28px;
      }
    }
    img {
      width: 50%;
      border-radius: 15px;
      box-shadow: 0px 2px 7px gray;
      object-fit: cover;
    }
  }
  @media only screen and ${devices.xl} {
    height: 35vh;
    display: flex;
    padding-inline: 10rem;
    gap: 3rem;
    div {
      text-align: left;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: 2rem;
      p {
        font-size: 20px;
      }
      h2 {
        font-size: 32px;
      }
    }
    img {
      width: 50%;
      border-radius: 15px;
      box-shadow: 0px 2px 7px gray;
      object-fit: cover;
    }
  }
`;

export default Slide;
