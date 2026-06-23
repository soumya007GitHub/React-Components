import React, { useState } from 'react';
import './style.css';

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    function helper() {
        setShowModal(!showModal);
    }
    return (
        <div className='modal-container'>
            <button onClick={helper} className='modal-open-btn'>Open Modal</button>
            {
                showModal && <div className='modal'>
                    <div className='modal-header'>
                        <span onClick={helper}>x</span>
                    </div>
                    <div className='modal-body'>
                        <p>Sample Message from omega.</p></div>
                </div>
            }
        </div>
    )
}

export default Modal;