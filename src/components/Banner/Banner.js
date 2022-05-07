import React from 'react';
import banner1 from '../../img/hiking5.png';
const Banner = () => {
    return (
        <>
            <div style=
                {{
                    backgroundImage: `url(${banner1})`,
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}
            >
                <div
                    style={{ marginLeft: '15%', paddingTop: '5%' }}
                    className='style'
                >
                    <h1
                        style={{ color: 'gray' }}
                    >Never Stop</h1>
                    <h1
                        style={{ fontWeight: 'bold', color: 'rgb(5, 51, 83)' }}
                        className='display-2'>Exploring
                    </h1>
                    <p className='w-50 mt-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptate dignissimos nostrum rerum, est animi. Vitae unde itaque doloremque ipsam vel fuga pariatur quasi. Dolore ipsam nostrum voluptates debitis repellendus, temporibus cumque, exercitationem reiciendis enim at rem natus ex eos sunt officia non recusandae. Maxime dignissimos fugit ratione minus? Maxime.</p>
                </div>
            </div>

        </>
    );
};

export default Banner;