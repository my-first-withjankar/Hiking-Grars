import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const { productId } = useParams()
    // const [restock, setRestock] = useState(0)
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(result => setProduct(result))
    }, [])
    const { img, name, price, description, seller, stock } = product;
    // const stockUpdate = () => {
    //     setRestock(stock - 1)
    // }
    return (
        <div className='container h-100 mx-auto'>
            <div className="row">
                <div className='col-md-7'>
                    <img src={img} alt="" />
                </div>
                <div className='col-md-5 text-start'>
                    <h5>{seller}</h5>
                    <h2>{name}</h2>
                    <p>${price}</p>
                    <p>{description}</p>
                    <p>stock : {stock}</p>
                </div>
            </div>
            <Link to='/manage'>manage inventory</Link>
            <button
            // onClick={stockUpdate}
            >Deliverd</button>
            <div>
                <input type="number" name="" id="" />
                <input type="submit" value="add stock" />
            </div>
        </div>
    );
};

export default ProductDetails;