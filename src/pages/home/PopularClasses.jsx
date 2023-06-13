import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ClassesCard from '../../component/ClassesCard';
import PopularClassesCard from '../../component/PopularClassesCard';

const PopularClasses = () => {

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/classes`)
            return res.json();
        },
    })

    return (
        <div className='mt-32'>
            <h2 className='title'>Our Packages</h2>
            <div className=' flex justify-around '>
                <div className='grid lg:grid-cols-3 gap-2 lg:gap-12'>
                    {
                        classes.slice(0, 6).map(cls =>
                            <PopularClassesCard cls={cls} key={cls._id}>

                            </PopularClassesCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularClasses;