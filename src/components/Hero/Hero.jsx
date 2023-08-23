import styled from "styled-components";
import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  return (
    <>
      <HeroAnimationWrapper ref={targetRef}>
        <HeroContainer>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ["0%", "-125%"]),
            }}
          >
            <LeftSplitHero>SAMMAN</LeftSplitHero>
          </motion.div>
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "125%"]) }}
          >
            <RightSplitHero>SLAGET</RightSplitHero>
          </motion.div>
        </HeroContainer>
        <HeroArticle>TEST!</HeroArticle>
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
  width: 100%;
  position: sticky;
  left: 0;
  top: 0;
  text-align: center;
`;

// These two styled divs split to left and right during initial scrolling.
const RightSplitHero = styled.div`
  font-size: 10rem;
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
