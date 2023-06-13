import React from 'react';
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import { Navigate, useLocation } from 'react-router'

import loadingani from '../assets/Animations/loading.json'
import Lottie from "lottie-react";
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

    if (loading, isAdminLoading) {
        return <Lottie animationData={loadingani} loop={true} />
    }

    if (user && isAdmin) {
        return children
    } else {
        return <Navigate to='/' state={{ from: location }} replace></Navigate>
    }
    return (
        <div>
            
        </div>
    );
};

export default AdminRoute;