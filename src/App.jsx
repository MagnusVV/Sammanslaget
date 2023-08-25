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

  const { unityProvider } = useUnityContext({
    loaderUrl: "src/Build/Build.loader.js",
    dataUrl: "src/Build/Build.data",
    frameworkUrl: "src/Build/Build.framework.js",
    codeUrl: "src/Build/Build.wasm",
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
          alt={"alt text"}
        />

        <Unity unityProvider={unityProvider} />

        <Slide
          title={"cool title"}
          text={textLorem}
          img={"https://source.unsplash.com/-uHVRvDr7pg"}
          alt={
            "Fyra personer sitter och diskuterar någonting. Två av dem ler vänligt. En tredje ser allvarlig ut och tar anteckningar, medan bara bakhuvudet på den fjärde syns."
          }
        />
      </section>
      <About text={"lots of text"} img={"./../public/Imgs/toiletMan.jpg"} />
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
