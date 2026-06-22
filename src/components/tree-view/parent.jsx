import React from 'react';
import TreeItem from './item';

const Parent = ({ data = [], onSelect }) => {
  return (
    <ul>
      {
        data.map((item, index) => {
          return <TreeItem label={item.label} to={item.to} children={item?.children} key={item.label} onSelect={onSelect} key={index}/>
        })
      }
    </ul>
  )
}

export default Parent