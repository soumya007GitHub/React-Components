import React, { useState, useEffect } from 'react';
import { FaCircle } from "react-icons/fa";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import './style.css';

export const Carousel = ({ url, page = 1, limit = 6 }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                let temp = await fetch(`${url}?page=${page}&limit=${limit}`);
                let temp2 = await temp.json();
                setData(temp2);
                setLoading(false);
            } catch (e) {
                setError("Got error while fetching");
                console.log("Got error while fetching");
                setLoading(false);
            }
        }
        fetchData();
    }, [url, page, limit]);

    useEffect(() => {
        if (data.length === 0) return;
        const intervalId = setInterval(() => {
            setCurrent(prev =>
                prev === data.length - 1 ? 0 : prev + 1
            );
        }, 3000);
        return () => clearInterval(intervalId);
    }, [data.length]);

    const goBack = () => {
        if (current == 0) {
            setCurrent(data.length - 1);
        } else {
            setCurrent(current - 1);
        }
    }

    const goForward = () => {
        if (current == data.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(prev => prev + 1);
        }
    }

    return (
        <div className='wrapper'>
            {loading ? <h3>Loading...</h3> : ''}
            {error != null ? <h3>{error}</h3> : ''}
            {data.length > 0 && <div className='container'>
                <IoCaretBack className='icon icon-left' size={40} onClick={() => goBack()} />
                {
                    data.map((item, index) => {
                        return <img key={index} src={item.download_url} alt={item.author} className={`img ${index == current ? 'active' : 'hidden-img'}`} />
                    })
                }
                <IoCaretForward className='icon icon-right' size={40} onClick={() => goForward()} />
                <div className='dot-container'>
                    {
                        data.map((item, index) => {
                            return <FaCircle key={index} className={index == current ? 'active-icon' : 'inactive-icon'} onClick={() => setCurrent(index)} />
                        })
                    }
                </div>
            </div>
            }
        </div>
    )
}
