import styled from "styled-components";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import GlobalFonts from "../../fonts/fonts";

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  return (
    <>
      <HeroAnimationWrapper ref={targetRef}>
        <GlobalFonts />
        <HeroContainer>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ["0%", "-125%"]),
            }}
          >
            <LeftSplitHero>
              <WelcomeText>SAMMAN</WelcomeText>
            </LeftSplitHero>
          </motion.div>
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "125%"]) }}
          >
            <RightSplitHero>
              <WelcomeText>SLAGET</WelcomeText>
            </RightSplitHero>
          </motion.div>
        </HeroContainer>
        <HeroArticle>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          dolor modi ex porro? Error temporibus quasi maiores necessitatibus.
          Dignissimos quae placeat unde cumque, natus tempore corporis
          laudantium! Eligendi, distinctio unde.
        </HeroArticle>
      </HeroAnimationWrapper>
    </>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 2;
  position: sticky;
  left: 0;
  top: 0;
  div {
    display: flex;
    width: 50vw;
    height: 100%;
  }
`;

const HeroArticle = styled.article`
  width: auto;
  padding: 5rem 10rem;
  position: sticky;
  left: 0;
  top: 0;
  text-align: center;
`;

// The big text "SAMMANSLAGET" on the welcome page.
const WelcomeText = styled.h1`
  font-family: "BlackOpsOne";
`;

// These two styled divs split to left and right during initial scrolling.
const RightSplitHero = styled.div`
  font-size: 3rem;
  background-color: black;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
`;

const LeftSplitHero = styled(RightSplitHero)`
  justify-content: end;
`;

// Prevents scrolling down until the sliders are completely off screen.
const HeroAnimationWrapper = styled.section`
  height: 200vh;
`;

export default Hero;
