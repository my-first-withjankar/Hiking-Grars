import React from 'react';


const AddUser = () => {



    const handleInput = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        console.log(name, price);

        fetch('http://localhost:5000/products', {
            method: 'POST',
            body: JSON.stringify({
                name, price
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
                <input type="text" placeholder='price' name='price' />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default AddUser;