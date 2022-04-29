import React from 'react';
import logo from '../../img/moutain-icon-color.jpg'



const Space = () => {
    return (
        <>
            <div className='mt-5'>
                <p
                    style={{ fontFamily: ' var(--DTFontTypo_Body)', marginBottom: '0px', fontSize: '22px' }}
                >Feature
                </p>
                <h2
                    style={{ fontFamily: ' var(--DTFontTypo_Body)', marginTop: '0px', fontWeight: '700', color: 'lightblue' }}
                >BEST COLLECTION</h2>
            </div>
            <div style=
                {{
                    backgroundImage: `url(${logo})`,
                    height: '30px',
                    width: '100%',
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'

                }}
                className='mb-5'
            >

            </div>
        </>
    );
};

export default Space;