import styled from 'styled-components';
import React from 'react';
import GlobalFonts from '../../fonts/fonts';
import { devices } from '../../Breakpoints';

const About = (props) => {
  return (
    <>
      <AboutWrapper>
        <h2>Grupp 9</h2>
        <MemberSection>
          <PersonDiv>
            <img src={props.img[0]} alt="" />
            <div>
              <h3>{props.name[0]}</h3>
              <p>{props.text[0]}</p>
            </div>
          </PersonDiv>
          <PersonDiv>
            <img src={props.img[1]} alt="" />
            <div>
              <h3>{props.name[1]}</h3>
              <p>{props.text[1]}</p>
            </div>
          </PersonDiv>
          <PersonDiv>
            <img src={props.img[2]} alt="" />
            <div>
              <h3>{props.name[2]}</h3>
              <p>{props.text[2]}</p>
            </div>
          </PersonDiv>
          <PersonDiv>
            <img src={props.img[3]} alt="" />
            <div>
              <h3>{props.name[3]}</h3>
              <p>{props.text[3]}</p>
            </div>
          </PersonDiv>
        </MemberSection>
      </AboutWrapper>
    </>
  );
};
const AboutWrapper = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: #262626;
  color: white;
  h2 {
    padding-top: 2rem;
    font-size: 32px;
    font-family: 'BlackOpsOne';
  }
`;

const MemberSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-block: 5rem;
  gap: 3rem;
  @media only screen and ${devices.xl} {
    flex-direction: row;
  }
`;
const PersonDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  align-items: center;
  img {
    width: 22vh;
    height: 22vh;
    border-radius: 50%;
    object-fit: cover;
  }
  h3 {
    padding-top: 1rem;
  }
  p {
    padding-top: 0.5rem;
    padding-inline: 1rem;
  }
  @media only screen and ${devices.md} {
    flex-direction: row;
    justify-content: center;
    text-align: left;
    h3 {
      padding-inline: 1rem;
    }
    img {
      width: 18vh;
      height: 18vh;
      border-radius: 50%;
    }
    div {
      width: 50%;
    }
  }
  @media only screen and ${devices.xl} {
    width: 23%;
    flex-direction: column;
    text-align: center;
  }
  div {
    width: 100%;
  }
`;

// const PersonDiv = styled.div`
//   width: 23%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   flex-basis: auto;
//   align-items: center;
//   img {
//     width: 18vh;
//     height: 18vh;
//     border-radius: 50%;
//   }
//   h3 {
//     padding-top: 1rem;
//   }
//   p {
//     padding-top: 0.5rem;
//   }
// `;
export default About;
