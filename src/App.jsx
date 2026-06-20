import { useState } from 'react'
import './App.css';
import Accordion from './components/accordion/Accordion.jsx';
import Color from './components/color/Color.jsx';
import StarRating from './components/star-rating/index.jsx';

function App() {

  return (
    <>
      <Accordion/>
      <Color/>
      <StarRating/>
    </>
  )
}

export default App
