import React from 'react';
import { Link } from 'react-router-dom';
import Carousell from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory/Inventory';
import Partners from '../Partners/Partners';
import Space from '../Space/Space';
import { ArrowSmRightIcon } from '@heroicons/react/solid'
import './Home.css'
import Extra1 from '../extra/Extra1/Extra1';

const Home = () => {
    return (
        <div>
            <Carousell />
            <Partners></Partners>
            <Space></Space>
            <Inventory></Inventory>
            <div className='inventory container text-end '>
                <Link
                    to='/manage'>Manage Inventory
                    <ArrowSmRightIcon className="font-size text-blue-500 ms-1" />
                </Link>
            </div>
            <Extra1></Extra1>
            <Footer></Footer>
        </div>
    );
};

export default Home;