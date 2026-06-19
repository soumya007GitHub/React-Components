import React, { useEffect } from 'react';
import { useState } from 'react';
import "./style.css";

const Color = () => {
    const [mode, setMode] = useState('hex');
    const [color, setColor] = useState('#1b1b1b');

    const helper = (length)=>{
        return Math.floor(Math.random()*length);
    }

    const generateColor = ()=>{
        if(mode === 'hex'){
            let newColor = '#';
            const colorSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
            for(let i = 0; i<6; ++i){
                newColor += colorSet[helper(colorSet.length)];
            }
            setColor(newColor);
        }else{
            let newColor = `rgb(${helper(256)}, ${helper(256)}, ${helper(256)})`;
            setColor(newColor);
        }
    }

    return (
        <div className='container' style={{
            backgroundColor: color,
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '10px',
            flexDirection: 'column',
            gap: 20
        }}>
            <div className='btnContainer'>
                <button className='btn' onClick={()=>{
                    setMode('hex') 
                    generateColor()
                    }}>HEX Color</button>
                <button className='btn' onClick={()=>{
                    setMode('rgb') 
                    generateColor()}}>RGB Color</button>
                <button className='btn' onClick={generateColor}>Generate Color</button>
            </div>
            <h3>{mode == 'hex' ? "HEX" : "RGB"}</h3>
            <h3>{color}</h3>
        </div >
    )
}

export default Color