import React, { useEffect, useState } from 'react';
import './style.css';

const LoadMore = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const temp1 = await fetch(`https://dummyjson.com/products?limit=15&skip=${skip}`);
                const temp2 = await temp1.json();
                setProducts([...products, ...temp2.products]);
                setLoading(false);
            }
            catch (e) {
                setLoading(false);
                setError("Got some error while fetching products");
            }
        }
        fetchProducts();
    }, [skip]);

    return (
        <div className='container'>
            <div className='product-container'>
                {
                    products.map((item, index) => {
                        return <div className="product" key={index}>
                            <img src={item.images[0]} alt={item.title} className='img' />
                            <h4>{item.title}</h4>
                            <h5>${item.price}</h5>
                        </div>
                    })
                }
            </div>
            {error != null && <h3>{error}</h3>}
            <button onClick={() => setSkip(prev => prev + 15)} disabled={skip >= 100 ? true : false} className='btn'>
                {loading ? 'Loading...' : 'Load More'}
            </button>
        </div>
    )
}

export default LoadMore