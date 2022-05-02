import { async } from '@firebase/util';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import background from '../../img/loginbg.jpg';
import logo from '../../img/logo.png'
import Social from '../Social/Social';

const Login = () => {
    const navigate = useNavigate()
    const [mail, setMail] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        alert('Signed In User')
        navigate('/')
    }

    const handleSignIn = (event) => {
        event.preventDefault()

        const email = event.target.email.value;
        setMail(email)
        const password = event.target.password.value;

        signInWithEmailAndPassword(email, password)

    };

    // const handleResetPassword = async (event) => {
    //     setEmail(event.target.email.value)


    // }


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
                <form onSubmit={handleSignIn} className='w-50 mx-auto'>
                    <div className="form-group my-4">
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' placeholder="Enter email" required />
                    </div>
                    <div className="form-group mb-1">
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <small className='mb-2 d-block text-start'>
                        Forgot Password?
                        {/* <button
                            onClick={async () => {
                                await sendPasswordResetEmail(mail);
                                alert('Sent email');
                            }}
                        >
                            Reset password
                        </button> */}
                    </small>
                    <button type="submit" className="btn btn-primary w-100">Log In</button>
                    <p className='my-2'>or</p>
                    <Social></Social>
                    <small className='d-block text-start mt-2 mb-3'>Not A Member?<Link to='/register'> Sign Up</Link></small>
                </form>
            </div>
        </div >
    );
};

export default Login; 