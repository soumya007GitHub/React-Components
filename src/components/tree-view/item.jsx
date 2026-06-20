import React, { useState } from 'react'
import Parent from './parent';

const TreeItem = ({ label, to, children = [] }) => {
    const [showChildren, setShowChildren] = useState(false);
    const helper = (e) => {
        e.stopPropagation();

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
                showChildren && <Parent data={children} />
            }
        </li>
    )
}

export default TreeItem;