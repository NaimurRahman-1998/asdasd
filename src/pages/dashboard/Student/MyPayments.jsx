import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const MyPayments = () => {
    const { user ,loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/payments/${user?.email}`)
            return res.data;
        },
    })
    console.log(payments)
    return (
        <div>
            <div>
                <h1 className='title'> Payments History</h1>
                <div className="overflow-x-auto">
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Instructor Name</th>
                                <th>Class Name</th>
                                <th>Instructor Email</th>
                                <th>Time</th>
                                <th>Price</th>
                                <th>T-ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((data,i )=>
                                    <tr key={data._id}>
                                        <th>{i+1}</th>
                                        <td>{data.instructorName}</td>
                                        <td>{data.className}</td>
                                        <td>{data.instructorEmail}</td>
                                        <td>{data.date.split('T')[0].slice(5,10)} {data.date.split('T')[1].slice(0,8)} </td>
                                        <td>{data.price}$</td>
                                        <td>{data.transactionId}</td>
                                    </tr>
                                )
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPayments;