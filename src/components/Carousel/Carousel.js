import React from 'react';
import Carousel from 'react-elastic-carousel';
import './style.css'
import Card from './Card'
import img from '../../img/carousel.jpg'
import img2 from '../../img/snow.jpg'
import img1 from '../../img/travel.webp'
import img3 from '../../img/camp.webp'
import img4 from '../../img/climbing.jpg'
import img5 from '../../img/img4.png'


const Carousell = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1120, itemsToShow: 3 },
    ]


    return (
        <div className='mt-4'>
            <Carousel breakPoints={breakPoints}>
                <Card img={img}>
                    <h3>FootWear</h3>
                </Card>
                <Card img={img1}>
                    <h3>Travel</h3>
                </Card>
                <Card img={img2}>
                    <h3>SNOW</h3>
                </Card>
                <Card img={img4}>
                    <h3>Climbing</h3>
                </Card>
                <Card img={img3}>
                    <h3>Camp & Hike</h3>
                </Card>
                <Card img={img5}>
                    <h3>Drive</h3>
                </Card>
            </Carousel>

        </div>
    );
};

export default Carousell;