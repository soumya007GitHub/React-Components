import React, { useEffect, useState } from 'react';
import './style.css';

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const response = await fetch(url);
                const result = await response.json();
                setData(result.products);
            } catch (err) {
                setError(`Something went wrong`);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const scrolled = window.scrollY;

            setWidth((scrolled / totalHeight) * 100);
        };
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='container'>
            <div className='header'>
                <div className='indicator' style={{ width: `${width}%` }}></div>
            </div>
            <div className='contents'>
                {loading && <p>Loading...</p>}
                {error != null && <p>{error}</p>}
                {
                    data.length > 0 && data.map((item, index) => {
                        return <h3 key={index}>{item.title}</h3>
                    })
                }
            </div>
        </div>
    )
}

export default ScrollIndicator;