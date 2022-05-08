import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddProducts.css'
import toast, { Toaster } from 'react-hot-toast';

const AddUser = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const email = user.email
    const onSubmit = data => {
        const newData = { ...data, email };
        console.log(newData);
        const url = `https://secret-depths-91808.herokuapp.com/products`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('added product')
            })
    };
    return (
        <div className='w-50 mx-auto style'>
            <h4 className='text-center'>{user.displayName}</h4>
            <h4 className='text-center'>Please Add Your New Products </h4>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='d-block w-100 mb-3 rounded border p-1' required placeholder='Product  Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='d-block w-100 mb-3 rounded border p-1' required placeholder='Description'  {...register("description")} />
                <input className='w-75 mb-3 p-1 rounded border' required placeholder='Price' type="number" {...register("price")} />
                <input className='w-75 mb-3 p-1 rounded border' required placeholder='Seller' type="text" {...register("seller")} />
                <input className='d-block w-100 mb-3 rounded border p-1' required placeholder='Photo URL' type="text" {...register("img")} />
                <input className='w-75 mb-3 p-1 rounded border display' required placeholder='Ratings' type="number" {...register("ratings")} />
                <input className='w-75 mb-3 p-1 rounded border display' required placeholder='Stock' type="number" {...register("stock")} />
                <input
                    style={{ backgroundColor: 'rgba(5, 51, 83, 0.571)' }}
                    className='d-block text-white py-1 rounded border w-50 mx-auto'
                    type="submit" value="Add" />
            </form>
            <Toaster />
        </div>
    );
};

export default AddUser;
