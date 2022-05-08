import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Spinner/Spinner';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);
    let location = useLocation();

    if (loading) {
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return (
            <div className='text-center mt-5 style'>
                <h3>Your Email is Not Verified!!</h3>
                <h5>Please Verify Your Email</h5>
                <button
                    className='btn btn-transparent border'
                    onClick={async () => {
                        await sendEmailVerification();
                        alert('resend email');
                    }}
                >
                    Resend email
                </button>
            </div>
        )
    }


    return children;
}

export default RequireAuth;