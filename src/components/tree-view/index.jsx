import React from 'react';
import treeViewData from './data.js';
import Parent from './parent.jsx';
import './style.css';

const TreeView = () => {
  return (
    <div className='side-bar'>
        <Parent data = {treeViewData}/>
    </div>
  )
}

export default TreeView