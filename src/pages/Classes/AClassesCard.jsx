import { Link, useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useInstructor from "../../hooks/useInstructor";
import useAdmin from "../../hooks/useAdmin";
import { addSelectClass } from "../../api/classes";
import { toast } from "react-hot-toast";

const AClassesCard = ({ acls }) => {
    AOS.init();
    const { user } = useContext(AuthContext)
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();
    const handleSelect = (data) => {
        if (!user) {
            navigate('/login')
        } else {
            console.log('clicked')
            const select = { classId: data._id, className: data.class, classImage: data.image, instructorEmail: data.instructorEmail, instructorName: data.instructorName, price: data.price, seats: data.seats, StudentName: user?.displayName, studentEmail: user?.email }
            console.log(select)
            addSelectClass(select)
                .then(data => {
                    console.log(data)
                    if (data.insertedId) {
                        toast.success('Classes Added to Dashboard')
                    }
                    else{
                        toast('Class Already Exists')
                    }
                })
        }
    }


    return (
        <div
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-delay="300"
            data-aos="zoom-in-down"
            className={acls.seats === 0 ? 'bg-red-300 relative hover:border-lime-500 hover:border-2 transition duration-300 w-96 shadow-xl group' : `relative hover:border-lime-500 hover:border-2 transition duration-300 w-96 bg-base-100 shadow-xl group`}>
            <figure><img src={acls.image} className=' h-[15rem] w-[25rem]' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-neutral-600 text-2xl ">
                    {acls.class}!
                </h2>
                <p className='mt-[-6px] text-neutral-400'>By - {acls.instructorName} </p>
                {
                    acls?.enrolled ? <p className='mt-[-6px] text-neutral-400'>{acls.enrolled} Enrolled</p>
                        : <p className='mt-[-6px] text-neutral-400'>No One Enrolled</p>
                }

                <div>
                    <ol className='list-disc color space-y-4 my-6'>
                        <li>Seats Available : {acls.seats}</li>
                        <li>Personal Trainer</li>
                        <li>Unlimited Steam Bath</li>
                    </ol>
                </div>

                <div className='flex py-8 border-t-2 mt-3 border-neutral-600 group-hover:border-lime-400'>
                    <p>$ <span className='text-3xl color'>{acls.price}/</span> <span className='text-neutral-400'>1year</span> </p>
                    <motion.button
                        whileHover={{
                            scale: 1.1,

                        }}
                        onClick={() => handleSelect(acls)}
                        disabled={isInstructor || isAdmin || acls.seats === 0 ? true : false}
                        className={isInstructor || isAdmin || acls.seats === 0 ? 'btn-disabled' : 'text-white px-4 py-2 bg-lime-600 hover:bg-lime-400'}>Add To Cart
                    </motion.button>
                </div>

            </div>
        </div>
    );
};

export default AClassesCard;