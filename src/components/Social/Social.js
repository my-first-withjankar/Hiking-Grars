import React from 'react';
import google from '../../img/g-logo.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';




const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
        return (
            <div>
                <p>Signed In User: {user.email}</p>
            </div>
        );
    };

    return (
        <div>
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