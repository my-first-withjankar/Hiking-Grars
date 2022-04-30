import React from 'react';
import Carousel from 'react-elastic-carousel';
import './style.css'
import Card from './Card'
import img from '../../img/hiking2.png'
import img1 from '../../img/hiking5.png'
import img2 from '../../img/hiking1.png'


const Carousell = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 500, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 1120, itemsToShow: 1 },
    ]


    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                <Card img={img}></Card>
                <Card img={img1}></Card>
                <Card img={img2}></Card>
            </Carousel>

        </div>
    );
};

export default Carousell;