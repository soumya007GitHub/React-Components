import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import './style.css';

const StarRating = ({ noOfStars = 5 }) => {
    const [rating, setRating] = useState(3);
    const [hover, setHover] = useState(0);
    const clickFn = (index) => {
        setRating(index);
    }
    const onHover = (index) => {
        setHover(index);
    }
    const onLeave = (index) => {
        console.log(`Off ${index}`);
    }
    return (
        <div className='container'>
            <div>
                {[...Array(noOfStars)].map((item, index) => {
                    index += 1;
                    return (<FaStar
                        key={index}
                        onClick={() => clickFn(index)}
                        onMouseOver={() => onHover(index)}
                        onMouseLeave={() => onLeave(index)}
                        className={index <= (hover || rating) ? 'active' : ''}
                        size={40}
                    />)
                })}
            </div>
            <h3>Leave a rating</h3>
        </div>
    )
}

export default StarRating;