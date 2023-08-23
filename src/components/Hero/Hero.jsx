import styled from "styled-components";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 1], ["50%", "-95%"]);

  return (
    <>
      <HeroContainer>
        <motion.div style={{ x }}>
          <LeftSplitHero>SAMMAN</LeftSplitHero>
        </motion.div>
        <motion.div style={{ x }}>
          <SplitHero>SLAGET</SplitHero>
        </motion.div>
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
  position: sticky;
  /* left: 0;
  top: 0; */
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
