import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ product }) => {
    const { _id, img, name, seller, stock, price, description } = product;
    return (
        <div className="col-md-4 gx-5">
            <img className='img-fluid' src={img} alt="" />
            <div className="card-body body">
                <h5 className='pe-5 my-0 text-center' ><small>{seller}</small></h5>
                <h4 className="card-title fw-bold text-center">{name.slice(0, 20)}</h4>
                <h5 className='my-0 text-center'>${price}</h5>
                <p className="card-text my-0">{description?.slice(0, 70) + '...'}</p>

                <h6 className='my-0 text-start'><small>Stock : {stock}</small></h6>
                <Link to={'productDetails/' + _id}
                    className='d-block mt-2 text-decoration-none button-color w-100 mt-2'>Manage
                </Link>
            </div>
        </div>
    );
}




export default Product;