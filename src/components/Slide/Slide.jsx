import styled from 'styled-components';
import React from 'react';
import { devices } from '../../Breakpoints';

const Slide = (props) => {
  return (
    <ConceptVisualisation>
      <img src={props.img} alt={props.alt} />
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </ConceptVisualisation>
  );
};

const ConceptVisualisation = styled.div`
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
      gap: 0.5rem;
      p {
        font-size: 18px;
      }
      h2 {
        font-size: 22px;
      }
    }
    img {
      width: 40%;
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
      gap: 1rem;
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
`;

export default Slide;
