import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Slide from "./components/Slide/Slide";
import About from "./components/About/About";
import "./App.css";
import { styled } from "styled-components";
import { devices } from "./Breakpoints";

import SelectionTestGif from "../public/Imgs/example.gif";

import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  var isDesktop = false;
  if (window.innerWidth >= 1024) {
    var isDesktop = true;
  }

  const groupNames = [
    "Kevin - GP",
    "Joel - UX",
    "Magnus - WU",
    "Styrbjörn - WU",
  ];
  const groupImgs = [
    "/Imgs/Kevin.png",
    "/Imgs/Joel.jpg",
    "/Imgs/Magnus.jpg",
    "/Imgs/Styrbjorn.jpg",
  ];
  const groupIntro = [
    "GP-student som gillar att spela och skapa spel.",
    "26 år gammal UX-design student, som tycker om att spela musik och laga mat på fritiden. Singel.  ",
    "WU-student i sina bästa år. Lyssnar också mycket på musik och tycker om dystopisk film. ",
    "22 årig WU student. Lyssnar mycket på musik på fritiden.",
  ];

  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/Build.loader.js",
    dataUrl: "/Build/Build.data",
    frameworkUrl: "/Build/Build.framework.js",
    codeUrl: "/Build/Build.wasm",
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
          title={"Kompetens, logik och resonemang:"}
          text={
            "Första delen av urvalsprovet görs individuellt där personen får utföra allmänna kognitiva uppgifter, svara på flervalsfrågor kring ämnet samt fritextfrågor där personen behöver resonera kring en lösning till ett specifikt problem. Denna del sker på plats och frågorna besvaras på en dator, det skall finnas en testledare på plats för att hjälpa till om något strular samt ha ett överseende så att inget fusk äger rum. "
          }
          img={"https://source.unsplash.com/oXV3bzR7jxI"}
          alt={
            "Person vid ett bord fyller i ett papper med en penna. Bara personens händer syns."
          }
        />
        <Slide
          title={"Kreativ problemlösning:"}
          text={
            "Nästa moment är att återskapa en 3D-figur med hjälp av olika byggblock genom att placera dem utefter en ritning. Problemet är att byggblocken inte stämmer med dem i ritningen och kräver att personen behöver tänka kreativt för att återskapa figuren. På detta sätt kan vi se hur testpersonen kan lösa ett tidspressat problem med hjälp av sin kreativa förmåga. Till vänster ser ni en demo på vår prototyp.  "
          }
          img={SelectionTestGif}
          alt={
            "GIF som visar ett utsnitt av hur prototypen fungerar, med block som flyttas omkring och fästs på en bottenplatta."
          }
        />

        {/* <Unity unityProvider={unityProvider} /> */}

        <Slide
          title={"Kommunikation och samarbete"}
          text={
            "Den sista delen av urvalsprovet är en gruppuppgift där flera sökande får jobba i grupp där under viss tid lösa ett problem tillsammans. Syftet med denna uppgift är att avgöra hur väl deltagarna kommunicerar sina resonemang samt hur de samarbetar med de andra för att lösa problemet. En testledare är närvarande för att förklara uppgiften och för anteckningar på hur varje deltagare tar sig an uppgiften. "
          }
          img={"https://source.unsplash.com/-uHVRvDr7pg"}
          alt={
            "Fyra personer sitter och diskuterar någonting. Två av dem ler vänligt. En tredje ser allvarlig ut och tar anteckningar, medan bara bakhuvudet på den fjärde syns."
          }
        />
        {isDesktop == true && <Unity unityProvider={unityProvider} />}
      </section>
      <About text={groupIntro} img={groupImgs} name={groupNames} />
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
