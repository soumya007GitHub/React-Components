import React from 'react';
import TreeItem from './item';

const Parent = ({ data = [] }) => {
  return (
    <ul>
      {
        data.map((item) => {
          return <>
            <TreeItem label={item.label} to={item.to} children={item?.children} key={item.label}/>
          </>
        })
      }
    </ul>
  )
}

export default Parent