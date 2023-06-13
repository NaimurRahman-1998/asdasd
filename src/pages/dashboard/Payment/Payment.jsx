import React, { useContext, useEffect, useState } from 'react';
import CheckOutFrom from './CheckOutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../providers/AuthProvider';
import useStudent from '../../../hooks/useStudent';

const Payment = () => {
    const id = useParams();
    // console.log(id.id)
    const [price, setPrice] = useState(0);
    const { loading, user } = useContext(AuthContext)

    const { refetch, data: selectedClass = [], isLoading } = useQuery({
        queryKey: ['selected', id.id],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/selected/${id.id}`)
            return res.json();
        },
    })



    const stripePromise = loadStripe(import.meta.env.VITE_PK_KEY)

    if (isLoading) {
        return <div>Loading...</div>; // or show a spinner/loader
    }

    return (
        <>
            <div className='pay'>
                <Elements stripe={stripePromise}>
                    {selectedClass.price !== undefined && (
                        <CheckOutFrom data={selectedClass} price={selectedClass.price} />
                    )}
                </Elements>
            </div>
        </>
    );
};

export default Payment;