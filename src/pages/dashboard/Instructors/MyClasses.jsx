import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import ClassesCard from '../../../component/ClassesCard';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyClasses = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`https://fabserver-naimurrahman-1998.vercel.app/classes/${user?.email}`)
            return res.data;
        },
    })
    return (
        <div className='grid gap-10 w-full'>
            {
                classes.map(cls =>
                    <ClassesCard
                        key={cls._id}
                        cls={cls}
                        refetch={refetch}
                    >

                    </ClassesCard>)
            }
        </div>
    );
};

export default MyClasses;