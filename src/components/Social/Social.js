import React from 'react';
import google from '../../img/g-logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';





const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let errors;

    if (error) {
        errors = <p className='text-danger'>Error: {error.message}</p>
    }
    if (loading) {
        return <Spinner></Spinner>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            {errors}
            <button
                onClick={() => signInWithGoogle()}
                type="submit" className="bg-white d-flex align-items-center justify-content-around btn btn-white border  w-100 my-0">
                <img height={"25px"} src={google} alt="" />
                <p className='my-0'>Continue With Google</p>
            </button>
        </div>
    );
};

export default Social;