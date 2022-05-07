// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';


// const AddUser = () => {

//     const [user] = useAuthState(auth)

//     const email = user?.email;

//     const handleInput = event => {
//         event.preventDefault();
//         const name = event.target.name.value;
//         const price = event.target.price.value;
//         const description = event.target.description?.value;
//         const seller = event.target.seller?.value;
//         const stock = event.target.stock?.value;
//         const img = event.target.img?.value;
//         const ratings = event.target.ratings?.value;

//         console.log(name, price);

//         fetch('https://secret-depths-91808.herokuapp.com/products', {
//             method: 'POST',
//             body: JSON.stringify({
//                 name, price, description, seller, ratings, img, stock
//             }),
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//         })
//             .then((response) => response.json())
//             .then((json) => console.log(json));
//     }

//     return (
//         <div className='mt-5 style'>
//             <h3
//                 style={{ color: 'rgba(5, 51, 83, 0.871)' }}
//                 className='text-center'>ADD A ITEM</h3>
//             <form className='w-25 mx-auto ' onSubmit={handleInput}>
//                 <input className='d-block rounded border w-100 mb-3 p-1' type="text" placeholder='Product Name' name='name' required />
//                 <textarea className='d-block w-100 mb-3 rounded border p-1' type="text" placeholder='Description' name='description' required />
//                 <input className='w-50 rounded border  mb-3 p-1' type="text" placeholder='Price' name='price' required />
//                 <input className='w-50 rounded border  mb-3 p-1' type="text" placeholder='Seller' name='seller' required />
//                 <input className='d-block w-100 mb-3 rounded border p-1' type="text" placeholder='Photo Url' name='img' required />
//                 <input className='w-50 mb-3 p-1 rounded border' type="number" placeholder='Stock' name='stock' required />
//                 <input className='w-50 mb-3 p-1 rounded border' type="number" placeholder='Ratings' name='ratings' required />
//                 <input
//                     style={{ backgroundColor: 'rgba(5, 51, 83, 0.571)' }}
//                     className='d-block text-white py-1 rounded border w-50 mx-auto' type="submit" value="ADD" />
//             </form>
//         </div>
//     );
// };

// export default AddUser;
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddProducts.css'

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
            })
    };
    return (
        <div className='w-50 mx-auto style'>
            <h4 className='text-center'>{user.displayName}</h4>
            <h4 className='text-center'>Please Add Your New Products </h4>
            <form className='d-flex flex-column w-50 mx-auto' onSubmit={handleSubmit(onSubmit)}>
                <input className='d-block w-100 mb-3 rounded border p-1' required placeholder='Product  Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='d-block w-100 mb-3 rounded border p-1' required placeholder='Description'  {...register("description")} />
                <input className='w-50 mb-3 p-1 rounded border' required placeholder='Price' type="number" {...register("price")} />
                <input className='w-50 mb-3 p-1 rounded border' required placeholder='Seller' type="text" {...register("seller")} />
                <input className='d-block w-100 mb-3 rounded border p-1' required placeholder='Photo URL' type="text" {...register("img")} />
                <input className='w-50 mb-3 p-1 rounded border display' required placeholder='Ratings' type="number" {...register("ratings")} />
                <input className='w-50 mb-3 p-1 rounded border display' required placeholder='Stock' type="number" {...register("stock")} />
                <input
                    style={{ backgroundColor: 'rgba(5, 51, 83, 0.571)' }}
                    className='d-block text-white py-1 rounded border w-50 mx-auto'
                    type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;
