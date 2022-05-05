import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

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
            img: product.img,
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
        <div className='container h-100 mx-auto'>
            <div className="row">
                <div className='col-md-7'>
                    <img src={product?.img} alt="" />
                </div>
                <div className='col-md-5 text-start'>
                    <h5>{product?.seller}</h5>
                    <h2>{product?.name}</h2>
                    <p>${product?.price}</p>
                    <p>{product?.description}</p>
                    <p>stock : {product?.stock}</p>
                </div>
            </div>
            <Link to='/manage'>manage inventory</Link>
            <button onClick={() => handleDelivered()}>Deliverd</button>
            <div>
                <form onSubmit={stockUpdate} >
                    <input ref={stockRef} type="number" name="added" id="" />
                    <input type="submit" value="add stock" />
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;