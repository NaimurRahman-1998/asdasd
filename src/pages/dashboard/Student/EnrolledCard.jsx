import React from 'react';
import { TiTick } from 'react-icons/ti';
const EnrolledCard = ({ data }) => {
    return (
        <div
            
            className= 'relative hover:border-lime-500 hover:border-2 transition duration-300 w-96 bg-base-100 shadow-xl group'>
            <figure><img src={data.classImage} className=' h-[15rem] w-[25rem]' /></figure>
            <div className="card-body">
                <h2 className="text-neutral-600 text-2xl ">
                    {data.className}!
                </h2>
                <p className='mt-[-6px] text-neutral-400'>By - {data.instructorName} </p>
                
                <div>
                    <ol className='list-disc color space-y-4 my-6'>
                        <li>Personal Trainer</li>
                        <li>Unlimited Steam Bath</li>
                    </ol>
                </div>

                <div className='flex items-center py-8 border-t-2 mt-3 border-neutral-600 group-hover:border-lime-400'>
                    <TiTick className='text-4xl'> </TiTick><p className='text-xl text-green-500 font bold'>Paid</p>
                    
                </div>

            </div>
        </div>
    );
};

export default EnrolledCard;