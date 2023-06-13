import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import { addClass } from '../../../api/classes';
import { motion } from "framer-motion"
import { toast } from 'react-hot-toast';
const Instructor = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const cls = e.target.class.value
        const image = e.target.image.value
        const price = parseFloat(e.target.price.value)
        const seats = parseFloat(e.target.seats.value)
        const added = { status: 'pending', instructorName: user?.displayName, instructorEmail: user?.email, class: cls, image: image, price: price, seats: seats }
        console.log(added)

        addClass(added)
            .then(data => {
                console.log(data)
                toast.success("added a class Successfully")
            })
    }

    return (
        <div className='min-w-full'>
            <div className='flex flex-col w-full p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Add A Class</h1>
                    <p className='text-sm text-gray-400'>
                        Add Details related to your class
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='class' className='block mb-2 text-sm'>
                                Class Name
                            </label>
                            <input
                                type='text'
                                name='class'
                                id='class'
                                required
                                placeholder='Enter Your class Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-text-lime-400 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Class Photo
                            </label>
                            <input
                                type='text'
                                name='image'
                                id='image'
                                required
                                placeholder='Enter Your image Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-text-lime-400 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            <label htmlFor='seats' className='block mb-2 text-sm'>
                                Instructor Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                required
                                disabled
                                value={user?.displayName || "null"}
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-text-lime-400 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            <label htmlFor='seats' className='block mb-2 text-sm'>
                                Instructor Email
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                disabled
                                value={user?.email || "null"}
                                placeholder='Enter Your image Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-text-lime-400 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            <label htmlFor='seats' className='block mb-2 text-sm'>
                                Available seats
                            </label>
                            <input
                                type='number'
                                name='seats'
                                id='seats'
                                required
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-text-lime-400 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            <label htmlFor='price' className='block mb-2 text-sm'>
                                Price
                            </label>
                            <input
                                type='number'
                                name='price'
                                id='price'
                                required
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-text-lime-400 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                    </div>

                    <div>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                            }}
                            type='submit'
                            className='bg-lime-500 hover:bg-lime-600 w-full rounded-md py-3 text-white'
                        >
                            Submit
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Instructor;