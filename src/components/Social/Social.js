import React from 'react';
import google from '../../img/g-logo.png'
const Social = () => {
    return (
        <div>
            <button type="submit" class="bg-white d-flex align-items-center justify-content-around btn btn-white border  w-100 my-0">
                <img height={"25px"} src={google} alt="" />
                <p className='my-0'>Continue With Google</p>

            </button>
        </div>
    );
};

export default Social;