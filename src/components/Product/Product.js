import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, img, name, seller, stock, price, description } = product;
    return (
        <div className="col-md-4 gx-5">
            <img className='img-fluid' src={img} alt="" />
            <div className="card-body body">
                <h5 className="card-title">{name.slice(0, 15)}</h5>
                <h5 className='my-0'>${price}</h5>
                <p className="card-text my-0 text-start">{description?.slice(0, 70) + '...'}</p>
                <p className='pe-5 my-0 text-start' ><small>supplier: {seller}</small></p>
                <p className='my-0 text-start'><small>stock : {stock} pcs</small></p>
                <Link to={'productDetails/' + _id} style={{ backgroundColor: '#22577A' }}
                    className='btn text-white'>Manage
                </Link>
            </div>
        </div>
    );
}




export default Product;