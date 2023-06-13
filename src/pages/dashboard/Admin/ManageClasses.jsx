import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import FeedbackModal from "../../../component/FeedbackModal";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-hot-toast";


const ManageClasses = () => {
    const { user, loading } = useContext(AuthContext);

    const { refetch, data: allClasses = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/classes`)
            return res.json();
        },
    })

    const handleApprove = (id) => {
        axios.patch(`https://fabserver-naimurrahman-1998.vercel.app/classes/approve/${id}`)
            .then(data => {
                console.log(data.data)
                toast.success("class Approved")
                refetch();
            })
    }

    const handleDeny = (id) => {
        axios.patch(`https://fabserver-naimurrahman-1998.vercel.app/classes/deny/${id}`)
            .then(data => {
                console.log(data.data)
                toast.error("class denied")
                refetch();
            })
    }

    return (
        <div>
            {
                allClasses.map(singleClass =>
                    <div key={singleClass._id} className="card mb-10 lg:card-side w-full bg-base-100 shadow-xl">
                        <figure><img src={singleClass.image} className="w-[10rem] h-[10rem]" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{singleClass.class}</h2>
                            <p>{singleClass.instructorName}</p>
                            <p>{singleClass.instructorEmail}</p>
                            <p>seats :{singleClass.seats}</p>
                            <p>price :{singleClass.price}</p>
                            <p className="font-semibold" >status :<span className={singleClass.status === 'approved' ? 'text-green-500' : 'text-red-500'}>{singleClass.status}</span></p>
                            <div className="card-actions justify-end">
                                <button disabled={singleClass.status === 'pending' ? false : true} onClick={() => handleApprove(singleClass._id)} className="btn btn-success">Approve</button>
                                <button disabled={singleClass.status === 'pending' ? false : true} onClick={() => handleDeny(singleClass._id)} className="btn btn-error">Deny</button>
                                <label htmlFor={singleClass._id} className="btn">FeedBack</label>
                                <FeedbackModal data={singleClass} ></FeedbackModal>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default ManageClasses;