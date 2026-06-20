import { useState } from 'react'
import './App.css';
import Accordion from './components/accordion/Accordion.jsx';
import Color from './components/color/Color.jsx';
import StarRating from './components/star-rating/index.jsx';
import { Carousel } from './components/carousel/index.jsx';

function App() {

  return (
    <>
      {/* <Accordion/>
      <Color/>
      <StarRating/> */}
      <Carousel url={'https://picsum.photos/v2/list'} page={1} limit={6}/>
    </>
  )
}

export default App
