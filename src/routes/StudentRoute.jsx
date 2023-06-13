import React from 'react';
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router'
import useStudent from '../hooks/useStudent';
import loadingani from '../assets/Animations/loading.json'
import Lottie from "lottie-react";
const StudentRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isStudent, isStudentLoading] = useStudent();
    const location = useLocation()

    if (loading, isStudentLoading) {
        return <Lottie animationData={loadingani} loop={true} />
    }

    if (user && isStudent) {
        return children
    } else {
        return <Navigate to='/' state={{ from: location }} replace></Navigate>
    }
};

export default StudentRoute;