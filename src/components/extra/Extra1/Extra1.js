import React from 'react';
import image from '../../../img/showroom.png'
import image1 from '../../../img/integrations.png'

const Extra1 = () => {
    return (
        <div className='my-5 py-5 style'
            style={{ backgroundColor: '#f1f8ff' }}
        >

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className='img-fluid w-75' src={image} alt="" />
                    </div>
                    <div className="col-md-6 text-start d-flex flex-column justify-content-center">
                        <h1>Take online orders from B2B customers</h1>
                        <p>Sometimes you just want to show your products online without managing a full-fledged ecommerce site and extra fees. Or maybe you’re just tired of sending a big spreadsheet for your B2B customers to order from.</p>
                        <p>inFlow’s Online Showroom helps you create your own B2B Portal in just a few clicks. All of the product pictures, details, and descriptions you’ve put into inFlow will be available online for your customers to browse. And Special Showrooms will even help you take online orders (and payments, if you’re in the US or Canada).</p>
                    </div>

                </div>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5 text-start d-flex flex-column justify-content-center">
                        <h1>Take online orders from B2B customers</h1>
                        <p>Sometimes you just want to show your products online without managing a full-fledged ecommerce site and extra fees. Or maybe you’re just tired of sending a big spreadsheet for your B2B customers to order from.</p>
                        <p>inFlow’s Online Showroom helps you create your own B2B Portal in just a few clicks. All of the product pictures, details, and descriptions you’ve put into inFlow will be available online for your customers to browse. And Special Showrooms will even help you take online orders (and payments, if you’re in the US or Canada).</p>
                    </div>
                    <div className="col-md-7">
                        <img className='img-fluid w-75' src={image1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Extra1;