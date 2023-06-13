import React from 'react';
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router'
import loadingani from '../assets/Animations/loading.json'
import Lottie from "lottie-react";
import useInstructor from '../hooks/useInstructor';
const InstructorRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation()

    if (loading, isInstructorLoading) {
        return <Lottie animationData={loadingani} loop={true} />
    }

    if (user && isInstructor) {
        return children
    } else {
        return <Navigate to='/' state={{ from: location }} replace></Navigate>
    }
};

export default InstructorRoute;