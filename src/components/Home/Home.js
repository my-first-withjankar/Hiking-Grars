import React from 'react';
import Carousell from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import Partners from '../Partners/Partners';
import Space from '../Space/Space';

const Home = () => {
    return (
        <div>
            <Carousell />
            <Partners></Partners>
            <Space></Space>
            <Inventory></Inventory>
            <Footer></Footer>
        </div>
    );
};

export default Home;