import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { TrashIcon } from '@heroicons/react/solid'

const MyItems = () => {
    const [inventories, setInventories] = useState([]);
    console.log(inventories);

    const [user] = useAuthState(auth);
    console.log(user);

    const handleButton = id => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            const url = `https://secret-depths-91808.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventories.filter(inventory => inventory._id !== id);
                    setInventories(remaining);
                });

        }
    }


    useEffect(() => {
        const getItems = async () => {
            const email = user?.email;
            const url = `https://secret-depths-91808.herokuapp.com/product?email=${email}`;
            if (email) {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setInventories(data)
            }
        }
        getItems();
    }, [user])
    // ============================================




    return (
        <div className='container style mt-3'>
            <h2 className='text-center my-3'>Your Inventory</h2>
            <div className=''>
                {
                    inventories.map(inventory => <div key={inventory._id}>
                        <div className='row border w-50 mx-auto'>

                            <div className='col-md-4 d-flex align-items-center'>
                                <img style={{ height: '80px', width: '80px' }} src={inventory.img} alt="" />
                            </div>
                            <div className='col-md-4'>
                                <h5>{inventory.name}</h5>
                                <p className='my-0'><small>Seller: {inventory.seller}</small></p>
                                <p className='my-0'><small>Price: ${inventory.price}</small></p>
                                <p className='my-0'><small>Stock: {inventory.stock}</small></p>
                            </div>

                            <div className="col-md-4 d-flex flex-column justify-content-center align-items-center ">
                                <button
                                    className='border-0 bg-transparent'
                                    onClick={() => handleButton(inventory._id)}
                                >
                                    <p style={{ fontSize: '10px', width: '35px', height: '35px', color: 'red' }}>
                                        <TrashIcon />
                                    </p>
                                </button>
                            </div>


                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;
