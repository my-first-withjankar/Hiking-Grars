import React from 'react';
import Banner from '../Banner/Banner';
import Inventory from '../Inventory/Inventory';
import Space from '../Space/Space';

const Home = () => {
    return (
        <div>
            <Banner />
            <Space></Space>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;