import React from 'react';
import errorAnimation from '../assets/Animations/84918-404-error-doodle-animation.json'
import { Link, useRouteError } from 'react-router-dom';
import Lottie from "lottie-react";
const ErrorPage = () => {
    const { error } = useRouteError()
    return (
        <div className='flex justify-center items-center flex-col'>
            <Lottie className='w-[40rem]' animationData={errorAnimation} loop={true} />
            <div>
                <p className="text-red-500 text-xl">{error?.message}</p>
                <Link to='/'><button className="btn bg-lime-500">Back To Home Page</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;