import React, { useState } from 'react'
import Parent from './parent';
import ContentView from './content';

const TreeItem = ({ label, to, children = [], onSelect }) => {
    const [showChildren, setShowChildren] = useState(false);
    const helper = (e) => {
        e.stopPropagation();

        onSelect(label);

        if (children?.length > 0) {
            setShowChildren(prev => !prev);
        }
    }
    return (
        <li className='treeItem' onClick={helper}>
            {label}<span>&nbsp;{children?.length > 0
                ? (showChildren ? '-' : '+')
                : null}</span>
            {
                showChildren && <Parent data={children} onSelect={onSelect} />
            }
        </li>
    )
}

export default TreeItem;