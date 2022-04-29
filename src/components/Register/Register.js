import React from 'react';
import { Link } from 'react-router-dom';
import background from '../../img/registerbg.jpg';
import logo from '../../img/logo.png'

const Register = () => {
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
                <form className='w-50 mx-auto'>
                    <div class="form-group my-3">
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                    </div>
                    <div class="form-group my-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group mb-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group mb-1">
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>
                    <small className='mb-2 d-block text-start'>Forgot Password?</small>
                    <button type="submit" class="btn btn-primary w-50">Sign Up</button>
                    <small className='d-block text-start'>Not A Member?<Link to='/register'> Sign Up</Link></small>
                </form>
            </div>
        </div >
    );
};

export default Register; <h1>Register</h1>