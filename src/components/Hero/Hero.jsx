import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { devices } from '../../Breakpoints';

import GlobalFonts from '../../fonts/fonts';

const Hero = () => {
  // These two variables handles the "door opening"-effect on the welcome page.
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });

  // This state is only for the "Scrolla ner"-element.
  const [isVisble, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <HeroAnimationWrapper ref={targetRef}>
        <GlobalFonts />
        <HeroContainer>
          <motion.div
            style={{
              x: useTransform(scrollYProgress, [0, 1], ['0%', '-125%']),
            }}
          >
            <LeftSplitHero>
              <WelcomeText>SAMMAN</WelcomeText>
            </LeftSplitHero>
          </motion.div>
          <motion.div
            style={{ x: useTransform(scrollYProgress, [0, 1], ['0%', '125%']) }}
          >
            <RightSplitHero>
              <WelcomeText>SLAGET</WelcomeText>
            </RightSplitHero>
          </motion.div>
        </HeroContainer>
        {isVisble && (
          <ScrollDownPrompt>
            <GroupName>GRUPP 9</GroupName>
            SCROLLA NER
          </ScrollDownPrompt>
        )}
        <HeroArticle>
          På Yrgo är målet att din utbildning ska leda till jobb efter examen,
          men lika viktigt är att skapa förutsättningar för personlig utveckling
          och en plattform för att knyta värdefulla kontakter inför framtiden.
          För att detta ska vara möjligt behövs det ett utförligt urvalsprov som
          testar om personen besitter de kvaliteter som krävs för att klara av
          utbildningen och för att växa i yrkeslivet.
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

const ScrollDownPrompt = styled.div`
  width: 100%;
  height: 90%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`;

const HeroArticle = styled.article`
  width: auto;
  position: sticky;
  padding: 5rem 2rem;
  left: 0;
  top: 0;
  text-align: center;
  font-size: 33px;
  font-weight: 700;
  @media only screen and ${devices.md} {
    padding: 5rem 4rem;
  }
  @media only screen and ${devices.xl} {
    padding: 5rem 10rem;
  }
`;

// The big text "SAMMANSLAGET" on the welcome page.
const WelcomeText = styled.h1`
  font-family: 'BlackOpsOne';
`;

const GroupName = styled.h2`
  font-family: 'BlackOpsOne';
  margin-bottom: 7rem;
  color: white;
  @media only screen and ${devices.xs} {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  @media only screen and ${devices.sm} {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  @media only screen and ${devices.md} {
    font-size: 2rem;
    margin-bottom: 5rem;
  }
  @media only screen and ${devices.xl} {
    font-size: 4rem;
    margin-bottom: 7rem;
  }
`;

// These two styled divs split to left and right during initial scrolling.
// font-size: 10rem;
const RightSplitHero = styled.div`
  background-color: black;
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  color: white;
  @media only screen and ${devices.xs} {
    font-size: 0.5rem;
  }
  @media only screen and ${devices.sm} {
    font-size: 1rem;
  }
  @media only screen and ${devices.md} {
    font-size: 1.5rem;
  }
  @media only screen and ${devices.xl} {
    font-size: 3rem;
  }
`;

const LeftSplitHero = styled(RightSplitHero)`
  justify-content: end;
`;

// Prevents scrolling down until the sliders are completely off screen.
const HeroAnimationWrapper = styled.section`
  min-height: 130vh;
`;

export default Hero;
