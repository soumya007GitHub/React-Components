import React, {useState} from 'react';
import treeViewData from './data.js';
import Parent from './parent.jsx';
import ContentView from './content.jsx';
import './style.css';

const TreeView = () => {
  const [selectedLabel, setSelectedLabel] = useState('');
  return (
    <div style={{ display: 'flex' }}>
      <div className='side-bar'>
        <Parent data={treeViewData} onSelect={setSelectedLabel}/>
      </div>
      <div className='content-view'>
        <ContentView label={selectedLabel}/>
      </div>
    </div>
  )
}

export default TreeView