import React from 'react';
import { useState } from 'react';
import accordionData from './data.js';
import "./style.css";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    return (
        <div className='wrapper'>
            <div className='accordion'>
                {
                    accordionData && accordionData.map((item) => {
                        return (
                            <div className='item' key={item.id} onClick={()=>setSelected(selected == item.id ? null : item.id)}>
                                <div className='title'>
                                    <span>{item.title}</span>
                                </div>
                                <div className='body'>{selected == item.id ? item.content : null}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accordion;