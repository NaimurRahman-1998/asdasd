import { useQuery } from '@tanstack/react-query';
import React from 'react';
import InstructorsCard from '../../component/InstructorsCard';

const PopularInstructors = () => {
    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/users/instructor`)
            return res.json();
        },
    })

    return (
        <div className='mt-32 '>
            <h1 className='title'>Our Instructors</h1>

            <div className='flex justify-around'>
                <div className=' grid  lg:grid-cols-4 gap-10'>
                    {
                        instructors.slice(0, 8).map(singleI =>
                            <InstructorsCard key={singleI._id} data={singleI}>

                            </InstructorsCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularInstructors;