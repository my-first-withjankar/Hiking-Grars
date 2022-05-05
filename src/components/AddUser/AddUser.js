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

        fetch('http://localhost:5000/products', {
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
        <div>
            <form onSubmit={handleInput}>
                <input type="text" placeholder='name' name='name' />
                <textarea type="text" placeholder='description' name='description' />
                <input type="text" placeholder='seller' name='seller' />
                <input type="number" placeholder='stock' name='stock' />
                <input type="text" placeholder='price' name='price' />
                <input type="text" placeholder='Photo Url' name='img' />
                <input type="number" placeholder='Ratings' name='ratings' />
                <input type="submit" value="add" />
            </form>
        </div>
    );
};

export default AddUser;