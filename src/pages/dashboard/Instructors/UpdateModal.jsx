import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";


const UpdateModal = ({ data, refetch }) => {
    const { user } = useContext(AuthContext)
    const handleSubmit = e => {
        e.preventDefault();
        const price = parseFloat(e.target.price.value)
        const seats = parseFloat(e.target.seats.value)
        const added = { price, seats }
        axios.put(`https://fabserver-naimurrahman-1998.vercel.app/classes/update/${data._id}`, added)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    toast.success('class Updated')
                    refetch();
                }
            })

    }

    return (
        <>
            <input type="checkbox" id={data._id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Class : {data.class} {data._id}</h3>
                    <div>
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
                                        defaultValue={data.class}
                                        disabled
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
                                        defaultValue={data.image}
                                        disabled
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
                                        placeholder={data.seats}
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
                                        placeholder={data.price}
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-text-lime-400 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='bg-lime-500 hover:bg-lime-600 w-full rounded-md py-3 text-white'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label htmlFor={data._id} className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateModal;