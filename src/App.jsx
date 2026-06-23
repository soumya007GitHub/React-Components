import { useState } from 'react'
import './App.css';
import Accordion from './components/accordion/Accordion.jsx';
import Color from './components/color/Color.jsx';
import StarRating from './components/star-rating/index.jsx';
import {Carousel} from './components/carousel/index.jsx';
import LoadMore from './components/load-more/index.jsx';
import TreeView from './components/tree-view/index.jsx';
import QrCode from './components/qr-code/index.jsx';
import Theme from './components/theme/index.jsx';
import ScrollIndicator from './components/scroll-indicator/index.jsx';

function App() {

  return (
    <>
      {/* <Accordion/> */}
      {/* <Color/> */}
      {/* <StarRating/> */}
      {/* <Carousel url={'https://picsum.photos/v2/list'} page={1} limit={6}/> */}
      {/* <LoadMore/> */}
      {/* <TreeView/> */}
      {/* <QrCode/> */}
      {/* <Theme/> */}
      <ScrollIndicator url='https://dummyjson.com/products?limit=300'/>
    </>
  )
}

export default App
