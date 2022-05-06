import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowSmRightIcon } from '@heroicons/react/solid'
import './ProductDetails.css'

const ProductDetails = () => {
    const { productId } = useParams()
    const stockRef = useRef('')
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setProduct(result))
    }, [productId])

    const handleDelivered = () => {

        const updateStock = {
            stock: parseInt(product.stock) - 1,
            name: product.name,
            price: product.price,
            description: product.description,
            seller: product.seller,
            ratings: product.ratings,
            img: product.img
        };
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(updateStock)
            })
    }


    const stockUpdate = (event) => {
        event.preventDefault()
        const newStock = stockRef.current.value;
        console.log(newStock);
        const updateStock = {
            stock: parseInt(product.stock) + parseInt(newStock),
            name: product.name,
            price: product.price,
            description: product.description,
            seller: product.seller,
            ratings: product.ratings,
            img: product.img,
        };

        // send data
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStock)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(updateStock)
            })
        event.target.reset()
    }
    return (
        <div className='container h-100 style'>
            <div className="row">
                <div className='col-md-6  my-auto mx-auto'>
                    <img src={product?.img} alt="" />
                </div>
                <div className='col-md-6 py-5 my-auto'>
                    <h5
                        style={{ color: 'gray' }}
                        className='text-center'>{product?.seller}</h5>
                    <h2 className='text-center'
                        style={{ color: '#347fb1de' }}
                    >{product?.name}</h2>
                    <div className='d-flex justify-content-between my-3'>
                        <h6 className='border py-1 px-2'>Price : ${product?.price}</h6>
                        <h6 className='border py-1 px-2'>Ratings : {product?.ratings}</h6>
                    </div>
                    <h5
                        style={{ color: 'gray' }}
                    >Description </h5>
                    <hr style={{ height: '3px', width: '22%', margin: '0 0 7px 0' }} />
                    <p>{product?.description}</p>
                    <h6 className='text-center'>Stock : {product?.stock}</h6>

                    <div className='d-flex justify-content-between mt-2'>
                        <button
                            className='btn btn-transparent border btn-color'
                            onClick={() => handleDelivered()}>Delivered</button>

                        <form className='d-inline' onSubmit={stockUpdate} >
                            <input className='w-50 border py-1' ref={stockRef} type="number" name="added" id="" />
                            <input

                                className='border btn-transparent btn-color py-1' type="submit" value="add stock" />
                        </form>
                    </div>
                    <div className='inventory container text-end '>
                        <Link
                            to='/manage'>Manage Inventory
                            <ArrowSmRightIcon className="font-size text-blue-500 ms-1" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;