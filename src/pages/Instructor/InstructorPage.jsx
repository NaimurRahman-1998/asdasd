import { useQuery } from "@tanstack/react-query";
import TransitionEffect from "../../component/TransitionEffect";
import { Helmet } from "react-helmet-async";


const InstructorPage = () => {

    const { refetch, data: instructors = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://fabserver-naimurrahman-1998.vercel.app/users/instructor`)
            return res.json();
        },
    })

    console.log(instructors)

    return (
        <>
        <Helmet>
            <title>Fitness | Instructors</title>
        </Helmet>
            <TransitionEffect></TransitionEffect>
            <div className="mt-16 border-4  mx-40">
                <h1 className="title">Instructors</h1>
                <div className="overflow-x-auto  pl-40 mt-[-2.5rem]">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                instructors.map((singleI, i) =>
                                    <tr>
                                        <td>{i + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={singleI.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{singleI.name}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {singleI.email}
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default InstructorPage;