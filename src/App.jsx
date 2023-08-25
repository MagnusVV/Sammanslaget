import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Game from "./components/Game/Game";
import Slide from "./components/Slide/Slide";
import About from "./components/About/About";
import "./App.css";
import { styled } from "styled-components";
import { devices } from "./Breakpoints";

import SelectionTestGif from "../public/Imgs/selectionTest.gif";

import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const textLorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nisi molestias. Velit magni optio earum at maxime non necessitatibus reiciendis provident repudiandae corporis? Eius repudiandae rerum odit eligendi at. Quisquam?";
  const groupNames = [
    "Kevin - GP",
    "Joel - UX",
    "Magnus - WU",
    "Styrbjörn - WU",
  ];
  const groupImgs = [
    "/Imgs/Momo.jpg",
    "/Imgs/MoaTumbs.jpg",
    "/Imgs/MoaFlag.jpg",
    "/Imgs/Su.jpg",
  ];

  const { unityProvider } = useUnityContext({
    loaderUrl: "./src/build/build.loader.js",
    dataUrl: "./src/build/build.data",
    frameworkUrl: "./src/build/build.framework.js",
    codeUrl: "./src/build/build.wasm",
  });

  return (
    <>
      <Hero />
      <section>
        <SlideDescription>
          Vi identifierade att kvaliteter som kreativ problemlösning och
          kommunikationsförmåga är viktiga egenskaper som vårt urvalsprov är
          ämnat att testa. Vi har utgått ifrån Webbutveckling i skapandet av
          vårt koncept men vi ser att flera program kan använda sig av detta
          urvalsprov.
        </SlideDescription>
        <Slide
          title={"cool title"}
          text={textLorem}
          img={"https://source.unsplash.com/oXV3bzR7jxI"}
          alt={
            "Person vid ett bord fyller i ett papper med en penna. Bara personens händer syns."
          }
        />
        <Slide
          title={"cool gif"}
          text={textLorem}
          img={SelectionTestGif}
          alt={
            "GIF som visar ett utsnitt av hur prototypen fungerar, med block som flyttas omkring och fästs på en bottenplatta."
          }
        />
        <Slide
          title={"cool title"}
          text={textLorem}
          img={"https://source.unsplash.com/-uHVRvDr7pg"}
          alt={
            "Fyra personer sitter och diskuterar någonting. Två av dem ler vänligt. En tredje ser allvarlig ut och tar anteckningar, medan bara bakhuvudet på den fjärde syns."
          }
        />
        <Unity unityProvider={unityProvider} />
      </section>
      <About text={textLorem} img={groupImgs} name={groupNames} />
    </>
  );
}

const SlideDescription = styled.article`
  font-size: 25px;
  font-weight: 400;
  padding-top: 8rem;
  padding-bottom: 6rem;
  padding-inline: 2rem;
  text-align: left;
  @media only screen and ${devices.md} {
    padding-inline: 4rem;
  }
`;

export default App;
