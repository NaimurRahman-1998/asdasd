import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import EnrolledCard from './EnrolledCard';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Enrolled = () => {

    const{user ,loading} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: enrolled = [] } = useQuery({
        queryKey: ['payments' , user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`)
            return res.data;
        },
    })
    console.log(enrolled.length)
    return (
        <div>
        <h1 className='title'>Your EnrollMents :</h1>
            <div className='grid grid-cols-2 gap-5'>
            {
                enrolled.map(data=>
                <EnrolledCard key={data._id} data={data}>

                </EnrolledCard>
                )
            }
            </div>
        </div>
    );
};

export default Enrolled;