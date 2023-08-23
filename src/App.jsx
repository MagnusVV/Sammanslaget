import { useState } from "react";
import Hero from "./components/Hero/Hero";
import Game from "./components/Game/Game";
import Slide from "./components/Slide/Slide";
import About from "./components/About/About";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <Game />
      <Slide title= {"cool title"} text={"cool text"} img={"./../public/Imgs/eggMan.jpg"} />
      <Slide title= {"cool title"} text={"cool text"} img={"./../public/Imgs/eggMan.jpg"} />
      <About text={"lots of text"} img={"./../public/Imgs/toiletMan.jpg"} />
    </>
  );
}

export default App;
