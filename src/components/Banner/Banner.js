import React from 'react';
import banner1 from '../../img/hiking5.png';
const Banner = () => {
    return (
        <div style=
            {{
                backgroundImage: `url(${banner1})`,
                height: '90vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}
            className='d-flex flex-column align-items-center justify-content-center'
        >
        </div>
    );
};

export default Banner;