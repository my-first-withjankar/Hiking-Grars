import React from 'react';
import background from '../../img/about.webp'

const About = () => {
    return (
        <div>
            <div style=
                {{
                    backgroundImage: `url(${background})`,
                    height: '30vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}
                className='d-flex flex-column align-items-center justify-content-center'
            >
                <h1 className='text-light'>ABOUT US</h1>
            </div>
        </div>
    );
};

export default About;