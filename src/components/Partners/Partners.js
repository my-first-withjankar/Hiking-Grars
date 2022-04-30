import React from 'react';
import img1 from '../../img/partners/osprey.svg'
import img2 from '../../img/partners/danner.svg'
import img3 from '../../img/partners/dometic.svg'
import img4 from '../../img/partners/nemo.svg'
import img5 from '../../img/partners/rei-co-op.svg'
import img6 from '../../img/partners/the-north-face.svg'
import img7 from '../../img/partners/salomon.svg'
import img8 from '../../img/partners/yeti.svg'



const Partners = () => {
    return (
        <div className='my-5 bg- container'>
            <img className='mx-4 my-5' height={'40px'} src={img1} alt="" />
            <img className='mx-4 my-5' height={'40px'} src={img2} alt="" />
            <img className='mx-4 my-5' height={'40px'} src={img3} alt="" />
            <img className='mx-4 my-5' height={'40px'} src={img4} alt="" />
            <img className='mx-4 my-5' height={'40px'} src={img5} alt="" />
            <img className='mx-4 my-5' height={'40px'} src={img6} alt="" />
            <img className='mx-4 my-5' height={'40px'} src={img7} alt="" />
            <img className='mx-4 my-5' height={'40px'} src={img8} alt="" />
        </div>
    );
};

export default Partners;