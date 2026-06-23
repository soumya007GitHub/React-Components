import React from 'react';
import useLocalStorage from './useLocalStorage';
import './style.css';

const Theme = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');
    function handleToggleTheme(){
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    }
  return (
    <div className='theme-container'  data-theme={theme}>
        <h3>Hello world</h3>
        <button onClick={handleToggleTheme} className='theme-btn'>Change Theme</button>
    </div>
  )
}

export default Theme