import { useState } from 'react';
import Hero from './components/hero/hero';
import Game from './components/Game/Game';
import Slide from './components/Slide/Slide';
import About from './components/About/About';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const textLorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nisi molestias. Velit magni optio earum at maxime non necessitatibus reiciendis provident repudiandae corporis? Eius repudiandae rerum odit eligendi at. Quisquam?';

  return (
    <>
      <Hero />
      <Game />
      <Slide
        title={'cool title'}
        text={textLorem}
        img={'https://source.unsplash.com/oXV3bzR7jxI'}
      />
      <Slide
        title={'cool title'}
        text={textLorem}
        img={'https://source.unsplash.com/-uHVRvDr7pg'}
      />
      {/* <About text={'lots of text'} img={'./../public/Imgs/toiletMan.jpg'} /> */}
    </>
  );
}

export default App;
