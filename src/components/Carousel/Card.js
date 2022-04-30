import React from 'react';



const Card = ({ img }) => {
    return (
        <div className='card mt-5'>
            <img className='img-fluid' src={img} alt="" />
        </div>
    );
};

export default Card;