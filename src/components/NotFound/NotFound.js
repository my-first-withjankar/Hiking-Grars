import React from 'react';
import image from '../../img/404.webp'
const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img src={image} alt="" />
        </div>
    );
};

export default NotFound;