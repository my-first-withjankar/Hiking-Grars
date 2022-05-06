import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Inventory.css'

const Inventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div
            className='container style'>
            <div className="row gy-5">
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Inventory;