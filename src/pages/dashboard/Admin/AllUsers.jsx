import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: allUsers = [] } = useQuery({
        queryKey: ['allUsers'],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/allUsers`)
            return res.data;
        },
    })

    const handleAdmin = (id) => {
        console.log('clicked', id)
        confirm('are You Sure you want to make this is Admin')
        if (confirm) {
            axios.patch(`https://fabserver-naimurrahman-1998.vercel.app/users/admin/${id}`)
                .then(data => {
                    console.log(data.data)
                    toast.success('User is Admin Now')
                    refetch()
                })
        }
    }

    const handleInstructor = (id) => {
        confirm('are You Sure you want to make this is Instructor')
        if (confirm) {
            axios.patch(`https://fabserver-naimurrahman-1998.vercel.app/users/instructor/${id}`)
                .then(data => {
                    console.log(data.data)
                    toast.success('User is Instructor Now')
                    refetch()
                })
        }
    }

    console.log(allUsers)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <td></td>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers.map((single, i) =>
                                <tr key={single._id}>
                                    <th>
                                        {i + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center ">
                                            <div>
                                                <div className="font-bold">{single?.name}</div>
                                                <div className="text-sm opacity-50">{single?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {single?.role}
                                    </td>
                                    <td> <button onClick={() => handleInstructor(single._id)} className='btn btn-primary btn-xs'> Make Instructor</button> </td>
                                    <th>
                                        <button onClick={() => handleAdmin(single._id)} className="btn btn-warning btn-xs">make admin</button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;