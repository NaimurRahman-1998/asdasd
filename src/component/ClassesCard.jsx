import { useContext } from "react";
import useInstructor from "../hooks/useInstructor";
import { AuthContext } from "../providers/AuthProvider";
import { addSelectClass } from "../api/classes";
import UpdateModal from "../pages/dashboard/Instructors/UpdateModal";
import { toast } from "react-hot-toast";

const ClassesCard = ({ cls ,refetch }) => {

    const { user } = useContext(AuthContext)

    const [isInstructor] = useInstructor();
    const isAdmin = false
    // console.log(cls)

    const handleSelect = (data) => {
        const select = { classId: data._id, className: data.class, classImage: data.image, instructorEmail: data.instructorEmail, instructorName: data.instructorName, price: data.price, seats: data.seats, StudentName: user?.displayName, studentEmail: user?.email }
        addSelectClass(select)
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('classes Added to Dashboard')
                }
                else {
                    toast.error('You Already Selected This Class')
                }
            })
    }


    return (
        <div className="flex items-center p-5 gap-10 w-full border-2 border-black">
            <figure className="">
                <img src={cls?.image} alt="Shoes" className=" w-[22rem] h-[16rem] rounded-lg" />
            </figure>
            <div className="flex gap-5">
                <div >
                    <h2 className="t-color w-[12rem] text-3xl">{cls.class}</h2>
                    <h2 className="text-neutral-400 mb-3">Instructor Name :{cls.instructorName}</h2>
                    <h2 className="card-title">Available Seats: {cls.seats}</h2>
                    <p className="mb-3">Price:{cls.price} $</p>
                    <label htmlFor={cls._id} className="btn bg-lime-500" >Update</label>
                    <UpdateModal data={cls} refetch={refetch}></UpdateModal>
                </div>
                <div className="mt-[4.50rem]">
                    <p className="font-semibold text-xl">Status: <span className={cls.status === 'denied' && 'text-red-500' || cls.status ==='approved' && 'text-green-500' || cls.status ==='pending' && 'text-yellow-500'}>{cls.status}</span></p>
                    {
                        cls.enrolled > 0 ?
                            <p>Enrolled :{cls.enrolled} Students</p>
                            :
                            <p>No One Enrolled</p>
                    }
                    {
                        cls.status === 'denied' &&
                        <>
                            <p>FeedBack : {cls.feedback}</p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default ClassesCard;