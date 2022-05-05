import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TrashIcon, PlusCircleIcon } from '@heroicons/react/solid'


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
        const proceed = window.confirm('are you sure you want to delete');
        if (proceed) {
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
        <div
            className='container mt-3'>
            <Link
                className='text-decoration-none d-inline-block mb-3 '
                to='/adduser'>
                <div className=' p-2 border d-flex'
                    style={{ backgroundColor: 'rgba(5, 51, 83, 0.871)' }}
                >
                    <p
                        className=' mx-auto my-0 ms-1'
                        style={{ fontSize: '10px', width: '25px', height: '25px', color: 'white', marginLeft: '5px' }}>
                        <PlusCircleIcon />
                    </p>
                    <p className='my-0 text-white'> Add a New Product </p>
                </div>
            </Link>

            <h2
                style={{ color: 'rgba(5, 51, 83, 0.871)' }}
                className='text-center mb-3'>MANAGE INVENTORIES ({products.length})</h2>

            <div className="row gy-3">
                {
                    products.map(product =>
                        <div
                            className='border d-flex flex-row align-items-center container'
                            key={product._id}
                        >
                            <div className="row">
                                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                                    <img
                                        style={{ width: '65%' }}
                                        src={product?.img} alt=""
                                    />
                                    <h5 className='my-2 text-center'>{product.name}</h5>
                                </div>
                                <div className="col-md-6 ">
                                    <div className='d-flex justify-content-between mt-4'>
                                        <h6 className='border py-1 px-2'>Price: {product.price}</h6>
                                        <h6 className='border py-1 px-2'> Seller: {product.seller}</h6>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <h6 className='border py-1 px-2'>Stock: {product.stock}</h6>
                                        <h6 className='border py-1 px-2'> Ratings : {product.ratings}</h6>
                                    </div>
                                    <div className='mb-3 '>
                                        <h5>Description</h5>
                                        <hr style={{ height: '3px', width: '20%', margin: '0' }} />
                                        {
                                            product.description
                                        }
                                    </div>

                                </div>

                                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center ">
                                    <button
                                        className='border-0 bg-transparent'
                                        onClick={() => handleDelete(product._id)}
                                    >
                                        <p style={{ fontSize: '10px', width: '35px', height: '35px', color: 'red' }}>
                                            <TrashIcon />
                                        </p>
                                    </button>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;