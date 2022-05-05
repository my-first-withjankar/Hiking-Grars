import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import background from '../../img/registerbg.jpg';
import logo from '../../img/logo.png'
import Social from '../Social/Social';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
        console.log(user);
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }

    const handleSignUp = (event) => {
        event.preventDefault()

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        console.log(name, email, password, confirmPassword);

        if (password === confirmPassword) {
            createUserWithEmailAndPassword(email, password)
        }
        else {
            return alert('password did not matched')
        }



    }


    return (
        <div
            style=
            {{
                backgroundImage: `url(${background})`,
                height: '80vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',

            }}
            className='d-flex flex-column align-items-center justify-content-center'>

            <div className='w-50 mx-auto bg-white'>
                <img className='mt-3' height={'80px'} src={logo} alt="" />
                <form onSubmit={handleSignUp} className='w-50 mx-auto'>
                    <div className="form-group my-3">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' placeholder="Your Name" required />
                    </div>
                    <div className="form-group my-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" required />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <div className="form-group mb-3">
                        <input type="password" className="form-control" name='confirmPassword' id="exampleInputPassword1" placeholder="Confirm Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Create Account</button>
                    <p className='my-2 text-center'>or</p>
                    <Social></Social>
                    <small className='d-block text-start mt-2 mb-3'>Already in Hikeventures?<Link to='/login'> Log in</Link></small>
                </form>
            </div>
        </div >
    );
};

export default Register; 