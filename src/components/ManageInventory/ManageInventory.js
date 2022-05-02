import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])

    const handleDelete = (id) => {
        const procceed = window.confirm('are you sure you want to delete');
        if (procceed) {
            console.log(id);
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = products.filter(product => product._id !== id)
                        setProducts(remaining)
                    }
                })
        }
    }
    return (
        <div className='container'>
            <div className="row gy-5">
                {
                    products.map(product => <p key={product._id}>{product.name} <button onClick={() => handleDelete(product._id)}>x</button></p>)
                }
            </div>

            <Link to='/adduser'>Add User</Link>
        </div>
    );
};

export default ManageInventory;