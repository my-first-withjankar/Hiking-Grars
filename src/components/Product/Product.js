import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { id, img, name, seller, stock, price, ratings } = product;
    return (
        <div className="col-md-4 gx-5">
            <img className='img-fluid' src={img} alt="" />
            <div class="card-body body">
                <h5 className="card-title">{name.slice(0, 15)}</h5>
                <h5 className='my-0'>${price}</h5>
                <p className="card-text my-0 text-start">This is a wider card with supporting ...</p>
                <p className='pe-5 my-0 text-start' ><small>supplier: {seller}</small></p>
                <p className='my-0 text-start'><small>stock : {stock} pcs</small></p>
                <Link
                    style={{ backgroundColor: '#22577A' }}
                    to={`/inventory/${id}`} className='btn text-white'>Manage</Link>
            </div>
        </div>
    );
};

export default Product;