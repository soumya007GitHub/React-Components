import React, {useState} from 'react';
import QRCode from "react-qr-code";
import './style.css';

const QrCode = () => {
    const [val, setVal] = useState('');
  return (
    <div className='container'>
        <h3>QR Code</h3>
        <label htmlFor="inputField">Value</label>
        <input type="text" id="inputField" value={val} onChange={(e) => setVal(e.target.value)}/>
        <div className='qr-code-container'>
        {val && val.length > 0 && <QRCode value={val}/>}
        </div>
    </div>
  )
}

export default QrCode;