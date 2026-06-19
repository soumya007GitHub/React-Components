import React from 'react';
import { useState } from 'react';
import accordionData from './data.js';
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const multiSelectHelperAddRemove = (ID) => {
        if (selectedItems.indexOf(ID) === -1) {
            setSelectedItems([...selectedItems, ID]);
        } else {
            const cpySelectedItems = [...selectedItems];
            cpySelectedItems.splice(selectedItems.indexOf(ID), 1);
            setSelectedItems([...cpySelectedItems]);
        }
        console.log(selectedItems);
    }

    return (
        <div className='wrapper'>
            <h3 className='heading'>Accordion</h3>
            <button onClick={() => setMultiSelect(!multiSelect)} className='btn'>Enable Multiselect</button>
            <div className='accordion'>
                {
                    accordionData && accordionData.map((item) => {
                        return (
                            <div className='item' key={item.id} onClick={
                                multiSelect ? ()=>multiSelectHelperAddRemove(item.id)
                                    : () => setSelected(selected == item.id ? null : item.id)
                            }>
                                <div className='title'>
                                    <span>{item.title}</span>
                                </div>
                                <div className='body'>{
                                    multiSelect ? selectedItems.indexOf(item.id) != -1 ? item.content : null : selected == item.id ? item.content : null
                                }</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordion;