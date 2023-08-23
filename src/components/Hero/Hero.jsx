import styled from "styled-components";
import React from "react";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <LeftSplitHero>SAMMAN</LeftSplitHero>
        <SplitHero>SLAGET</SplitHero>
      </HeroContainer>
      <div>TEST</div>
    </>
  );
};

const HeroContainer = styled.div`
  background-color: yellow;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
`;

const SplitHero = styled.div`
  font-size: 10rem;
  background-color: black;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
`;

const LeftSplitHero = styled(SplitHero)`
  justify-content: end;
`;

export default Hero;
