import React from 'react';


const AddUser = () => {

    const handleInput = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const description = event.target.description?.value;
        const seller = event.target.seller?.value;
        const stock = event.target.stock?.value;
        const img = event.target.img?.value;
        const ratings = event.target.ratings?.value;

        console.log(name, price);

        fetch('https://secret-depths-91808.herokuapp.com/products', {
            method: 'POST',
            body: JSON.stringify({
                name, price, description, seller, ratings, img, stock
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className='mt-5 style'>
            <h3
                style={{ color: 'rgba(5, 51, 83, 0.871)' }}
                className='text-center'>ADD A ITEM</h3>
            <form className='w-25 mx-auto ' onSubmit={handleInput}>
                <input className='d-block rounded border w-100 mb-3 p-1' type="text" placeholder='Product Name' name='name' required />
                <textarea className='d-block w-100 mb-3 rounded border p-1' type="text" placeholder='Description' name='description' required />
                <input className='w-50 rounded border  mb-3 p-1' type="text" placeholder='Price' name='price' required />
                <input className='w-50 rounded border  mb-3 p-1' type="text" placeholder='Seller' name='seller' required />
                <input className='d-block w-100 mb-3 rounded border p-1' type="text" placeholder='Photo Url' name='img' required />
                <input className='w-50 mb-3 p-1 rounded border' type="number" placeholder='Stock' name='stock' required />
                <input className='w-50 mb-3 p-1 rounded border' type="number" placeholder='Ratings' name='ratings' required />
                <input
                    style={{ backgroundColor: 'rgba(5, 51, 83, 0.571)' }}
                    className='d-block text-white py-1 rounded border w-50 mx-auto' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddUser;