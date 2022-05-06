import React from 'react';

const Card = ({ img, children }) => {
    return (
        <div
            className='card mt-5 style' >
            <img
                // as={Link}
                // to='/manage'
                className='img-fluid' src={img} alt="" />
            <div class="carousel-caption d-none d-md-block">
                <h3>{children}</h3>
            </div>
        </div >
    );
};

export default Card;